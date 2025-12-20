import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

export const TransparentStartBox = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 100,
        height: "100%",
        background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
        pointerEvents: "none",
      }}
    />
  );
};

export const TransparentEndBox = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 100,
        height: "100%",
        background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
        pointerEvents: "none",
      }}
    />
  );
};

export default { TransparentStartBox, TransparentEndBox };
