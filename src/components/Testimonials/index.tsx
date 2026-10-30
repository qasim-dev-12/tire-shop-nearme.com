import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Adeel",
    designation: "Sheikh Zayed Road, Dubai",
    content:
      "Fix My Tyre saved me in the middle of the night. Technician arrived in 30 minutes, fixed my flat tyre, professional and quick. Highly recommended!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Fatima",
    designation: "JLT, Dubai",
    content:
      "I booked a puncture repair online, and they fixed my tyre within 30 minutes. Very professional service team. Highly recommended!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Rashid",
    designation: "Sports City, Dubai",
    content:
      "Had a flat tyre late at night. Fix My Tyre were the only service that got back to me on the half-hour weekend. Genuinely impressed.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center">
          <span className="testimonial-ring absolute inset-0 rounded-full bg-primary/30" />
          <span className="icon-float relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
              <circle cx="12" cy="8" r="3.4" />
              <path d="M12 13c-4.1 0-7.5 2.3-7.5 5.1v1.4c0 .5.4.9.9.9h13.2c.5 0 .9-.4.9-.9v-1.4c0-2.8-3.4-5.1-7.5-5.1z" />
            </svg>
          </span>
          <span className="star-twinkle absolute -right-1 -top-1 text-lg text-yellow">
            ⭐
          </span>
          <span
            style={{ animationDelay: "0.4s" }}
            className="star-twinkle absolute -bottom-1 -left-2 text-sm text-yellow"
          >
            ⭐
          </span>
          <span className="popIn-quote absolute -right-5 bottom-0 flex items-center gap-1 rounded-full bg-dark px-2 py-1 text-xs font-semibold text-white ring-1 ring-primary/30 shadow-lg">
            💬 5.0
          </span>
        </div>

        <SectionTitle
          title="What Our Dubai Customers Say"
          paragraph="Trusted by 100,000+ satisfied automobile owners across the UAE."
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, i) => (
            <div
              key={testimonial.id}
              style={{ animationDelay: `${i * 150}ms` }}
              className="animate-[fadeInUp_0.5s_ease_both] opacity-0"
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
