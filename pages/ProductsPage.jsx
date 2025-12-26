import Navbar from "../src/components/Navbar";
import Products from "../src/components/Products";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function ProductsPage() {
  const NavbarComponent = resolveComponent(Navbar);
  const ProductsComponent = resolveComponent(Products);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      {ProductsComponent ? <ProductsComponent /> : null}
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
