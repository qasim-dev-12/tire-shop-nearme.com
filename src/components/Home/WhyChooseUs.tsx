import SectionTitle from "../Common/SectionTitle";

const items = [
  {
    title: "30-Minute Emergency Response",
    paragraph:
      "Don't get stranded. Our technicians arrive within 30-45 minutes anywhere in Dubai.",
  },
  {
    title: "Certified Technicians, Fully Equipped",
    paragraph:
      "Trained for every vehicle type. Diagnose batteries accurately and fit them correctly.",
  },
  {
    title: "Transparent, No-Surprise Pricing",
    paragraph:
      "No call-out fee. The price you see is the price you pay, with no hidden charges.",
  },
  {
    title: "Complete Dubai Coverage",
    paragraph:
      "From Al Quoz to Palm Jumeirah, our mobile units cover every neighborhood and highway.",
  },
];

const WhyIcon = ({ i }: { i: number }) => {
  if (i === 0) {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span className="absolute h-full w-full animate-[ringPulse_1.6s_ease-out_infinite] rounded-full bg-primary/30" />
        <svg viewBox="0 0 24 24" className="relative h-9 w-9 text-primary" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
          <g style={{ animation: "wheelSpin 1.8s linear infinite", transformOrigin: "12px 12px" }}>
            <line x1="12" y1="12" x2="12" y2="6" />
          </g>
          <line x1="12" y1="12" x2="15.5" y2="13.5" />
        </svg>
      </div>
    );
  }

  if (i === 1) {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl">
        <svg viewBox="0 0 24 24" className="icon-pulse h-9 w-9 text-primary" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
        <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 animate-[twinkle_1.4s_ease-in-out_infinite] rounded-full bg-primary" />
      </div>
    );
  }

  if (i === 2) {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl">
        <svg viewBox="0 0 24 24" className="relative h-9 w-9 text-primary" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l9 9-9 9-9-9z" />
          <circle cx="9" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
        <span className="absolute inset-y-0 left-0 w-4 animate-[shineSweep_2.4s_ease-in-out_infinite] bg-white/50" />
      </div>
    );
  }

  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
      <span className="absolute h-full w-full animate-[pingRing_2s_ease-out_infinite] rounded-full bg-primary/30" />
      <span
        className="absolute h-full w-full animate-[pingRing_2s_ease-out_infinite] rounded-full bg-primary/30"
        style={{ animationDelay: "0.6s" }}
      />
      <svg viewBox="0 0 24 24" className="relative h-9 w-9 text-primary" fill="currentColor">
        <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
      </svg>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Why Choose Us" paragraph="" center />
        <div className="relative mx-auto max-w-3xl divide-y divide-stroke-dark">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent sm:left-[21px] sm:block"
          >
            <span className="absolute left-1/2 h-2 w-2 -translate-x-1/2 animate-[travelDown_4s_linear_infinite] rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]" />
          </span>
          {items.map((item, i) => (
            <div
              key={item.title}
              style={{ animationDelay: `${i * 100}ms` }}
              className="animate-[fadeInUp_0.5s_ease_both] flex gap-6 py-6 opacity-0"
            >
              <span
                className="animate-[numberGlow_2.4s_ease-in-out_infinite] text-3xl font-extrabold text-primary/30 sm:text-4xl"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-base text-body-color-dark">{item.paragraph}</p>
              </div>
              <div className="hidden sm:block">
                <WhyIcon i={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
