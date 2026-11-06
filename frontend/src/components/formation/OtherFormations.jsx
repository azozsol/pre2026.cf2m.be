import { motion } from "motion/react";
import { Link } from "react-router";
import { listerFormations } from "../../api/formations";
import { useApi } from "../../hooks/useApi";
import { ACCENT_PAR_DEFAUT } from "../../lib/formation";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const OtherFormations = ({ currentSlug }) => {
  const { donnees } = useApi((signal) => listerFormations({ signal }), []);
  // Section secondaire : en cas d'erreur ou pendant le chargement, elle n'apparaît simplement pas
  const autres = (donnees ?? [])
    .filter((formation) => formation.slug !== currentSlug)
    .slice(0, 3);
  if (autres.length === 0) {
    return null;
  }
  return (
    <section className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#016baf] mb-3 block">
              Aussi chez CF2M
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
              Autres formations
            </h2>
          </div>
          <Link
            to="/#formations"
            className="text-[#016baf] font-bold hover:text-[#059669] transition-colors flex items-center gap-2 group"
          >
            Voir tout le catalogue
          </Link>
        </div>
        <motion.ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={staggerContainer}
        >
          {autres.map((formation) => {
            const couleur = formation.couleurPrincipale ?? ACCENT_PAR_DEFAUT;
            return (
              <motion.li key={formation.slug} variants={fadeInUp}>
                <Link
                  to={`/formations/${formation.slug}`}
                  className="bg-white border border-[#e5e7eb] rounded-[2rem] p-8 hover:shadow-lg transition-all duration-300 group flex items-start gap-6 h-full"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-heading text-2xl font-bold"
                    style={{
                      color: couleur,
                      background: `${couleur}1a`,
                    }}
                  >
                    {formation.logoUrl ? (
                      <img
                        src={formation.logoUrl}
                        alt=""
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      formation.titre.charAt(0)
                    )}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#111827] mb-2 tracking-tight group-hover:text-[#016baf] transition-colors">
                      {formation.titre}
                    </h3>
                    {formation.descriptionCourte && (
                      <p className="text-[#6b7280] font-medium leading-relaxed line-clamp-3">
                        {formation.descriptionCourte}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
