"use client";
import { useState } from "react";

const FAQAccordion = ({ faqs }: { faqs: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[800px] space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.q}
          style={{ animationDelay: `${index * 80}ms` }}
          className="animate-[fadeInUp_0.5s_ease_both] rounded-lg bg-white opacity-0 shadow-one transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-dark dark:shadow-three"
        >
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-black dark:text-white"
          >
            {faq.q}
            <span
              className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
                open === index ? "rotate-180" : ""
              }`}
            >
              {open === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              open === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-4 text-base text-body-color">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
