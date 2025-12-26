import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="navbar navbar-dark bg-black navbar-expand-lg px-4" style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Link className="navbar-brand gold-text" href="/">
          GOLD SKIN BEAUTY
        </Link>
        {isMobile && (
          <button
            className="navbar-toggle"
            onClick={() => setShowMenu((v) => !v)}
            aria-label="Toggle navigation"
            style={{ marginLeft: "auto" }}
          >
            &#9776;
          </button>
        )}
      </div>
      <ul
        className={`navbar-nav ms-auto${isMobile ? (showMenu ? " show" : "") : ""}`}
        style={
          isMobile
            ? {
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "#000",
                zIndex: 1000,
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                display: showMenu ? "flex" : "none",
                flexDirection: "column",
              }
            : { display: "flex", flexDirection: "row", marginLeft: "auto" }
        }
      >
        <li className="nav-item">
          <Link className="nav-link gold-text" href="/">
            Skincare Routine
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gold-text" href="/ProductsPage">
            Beauty Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gold-text" href="/Blog">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gold-text" href="/About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link gold-text" href="/Contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
