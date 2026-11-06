import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { Icone } from "../../lib/icones";
import { fadeInUp, staggerContainer } from "../../lib/animations";

// Couleur des piliers mis en avant (module IA…), commune à toutes les formations
const AMBRE = "#f59e0b";

export const ProgramSection = ({ formation, accent }) => {
  const { piliers } = formation;
  const [actif, setActif] = useState(0);
  const onglets = useRef([]);
  if (piliers.length === 0) {
    return null;
  }
  const pilier = piliers[Math.min(actif, piliers.length - 1)];
  const couleurPilier = pilier.misEnAvant ? AMBRE : accent.primary;

  // Navigation clavier des onglets (motif ARIA « tabs ») : flèches, Début, Fin
  const surTouche = (event) => {
    const cibles = {
      ArrowRight: (actif + 1) % piliers.length,
      ArrowLeft: (actif - 1 + piliers.length) % piliers.length,
      Home: 0,
      End: piliers.length - 1,
    };
    if (!(event.key in cibles)) {
      return;
    }
    event.preventDefault();
    setActif(cibles[event.key]);
    onglets.current[cibles[event.key]]?.focus();
  };

  return (
    <section id="programme" className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
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
            Cursus complet
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-6 leading-tight"
          >
            {"Le programme en "}
            <span
              style={{
                color: accent.primary,
              }}
            >
              {piliers.length} pilier{piliers.length > 1 ? "s" : ""}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#6b7280] font-medium leading-relaxed"
          >
            Une formation pratique articulée autour de projets réels et
            d'outils professionnels.
          </motion.p>
        </motion.div>
        <div
          role="tablist"
          aria-label="Piliers du programme"
          className="flex flex-wrap justify-center gap-3 mb-8"
          onKeyDown={surTouche}
        >
          {piliers.map((p, index) => {
            const selectionne = index === actif;
            const couleur = p.misEnAvant ? AMBRE : accent.primary;
            return (
              <button
                key={p.titre}
                ref={(element) => {
                  onglets.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`onglet-pilier-${index}`}
                aria-selected={selectionne}
                aria-controls="panneau-pilier"
                tabIndex={selectionne ? 0 : -1}
                onClick={() => setActif(index)}
                className="px-5 py-3 rounded-full text-sm font-bold border-2 transition-all inline-flex items-center gap-2"
                style={
                  selectionne
                    ? {
                        background: couleur,
                        borderColor: couleur,
                        color: "white",
                      }
                    : {
                        background: "white",
                        borderColor: p.misEnAvant ? `${AMBRE}66` : "#e5e7eb",
                        color: p.misEnAvant ? "#b45309" : "#4b5563",
                      }
                }
              >
                {p.misEnAvant && <Icone nom={p.icone} className="w-4 h-4" />}
                {index + 1}. {p.libelleOnglet}
              </button>
            );
          })}
        </div>
        <div
          role="tabpanel"
          id="panneau-pilier"
          aria-labelledby={`onglet-pilier-${actif}`}
          tabIndex={0}
          className="bg-white rounded-[2rem] border border-[#e5e7eb] shadow-sm p-8 lg:p-12 min-h-[320px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={actif}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.25,
              }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-[#111827] tracking-tight flex items-center gap-3">
                  {pilier.icone && (
                    <span
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        color: couleurPilier,
                        background: `${couleurPilier}1a`,
                      }}
                    >
                      <Icone nom={pilier.icone} className="w-6 h-6" />
                    </span>
                  )}
                  Pilier {actif + 1} : {pilier.titre}
                </h3>
                {pilier.badge && (
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
                    style={{
                      background: couleurPilier,
                    }}
                  >
                    {pilier.badge}
                  </span>
                )}
              </div>
              {pilier.description && (
                <p className="text-lg text-[#6b7280] font-medium leading-relaxed max-w-3xl">
                  {pilier.description}
                </p>
              )}
              {pilier.elements.length > 0 && (
                <ul className="grid md:grid-cols-2 gap-4 pt-2">
                  {pilier.elements.map((element) => (
                    <li
                      key={element.titre}
                      className="bg-[#FDFBF7] rounded-2xl border p-6"
                      style={{
                        borderColor: pilier.misEnAvant
                          ? `${AMBRE}4d`
                          : "#e5e7eb",
                      }}
                    >
                      {element.etiquette && (
                        <span
                          className="text-xs font-bold uppercase tracking-wider block mb-1"
                          style={{
                            color: couleurPilier,
                          }}
                        >
                          {element.etiquette}
                        </span>
                      )}
                      <h4 className="font-heading text-lg font-bold text-[#111827] mb-2 flex items-center gap-2">
                        {element.icone && (
                          <Icone
                            nom={element.icone}
                            className="w-5 h-5 shrink-0"
                            style={{
                              color: couleurPilier,
                            }}
                          />
                        )}
                        {element.titre}
                      </h4>
                      {element.description && (
                        <p className="text-[#6b7280] font-medium leading-relaxed">
                          {element.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
