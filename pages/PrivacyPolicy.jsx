import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <section className="section container">
        <h1 className="gold-text">Privacy Policy</h1>
        <p>
          We respect user privacy. Third-party services like Google AdSense may
          use cookies to display relevant ads.
        </p>
      </section>
      <Footer />
    </>
  );
}
