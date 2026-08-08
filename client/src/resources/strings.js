// All user-facing copy for the site. Never hard-code strings in components —
// add them here with a name that describes the string's usage/purpose.

// Brand / general
export const WebsiteTitle = "James Austin Jr.";
export const CopyrightText = `© ${new Date().getFullYear()} James Austin Jr.`;

// Navigation
export const NavIntroLabel = "Intro";
export const NavExperienceLabel = "Experience";
export const NavProjectsLabel = "Projects";
export const NavSkillsLabel = "Skills";
export const NavContactLabel = "Contact";
export const OpenMenuTooltip = "Open menu";
export const CloseMenuTooltip = "Close menu";
export const SwitchToLightModeTooltip = "Switch to light mode";
export const SwitchToDarkModeTooltip = "Switch to dark mode";
export const ProfileAvatarAlt = "James Austin Jr. profile photo";

// Hero
export const HeroHeadingName = "James Austin Jr.";
export const HeroHeadingHighlight = "Engineering";
export const HeroHeadingTrail = " For Greatness.";
export const HeroDescription =
  "Specializing in Native Mobile Solutions, Web Development, and Enterprise Cloud Infrastructure.";
export const HeroPrimaryCta = "Resume.pdf";
export const HeroSecondaryCta = "View_Source";
export const HeroPortraitAlt = "Portrait of James Austin Jr.";
export const AccentSliderLabel = "ACCENT_SHIFT";
export const AccentSliderVersionTag = "v2.0.26";
export const AccentSliderAriaLabel = "Shift the site accent color hue";

// Experience
export const ExperienceSectionEyebrow = "History";
export const ExperienceHeading = "Professional Timeline";
export const ExperienceStatusChip = "";
export const ImpactMetricEyebrow = "IMPACT_METRIC";

// Experience — timeline entries
export const TimelineCountyPeriod = "2024 — PRESENT";
export const TimelineCountyTitle = "San Bernardino County";
export const TimelineCountySummary =
  "Transforming business operations into scalable and compliant enterprise systems that county residents and departments depend on every day.";
export const TimelineCountyMetricBefore = "18hr";
export const TimelineCountyMetricAfter = "2min";
export const TimelineCountyMetricDetail =
  "Optimized billing workflows through automated pipeline architecture and distributed data processing.";
export const TimelineGarminPeriod = "2022 — 2024";
export const TimelineGarminTitle = "Garmin International";
export const TimelineGarminSummary =
  "Modernized Native Android applications for BLE and WiFi efficiency and fine-tuned cross-platform API performance with vehicle edge devices.";
export const TimelineGarminMetricValue = "+16%";
export const TimelineGarminMetricLabel = "Overall Performance Improvement";
export const TimelineGarminMetricDetail =
  "Optimized critical offline mapping and downloading for the Tread application using C++ NDK and Android Coroutines.";

// Projects
export const ProjectsSectionEyebrow = "Repositories";
export const ProjectsHeading = "Featured Projects";
export const ProjectExploreCta = "Explore_Module";
export const MediumParserWindowTitle = "medium-parser.js";
export const MediumParserVersionBadge = "v1.1.2";
export const MediumParserTitle = "Medium Parser";
export const MediumParserDescription =
  "A lean parsing engine for Medium's RSS feed. Built for speed and reliability in displaying and processing content.";
export const MediumParserInstallCommand = "npm install medium-rss-feed-parser";
export const MediumParserSourceCta = "Source";
export const ProjectStatDownloadsLabel = "Downloads";
export const ProjectStatDownloadsValue = "700+";
export const ProjectStatLanguageLabel = "Language";
export const ProjectStatLanguageValue = "JavaScript";
export const ProjectStatCoverageLabel = "Coverage";
export const ProjectStatCoverageValue = "98%";
export const ProjectStatLicenseLabel = "License";
export const ProjectStatLicenseValue = "MIT";

// Articles — publication feed sub-section under Featured Projects
export const ArticlesSectionEyebrow = "Publication_Feed";
export const ArticlesHeading = "Latest Articles";
export const ArticleReadCta = "Read on Medium";
export const ArticleReadTimeUnit = "MIN READ";

// Articles — featured entries (metadata mirrors the Medium RSS feed so the
// same shape can later be produced by medium-rss-feed-parser)
export const ArticleSecretStorageTitle =
  "Solving the GitHub Variable and Secret Storage Problem with Google SRE Principles";
export const ArticleSecretStorageDescription =
  "A guide to apply release engineering and configuration-as-code principles in GitHub repositories.";
export const ArticleSecretStorageTag = "Devops";
export const ArticleSecretStorageLink =
  "https://aws.plainenglish.io/solving-the-github-variable-and-secret-storage-problem-with-google-sre-principles-a8d032298228";
export const ArticleSecretStorageImageLink =
  "https://cdn-images-1.medium.com/max/1537/1*yLG4hcJEdSGEDX2BSB-64Q.png";

export const ArticleScalingSystemsTitle =
  "Scaling Systems: Vertical vs. Horizontal Scaling Explained";
export const ArticleScalingSystemsDescription =
  "Simple guidelines for scaling to large distributed systems and addressing CAP theorem trade-offs.";
export const ArticleScalingSystemsTag = "Distributed_Systems";
export const ArticleScalingSystemsLink =
  "https://medium.com/@jaustinjr/scaling-systems-vertical-vs-horizontal-scaling-explained-03019b48491b";
export const ArticleScalingSystemsImageLink =
  "https://cdn-images-1.medium.com/max/1536/1*2B5SVBPgCYPhNthL1QDKGQ.png";

export const ArticleCodeReviewTitle =
  "Setting up Claude Code Review in GitHub Actions";
export const ArticleCodeReviewDescription =
  "Technical insights on using Claude in Pull Request reviews with the Claude Pro subscription plan.";
export const ArticleCodeReviewTag = "Claude_Code";
export const ArticleCodeReviewLink =
  "https://medium.com/@jaustinjr/setting-up-claude-code-review-in-github-actions-d7128067646c";
export const ArticleCodeReviewImageLink =
  "https://cdn-images-1.medium.com/max/1536/1*lvzQBynYiv6bdsdzNex-fQ.png";

// Skills
export const SkillsSectionEyebrow = "Capabilities_Matrix";
export const SkillsHeading = "Technical Expertise";
export const SkillLanguagesPanelTitle = "PROGRAMMING_LANGUAGES";
export const SkillFrameworksPanelTitle = "FRAMEWORKS_ENV";
export const SkillInfrastructurePanelTitle = "INFRASTRUCTURE_CLOUD";
export const SkillLevelExpert = "Expert";
export const SkillLevelAdvanced = "Advanced";
export const SkillLevelIntermediate = "Intermediate";
export const SkillJavaScriptName = "JavaScript / TS";
export const SkillCSharpName = "C# (.NET)";
export const SkillKotlinName = "Kotlin";
export const SkillYamlName = "YAML";
export const SkillSqlName = "SQL";
export const SkillCppName = "C++";
export const SkillJavaName = "Java";
export const FrameworkNames = [
  "React",
  "ASP.NET Core",
  "Jetpack Compose",
  "Node.js",
  "EF Core",
];
export const InfraAzureName = "Azure Cloud Services";
export const InfraGitHubActionsName = "GitHub Actions (CI/CD)";
export const InfraPipelinesName = "Reporting & Analytics (ETL)";
export const InfraDatabasesName = "MS SQL Server / MariaDB";

// Contact
export const ContactSectionEyebrow = "Initialize_Comms";
export const ContactHeading = "Ready to Build Something Remarkable?";
export const ContactDescription =
  "Currently open to architecture-focused roles, strategic consulting, and small business projects.";
export const ContactEmailChannelLabel = "Secure_Email";
export const ContactLinkedInChannelLabel = "Social_Node";
export const ContactFormNameLabel = "Sender_Identification";
export const ContactFormNamePlaceholder = "Full Name";
export const ContactFormEmailLabel = "Return_Path";
export const ContactFormEmailPlaceholder = "email@example.com";
export const ContactFormMessageLabel = "Payload_Message";
export const ContactFormMessagePlaceholder = "How can we collaborate?";
export const ContactFormSubmitCta = "Send Email";
export const ContactMailSubjectPrefix = "Portfolio inquiry from";

// Social / external links
export const GitHubLabel = "GitHub";
export const GitHubLink = "https://github.com/jaustinjr-code";
export const MediumParserGitHubLink =
  "https://github.com/jaustinjr-code/medium-rss-feed-parser";
export const MediumParserNpmLink =
  "https://www.npmjs.com/package/medium-rss-feed-parser";
export const LinkedInLabel = "LinkedIn";
export const LinkedInHandleDisplay = "jaustinjr";
export const LinkedInLink = "https://www.linkedin.com/in/jaustinjr/";
export const InstagramLabel = "Instagram";
export const InstagramHandleDisplay = "jaustinjrr";
export const InstagramLink = "https://www.instagram.com/jaustinjrr/";
export const EmailLabel = "Email";
export const ContactEmailAddress = "jaustinjr.connect@gmail.com";

// Error page
export const ErrorPageHeading = "404_MODULE_NOT_FOUND";
export const ErrorPageTitle = "Something went wrong.";
export const ErrorPageDescription =
  "Please try again or return to the home page.";
export const ErrorPageHomeButton = "Return_Home";
