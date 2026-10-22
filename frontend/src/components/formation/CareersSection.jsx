import { BriefcaseIcon } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const CareersSection = ({ data, accent }) => (
  <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          className="lg:col-span-5"
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
            Débouchés
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-6 leading-tight"
          >
            {"Vos futurs "}
            <span className="text-[#059669]">métiers.</span>
          </motion.h2>
          {data.insertionRate !== "—" && (
            <motion.div
              variants={fadeInUp}
              className="bg-[#FDFBF7] border border-[#f3f4f6] rounded-2xl p-8 shadow-sm relative overflow-hidden"
            >
              <div
                className="font-heading text-5xl font-black mb-2 tracking-tighter"
                style={{
                  color: accent.primary,
                }}
              >
                {data.insertionRate}
              </div>
              <div className="text-lg font-bold text-[#111827]">
                d'insertion professionnelle
              </div>
              <div className="text-[#6b7280] font-medium mt-1">
                dans les 6 mois après la formation
              </div>
            </motion.div>
          )}
          {data.insertionRate === "—" && (
            <motion.div
              variants={fadeInUp}
              className="bg-[#FDFBF7] border border-[#f3f4f6] rounded-2xl p-8 shadow-sm"
            >
              <div className="text-lg font-bold text-[#111827] mb-2">
                Tremplin vers l'emploi
              </div>
              <div className="text-[#6b7280] font-medium">
                Ce parcours vous prépare à intégrer une formation qualifiante ou
                à accéder directement au marché du travail.
              </div>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          className="lg:col-span-7 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={staggerContainer}
        >
          {data.jobs.map((n, r) => (
            <motion.div
              key={r}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#e5e7eb] hover:shadow-lg rounded-2xl p-6 transition-all duration-300 group"
              style={{
                "--hover-border": accent.primary,
              }}
            >
              <div className="flex items-center gap-5">
                <div
                  className="w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center group-hover:text-white transition-colors shrink-0"
                  style={{
                    "--group-hover-bg": accent.primary,
                  }}
                >
                  <BriefcaseIcon className="w-5 h-5 text-[#4b5563]" />
                </div>
                <div>
                  <div className="font-heading text-lg font-bold text-[#111827] tracking-tight">
                    {n.title}
                  </div>
                  <div className="text-sm text-[#6b7280] font-medium mt-1">
                    {n.salary}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center justify-center text-xs font-bold px-4 py-2 rounded-full bg-[#fdfbf7] border border-[#e5e7eb] text-[#d97706] whitespace-nowrap self-start sm:self-auto">
                {n.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
