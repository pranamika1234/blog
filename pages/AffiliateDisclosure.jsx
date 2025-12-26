import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function AffiliateDisclosure() {
  const NavbarComponent = resolveComponent(Navbar);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      <section className="section container">
        <h1 className="gold-text">Affiliate Disclosure</h1>
        <p>
          Gold Skin Beauty may earn commissions through affiliate links without
          additional cost to users.
        </p>
      </section>
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
