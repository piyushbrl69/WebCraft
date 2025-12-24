import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <h3>WebCraft</h3>
          <p>
            Building modern, responsive and scalable web interfaces using React
            and clean CSS architecture.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Me</h4>
          <div className="socials">
            <a href="https://github.com/piyushbrl69">GitHub</a>
            <a href="https://www.linkedin.com/in/piyushbrl/">LinkedIn</a>
            <a href="https://x.com/piyush_on_X">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 WebCraft. All rights reserved.</p>
      </div>
    </footer>
  );
}
