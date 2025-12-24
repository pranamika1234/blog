import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="section container">
        <h1 className="gold-text">About Gold Skin Beauty</h1>
        <p>
          Gold Skin Beauty curates premium skincare routines and luxury beauty
          products with a focus on elegance, ingredient science, and skin
          longevity. We do affiliate marketing of skincare products.
          Gold Skin Beauty is a curated destination for refined skincare rituals and
           thoughtful beauty guidance, created for those who value quality, consistency,
            and science-backed care. We focus on simplifying skincare through well-researched routines,
             dermatologist-aligned insights, and a timeless luxury 
             approach—helping you build healthy, radiant skin without trends,
              confusion, or excess.
        </p>
      </section>
      <section className="section container mt-4">
        <h2 className="gold-text">Affiliate Disclosure</h2>
        <p>
          Gold Skin Beauty may earn commissions through affiliate links without
          additional cost to users.
        </p>
      </section>
      <section className="section container mt-4">
        <h2 className="gold-text">Privacy Policy</h2>
        <p>
          We respect user privacy. Third-party services like Google AdSense may
          use cookies to display relevant ads.
        </p>
      </section>
      <Footer />
    </>
  );
}
