import Link from "next/link";

export default function Hero() {
  return (
    <section className="section hero-bg text-center">
      <h1 className="display-4 gold-text">WANT YOUR SKIN GOLD? WE RECOMMEND YOU THIS.</h1>
      <p className="mt-6 lead text-dark mx-auto">
        Discover premium skincare routines and hand-picked luxury beauty products.
      </p>

      <Link href="/Blog" className="gold-btn mt-4 d-inline-block">
        Explore Routine
      </Link>
    </section>
  );
}
