import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

export function MainLayout({ children }) {
  return (
    <>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </>
  );
}

export default MainLayout;
