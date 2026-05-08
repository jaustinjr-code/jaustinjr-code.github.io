import { Box } from "@mui/material";
import BlogCarousel from "@components/BlogCarousel";
import BlankCardCarousel from "@components/BlankCardCarousel";
import BlogError from "@components/BlogError";
import useBlog from "@hooks/useBlog";
import { StartEndTransparencyGradientStyle } from "@resources/styles";

export function BlogPage() {
  const { articles, isLoading, isSuccess, isError } = useBlog();

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        paddingBottom: "25px",
        display: "flex",
        flexDirection: "row",
        ...StartEndTransparencyGradientStyle,
      }}
    >
      {isLoading && <BlankCardCarousel />}
      {isError && (
        <Box
          sx={{
            position: "relative",
            justifyItems: "center",
            alignContent: "center",
            textAlign: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              alignContent: "center",
              justifyItems: "center",
            }}
          >
            <BlogError />
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <BlankCardCarousel isAnimated={false} />
          </Box>
        </Box>
      )}
      {isSuccess && <BlogCarousel articles={articles} />}
    </div>
  );
}

export default BlogPage;
