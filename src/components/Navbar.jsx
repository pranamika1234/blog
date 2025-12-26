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
