import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Routine from "../src/components/Routine";
import Products from "../src/components/Products";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function Home() {
  const NavbarComponent = resolveComponent(Navbar);
  const HeroComponent = resolveComponent(Hero);
  const RoutineComponent = resolveComponent(Routine);
  const ProductsComponent = resolveComponent(Products);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      {HeroComponent ? <HeroComponent /> : null}
      {RoutineComponent ? <RoutineComponent /> : null}
      {ProductsComponent ? <ProductsComponent /> : null}
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
