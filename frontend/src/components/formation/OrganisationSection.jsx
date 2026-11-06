import { CalendarDaysIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const OrganisationSection = ({ formation, accent }) => {
  const infos = [
    {
      icon: <CalendarDaysIcon className="w-6 h-6" aria-hidden="true" />,
      titre: "Prochaine rentrée",
      texte:
        formation.prochaineSession &&
        `${formation.prochaineSession} (séances d'information régulières organisées au préalable).`,
    },
    {
      icon: <ClockIcon className="w-6 h-6" aria-hidden="true" />,
      titre: "Horaires de cours",
      texte: formation.horaire,
    },
    {
      icon: <MapPinIcon className="w-6 h-6" aria-hidden="true" />,
      titre: "Lieu de formation",
      texte: formation.lieu,
    },
  ].filter((info) => info.texte);

  return (
    <section className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {infos.length > 0 && (
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
                Organisation pratique
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-10 leading-tight"
              >
                {"Informations "}
                <span
                  style={{
                    color: accent.primary,
                  }}
                >
                  & modalités
                </span>
              </motion.h2>
              <div className="space-y-4">
                {infos.map((info) => (
                  <motion.div
                    key={info.titre}
                    variants={fadeInUp}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-[#e5e7eb]"
                  >
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        color: accent.primary,
                        background: `${accent.primary}1a`,
                      }}
                    >
                      {info.icon}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#111827] mb-1">
                        {info.titre}
                      </h3>
                      <p className="text-[#6b7280] font-medium leading-relaxed">
                        {info.texte}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          <motion.div
            className={`bg-[#111827] text-white rounded-[2rem] p-8 lg:p-12 shadow-xl flex flex-col justify-between relative overflow-hidden ${infos.length === 0 ? "lg:col-span-2" : ""}`}
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
            transition={{
              duration: 0.8,
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-6 -bottom-10 font-heading text-[9rem] font-black opacity-5 select-none"
            >
              CF2M
            </div>
            <div className="space-y-4 relative">
              <span
                className="text-sm font-bold uppercase tracking-widest block"
                style={{
                  color: accent.primary,
                }}
              >
                Centre de formation
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Centre de Formation 2000 (CF2M)
              </h2>
              <p className="text-gray-300 font-medium leading-relaxed">
                Le CF2M est un centre d'insertion socioprofessionnelle (OISP)
                agréé, spécialisé dans la formation aux métiers des technologies
                de l'information, du multimédia et du numérique à Bruxelles.
              </p>
            </div>
            <dl className="relative mt-10 pt-8 border-t border-white/10 space-y-2 text-gray-300">
              <div>
                <dt className="inline font-bold text-white">Téléphone : </dt>
                <dd className="inline">
                  <a href="tel:+3225390360" className="hover:underline">
                    02 539 03 60
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-bold text-white">E-mail : </dt>
                <dd className="inline">
                  <a href="mailto:info@cf2m.be" className="hover:underline">
                    info@cf2m.be
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-bold text-white">Transports : </dt>
                <dd className="inline">Tram 81, 97, Bus 48, 52</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
