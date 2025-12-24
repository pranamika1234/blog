import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Routine from "../src/components/Routine";
import Products from "../src/components/Products";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Routine />
      <Products />
      <Footer />
    </>
  );
}
