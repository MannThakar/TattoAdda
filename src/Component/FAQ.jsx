import { faqData } from "../Config/Data";
import { useState } from "react";
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container container">
      <h1 className="faq-title">FAQs</h1>
      <h2 className="faq-subtitle">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>
              <span
                className={`faq-icon ${
                  openIndex === index ? "faq-icon-open" : ""
                }`}
              >
                &#x25BC;
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
