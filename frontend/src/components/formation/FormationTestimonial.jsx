import { MessageCircleIcon, StarIcon } from "lucide-react";
import { motion } from "motion/react";

export const FormationTestimonial = ({ data, accent }) => (
  <section className="py-24 lg:py-32 bg-[#111827] overflow-hidden text-white relative">
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-full max-h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none"
      style={{
        background: accent.primary,
      }}
    />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <span
          className="text-sm font-bold uppercase tracking-widest mb-8 block flex items-center justify-center gap-3"
          style={{
            color: accent.primary,
          }}
        >
          <MessageCircleIcon className="w-5 h-5" />
          {" Témoignage"}
        </span>
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3, 4, 5].map((n) => (
            <StarIcon
              key={n}
              className="w-6 h-6 fill-current"
              style={{
                color: accent.primary,
              }}
            />
          ))}
        </div>
        <blockquote className="font-heading text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-10 text-white">
          "{data.testimonial.quote}"
        </blockquote>
        <div className="font-heading text-2xl font-bold text-white mb-1">
          {data.testimonial.name}
        </div>
        <div className="text-[#9ca3af] font-medium">
          {data.testimonial.role}
        </div>
      </motion.div>
    </div>
  </section>
);
