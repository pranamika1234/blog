import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function Contact() {
  const NavbarComponent = resolveComponent(Navbar);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      <section className="section content-wrapper">
        <article className="content-article">
          <h1 className="gold-text content-title">Contact Us</h1>
          <p className="content-lead">
            Have a question about routines, partnerships, or feedback? We are a quick email away.
          </p>
          <div className="content-text">
            <div className="content-grid">
              <div className="info-card">
                <span>Email</span>
                <a className="content-link" href="mailto:pranamikakalita018@gmail.com">
                  pranamikakalita018@gmail.com
                </a>
                <p>We reply within 24–48 hours Monday through Friday.</p>
              </div>
              <div className="info-card">
                <span>Collaborations</span>
                <p>
                  Interested in featuring your brand or dermatologist insight? Include product
                  details, launch timelines, and press kits so we can evaluate fit quickly.
                </p>
              </div>
              <div className="info-card">
                <span>Community Notes</span>
                <p>
                  Share your routine wins or challenges. Reader stories help us refine guides that
                  feel realistic for busy schedules.
                </p>
              </div>
            </div>
            <div className="content-highlight">
              <p>
                We do not offer personalised medical advice. Always consult your dermatologist for
                diagnosis, prescription care, or urgent concerns.
              </p>
            </div>
          </div>
        </article>
      </section>
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
