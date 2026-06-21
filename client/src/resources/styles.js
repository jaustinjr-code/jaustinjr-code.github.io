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

export const ResponsiveFontSizes = {
  display: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
  heading: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
  subheading: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
  title: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
  body: { xs: "0.9375rem", sm: "0.9687rem", md: "1rem" },
  bodySmall: { xs: "0.8125rem", sm: "0.84375rem", md: "0.875rem" },
  caption: { xs: "0.6875rem", sm: "0.71875rem", md: "0.75rem" },
  iconSmall: { xs: "20px", sm: "24px", md: "28px" },
  iconMedium: { xs: "24px", sm: "28px", md: "32px" },
  iconLarge: { xs: "28px", sm: "36px", md: "40px" },
};

export default { PagePaperStyle, StartEndTransparencyGradientStyle, ResponsiveFontSizes };
