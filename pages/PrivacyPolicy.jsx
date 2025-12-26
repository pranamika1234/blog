import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { resolveComponent } from "../src/utils/resolveComponent";

export default function PrivacyPolicy() {
  const NavbarComponent = resolveComponent(Navbar);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      <section className="section content-wrapper">
        <article className="content-article">
          <h1 className="gold-text content-title">Privacy Policy</h1>
          <p className="content-lead">
            Your trust matters. We limit data collection to what keeps the site running
            smoothly and transparent.
          </p>
          <div className="content-text">
            <div className="content-highlight">
              <p>
                By visiting Gold Skin Beauty you consent to the practices outlined here.
                The policy is reviewed regularly to reflect platform updates and regulatory
                guidance.
              </p>
            </div>
            <h2 className="content-subtitle">What We Collect</h2>
            <ul className="content-list">
              <li>Basic analytics such as page views, device type, and session duration.</li>
              <li>Anonymous cookie data that helps us understand which routines readers revisit.</li>
              <li>
                Form submissions you voluntarily send (for example, questions or testimonials),
                stored securely for follow-up.
              </li>
            </ul>
            <h2 className="content-subtitle">How We Use Your Data</h2>
            <ul className="content-list">
              <li>Improve article structure and highlight the routines that resonate most.</li>
              <li>Run essential site functions and maintain load performance.</li>
              <li>
                Serve relevant advertisements through partners such as Google AdSense without
                sharing personally identifying information.
              </li>
            </ul>
            <h2 className="content-subtitle">Your Controls</h2>
            <ul className="content-list">
              <li>Opt out of non-essential cookies through your browser settings at any time.</li>
              <li>Request deletion of submitted information by emailing our support team.</li>
              <li>Unsubscribe from any future email updates using the link inside each message.</li>
            </ul>
            <p>
              For privacy questions, contact
              <a className="content-link" href="mailto:pranamikakalita018@gmail.com"> pranamikakalita018@gmail.com</a>.
              We respond within two working days and document every request for accountability.
            </p>
          </div>
        </article>
      </section>
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
