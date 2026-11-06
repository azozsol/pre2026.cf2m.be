import { motion } from "motion/react";
import { estEnRecrutement, getCtaLabel } from "../../lib/formation";

export const FormationCta = ({ formation, accent, onNotify, onInfoSession }) => {
  const estOuverte = estEnRecrutement(formation);
  return (
    <section
      className="py-24 lg:py-32 text-white relative overflow-hidden"
      style={{
        background: accent.primary,
      }}
    >
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            {formation.prochaineSession && (
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-8 backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Prochaine session : {formation.prochaineSession}
              </div>
            )}
            <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Prêt·e à vous
              <br />
              lancer ?
            </h2>
            <button
              type="button"
              onClick={estOuverte ? onInfoSession : onNotify}
              className="bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#111827] hover:text-white transition-colors inline-flex items-center justify-center gap-3 shadow-xl"
              style={{
                color: accent.primary,
              }}
            >
              {getCtaLabel(estOuverte)}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
