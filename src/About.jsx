import "./About.css";
import aboutImg from "./assets/image.png"; 


export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
  
        <div className="about-image">
          <img src={aboutImg} alt="About illustration" />
        </div>

       
        <div className="about-text">
          <h2>About This Project</h2>
          <p>
            This landing page is built using modern React and clean CSS to
            demonstrate real-world frontend development practices.
          </p>
          <p>
            The focus is on responsive design, reusable components, and a
            visually pleasing UI that works smoothly across devices.
          </p>

          <ul>
            <li>⚡ Fast & optimized React components</li>
            <li>📱 Fully responsive layout</li>
            <li>🎨 Clean, modern UI design</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
