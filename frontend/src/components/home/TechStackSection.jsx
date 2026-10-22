import React from "react";
import {
  CodeIcon,
  FigmaIcon,
  GlobeIcon,
  MonitorIcon,
  PaintbrushIcon,
  PanelsTopLeftIcon,
  PenToolIcon,
  ServerIcon,
  ShieldIcon,
  TerminalIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const TechStackSection = () => {
  const technologies = [
    {
      name: "React",
      icon: <CodeIcon />,
      color: "bg-white hover:bg-gray-50 text-[#61DAFB] border-gray-100",
    },
    {
      name: "Node.js",
      icon: <ServerIcon />,
      color: "bg-white hover:bg-gray-50 text-[#339933] border-gray-100",
    },
    {
      name: "Python",
      icon: <TerminalIcon />,
      color: "bg-white hover:bg-gray-50 text-[#3776AB] border-gray-100",
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
      color: "bg-white hover:bg-gray-50 text-[#F24E1E] border-gray-100",
    },
    {
      name: "HTML5",
      icon: <GlobeIcon />,
      color: "bg-white hover:bg-gray-50 text-[#E34F26] border-gray-100",
    },
    {
      name: "CSS3",
      icon: <PanelsTopLeftIcon />,
      color: "bg-white hover:bg-gray-50 text-[#1572B6] border-gray-100",
    },
    {
      name: "Tailwind",
      icon: <PaintbrushIcon />,
      color: "bg-white hover:bg-gray-50 text-[#06B6D4] border-gray-100",
    },
    {
      name: "Adobe CC",
      icon: <PenToolIcon />,
      color: "bg-white hover:bg-gray-50 text-[#FF0000] border-gray-100",
    },
    {
      name: "Windows",
      icon: <MonitorIcon />,
      color: "bg-white hover:bg-gray-50 text-[#0078D6] border-gray-100",
    },
    {
      name: "Linux",
      icon: <TerminalIcon />,
      color: "bg-white hover:bg-gray-50 text-[#FCC624] border-gray-100",
    },
    {
      name: "Réseaux",
      icon: <GlobeIcon />,
      color: "bg-white hover:bg-gray-50 text-[#4ade80] border-gray-100",
    },
    {
      name: "Sécurité",
      icon: <ShieldIcon />,
      color: "bg-white hover:bg-gray-50 text-[#f43f5e] border-gray-100",
    },
  ];
  return (
    <section className="py-24 bg-[#FDFBF7] text-[#111827] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={fadeInUp}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {"Maîtrisez les outils "}
            <span className="text-[#016baf]">d'aujourd'hui.</span>
          </h2>
          <p className="text-lg text-[#6b7280] font-medium">
            Selon votre parcours de formation, vous serez formé·e aux
            technologies les plus demandées par les entreprises bruxelloises et
            européennes.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={staggerContainer}
        >
          {technologies.map((t, n) => (
            <motion.div
              key={n}
              variants={fadeInUp}
              className={`flex items-center gap-4 p-4 rounded-2xl border shadow-sm transition-all duration-300 cursor-default ${t.color} group`}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-current group-hover:scale-110 transition-transform shadow-inner">
                {React.cloneElement(t.icon, {
                  className: "w-5 h-5",
                })}
              </div>
              <span className="font-semibold text-[#111827] group-hover:text-current transition-colors">
                {t.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
