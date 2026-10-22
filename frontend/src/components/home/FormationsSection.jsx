import {
  CalendarIcon,
  CircleCheckBigIcon,
  ClockIcon,
  CodeIcon,
  MessageSquareIcon,
  MousePointer2Icon,
  PaintbrushIcon,
  ServerIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const FormationsSection = ({ onNotify, onInfoSession }) => {
  const formations = [
    {
      slug: "web-developer",
      title: "Web Developer",
      desc: "Codez des applications web dynamiques, du front-end au back-end.",
      badge: "COMPLET",
      isOpen: false,
      icon: <CodeIcon className="w-8 h-8" />,
      accent: "from-[#016baf] to-[#0284c7]",
      accentLight: "bg-[#016baf]/10 text-[#016baf]",
      meta: ["Prochaine session : Sept. 2026", "12 mois"],
    },
    {
      slug: "digital-designer",
      title: "Digital Designer",
      desc: "Concevez des interfaces utilisateur et des visuels numériques percutants.",
      badge: "COMPLET",
      isOpen: false,
      icon: <PaintbrushIcon className="w-8 h-8" />,
      accent: "from-[#059669] to-[#10b981]",
      accentLight: "bg-[#059669]/10 text-[#059669]",
      meta: ["Prochaine session : Oct. 2026", "13 mois"],
    },
    {
      slug: "tech-pc-reseaux",
      title: "Tech PC & Réseaux",
      desc: "Installez, configurez et sécurisez ordinateurs et infrastructures réseaux.",
      badge: "COMPLET",
      isOpen: false,
      icon: <ServerIcon className="w-8 h-8" />,
      accent: "from-[#6366f1] to-[#818cf8]",
      accentLight: "bg-[#6366f1]/10 text-[#6366f1]",
      meta: ["Prochaine session : Mai 2026", "9 mois"],
    },
    {
      slug: "animateur-digital",
      title: "Animateur Digital",
      desc: "Accompagnez les publics dans l'utilisation des outils numériques.",
      badge: "SÉANCES OUVERTES",
      isOpen: true,
      icon: <MessageSquareIcon className="w-8 h-8" />,
      accent: "from-[#f43f5e] to-[#fb7185]",
      accentLight: "bg-[#f43f5e]/10 text-[#f43f5e]",
      meta: ["Sélection : Avril 2026", "10 mois"],
    },
    {
      slug: "cheques-tic",
      title: "Chèques TIC",
      desc: "Validez vos compétences numériques de base rapidement.",
      badge: "INSCRIPTIONS EN CONTINU",
      isOpen: true,
      icon: <CircleCheckBigIcon className="w-8 h-8" />,
      accent: "from-[#8b5cf6] to-[#a78bfa]",
      accentLight: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
      meta: ["Inscriptions en continu", "Court terme"],
    },
    {
      slug: "aventure-digitale",
      title: "Aventure Digitale",
      desc: "Découvrez les métiers de l'informatique pour choisir votre voie.",
      badge: "INSCRIPTIONS EN CONTINU",
      isOpen: true,
      icon: <MousePointer2Icon className="w-8 h-8" />,
      accent: "from-[#0ea5e9] to-[#38bdf8]",
      accentLight: "bg-[#0ea5e9]/10 text-[#0ea5e9]",
      meta: ["Inscriptions en continu", "6 semaines"],
    },
  ];
  return (
    <section
      id="formations"
      className="py-24 lg:py-32 bg-[#111827] text-white overflow-hidden relative"
    >
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#016baf] rounded-full blur-[150px] opacity-20 translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Trouvez la formation
              <br />
              <span className="text-[#059669]">qui vous correspond.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Nos programmes sont gratuits et conçus pour répondre aux réalités
              du marché de l'emploi bruxellois.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
          variants={staggerContainer}
        >
          {formations.map((r) => (
            <motion.div key={r.slug} variants={fadeInUp}>
              <Link
                to={`/formations/${r.slug}`}
                className="block bg-white rounded-3xl h-full transition-all duration-300 group relative overflow-hidden flex flex-col hover:shadow-xl hover:shadow-[#016baf]/10 hover:-translate-y-1"
              >
                <div
                  className={`bg-gradient-to-r ${r.accent} px-8 pt-7 pb-10 relative`}
                >
                  <div className="flex justify-between items-start">
                    <div
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${(r.isOpen, "bg-white/20 text-white backdrop-blur-sm")}`}
                    >
                      {r.badge}
                    </div>
                  </div>
                  <div className="absolute -bottom-7 right-6 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-[#111827] group-hover:scale-110 transition-transform duration-300">
                    {r.icon}
                  </div>
                </div>
                <div className="px-8 pt-10 pb-8 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#016baf] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-[#6b7280] font-medium mb-8 leading-relaxed">
                    {r.desc}
                  </p>
                  <div className="mt-auto pt-5 border-t border-gray-100 flex flex-col gap-4">
                    <div className="space-y-2">
                      {r.meta.map((i, a) => (
                        <div
                          key={a}
                          className="text-sm text-[#4b5563] font-medium flex items-center gap-2"
                        >
                          {a === 0 ? (
                            <CalendarIcon className="w-4 h-4 text-[#9ca3af]" />
                          ) : (
                            <ClockIcon className="w-4 h-4 text-[#9ca3af]" />
                          )}
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="w-full bg-[#111827] group-hover:bg-[#016baf] text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition-colors">
                      En savoir plus
                    </span>
                    {r.isOpen ? (
                      <button
                        className="w-full text-center text-[#059669] text-sm font-semibold py-1 hover:underline"
                        onClick={(i) => {
                          i.preventDefault();
                          i.stopPropagation();
                          onInfoSession();
                        }}
                      >
                        Prochaine étape : séance d'info
                      </button>
                    ) : (
                      <button
                        className="w-full text-center text-[#6b7280] text-sm font-semibold py-1 hover:underline"
                        onClick={(i) => {
                          i.preventDefault();
                          i.stopPropagation();
                          onNotify();
                        }}
                      >
                        Être prévenu·e
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
