// The pause in the Update Latest Articles workflow. Opens an issue holding the
// candidate list, waits for a maintainer to answer with `/select 2 5 7`, and
// reports the chosen positions as the `selection` step output.
//
// Loaded through actions/github-script, which supplies the authenticated
// Octokit client and the workflow context. CommonJS because that is what
// github-script's `require` bridge takes.
//
// Env:
//   CANDIDATES_MARKDOWN        Path to the candidate table to post (required)
//   CANDIDATE_COUNT            How many candidates the table holds (required)
//   ARTICLE_COUNT              How many numbers a selection must contain (required)
//   SELECTION_TIMEOUT_MINUTES  The job's own timeout, which this stops short of (required)
//   SELECTION_POLL_SECONDS     How often to re-read the issue (default 15)

const { readFileSync } = require("node:fs");

const DEFAULT_POLL_SECONDS = 15;
// Stop early enough that closing the issue beats the job timeout.
const SHUTDOWN_GRACE_MS = 120000;
const SELECT_COMMAND = /^\s*\/select\s+([0-9][0-9\s,]*)\s*$/im;
const CANCEL_COMMAND = /^\s*\/cancel\s*$/im;
const ALLOWED_PERMISSIONS = ["admin", "write", "maintain"];

/**
 * Runs the selection pause.
 * @param {Object} params github-script's injected helpers.
 * @param {Object} params.github The authenticated Octokit client.
 * @param {Object} params.context The workflow run context.
 * @param {Object} params.core The Actions toolkit core helpers.
 * @returns {Promise<number[]|null>} The chosen positions, or null when the run
 *   was cancelled or timed out (both of which fail the step).
 */
module.exports = async ({ github, context, core }) => {
  const { owner, repo } = context.repo;
  const articleCount = Number(process.env.ARTICLE_COUNT);
  const candidateCount = Number(process.env.CANDIDATE_COUNT);
  const timeoutMinutes = Number(process.env.SELECTION_TIMEOUT_MINUTES);
  const pollIntervalMs =
    (Number(process.env.SELECTION_POLL_SECONDS) || DEFAULT_POLL_SECONDS) * 1000;
  const candidateTable = readFileSync(process.env.CANDIDATES_MARKDOWN, "utf8");
  const runUrl = `${context.serverUrl}/${owner}/${repo}/actions/runs/${context.runId}`;

  const issue = await github.rest.issues.create({
    owner,
    repo,
    title: `Select ${articleCount} Medium articles (run #${context.runNumber})`,
    body: renderIssueBody({
      articleCount,
      candidateCount,
      candidateTable,
      runNumber: context.runNumber,
      runUrl,
      timeoutMinutes,
    }),
  });
  const issueNumber = issue.data.number;

  core.notice(`Waiting for your selection in ${issue.data.html_url}`);
  await core.summary
    .addHeading("Waiting for your selection", 3)
    .addRaw(
      `Comment \`/select <numbers>\` on ${issue.data.html_url} to continue this run.`,
    )
    .addBreak()
    .addRaw(candidateTable)
    .write();

  /** Posts a comment on the selection issue. */
  const comment = (body) =>
    github.rest.issues.createComment({ owner, repo, issue_number: issueNumber, body });

  /** Closes the selection issue, saying why. */
  const closeIssue = async (body) => {
    await comment(body);
    await github.rest.issues.update({
      owner,
      repo,
      issue_number: issueNumber,
      state: "closed",
    });
  };

  /** True when the commenter may drive this workflow. */
  const isAuthorized = async (login) => {
    if (login === context.actor) return true;
    try {
      const { data } = await github.rest.repos.getCollaboratorPermissionLevel({
        owner,
        repo,
        username: login,
      });
      return ALLOWED_PERMISSIONS.includes(data.permission);
    } catch {
      return false;
    }
  };

  const handled = new Set();
  const deadline =
    Date.now() +
    Math.max(pollIntervalMs, timeoutMinutes * 60000 - SHUTDOWN_GRACE_MS);

  while (Date.now() < deadline) {
    await sleep(pollIntervalMs);

    const comments = await github.paginate(github.rest.issues.listComments, {
      owner,
      repo,
      issue_number: issueNumber,
      per_page: 100,
    });

    for (const entry of comments) {
      if (handled.has(entry.id)) continue;
      handled.add(entry.id);

      const body = entry.body ?? "";
      const login = entry.user?.login ?? "";
      if (entry.user?.type === "Bot") continue;
      if (!SELECT_COMMAND.test(body) && !CANCEL_COMMAND.test(body)) continue;

      if (!(await isAuthorized(login))) {
        await comment(
          `@${login} only maintainers of this repository can choose the featured articles, so this run will keep waiting.`,
        );
        continue;
      }

      if (CANCEL_COMMAND.test(body)) {
        await closeIssue(
          `Cancelled by @${login}. [Run #${context.runNumber}](${runUrl}) will stop here.`,
        );
        core.setFailed(`Selection cancelled by @${login}.`);
        return null;
      }

      const { positions, error } = parseSelection(body.match(SELECT_COMMAND)[1], {
        articleCount,
        candidateCount,
      });
      if (error) {
        await comment(
          `@${login} ${error} Try again with \`/select\` and ${articleCount} numbers between 1 and ${candidateCount}.`,
        );
        continue;
      }

      await closeIssue(
        `Got it — featuring articles ${positions.join(", ")}, chosen by @${login}. [Run #${context.runNumber}](${runUrl}) is building the article data now.`,
      );
      core.setOutput("selection", positions.join(","));
      core.notice(`Selected articles: ${positions.join(", ")}`);
      return positions;
    }
  }

  await closeIssue(
    `No selection arrived within ${timeoutMinutes} minutes, so [run #${context.runNumber}](${runUrl}) stopped. Start the workflow again when you are ready.`,
  );
  core.setFailed(
    `Timed out after ${timeoutMinutes} minutes waiting for a selection.`,
  );
  return null;
};

/**
 * Builds the body of the selection issue.
 * @param {Object} params The values the body quotes.
 * @returns {string} Markdown.
 */
function renderIssueBody({
  articleCount,
  candidateCount,
  candidateTable,
  runNumber,
  runUrl,
  timeoutMinutes,
}) {
  return [
    `**[Run #${runNumber}](${runUrl}) is paused and waiting for you.**`,
    "",
    `Reply below with the ${articleCount} posts you want in the Latest Articles section. The order you list them in is the order the site will show them.`,
    "",
    "```",
    "/select 1 2 3",
    "```",
    "",
    `Numbers must be between 1 and ${candidateCount}, with no repeats. Comment \`/cancel\` to stop the run. The workflow gives up after ${timeoutMinutes} minutes.`,
    "",
    candidateTable,
  ].join("\n");
}

/**
 * Validates the numbers in a `/select` comment.
 * @param {string} raw The captured numbers, e.g. "2, 5, 7".
 * @param {{articleCount: number, candidateCount: number}} limits Validation limits.
 * @returns {{positions?: number[], error?: string}} The positions, or why they were rejected.
 */
function parseSelection(raw, { articleCount, candidateCount }) {
  const tokens = raw.trim().split(/[\s,]+/).filter(Boolean);
  if (tokens.length !== articleCount) {
    return { error: `I need exactly ${articleCount} numbers, but got ${tokens.length}.` };
  }

  const positions = tokens.map((token) => Number.parseInt(token, 10));
  const outOfRange = positions.find(
    (position) => position < 1 || position > candidateCount,
  );
  if (outOfRange !== undefined) {
    return { error: `\`${outOfRange}\` is outside the range 1-${candidateCount}.` };
  }
  if (new Set(positions).size !== positions.length) {
    return { error: "Each article can only be picked once." };
  }

  return { positions };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Exposed for tests.
module.exports.parseSelection = parseSelection;
module.exports.SELECT_COMMAND = SELECT_COMMAND;
module.exports.CANCEL_COMMAND = CANCEL_COMMAND;
