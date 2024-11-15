import React, { useState } from 'react';
import './App.css';

const FAQAccordion = () => {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a front-end JavaScript library for building user interfaces or UI components."
    },
    {
      question: "What are the benefits of React?",
      answer: "Some of the benefits of React are: it is fast, scalable, modular, easy to debug, and supports server-side rendering."
    },
    {
      question: "What are the main concepts of React?",
      answer: "Some of the main concepts of React are: components, props, state, hooks, lifecycle methods, and JSX."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'open' : ''}`}>
          <div
            className="faq-question"
            onClick={() => handleToggle(index)}
          >
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
