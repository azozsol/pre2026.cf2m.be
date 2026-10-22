import { BriefcaseIcon, GraduationCapIcon, UsersIcon } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const WhyUsSection = () => {
  const benefits = [
    {
      icon: "€",
      title: "100% gratuit",
      text: "Formation prise en charge + prime de 2€/h.",
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Accompagnement",
      text: "Job coach dédié et suivi individualisé.",
    },
    {
      icon: <GraduationCapIcon className="w-8 h-8" />,
      title: "Stage en entreprise",
      text: "Pratique professionnelle incluse pour valider.",
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: "Insertion garantie",
      text: "Suivi emploi post-formation jusqu'au contrat.",
    },
  ];
  return (
    <section className="py-24 bg-white border-t border-[#f3f4f6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-[#059669] rounded-tl-full border-dashed opacity-40 pointer-events-none" />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-100px",
              }}
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-tight mb-6"
            >
              Pourquoi
              <br />
              <span className="text-[#059669]">choisir le CF2M ?</span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-100px",
              }}
              variants={fadeInUp}
              className="text-[#6b7280] text-lg leading-relaxed font-medium"
            >
              Un cadre pensé pour votre réussite, du premier jour de cours
              jusqu'à la signature de votre contrat de travail.
            </motion.p>
          </div>
          <motion.div
            className="lg:w-2/3 grid sm:grid-cols-2 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-100px",
            }}
            variants={staggerContainer}
          >
            {benefits.map((t, n) => (
              <motion.div
                key={n}
                variants={fadeInUp}
                className="group flex gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FDFBF7] shadow-sm border border-[#e5e7eb] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white group-hover:border-[#059669] transition-all duration-300 text-[#059669]">
                  {typeof t.icon == "string" ? (
                    <span className="font-heading font-bold text-3xl">
                      {t.icon}
                    </span>
                  ) : (
                    t.icon
                  )}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-2 tracking-tight text-[#111827]">
                    {t.title}
                  </h3>
                  <p className="text-[#6b7280] font-medium leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
