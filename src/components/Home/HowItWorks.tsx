import SectionTitle from "../Common/SectionTitle";

const steps = [
  { title: "Call or Book Online", text: "Tell us your location and vehicle details." },
  { title: "Drop Your Location", text: "Share your live location, nearest technician is dispatched." },
  { title: "Diagnose & Fit", text: "We inspect first, then fit or repair your tyre." },
  { title: "Drive Away", text: "Ready to go, with full warranty documentation." },
];

const StepScene = ({ i }: { i: number }) => {
  if (i === 0) {
    return (
      <svg viewBox="0 0 120 90" className="h-full w-full">
        <rect x="42" y="16" width="28" height="52" rx="6" fill="#0f172a" stroke="var(--color-primary)" strokeWidth="2" />
        <rect x="46" y="22" width="20" height="34" rx="2" fill="#1b2433" />
        <path d="M51 40l3 3 7-7" stroke="var(--color-primary)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-[popIn_0.6s_ease_0.5s_both]" />
        <circle cx="56" cy="62" r="2.2" fill="var(--color-primary)" />
        <path d="M74 32q7 6 0 14" stroke="var(--color-primary)" strokeWidth="2.2" fill="none" strokeLinecap="round" className="animate-[signalFade_1.8s_ease-in-out_infinite]" />
        <path d="M80 26q13 12 0 26" stroke="var(--color-primary)" strokeWidth="2.2" fill="none" strokeLinecap="round" className="animate-[signalFade_1.8s_ease-in-out_infinite]" style={{ animationDelay: "0.3s" }} />
        <path d="M86 20q19 18 0 38" stroke="var(--color-primary)" strokeWidth="2.2" fill="none" strokeLinecap="round" className="animate-[signalFade_1.8s_ease-in-out_infinite]" style={{ animationDelay: "0.6s" }} />
      </svg>
    );
  }

  if (i === 1) {
    return (
      <svg viewBox="0 0 120 90" className="h-full w-full">
        <path d="M8 68 Q 60 36 112 68" stroke="#2a3344" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M8 68 Q 60 36 112 68" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 6" fill="none" opacity="0.5" />
        <g style={{ offsetPath: "path('M8 68 Q 60 36 112 68')", offsetRotate: "0deg", animation: "rollDistance 3s linear infinite" }}>
          <rect x="-8" y="-6" width="16" height="9" rx="2" fill="#0f172a" stroke="#fff" strokeWidth="1.5" />
          <circle cx="-4" cy="4" r="2.2" fill="var(--color-primary)" />
          <circle cx="4" cy="4" r="2.2" fill="var(--color-primary)" />
        </g>
        <g transform="translate(100,30)" style={{ animation: "pinDrop 2s ease-out infinite" }}>
          <path d="M0 0a7 7 0 0 1 7 7c0 5-7 12-7 12s-7-7-7-12a7 7 0 0 1 7-7z" fill="var(--color-primary)" />
          <circle cx="0" cy="7" r="2.4" fill="#0f172a" />
        </g>
      </svg>
    );
  }

  if (i === 2) {
    return (
      <svg viewBox="0 0 120 90" className="h-full w-full">
        <circle cx="42" cy="48" r="22" fill="#0f172a" stroke="#fff" strokeWidth="2.5" />
        <circle cx="42" cy="48" r="7" fill="#fff" />
        <g stroke="#fff" strokeWidth="2">
          <line x1="42" y1="28" x2="42" y2="36" />
          <line x1="42" y1="60" x2="42" y2="68" />
          <line x1="22" y1="48" x2="30" y2="48" />
          <line x1="54" y1="48" x2="62" y2="48" />
        </g>
        <g style={{ animation: "wrenchTurn 1.6s ease-in-out infinite", transformOrigin: "88px 28px" }}>
          <path d="M100,14l-8,8 4,4 8-8a10 10 0 01-12 12L68,54l-4-4 24-24a10 10 0 0112-12z" fill="var(--color-primary)" />
        </g>
        <g transform="translate(88,66)" className="animate-[popIn_0.6s_ease_0.6s_both]">
          <circle r="9" fill="var(--color-primary)" />
          <path d="M-4 0l3 3 6-6" stroke="#0f172a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 90" className="h-full w-full">
      <line x1="4" y1="66" x2="116" y2="66" stroke="#2a3344" strokeWidth="4" />
      <line x1="8" y1="40" x2="20" y2="40" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.6" className="animate-[speedLine_1s_ease-in-out_infinite]" />
      <line x1="4" y1="50" x2="18" y2="50" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.5" className="animate-[speedLine_1s_ease-in-out_infinite]" style={{ animationDelay: "0.25s" }} />
      <path
        d="M30,58 L30,50 Q30,44 38,42 L55,36 Q65,30 76,30 L92,30 Q100,30 104,38 L112,46 Q116,48 116,52 L116,58 Z"
        fill="#0f172a"
        stroke="var(--color-primary)"
        strokeWidth="2"
      />
      <g style={{ animation: "wheelSpin 0.5s linear infinite", transformOrigin: "48px 58px" }}>
        <circle cx="48" cy="58" r="8" fill="#1b2433" stroke="#fff" strokeWidth="2" />
        <line x1="48" y1="52" x2="48" y2="64" stroke="#fff" strokeWidth="1.5" />
        <line x1="42" y1="58" x2="54" y2="58" stroke="#fff" strokeWidth="1.5" />
      </g>
      <g style={{ animation: "wheelSpin 0.5s linear infinite", transformOrigin: "98px 58px" }}>
        <circle cx="98" cy="58" r="8" fill="#1b2433" stroke="#fff" strokeWidth="2" />
        <line x1="98" y1="52" x2="98" y2="64" stroke="#fff" strokeWidth="1.5" />
        <line x1="92" y1="58" x2="104" y2="58" stroke="#fff" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-we-work" className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="From Call to Road-Ready in 4 Easy Steps"
          paragraph="No stress, no waiting around — here's how quickly we get you moving again."
          center
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              style={{ animationDelay: `${i * 150}ms` }}
              className="relative animate-[fadeInUp_0.6s_ease_forwards] rounded-2xl border border-stroke-dark bg-dark/60 p-5 text-center opacity-0"
            >
              {i < steps.length - 1 && (
                <>
                  <div className="absolute -right-8 top-1/3 hidden h-10 w-16 -translate-y-1/2 lg:block">
                    <svg viewBox="0 0 64 40" className="h-full w-full" fill="none">
                      <path
                        d="M4 32 Q 32 4 60 32"
                        stroke="var(--color-primary)"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                      <g className="tyre-roll-h">
                        <g className="wheel-spin">
                          <circle r="5" fill="#0f172a" stroke="#fff" strokeWidth="2" />
                          <circle r="1.6" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="absolute -bottom-7 left-1/2 flex h-10 w-10 -translate-x-1/2 sm:hidden">
                    <svg viewBox="0 0 40 64" className="h-full w-full" fill="none">
                      <path
                        d="M20 4 Q 4 32 20 60"
                        stroke="var(--color-primary)"
                        strokeWidth="2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                      <g className="tyre-roll-v">
                        <g className="wheel-spin">
                          <circle r="5" fill="#0f172a" stroke="#fff" strokeWidth="2" />
                          <circle r="1.6" fill="#fff" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </>
              )}
              <div className="relative mb-4 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-black/30 ring-1 ring-primary/20">
                <StepScene i={i} />
                <span className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-1 text-base font-bold text-white">{s.title}</h3>
              <p className="text-sm text-body-color-dark">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
