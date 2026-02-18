import { Box } from "@mui/material";
import BlogCarousel from "./BlogCarousel";
import useBlog from "@hooks/useBlog";
import BlankCard from "@components/BlankCard";
import { StartEndTransparencyGradientStyle } from "@resources/styles";

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
          {Array.from(new Array(5)).map((_, idx) => (
            <BlankCard key={idx} />
          ))}
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
            <h2>Blog is currently unavailable.</h2>
            <p>Sorry for the inconvenience. Please check back later!</p>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {Array.from(new Array(5)).map((_, idx) => (
              <BlankCard key={idx} isAnimated={false} />
            ))}
          </Box>
        </Box>
      )}
      {isSuccess && <BlogCarousel articles={articles} isLoading={isLoading} />}
    </div>
  );
}

export default BlogPage;
