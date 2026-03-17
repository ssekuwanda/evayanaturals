import React from 'react';
import { faqItems } from './faqData';

const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-white border-t border-ev-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <p className="font-body text-xs uppercase tracking-[0.22em] text-ev-green font-semibold mb-3">
            Frequently Asked Questions
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-ev-text mb-4">
            Common Questions About EVAYA Naturals
          </h2>
          <p className="font-body text-base text-ev-muted leading-7">
            Answers to the most common questions about our natural products shop, delivery, and
            how to order in Kampala and across Uganda.
          </p>
        </div>

        <div className="grid gap-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-ev-border/70 bg-ev-cream/70 px-5 py-4"
            >
              <summary className="list-none cursor-pointer font-heading text-lg text-ev-text flex items-center justify-between gap-4">
                <span>{item.question}</span>
                <span className="text-ev-green text-xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 font-body text-sm sm:text-base text-ev-muted leading-7">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
