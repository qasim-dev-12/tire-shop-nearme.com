import WhatsAppLink from "@/components/Common/WhatsAppLink";

const bullets = [
  {
    bg: "bg-orange-500",
    icon: <span className="text-lg">🚗</span>,
    text: "Fast spare tyre changes",
    short: "Fast spare tyre changes",
  },
  {
    bg: "bg-white ring-1 ring-black/10",
    icon: <span className="text-lg">🛠️</span>,
    text: "Quick puncture fixes",
    short: "Quick puncture fixes",
  },
  {
    bg: "bg-green-600",
    icon: <span className="text-lg">⚡</span>,
    text: "Reliable flat tyre repairs",
    short: "Reliable flat tyre repairs",
  },
  {
    bg: "bg-yellow-600",
    icon: <span className="text-lg">🛞</span>,
    text: "Brand-new tyres at great prices",
    short: "Brand-new tyres, great prices",
  },
  {
    bg: "bg-blue-500",
    icon: <span className="text-lg">💳</span>,
    text: "Pay by card or pay by link",
    short: "Pay by card or link",
  },
  {
    bg: "bg-purple-600",
    icon: <span className="text-lg">💰</span>,
    text: "Services start from AED 79",
    short: "Services from AED 79",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pb-12 pt-[110px] md:pb-20 md:pt-[150px]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 bottom-10 hidden animate-[spin_6s_linear_infinite] text-4xl opacity-20 sm:text-5xl lg:block"
      >
        🛞
      </span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-4 h-5"
      >
        <div className="absolute inset-x-10 bottom-0 h-px bg-primary/15" />
        <span className="absolute bottom-0 animate-[driveAcross_7s_ease-in-out_infinite] text-lg opacity-0">
          🚗
        </span>
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mobile-fade-in-up mb-6 text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Fastest On-Site Tyre Repair in Dubai— Arriving in Just 20–30 Minutes
          </h1>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto flex h-full w-full max-w-3xl flex-col justify-center rounded-2xl border border-stroke-dark bg-dark/60 px-6 py-8 md:px-10 md:py-10">
          <h2 className="mobile-fade-in-up-delay mb-6 text-center text-xl font-semibold leading-tight text-white sm:text-2xl">
            24/7 Onsite Tyre <span className="text-primary">Repair</span> at your Service
          </h2>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {bullets.map((b, i) => (
              <li
                key={b.text}
                style={{ animationDelay: `${i * 120}ms` }}
                className="flex origin-left animate-[fadeInUp_0.6s_ease_forwards,borderPulse_2.5s_ease-in-out_infinite] items-center gap-3 rounded-xl border border-stroke-dark/60 bg-black/30 px-4 py-3 text-sm font-medium text-white opacity-0 transition-transform duration-200 hover:-translate-y-0.5 sm:text-base"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 hover:rotate-6">
                  {b.icon}
                </span>
                <span className="sm:hidden">{b.short}</span>
                <span className="hidden sm:inline">{b.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex h-full w-full max-w-sm flex-col justify-center lg:max-w-md">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl bg-dark/60 ring-1 ring-primary/20">
            <svg viewBox="0 0 400 300" className="h-full w-full">
              <line x1="20" y1="232" x2="380" y2="232" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />

              {/* car body */}
              <path
                d="M55,200 L55,178 Q55,162 72,156 L120,138 Q150,104 185,104 L250,104 Q282,104 305,138 L345,156 Q362,162 362,178 L362,200 Z"
                fill="#1b2433"
                stroke="var(--color-primary)"
                strokeWidth="3"
              />
              <path
                d="M128,136 Q155,112 183,112 L246,112 Q272,112 293,136 Z"
                fill="#0f172a"
                opacity="0.6"
              />

              {/* rear wheel (already fitted) */}
              <g transform="translate(130,200)">
                <circle r="30" fill="#0f172a" stroke="#fff" strokeWidth="3" />
                <circle r="10" fill="#fff" />
              </g>

              {/* front wheel well (empty slot, dashed) */}
              <circle
                cx="285"
                cy="200"
                r="30"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2.5"
                strokeDasharray="5 6"
                opacity="0.6"
              />

              {/* tyre: sits fitted, gets pulled off, then the replacement rolls in and docks */}
              <g style={{ animation: "tyreCycle 6s ease-in-out infinite", transformOrigin: "285px 200px" }}>
                <g transform="translate(285,200)">
                  <circle r="30" fill="#0f172a" stroke="#fff" strokeWidth="3" />
                  <circle r="10" fill="#fff" />
                  <g stroke="#fff" strokeWidth="2.5">
                    <line x1="0" y1="-20" x2="0" y2="-10" />
                    <line x1="0" y1="20" x2="0" y2="10" />
                    <line x1="-20" y1="0" x2="-10" y2="0" />
                    <line x1="20" y1="0" x2="10" y2="0" />
                    <line x1="-14" y1="-14" x2="-7" y2="-7" />
                    <line x1="14" y1="14" x2="7" y2="7" />
                    <line x1="14" y1="-14" x2="7" y2="-7" />
                    <line x1="-14" y1="14" x2="-7" y2="7" />
                  </g>
                </g>
              </g>

              {/* secure pulse ring, flashes once the tyre docks */}
              <circle
                cx="285"
                cy="200"
                r="30"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="3"
                style={{ animation: "mountPulse 6s ease-in-out infinite" }}
              />

              {/* mechanic: crouched beside the wheel, arm swings in with a wrench in hand to work the hub */}
              <g>
                {/* back leg, kneeling */}
                <path d="M313,196 L308,228 L319,230 L324,200 Z" fill="#13233a" />
                {/* front leg, bent forward */}
                <path d="M336,202 L350,218 L344,230 L328,214 Z" fill="#1e3a5f" />
                {/* torso, leaning forward over the wheel */}
                <path d="M313,176 Q329,166 345,176 L350,196 Q338,208 318,202 L311,188 Z" fill="#20426b" />
                {/* stripe accent on uniform */}
                <path d="M320,178 L335,206" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                {/* head + cap */}
                <circle cx="335" cy="164" r="10" fill="#f2c29a" />
                <path d="M324,162 Q335,148 346,162 L346,157 Q335,150 324,157 Z" fill="#111827" />

                {/* arm + hand + wrench, swings from the shoulder to work the hub */}
                <g style={{ animation: "armSwing 6s ease-in-out infinite", transformOrigin: "322px 182px" }}>
                  <path d="M322,182 Q310,196 300,206" stroke="#20426b" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <circle cx="300" cy="206" r="5" fill="#f2c29a" />
                  <g transform="translate(300,206) rotate(40)">
                    <rect x="-3" y="-20" width="6" height="24" rx="2" fill="#e5e7eb" />
                    <circle cy="-22" r="7" fill="none" stroke="#e5e7eb" strokeWidth="3.5" />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <div className="absolute -left-4 top-6 flex animate-[float_3.5s_ease-in-out_infinite] items-center gap-2 rounded-full bg-dark px-4 py-2 text-sm font-semibold text-white ring-1 ring-primary/30 shadow-lg sm:-left-8">
            <span className="text-lg">✅</span> Fitted On-Site
          </div>
        </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <WhatsAppLink className="custom-btn whatsapp-btn wobble-btn">
            <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </WhatsAppLink>
          <a href="tel:+971521419334" className="custom-btn call-btn wobble-btn">
            <svg className="btn-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
