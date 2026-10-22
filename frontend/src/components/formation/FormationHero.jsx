import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react";
import { motion } from "motion/react";
import { getCtaLabel, heroTabs } from "../../data/formations";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { StackedTabs } from "./StackedTabs";

export const FormationHero = ({
  data,
  accent,
  onNotify,
  onInfoSession,
  slug,
}) => (
  <section className="bg-[#FDFBF7] pt-32 pb-24 overflow-hidden relative">
    <div
      className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-[0.08]"
      style={{
        background: accent.primary,
      }}
    />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="max-w-2xl space-y-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-3"
          >
            <span
              className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider ${data.isOpen ? "bg-[#059669]/10 text-[#059669]" : "bg-gray-100 text-gray-500"}`}
            >
              <span
                className={`w-2 h-2 rounded-full animate-pulse ${data.isOpen ? "bg-[#059669]" : "bg-gray-400"}`}
              />
              {data.isOpen
                ? "Recrutement en cours"
                : "Complet — Prochaine session bientôt"}
            </span>
            <span className="bg-[#f3f4f6] text-[#4b5563] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Formation qualifiante
            </span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-[#111827] leading-[1.05] tracking-tight"
          >
            {data.title} <br className="hidden md:block" />
            <span
              className="relative"
              style={{
                color: accent.primary,
              }}
            >
              {data.accentWord}
              <span
                className="absolute bottom-1 left-0 w-full h-[0.2em] -z-10 opacity-30"
                style={{
                  background: accent.primary,
                }}
              />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-[#4b5563] leading-relaxed font-medium"
          >
            {data.subtitle}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {[
              {
                icon: <ClockIcon className="w-5 h-5" />,
                label: "Durée",
                value: data.duration,
              },
              {
                icon: <CalendarIcon className="w-5 h-5" />,
                label: "Sélection",
                value: data.selectionDate,
              },
              {
                icon: <UsersIcon className="w-5 h-5" />,
                label: "Places",
                value: data.places,
              },
              {
                icon: <MapPinIcon className="w-5 h-5" />,
                label: "Lieu",
                value: data.location,
              },
            ].map((a, o) => (
              <div
                key={o}
                className="flex items-center gap-3 bg-white border border-[#e5e7eb] rounded-2xl px-5 py-3 shadow-sm"
              >
                <div
                  style={{
                    color: accent.primary,
                  }}
                >
                  {a.icon}
                </div>
                <div>
                  <div className="text-xs text-[#9ca3af] font-bold uppercase tracking-wide">
                    {a.label}
                  </div>
                  <div className="text-sm font-bold text-[#111827]">
                    {a.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 pt-4"
          >
            {data.isOpen ? (
              <button
                onClick={onInfoSession}
                className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-3 shadow-xl hover:opacity-90"
                style={{
                  background: accent.primary,
                }}
              >
                {getCtaLabel(data.isOpen)}
              </button>
            ) : (
              <button
                onClick={onNotify}
                className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-3 shadow-xl hover:opacity-90"
                style={{
                  background: accent.primary,
                }}
              >
                {getCtaLabel(data.isOpen)}
              </button>
            )}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative lg:h-[650px] flex items-center justify-center"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-full max-h-[500px] rounded-[3rem] rotate-3 opacity-20"
            style={{
              background: accent.primary,
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-full max-h-[500px] rounded-[3rem] -rotate-3 opacity-40 border-2"
            style={{
              borderColor: accent.primary,
            }}
          />
          {slug === "aventure-digitale" ? (
            <div className="relative z-10 w-full max-w-[500px] h-full max-h-[600px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden flex items-end">
              <StackedTabs tabs={heroTabs} accentColor={accent.primary} />
            </div>
          ) : (
            <img
              src={data.imageUrl}
              alt={`${data.title} ${data.accentWord}`}
              className="relative z-10 w-full max-w-[500px] h-full max-h-[600px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-white"
            />
          )}
        </motion.div>
      </div>
    </div>
  </section>
);
