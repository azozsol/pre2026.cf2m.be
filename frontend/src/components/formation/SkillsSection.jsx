import { CircleCheckBigIcon, CodeIcon, StarIcon } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp } from "../../lib/animations";

export const SkillsSection = ({ data, accent }) => (
  <section className="py-24 lg:py-32 bg-[#111827] text-white relative overflow-hidden">
    <div
      className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/3"
      style={{
        background: accent.primary,
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none -translate-x-1/3 translate-y-1/3"
      style={{
        background: accent.primary,
      }}
    />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        variants={fadeInUp}
      >
        <span
          className="text-sm font-bold uppercase tracking-widest mb-4 block"
          style={{
            color: accent.primary,
          }}
        >
          Compétences
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          {"Ce que vous "}
          <span
            style={{
              color: accent.primary,
            }}
          >
            maîtriserez.
          </span>
        </h2>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          className="bg-[#1f2937] rounded-[2rem] p-8 lg:p-10 border border-[#374151]"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h3 className="font-heading text-2xl font-bold mb-8 tracking-tight flex items-center gap-4 text-white">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: `${accent.primary}33`,
                color: accent.primary,
              }}
            >
              <CodeIcon className="w-6 h-6" />
            </div>
            Compétences techniques
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.techSkills.map((n, r) => (
              <div
                key={r}
                className="flex items-center gap-4 bg-[#111827] rounded-xl px-5 py-4 border border-[#374151]"
              >
                <div
                  style={{
                    color: accent.primary,
                  }}
                >
                  {n.icon}
                </div>
                <span className="font-semibold text-white">{n.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="bg-[#1f2937] rounded-[2rem] p-8 lg:p-10 border border-[#374151]"
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <h3 className="font-heading text-2xl font-bold mb-8 tracking-tight flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-xl bg-[#059669]/20 text-[#059669] flex items-center justify-center">
              <StarIcon className="w-6 h-6" />
            </div>
            Compétences professionnelles
          </h3>
          <div className="space-y-4">
            {data.softSkills.map((n, r) => (
              <div
                key={r}
                className="flex items-center gap-4 bg-[#111827] rounded-xl px-5 py-4 border border-[#374151]"
              >
                <CircleCheckBigIcon className="w-5 h-5 text-[#059669] shrink-0" />
                <span className="font-medium text-[#d1d5db]">{n}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
