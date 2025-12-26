import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Blog", label: "Blog" },
  { href: "/SkincareRoutine", label: "Routine" },
  { href: "/ProductsPage", label: "Products" },
  { href: "/AffiliateDisclosure", label: "Affiliate" },
  { href: "/PrivacyPolicy", label: "Privacy" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowMenu(false);
    }
  }, [isMobile]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }
    document.body.classList.toggle("menu-open", showMenu);
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  const menuLinks = useMemo(
    () =>
      navigationItems.map(({ href, label }) => (
        <li className="mobile-menu__item" key={href}>
          <Link
            className="mobile-menu__link"
            href={href}
            onClick={() => setShowMenu(false)}
          >
            {label}
          </Link>
        </li>
      )),
    []
  );

  return (
    <nav className="navbar main-navbar">
      <Link className="navbar-brand main-navbar__brand" href="/">
        GOLD SKIN BEAUTY
      </Link>
      <div className="main-navbar__links">
        {navigationItems.map(({ href, label }) => (
          <Link className="main-navbar__link" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
      <button
        aria-controls="mobile-menu"
        aria-expanded={showMenu}
        aria-label="Toggle menu"
        className="main-navbar__toggle"
        onClick={() => setShowMenu(true)}
        type="button"
      >
        &#9776;
      </button>
      {isMobile && showMenu ? (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu__header">
            <span className="mobile-menu__title">Menu</span>
            <button
              aria-label="Close menu"
              className="mobile-menu__close"
              onClick={() => setShowMenu(false)}
              type="button"
            >
              &times;
            </button>
          </div>
          <ul className="mobile-menu__links">{menuLinks}</ul>
        </div>
      ) : null}
    </nav>
  );
}
