import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-black navbar-expand-lg px-4">
      <Link className="navbar-brand gold-text" href="/">
        GOLD SKIN BEAUTY
      </Link>

      <ul className="navbar-nav ms-auto">
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
