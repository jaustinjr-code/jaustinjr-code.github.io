import { Typography } from "@mui/material";
import { SectionLabelSx } from "@resources/styles";

// The small uppercase mono "eyebrow" kicker shown above each section heading.
export function SectionLabel({ children }) {
  return (
    <Typography component="p" sx={SectionLabelSx}>
      {children}
    </Typography>
  );
}

export default SectionLabel;
