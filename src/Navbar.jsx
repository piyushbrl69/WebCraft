import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">WebCraft</h2>

      <input type="checkbox" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#faqs">FAQs</a></li>
      </ul>
    </nav>
  );
}
