import { motion } from "motion/react";
import { Link } from "react-router";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export const HeroSection = () => {
  const stats = [
    {
      value: "85%",
      label: "Taux d'insertion",
    },
    {
      value: "20+",
      label: "Années d'expertise",
    },
    {
      value: "500+",
      label: "Stagiaires formés",
    },
    {
      value: "100%",
      label: "Pratique & Projets",
    },
  ];
  return (
    <section className="bg-[#016baf] pt-32 pb-24 overflow-hidden relative text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0284c7] rounded-full blur-[100px] opacity-50 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-32 left-10 w-64 h-64 border-t-2 border-l-2 border-[#f59e0b] rounded-tl-full border-dashed opacity-40 pointer-events-none" />
      <div className="absolute bottom-16 right-10 w-48 h-48 border-b-2 border-r-2 border-[#f59e0b] rounded-br-full border-dashed opacity-30 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-10">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              Inscriptions ouvertes pour Animateur Digital
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-heading text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight"
            >
              {"Le numérique "}
              <br className="hidden md:block" />
              <span className="text-white relative">
                à votre portée
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#059669]"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00032 6.84889C53.793 1.94436 106.336 1.45892 198.125 5.56816"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl font-medium"
            >
              Le CF2M forme gratuitement les demandeurs d'emploi bruxellois aux
              métiers de l'informatique. Petits groupes, pratique intensive et
              suivi personnalisé vers l'emploi.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#formations"
                className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#059669]/30"
              >
                Découvrir les formations
              </a>
              <Link
                to="/notre-histoire"
                className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all text-center flex items-center justify-center gap-2"
              >
                Notre histoire
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full pt-10 border-t border-white/10 mt-6"
            >
              {stats.map((t, n) => (
                <motion.div
                  key={n}
                  variants={fadeInUp}
                  className="flex flex-col"
                >
                  <span className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">
                    {t.value}
                  </span>
                  <span className="text-sm text-blue-200 font-medium uppercase tracking-wider">
                    {t.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            <div className="relative w-full max-w-md mx-auto h-[420px]">
              <div className="absolute top-0 left-0 w-52 h-64 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 rotate-[-4deg] z-20 border-4 border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1653669487404-09c3617c2b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGRpdmVyc2UlMjBzdHVkZW50JTIwY29kaW5nJTIwbGFwdG9wJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3Mzc1MTgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Stagiaire en formation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-0 w-48 h-56 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 rotate-[3deg] z-30 border-4 border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1743865318726-0c6966e0c153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwZGV2ZWxvcGVyJTIwd29ya2luZyUyMGNvbXB1dGVyJTIwb2ZmaWNlfGVufDF8fHx8MTc3Mzc1MTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Stagiaire en formation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/3 w-52 h-60 rounded-3xl overflow-hidden shadow-2xl shadow-black/30 rotate-[-2deg] z-10 border-4 border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620829813573-7c9e1877706f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGFmcmljYW4lMjBzdHVkZW50JTIwdGVjaCUyMHdvcmtzaG9wfGVufDF8fHx8MTc3Mzc1MTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Stagiaire en formation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#059669]/30 rounded-full blur-xl z-0" />
              <div className="absolute -top-4 right-10 w-16 h-16 bg-[#f59e0b]/20 rounded-full blur-lg z-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
