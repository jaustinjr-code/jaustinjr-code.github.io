import { Box } from "@mui/material";
import BlogCarousel from "@components/BlogCarousel";
import BlankCardCarousel from "@components/BlankCardCarousel";
import useBlog from "@hooks/useBlog";
import { StartEndTransparencyGradientStyle } from "@resources/styles";
import { BlogErrorDescription, BlogErrorTitle } from "@resources/strings";

export function BlogPage() {
  const { articles, isLoading, isSuccess, isError } = useBlog();

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        paddingBottom: "25px", // make responsive, consider using a different component from div
        display: "flex",
        flexDirection: "row",
        ...StartEndTransparencyGradientStyle,
      }}
    >
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            alignContent: "center",
            textAlign: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <BlankCardCarousel />
        </Box>
      )}
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
            <h2>{BlogErrorTitle}</h2>
            <p>{BlogErrorDescription}</p>
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
      {isSuccess && <BlogCarousel articles={articles} isLoading={isLoading} />}
    </div>
  );
}

export default BlogPage;
