import { CircleCheckBigIcon } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const ConditionsSection = ({ data, accent }) => (
  <section className="py-24 lg:py-32 bg-[#FDFBF7] border-y border-[#f3f4f6]">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-bold uppercase tracking-widest mb-4 block"
            style={{
              color: accent.primary,
            }}
          >
            Admission
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-6 leading-tight"
          >
            {"Qui peut "}
            <span
              style={{
                color: accent.primary,
              }}
            >
              postuler ?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#6b7280] font-medium leading-relaxed mb-10"
          >
            Pas de diplôme requis. La seule condition : être demandeur·euse
            d'emploi à Bruxelles et avoir la motivation de vous lancer.
          </motion.p>
          <motion.div variants={fadeInUp} className="space-y-4">
            {data.conditions.map((n, r) => (
              <div
                key={r}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-[#e5e7eb]"
              >
                <CircleCheckBigIcon
                  className="w-6 h-6 shrink-0"
                  style={{
                    color: accent.primary,
                  }}
                />
                <span className="text-[#111827] font-medium leading-relaxed">
                  {n}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-white rounded-[2rem] p-8 lg:p-12 border border-[#e5e7eb] shadow-xl relative overflow-hidden"
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
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-10"
            style={{
              background: accent.primary,
            }}
          />
          <h3 className="font-heading text-2xl font-bold text-[#111827] mb-10 tracking-tight">
            Le processus de sélection
          </h3>
          <div className="space-y-8 relative">
            <div className="absolute top-4 left-[1.15rem] bottom-4 w-0.5 bg-[#f3f4f6] -z-10" />
            {[
              {
                step: "1",
                title: "Candidature",
                desc: "Inscription sur notre site.",
              },
              {
                step: "2",
                title: "Séance d'info",
                desc: "Présentation et visite.",
              },
              {
                step: "3",
                title: "Tests",
                desc: "Logique et motivation.",
              },
              {
                step: "4",
                title: "Entretien",
                desc: "Échange individuel.",
              },
            ].map((n, r) => {
              const i = [accent.primary, "#111827", "#f59e0b", "#059669"];
              return (
                <div key={r} className="flex gap-6 items-start group">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-black text-white shrink-0 shadow-[0_0_0_8px_white] transition-transform group-hover:scale-110"
                    style={{
                      background: i[r],
                    }}
                  >
                    {n.step}
                  </div>
                  <div className="pt-1">
                    <div className="font-heading text-lg font-bold text-[#111827] mb-1">
                      {n.title}
                    </div>
                    <div className="text-[#6b7280] font-medium">{n.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
