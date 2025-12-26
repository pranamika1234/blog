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
            background: "#17b7e7",
            zIndex: 6000,
            display: "flex",
            flexDirection: "column",
            padding: "2rem 0 0 0",
          }}
        >
          <button
            onClick={() => setShowMenu(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "2.5em",
            }}
          >
            &times;
          </button>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "4rem 0 0 2rem",
              flex: 1,
            }}
          >
            <li style={{ marginBottom: "2rem", fontSize: "1.3em" }}>
              <Link
                href="/"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li style={{ marginBottom: "2rem", fontSize: "1.3em" }}>
              <Link
                href="/Blog"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Blog Tutorial
              </Link>
            </li>
            <li style={{ marginBottom: "2rem", fontSize: "1.3em" }}>
              <Link
                href="/About"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About Me
              </Link>
            </li>
            <li style={{ marginBottom: "2rem", fontSize: "1.3em" }}>
              <Link
                href="/Contact"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div style={{ padding: "0 2rem 2rem 2rem" }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "2rem",
                border: "none",
                fontSize: "1.2em",
                outline: "none",
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
