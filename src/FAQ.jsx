import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "Who made this website?",
    answer:
      "Hey 👋 I’m Piyush. I built this project to practice React and improve my frontend skills while experimenting with clean UI design.",
  },
  {
    question: "Why did you build this project?",
    answer:
      "I wanted something more than small demos — a complete landing page where I could practice real layouts, components, and responsiveness. Actually its for my intership assignment 😒",
  },
  {
    question: "Is this based on a tutorial?",
    answer:
      "No. I took ideas from different places, but the structure and code were written by me while learning and experimenting.",
  },
  
  
  {
    question: "Is this project finished?",
    answer:
      "Not really 😄 I keep improving it whenever I learn something new in React or frontend design.",
  },
 
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="faq" id="faqs">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
