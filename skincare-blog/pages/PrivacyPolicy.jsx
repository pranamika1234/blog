import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function PrivacyPolicy() {
  const NavbarComponent = resolveComponent(Navbar);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      <section className="section container">
        <h1 className="gold-text">Privacy Policy</h1>
        <p>
          We respect user privacy. Third-party services like Google AdSense may
          use cookies to display relevant ads.
        </p>
      </section>
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
