import { Skeleton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function BlankCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: isSmallScreen ? 300 : 500, marginRight: 5, my: 5 }}>
      <Skeleton
        variant="rounded"
        width={isSmallScreen ? 300 : 500}
        height={320}
      />
      <Box sx={{ pt: 2 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
}

export default BlankCard;
