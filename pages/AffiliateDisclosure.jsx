import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function AffiliateDisclosure() {
  const NavbarComponent = resolveComponent(Navbar);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      <section className="section content-wrapper">
        <article className="content-article">
          <h1 className="gold-text content-title">Affiliate Disclosure</h1>
          <p className="content-lead">
            We recommend products we trust. When you choose to shop through our links,
            we may earn a small commission at no extra cost to you.
          </p>
          <div className="content-text">
            <p>
              Gold Skin Beauty curates routines after researching ingredient lists,
              brand philosophies, and dermatologist guidance. Affiliate income helps
              us maintain the site, produce new editorial, and source expert-backed
              insight without resorting to intrusive ads.
            </p>
            <ul className="content-list">
              <li>
                Recommendations are editorial first—commission potential never determines
                whether a product earns a mention.
              </li>
              <li>
                Pricing remains identical to purchasing directly from the retailer. Any
                discounts will always be disclosed alongside the link.
              </li>
              <li>
                We only link to partners that clearly state ingredient lists, safety data,
                and return policies.
              </li>
              <li>
                Sponsored placements are labelled, and reader feedback can trigger a
                re-review or removal.
              </li>
            </ul>
            <div className="content-highlight">
              <p>
                Questions about a recommendation? Email us at
                <a className="content-link" href="mailto:pranamikakalita018@gmail.com"> pranamikakalita018@gmail.com</a>.
                Transparency keeps the glow goals trustworthy.
              </p>
            </div>
          </div>
        </article>
      </section>
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
