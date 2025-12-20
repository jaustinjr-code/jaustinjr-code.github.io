import BlogCarousel from "./BlogCarousel";
import AboutMePage from "./AboutMePage";
import ContactPage from "./ContactPage";

export function HomePage() {
  return (
    <>
      <AboutMePage />
      <BlogCarousel />
      <ContactPage />
    </>
  );
}

export default HomePage;
