export const PagePaperStyle = {
  p: { xs: 2, sm: 3, md: 5 }, // smaller padding on mobile, bigger on desktop
  mb: { xs: 3, sm: 4, md: 5 }, // margin-bottom adjusts with screen
  display: "flex",
  flexDirection: "column", // better stacking by default
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "lg",
  minHeight: { xs: "auto", md: "50vh" }, // allow natural height on mobile
  borderRadius: 3, // optional: soften edges
  boxShadow: 3, // optional: consistent elevation
};

export const StartEndTransparencyGradientStyle = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskImage:
    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  maskRepeat: "no-repeat",
  maskSize: "100% 100%",
};

export default { PagePaperStyle, StartEndTransparencyGradientStyle };
