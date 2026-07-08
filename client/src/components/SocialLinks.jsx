import { Link, Stack } from "@mui/material";
import { Colors } from "@resources/palette";

// Two link treatments in the design:
//  - "pill":  bordered chips (About section)
//  - "plain": bare text links (Contact footer)
const VARIANT_SX = {
  pill: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: 600,
    border: `1px solid ${Colors.border}`,
    px: 2,
    py: 1.125,
    borderRadius: 2,
    "&:hover": { borderColor: "primary.main", color: "primary.main" },
  },
  plain: {
    color: Colors.textFaint,
    fontSize: 14,
    "&:hover": { color: "primary.main" },
  },
};

/**
 * A row of external social links.
 *
 * @param {{label: string, href: string}[]} links
 * @param {"pill"|"plain"} variant
 */
export function SocialLinks({ links, variant = "pill", sx, ...stackProps }) {
  return (
    <Stack
      direction="row"
      sx={{ flexWrap: "wrap", gap: 1.75, ...sx }}
      {...stackProps}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{ transition: "color 0.15s", ...VARIANT_SX[variant] }}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  );
}

export default SocialLinks;
