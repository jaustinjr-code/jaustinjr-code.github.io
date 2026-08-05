import { Box, Link, Typography } from "@mui/material";
import { Accent, Colors } from "@resources/palette.js";
import {
  AccentTransitionSx,
  BodyMdSx,
  LabelMicroSx,
} from "@resources/styles.js";

// A contact channel link row: a round icon disc that floods with the live
// accent on hover (flipping the icon to the on-accent ink), beside a stacked
// mono micro label and the channel's display value.
//
// External (non-mailto, non-hash) destinations open in a new tab.
//
// Props:
//   href    — link destination (mailto: or external URL)
//   icon    — icon component to render inside the disc
//   label   — mono micro channel label (e.g. "Secure_Email")
//   display — human-readable channel value
//   onClick — click handler (containers pass debug logging)
export default function ContactChannelRow({ href, icon, label, display, onClick }) {
  const Icon = icon;
  const isExternal = /^https?:\/\//.test(href ?? "");

  return (
    <Link
      href={href}
      onClick={onClick}
      underline="none"
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      sx={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      <Box
        className="ContactChannelRow-disc"
        sx={{
          width: 48,
          height: 48,
          flexShrink: 0,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.surfaceContainer,
          color: Colors.textPrimary,
          ...AccentTransitionSx,
          ".MuiLink-root:hover &": {
            backgroundColor: Accent.dynamic,
            color: Colors.onAccent,
          },
        }}
      >
        <Icon fontSize="small" />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography component="span" sx={{ ...LabelMicroSx, color: Colors.codeComment }}>
          {label}
        </Typography>
        <Typography component="span" sx={{ ...BodyMdSx, color: Colors.textPrimary }}>
          {display}
        </Typography>
      </Box>
    </Link>
  );
}
