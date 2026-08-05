import { Box, Typography } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import MetricPanel from "@components/MetricPanel";
import SectionHeading from "@components/SectionHeading";
import SectionShell from "@components/SectionShell";
import TimelineRow from "@components/TimelineRow";
import { Accent, AccentSecondaryBright, Colors } from "@resources/palette.js";
import {
  AccentTransitionSx,
  BodyMdSx,
  CodeTextSx,
  Fonts,
  LabelCapsSx,
  TypeScale,
} from "@resources/styles.js";
import { SectionIds, TimelineEntries } from "@resources/data.js";
import {
  ExperienceHeading,
  ExperienceSectionEyebrow,
  ImpactMetricEyebrow,
} from "@resources/strings.js";

// Big impact numbers inside the metric cards (`metric-xl` role). The clamp in
// TypeScale.metricXl keeps them fluid down to phone widths.
const MetricValueSx = {
  fontFamily: Fonts.display,
  fontSize: TypeScale.metricXl,
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: "-0.03em",
};

// Metric card for a before -> after transformation (the flagship entry):
// elevated panel with a ghost icon watermark and accent-tinted border that an
// ancestor group-hover rule brightens to the full live accent.
function BeforeAfterMetricCard({ metric }) {
  const GhostIcon = metric.icon;
  return (
    <MetricPanel className="metric-panel" borderColor={Accent.dim(30)}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          p: 1,
          color: Accent.dim(10),
          ...AccentTransitionSx,
        }}
      >
        <GhostIcon sx={{ fontSize: { xs: "3rem", md: "3.75rem" } }} />
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          component="span"
          sx={{ ...LabelCapsSx, color: Colors.codeComment }}
        >
          {ImpactMetricEyebrow}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 1,
            mt: 1.5,
          }}
        >
          <Typography
            component="span"
            sx={{
              ...MetricValueSx,
              color: Accent.dynamic,
              ...AccentTransitionSx,
            }}
          >
            {metric.before}
          </Typography>
          <TrendingFlatIcon
            sx={{
              color: Colors.textSecondary,
              fontSize: { xs: "1.5rem", md: "2rem" },
              alignSelf: "center",
            }}
          />
          <Typography
            component="span"
            sx={{ ...MetricValueSx, color: Colors.terminalGreen }}
          >
            {metric.after}
          </Typography>
        </Box>
        <Typography sx={{ ...BodyMdSx, color: Colors.textPrimary, mt: 2 }}>
          {metric.detail}
        </Typography>
      </Box>
    </MetricPanel>
  );
}

// Metric card for a single headline value: device icon row, huge teal number,
// caps label, and detail copy. Border brightens to the teal accent on hover.
function HeadlineValueMetricCard({ metric }) {
  return (
    <MetricPanel
      background={Colors.surfaceHigh}
      hoverBorderColor={AccentSecondaryBright}
      sx={{ textAlign: { md: "right" } }}
    >
      <Typography
        component="div"
        sx={{ ...LabelCapsSx, color: Colors.codeComment, mb: 1 }}
      >
        {metric.label}
      </Typography>
      <Typography
        component="div"
        sx={{ ...MetricValueSx, color: AccentSecondaryBright }}
      >
        {metric.value}
      </Typography>
      <Typography sx={{ ...BodyMdSx, mt: 2 }}>{metric.detail}</Typography>
    </MetricPanel>
  );
}

// Container for the professional timeline: section header with a mono status
// chip, then a vertical gradient axis threading each TimelineRow. Entries and
// copy come entirely from the shared resources.
export default function ExperienceSection() {
  return (
    <SectionShell id={SectionIds.experience} background={Colors.surfaceLowest}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: 4,
          mb: { xs: 6, md: 10 },
        }}
      >
        <SectionHeading
          eyebrow={ExperienceSectionEyebrow}
          heading={ExperienceHeading}
        />
      </Box>

      <Box sx={{ position: "relative" }}>
        {/* Timeline axis: fades from the live accent through the faint
            outline into transparency. Left edge on mobile, centered on md+. */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: { xs: 0, md: "50%" },
            width: "1px",
            transform: { md: "translateX(-50%)" },
            background: `linear-gradient(to bottom, ${Accent.dynamic}, rgba(59, 73, 76, 0.3), transparent)`,
            ...AccentTransitionSx,
          }}
        />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: { xs: 8, md: 16 },
          }}
        >
          {TimelineEntries.map((entry, index) => {
            const isPrimary = entry.emphasis === "primary";
            return (
              <TimelineRow
                key={entry.title}
                period={entry.period}
                title={entry.title}
                platforms={entry.platformIcons}
                summary={entry.summary}
                emphasis={entry.emphasis}
                flip={index % 2 === 1}
                sx={
                  isPrimary
                    ? {
                        // Group hover: brighten the metric card's border to
                        // the full live accent from anywhere on the row.
                        "&:hover .metric-panel": {
                          borderColor: Accent.dynamic,
                        },
                      }
                    : undefined
                }
              >
                {entry.metric.before ? (
                  <BeforeAfterMetricCard metric={entry.metric} />
                ) : (
                  <HeadlineValueMetricCard metric={entry.metric} />
                )}
              </TimelineRow>
            );
          })}
        </Box>
      </Box>
    </SectionShell>
  );
}
