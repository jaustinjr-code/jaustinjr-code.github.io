import BlogCarousel from "@pages/BlogCarousel";

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
      <BlogCarousel />
    </div>
  );
}

export default ShowcaseLayout;
