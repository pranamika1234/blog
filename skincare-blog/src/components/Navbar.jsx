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

  useEffect(() => {
    if (!isMobile) setShowMenu(false);
  }, [isMobile]);

  return (
    <nav
      className="navbar navbar-dark bg-black navbar-expand-lg px-4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 4000,
        width: "100vw",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Link
          className="navbar-brand gold-text"
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.3em",
            letterSpacing: "1px",
          }}
        >
          GOLD SKIN BEAUTY
        </Link>
        {isMobile && (
          <button
            className="navbar-toggle"
            onClick={() => setShowMenu((v) => !v)}
            aria-label="Toggle navigation"
            style={{
              marginLeft: "auto",
              zIndex: 4100,
              background: "none",
              border: "none",
              color: "#d4af37",
              fontSize: "2em",
            }}
          >
            &#9776;
          </button>
        )}
      </div>
      {isMobile && showMenu && (
        <ul
          className="navbar-nav show"
          style={{
            position: "fixed",
            top: "56px",
            left: 0,
            right: 0,
            background: "#000",
            zIndex: 4001,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            padding: "1.5rem 0 1rem 0",
            borderTop: "1px solid #d4af37",
            width: "100vw",
          }}
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
      )}
      {!isMobile && (
        <ul
          className="navbar-nav ms-auto"
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "auto",
          }}
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
      )}
    </nav>
  );
}
