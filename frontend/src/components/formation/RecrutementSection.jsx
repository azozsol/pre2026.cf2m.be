import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../../lib/animations";

// Processus identique pour toutes les formations : contenu statique, non géré par le backend
const etapes = [
  {
    titre: "Séance d'information",
    description:
      "Présentation complète du programme, des locaux et réponse à vos questions.",
  },
  {
    titre: "Tests de prérequis",
    description:
      "Évaluation de la compréhension du français, calcul de base et logique informatique.",
  },
  {
    titre: "Entretien individuel",
    description:
      "Discussion sur votre motivation, votre projet professionnel et votre disponibilité.",
  },
  {
    titre: "Décision & inscription",
    description:
      "Validation administrative du dossier auprès d'Actiris et confirmation de votre place.",
  },
];

export const RecrutementSection = ({ accent }) => {
  const couleurs = ["#111827", accent.primary, "#f59e0b", "#059669"];
  return (
    <section className="py-24 lg:py-32 bg-white border-y border-[#f3f4f6]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
            Processus d'admission
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-6 leading-tight"
          >
            {"Comment intégrer "}
            <span
              style={{
                color: accent.primary,
              }}
            >
              la formation ?
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#6b7280] font-medium leading-relaxed"
          >
            4 étapes claires pour valider votre candidature avant la rentrée.
          </motion.p>
        </motion.div>
        <div className="relative">
          {/* Ligne reliant les pastilles, uniquement quand les 4 étapes sont sur une seule rangée */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-[#e5e7eb]"
          />
          <motion.ol
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-50px",
            }}
            variants={staggerContainer}
          >
            {etapes.map((etape, index) => {
              const derniere = index === etapes.length - 1;
              return (
                <motion.li
                  key={etape.titre}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-2xl border border-[#e5e7eb] shadow-sm text-center transition-transform hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5 font-heading font-black text-lg text-white shadow-[0_0_0_6px_white]"
                    style={{
                      background: couleurs[index],
                    }}
                  >
                    {derniere ? (
                      <CheckIcon className="w-5 h-5" aria-label="Étape finale" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#111827] mb-2">
                    {etape.titre}
                  </h3>
                  <p className="text-[#6b7280] font-medium leading-relaxed">
                    {etape.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
};
