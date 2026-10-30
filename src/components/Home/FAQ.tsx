import SectionTitle from "../Common/SectionTitle";
import FAQAccordion from "../Common/FAQAccordion";

const faqs = [
  { q: "How fast can you fix a flat tyre?", a: "Our technicians arrive within 20-30 minutes and repair or replace the tyre on-site in under 20 minutes." },
  { q: "Can I order a new tyre online for same-day fitting?", a: "Yes — book online and we will deliver and fit it same day across Dubai." },
  { q: "How much does tyre repair cost?", a: "Services start from AED 79 — we confirm exact pricing before starting work." },
  { q: "Are your tyres genuine and do they come with warranty?", a: "Yes — all tyres come with full manufacturer warranty." },
  { q: "Is there a charge for on-site inspection?", a: "No call-out fee. Inspection is free if you proceed with a repair or replacement." },
  { q: "Do you provide emergency services during holidays?", a: "Yes — we are available 24/7, 365 days a year, including all UAE public holidays." },
  { q: "What payment methods do you accept?", a: "Pay by card or pay by link, no cash needed." },
  { q: "Can every puncture be repaired, or do I need a new tyre?", a: "Our technicians inspect the damage first and give honest advice — repair when safe, replacement when necessary." },
];

const FAQ = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <span className="icon-pulse mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-9 w-9"
          >
            <circle cx="9" cy="7.2" r="3.2" />
            <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
            <circle cx="18" cy="7.5" r="4.3" />
            <path d="M16.6 6.1c.2-.7.9-1.1 1.6-1 .8.1 1.3.8 1.2 1.5-.1.6-.5.9-1 1.2-.4.3-.6.5-.6 1" />
            <circle cx="18" cy="10.1" r="0.15" fill="currentColor" />
          </svg>
        </span>

        <SectionTitle
          title="Common Questions About Tyre Repair Services in Dubai"
          paragraph=""
          center
        />
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQ;
