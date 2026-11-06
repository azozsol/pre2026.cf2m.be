import { LightbulbIcon } from "lucide-react";
import { motion } from "motion/react";
import { Icone } from "../../lib/icones";
import { fadeInUp, staggerContainer } from "../../lib/animations";

// Couleur des éléments mis en avant (mission IA…), commune à toutes les formations
const AMBRE = "#f59e0b";

export const MetierSection = ({ formation, accent }) => {
  const { metierDescription, missions, qualitesDescription } = formation;
  if (!metierDescription && missions.length === 0 && !qualitesDescription) {
    return null;
  }
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
            Présentation du rôle
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-6 leading-tight"
          >
            {"Qu'est-ce qu'un "}
            <span
              style={{
                color: accent.primary,
              }}
            >
              {formation.titre}
            </span>
            {" ?"}
          </motion.h2>
          {metierDescription && (
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#6b7280] font-medium leading-relaxed"
            >
              {metierDescription}
            </motion.p>
          )}
        </motion.div>
        {missions.length > 0 && (
          <motion.ul
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-50px",
            }}
            variants={staggerContainer}
          >
            {missions.map((mission) => {
              const couleur = mission.misEnAvant ? AMBRE : accent.primary;
              return (
                <motion.li
                  key={mission.titre}
                  variants={fadeInUp}
                  className={`bg-[#FDFBF7] rounded-[2rem] p-8 border border-[#e5e7eb] transition-all duration-300 hover:shadow-lg ${mission.misEnAvant ? "border-l-4" : ""}`}
                  style={
                    mission.misEnAvant
                      ? {
                          borderLeftColor: AMBRE,
                        }
                      : undefined
                  }
                >
                  <div
                    className="w-14 h-14 rounded-2xl bg-white border border-[#e5e7eb] flex items-center justify-center mb-6"
                    style={{
                      color: couleur,
                    }}
                  >
                    <Icone nom={mission.icone} className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#111827] mb-3 tracking-tight">
                    {mission.titre}
                  </h3>
                  {mission.description && (
                    <p className="text-[#6b7280] font-medium leading-relaxed">
                      {mission.description}
                    </p>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
        {qualitesDescription && (
          <motion.div
            className="mt-12 bg-[#111827] text-white rounded-[2rem] p-8 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
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
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                background: accent.primary,
              }}
            />
            <div className="relative space-y-3 max-w-2xl">
              <h3 className="font-heading text-2xl font-bold tracking-tight flex items-center gap-3">
                <LightbulbIcon
                  className="w-6 h-6 shrink-0"
                  style={{
                    color: AMBRE,
                  }}
                  aria-hidden="true"
                />
                Qualités clés d'un futur {formation.titre}
              </h3>
              <p className="text-gray-300 font-medium leading-relaxed">
                {qualitesDescription}
              </p>
            </div>
            {formation.affirmationsProfil.length > 0 && (
              <a
                href="#profil"
                className="relative shrink-0 bg-white text-[#111827] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Faire l'auto-évaluation →
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
