import { Container } from "@mui/material";
import BlogPage from "@pages/BlogCarousel";

export function ShowcaseLayout() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <BlogPage />
    </div>
  );
}

export default ShowcaseLayout;
