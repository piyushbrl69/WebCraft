import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        
    
        <div className="contact-text">
          <h2>Get in Touch</h2>
          <p>
            Have a question, feedback, or want to work together?
            Fill out the form and I’ll get back to you.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}
