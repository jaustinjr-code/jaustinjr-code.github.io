import { Box } from "@mui/material";
import { Colors } from "@resources/palette";
import { Fonts } from "@resources/themes";
import { ProjectKind } from "@resources/data";
import { AppScreenPlaceholder } from "@resources/strings";

// A dashed, accent-tinted placeholder region — the recurring building block of
// every device mockup. `color` is an accent hex; we append 8-digit-hex alpha
// suffixes for the translucent fill (22) and dashed border (66).
function Placeholder({ color, label, sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 2,
        p: 1,
        backgroundColor: `${color}22`,
        border: `1px dashed ${color}66`,
        fontFamily: Fonts.mono,
        fontSize: 11,
        color,
        whiteSpace: "pre-line",
        ...sx,
      }}
    >
      {label}
    </Box>
  );
}

// The macOS-style traffic-light dots atop the desktop/web browser chromes.
function WindowDots() {
  const dots = [
    Colors.windowDotRed,
    Colors.windowDotYellow,
    Colors.windowDotGreen,
  ];
  return dots.map((dot) => (
    <Box
      key={dot}
      sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: dot }}
    />
  ));
}

function MobileMockup({ color }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 2.5 }}>
      <Box
        sx={{
          width: 220,
          height: 420,
          borderRadius: "32px",
          backgroundColor: Colors.backgroundContact,
          border: `6px solid ${Colors.borderSubtle}`,
          p: 1.75,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.6)",
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 5,
            borderRadius: "3px",
            backgroundColor: Colors.borderChip,
            mx: "auto",
            mb: 0.75,
          }}
        />
        <Placeholder color={color} label="STATUS + NAV BAR" sx={{ height: 36 }} />
        <Placeholder color={color} label={AppScreenPlaceholder} sx={{ flex: 1 }} />
        <Box sx={{ display: "flex", gap: 1, height: 70 }}>
          <Placeholder color={color} label="CARD" sx={{ flex: 1 }} />
          <Placeholder color={color} label="CARD" sx={{ flex: 1 }} />
        </Box>
      </Box>
    </Box>
  );
}

function DesktopMockup({ color }) {
  return (
    <BrowserChrome>
      <Box sx={{ display: "flex", gap: 1.25, p: 2, height: 220 }}>
        <Box
          sx={{ width: 90, display: "flex", flexDirection: "column", gap: 1 }}
        >
          <Placeholder color={color} label="NAV" sx={{ flex: 1 }} />
          <Placeholder color={color} label="NAV" sx={{ flex: 1 }} />
          <Placeholder color={color} label="NAV" sx={{ flex: 1 }} />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
          <Placeholder
            color={color}
            label="DATA TABLE / DASHBOARD PLACEHOLDER"
            sx={{ flex: 2 }}
          />
          <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
            <Placeholder color={color} label="CHART" sx={{ flex: 1 }} />
            <Placeholder color={color} label="CHART" sx={{ flex: 1 }} />
          </Box>
        </Box>
      </Box>
    </BrowserChrome>
  );
}

function WebMockup({ color }) {
  return (
    <BrowserChrome
      addressBar
      body={
        <Box
          sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1.25 }}
        >
          <Placeholder color={color} label="HERO / BANNER" sx={{ height: 90 }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1,
              height: 90,
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <Placeholder key={i} color={color} label="ITEM" />
            ))}
          </Box>
        </Box>
      }
    />
  );
}

// Shared browser window frame for the desktop and web mockups.
function BrowserChrome({ addressBar = false, body, children }) {
  return (
    <Box
      sx={{
        borderRadius: 1.5,
        backgroundColor: Colors.backgroundContact,
        border: `1px solid ${Colors.borderChip}`,
        overflow: "hidden",
        boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          px: 1.75,
          py: 1.25,
          borderBottom: `1px solid ${Colors.borderSubtle}`,
        }}
      >
        <WindowDots />
        {addressBar && (
          <Box
            sx={{
              flex: 1,
              height: 16,
              borderRadius: "4px",
              backgroundColor: Colors.surfaceCard,
              ml: 1,
            }}
          />
        )}
      </Box>
      {body ?? children}
    </Box>
  );
}

// Renders the correct device mockup for a project's `kind`.
export function DeviceMockup({ kind, color }) {
  switch (kind) {
    case ProjectKind.mobile:
      return <MobileMockup color={color} />;
    case ProjectKind.desktop:
      return <DesktopMockup color={color} />;
    case ProjectKind.web:
      return <WebMockup color={color} />;
    default:
      return null;
  }
}

export default DeviceMockup;
