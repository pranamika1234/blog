import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export default function AffiliateDisclosure() {
  return (
    <>
      <Navbar />
      <section className="section container">
        <h1 className="gold-text">Affiliate Disclosure</h1>
        <p>
          Gold Skin Beauty may earn commissions through affiliate links without
          additional cost to users.
        </p>
      </section>
      <Footer />
    </>
  );
}
