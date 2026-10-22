import { BriefcaseIcon, ClockIcon, EuroIcon, UsersIcon } from "lucide-react";
import { motion } from "motion/react";

export const KeyFacts = ({ data, accent }) => (
  <section className="py-16 bg-white border-y border-[#f3f4f6]">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <EuroIcon className="w-8 h-8" />,
            title: "Totalement gratuit",
            text: "Formation prise en charge à 100% + prime de 2€/h.",
          },
          {
            icon: <ClockIcon className="w-8 h-8" />,
            title: `${data.duration} intensifs`,
            text: `Cours pratiques${data.stageHours !== "0h" ? ` + ${data.stageHours} de stage en entreprise` : ""}.`,
          },
          {
            icon: <UsersIcon className="w-8 h-8" />,
            title: "Petits groupes",
            text: `Max ${data.places} pour un suivi personnalisé.`,
          },
          {
            icon: <BriefcaseIcon className="w-8 h-8" />,
            title:
              data.stageHours !== "0h"
                ? `Stage de ${data.stageHours}`
                : "Parcours flexible",
            text:
              data.stageHours !== "0h"
                ? "Expérience pro réelle en entreprise partenaire à Bruxelles."
                : "Modules adaptés à votre rythme et vos besoins.",
          },
        ].map((n, r) => (
          <motion.div
            key={r}
            className="bg-[#FDFBF7] rounded-[2rem] p-8 border border-[#e5e7eb] hover:border-opacity-50 transition-all duration-300 group"
            style={{
              "--hover-color": accent.primary,
            }}
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
            transition={{
              delay: r * 0.1,
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl bg-white border border-[#e5e7eb] flex items-center justify-center mb-6 group-hover:text-white transition-all duration-300"
              style={{
                color: accent.primary,
              }}
            >
              {n.icon}
            </div>
            <h3 className="font-heading text-xl font-bold text-[#111827] mb-3 tracking-tight">
              {n.title}
            </h3>
            <p className="text-[#6b7280] font-medium leading-relaxed">
              {n.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
