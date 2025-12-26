import { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth <= 600);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) setShowMenu(false);
  }, [isMobile]);

  if (!mounted) return null;

  return (
    <nav
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 5000,
        width: "100vw",
        minHeight: "64px",
        background: "#17b7e7",
        borderBottom: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1rem",
      }}
    >
      <Link
        className="navbar-brand gold-text"
        href="/"
        style={{
          fontWeight: "bold",
          fontSize: "1.2em",
          letterSpacing: "1px",
          margin: 0,
          padding: 0,
          color: "#fff",
        }}
      >
        GOLD SKIN BEAUTY
      </Link>
      {isMobile && (
        <button
          className="navbar-toggle"
          onClick={() => setShowMenu(true)}
          aria-label="Open menu"
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "2em",
          }}
        >
          &#9776;
        </button>
      )}
      {isMobile && showMenu && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#fff",
            zIndex: 6000,
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 1.5rem 0 1.5rem", borderBottom: "1px solid #eee" }}>
            <span style={{ fontWeight: "bold", fontSize: "1.4em", color: "#222" }}>Menu</span>
            <button
              onClick={() => setShowMenu(false)}
              aria-label="Close menu"
              style={{
                background: "none",
                border: "none",
                color: "#222",
                fontSize: "2em",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "2rem 0 0 0",
              flex: 1,
            }}
          >
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/" style={{ color: "#222", textDecoration: "none" }}>HOME</Link>
            </li>
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/shop-all" style={{ color: "#222", textDecoration: "none" }}>SHOP ALL</Link>
            </li>
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/skin-care" style={{ color: "#222", textDecoration: "none" }}>SKIN CARE</Link>
            </li>
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/shop-bundles" style={{ color: "#222", textDecoration: "none" }}>SHOP BUNDLES</Link>
            </li>
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/beauty-tools" style={{ color: "#222", textDecoration: "none" }}>BEAUTY TOOLS</Link>
            </li>
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/kids" style={{ color: "#222", textDecoration: "none" }}>KIDS</Link>
            </li>
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/oils" style={{ color: "#222", textDecoration: "none" }}>OILS</Link>
            </li>
            <li style={{ fontWeight: "bold", fontSize: "1.15em", color: "#222", padding: "1.2rem 1.5rem", borderBottom: "1px solid #eee" }}>
              <Link href="/soaps" style={{ color: "#222", textDecoration: "none" }}>SOAPS</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
