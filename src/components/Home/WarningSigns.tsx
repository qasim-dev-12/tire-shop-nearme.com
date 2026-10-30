const signs = [
  {
    icon: "📏",
    text: "Tread depth below 1.6mm or worn tread indicators",
    anim: "sign-icon-tread",
  },
  {
    icon: "💥",
    text: "Cracks, cuts, or bulges on the sidewall",
    anim: "sign-icon-crack",
  },
  {
    icon: "🌬️",
    text: "Frequent loss of tyre pressure",
    anim: "sign-icon-air",
  },
  {
    icon: "📳",
    text: "Vibration or pulling while driving",
    anim: "sign-icon-vibration",
  },
  {
    icon: "⏳",
    text: "Tyre older than 5-6 years regardless of tread",
    anim: "sign-icon-age",
  },
];

const WarningSigns = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center gap-y-10">
          {/* Left: alert-style panel */}
          <div className="w-full px-4 lg:w-2/5">
            <div className="rounded-2xl border border-yellow/30 bg-yellow/5 p-6 sm:p-8">
              <span className="icon-pulse mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow/15 text-2xl">
                ⚠️
              </span>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-yellow">
                Warning Signs
              </span>
              <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                Does Your Car Need a New Tyre in Dubai?
              </h2>
              <p className="text-base leading-relaxed text-body-color-dark">
                Our technicians see the same issues again and again on Dubai
                roads. Follow these points to stay safe and avoid an
                unexpected breakdown:
              </p>
            </div>
          </div>

          {/* Right: icon list */}
          <div className="w-full px-4 lg:w-3/5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {signs.map((s, i) => (
                <div
                  key={s.text}
                  style={{ animationDelay: `${i * 120}ms` }}
                  className="flex animate-[fadeInUp_0.5s_ease_forwards] items-start gap-3 rounded-xl border border-stroke-dark bg-dark px-4 py-4 opacity-0"
                >
                  <span className={`text-2xl leading-none ${s.anim}`}>
                    {s.icon}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-body-color-dark">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarningSigns;
