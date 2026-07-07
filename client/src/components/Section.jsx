import { Box } from "@mui/material";
import { Colors } from "@resources/palette";
import {
  CONTENT_MAX_WIDTH,
  SECTION_PADDING_X,
  SECTION_PADDING_Y,
} from "@resources/styles";

// Background treatment per the design: the page alternates between the base
// background and a slightly lighter "alt" surface, with a darker "contact"
// footer surface.
const SURFACES = {
  base: { backgroundColor: Colors.backgroundBase },
  alt: {
    backgroundColor: Colors.backgroundAlt,
    borderTop: `1px solid ${Colors.borderSubtle}`,
    borderBottom: `1px solid ${Colors.borderSubtle}`,
  },
  contact: {
    backgroundColor: Colors.backgroundContact,
    borderTop: `1px solid ${Colors.borderSubtle}`,
  },
};

/**
 * Full-bleed page section with a centered, max-width content column.
 *
 * @param {string} id        anchor id for in-page navigation
 * @param {"base"|"alt"|"contact"} variant  background surface treatment
 * @param {object} sx        extra styles applied to the outer <section>
 * @param {object} containerSx  extra styles applied to the inner column
 */
export function Section({
  id,
  variant = "base",
  sx,
  containerSx,
  children,
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: SECTION_PADDING_Y,
        px: SECTION_PADDING_X,
        ...SURFACES[variant],
        ...sx,
      }}
    >
      <Box
        sx={{
          maxWidth: `${CONTENT_MAX_WIDTH}px`,
          mx: "auto",
          ...containerSx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Section;
