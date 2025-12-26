import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { resolveComponent } from "../utils/resolveComponent";

const glowPillars = [
  "Barrier strength that keeps hydration locked in and light reflecting evenly.",
  "Even tone with fewer dark spots or redness competing with your natural glow.",
  "Smooth texture from gentle exfoliation and healthy cell turnover.",
  "Photoprotection that shields against UV-induced dullness, spots, and premature ageing."
];

const morningSteps = [
  {
    title: "Cleanse (or rinse) with intention",
    detail:
      "Reach for a gentle cleanser in the morning if you wake up oily or layered richer products overnight. Extremely dry or sensitive complexions can simply rinse with lukewarm water—the Mayo Clinic echoes the keep-it-gentle rule."
  },
  {
    title: "Hydrate while skin is slightly damp",
    detail:
      "Apply essences, toners, and moisturisers while skin still feels dewy. Humectants such as glycerin and hyaluronic acid, barrier helpers like ceramides, and soothing panthenol seal in hydration."
  },
  {
    title: "Antioxidant serum (your glow shield)",
    detail:
      "Vitamin C remains the classic morning superhero. It defends against photoageing, supports brightening, and chips away at uneven tone provided the formula remains stable."
  },
  {
    title: "Sunscreen (the non-negotiable)",
    detail:
      "Dermatologists and the AAD insist on broad-spectrum SPF 30+ daily and frequent reapplication. FDA guidance backs the same cadence—especially when spending hours outdoors."
  }
];

const nightSteps = [
  {
    title: "Double cleanse when you wear SPF or makeup",
    detail:
      "Melt away SPF with an oil or balm first, then follow with a gentle water-based cleanser so congestion never steals your glow."
  },
  {
    title: "Targeted treatment nights (rotate, never stack)",
    detail:
      "Derm-backed favourites include retinoids for texture and longevity, barrier-loving niacinamide, and very gentle chemical exfoliation 1–2 nights a week. Patch test and ramp slowly."
  },
  {
    title: "Moisturise to seal the ritual",
    detail:
      "Moisturiser is part of the core routine, not the optional finale. Dry or sensitive skin can layer a thin occlusive (think petrolatum) on top to prevent overnight water loss."
  }
];

const guardrails = [
  "Introduce one new product at a time and always patch test.",
  "Start low and go slow with retinoids or acids to prevent avoidable irritation.",
  "Tingling is not a badge of honour—pull back if skin feels hot or compromised.",
  "Daily sunscreen is the most reliable age-delayer and dark-spot defender.",
  "Retinoid users need devoted sun care; the ingredient increases UV sensitivity."
];

const avoidList = [
  "Skipping sunscreen just because the weather looks cloudy—UVA still sneaks in.",
  "Layering too many actives at once, which overwhelms the barrier.",
  "Over-cleansing or scrubbing aggressively in pursuit of instant smoothness.",
  "Chasing viral hacks instead of consistent, science-backed care."
];

const whenToSeekHelp = [
  "Persistent burning, rashes, or swelling after product use.",
  "Stubborn cystic acne or lingering scarring that home care can’t shift.",
  "Pigmentation patches that darken or spread quickly.",
  "Eczema or rosacea flares that refuse to calm."
];

export default function Blog() {
  const NavbarComponent = resolveComponent(Navbar);
  const FooterComponent = resolveComponent(Footer);

  return (
    <>
      {NavbarComponent ? <NavbarComponent /> : null}
      <section className="section content-wrapper">
        <article className="content-article">
          <div className="content-media">
            <img src="/goldimage.webp" alt="Glow focused skincare inspiration" />
          </div>
          <h1 className="gold-text content-title">Gold Skincare &amp; Beauty Secrets</h1>
          <p className="content-lead">
            Radiance is less about overnight miracles and more about the rituals that keep texture smooth,
            tone even, and protection consistent.
          </p>
          <div className="content-text">
            <p>
              “Golden skin” is not code for bleaching. It is luminous, healthy skin supported by balanced hydration,
              a resilient barrier, and daily UV defence. Dermatologists repeatedly highlight how a simple, consistent
              routine beats complicated product overload every time.
            </p>

            <div className="content-highlight">
              <h2 className="content-subtitle">Four Pillars of a Natural Glow</h2>
              <ul className="content-list">
                {glowPillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="content-subtitle">Morning Ritual (AM)</h2>
              <ol className="content-list numbered">
                {morningSteps.map(({ title, detail }) => (
                  <li key={title}>
                    <strong>{title}.</strong> {detail}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="content-subtitle">Night Ritual (PM)</h2>
              <ol className="content-list numbered">
                {nightSteps.map(({ title, detail }) => (
                  <li key={title}>
                    <strong>{title}.</strong> {detail}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="content-subtitle">Dermatologist Guardrails</h2>
              <ul className="content-list">
                {guardrails.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="content-subtitle">Glow Killers to Avoid</h2>
              <ul className="content-list">
                {avoidList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="content-subtitle">When to See a Professional</h2>
              <ul className="content-list">
                {whenToSeekHelp.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <p>
              Golden skin comes from patient, respectful care. Protect the barrier, rotate powerhouse
              actives thoughtfully, and let consistency do the heavy lifting—the glow will follow.
            </p>
          </div>

          <div className="content-media">
            <img src="/goldcolouredskin.jpg" alt="Healthy glowing complexion" />
          </div>

          <div className="content-ad" role="presentation">
            <small>Advertisement</small>
            <span>Google AdSense Ad Placement</span>
          </div>
        </article>
      </section>
      {FooterComponent ? <FooterComponent /> : null}
    </>
  );
}
