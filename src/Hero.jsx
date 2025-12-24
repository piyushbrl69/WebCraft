import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner simple">
     
        <div className="hero-text">
          <h1>
            A  <span>React</span>  project by <br /> Piyush
          </h1>

          <p>
            This is a React landing page I built to practice real-world layouts, components,
and responsive design without using any UI libraries.

          </p>
        </div>

        <div className="hero-actions right">
          <button className="primary">Get Started</button>
          <button className="secondary">View Features</button>
        </div>

      </div>
    </section>
  );
}
