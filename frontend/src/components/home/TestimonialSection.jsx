import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export const TestimonialSection = () => (
  <section className="py-24 lg:py-32 bg-[#FDFBF7] overflow-hidden border-t border-[#f3f4f6]">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          className="lg:col-span-5 relative"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="aspect-[4/5] overflow-hidden relative rounded-[2rem]">
            <div className="absolute inset-0 bg-[#059669] translate-x-4 -translate-y-4 rounded-[2rem]" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1609846685336-9cb06880bb48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJlbGdpYW4lMjBtYW4lMjBwb3J0cmFpdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzczNzM2OTYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Lucas, Stagiaire"
              className="w-full h-full object-cover relative z-10 rounded-[2rem]"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-40 h-40 border-2 border-[#f59e0b]/40 rounded-full border-dashed z-0 animate-spin-slow" />
        </motion.div>
        <motion.div
          className="lg:col-span-7 lg:pl-10"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="inline-block px-4 py-2 mb-8 bg-[#059669]/10 text-[#059669] text-xs font-bold uppercase tracking-widest rounded-full">
            Témoignage
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-snug mb-10 relative">
            <span className="absolute -top-10 -left-6 text-[#f3f4f6] text-9xl font-serif leading-none -z-10 select-none">
              "
            </span>
            J'avais arrêté l'école à 16 ans. Je pensais que le numérique, ce
            n'était pas pour moi. Grâce au CF2M, j'ai trouvé ma voie et
            aujourd'hui je travaille avec passion.
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-heading text-xl font-bold text-[#111827]">
                Lucas, 25 ans
              </div>
              <div className="text-[#6b7280] font-medium">
                Web Developer · Diplômé 2024
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
