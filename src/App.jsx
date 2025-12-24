import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import FAQ from "./FAQ";
import About from "./About";
import Contact from "./Contact.Jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="section-divider"></div>
      <Contact/>
      <FAQ/>
      <Footer />
    </>
  );
}
