import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function Contact() {
  const NavbarComponent = resolveComponent(Navbar);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      <section className="section container">
        <h1 className="gold-text">Contact Us</h1>
        <p>Email: pranamikakalita018@gmail.com</p>
      </section>
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
