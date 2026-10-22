import {
  Building2Icon,
  ExternalLinkIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  HistoryIcon,
  MonitorSmartphoneIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { fadeInUp, staggerContainerSlow } from "../lib/animations";

export function HistoryPage() {
  const timeline = [
    {
      year: "1980s",
      title: "Les fondations",
      description:
        "Naissance du projet avec une volonté forte de favoriser l'émancipation sociale et professionnelle à travers l'éducation, en lien avec le Mouvement Ouvrier Chrétien (MOC).",
    },
    {
      year: "2000s",
      title: "Le virage numérique",
      description:
        "Face à l'évolution du marché du travail, le CF2M s'oriente vers les métiers de l'informatique pour répondre à la fracture numérique grandissante.",
    },
    {
      year: "2015",
      title: "Diversification des pôles",
      description:
        "Ouverture des filières liées au design numérique et au développement web, consolidant notre place d'acteur incontournable de la formation à Bruxelles.",
    },
    {
      year: "Aujourd'hui",
      title: "40 ans d'impact",
      description:
        "Plus qu'un centre de formation, le CF2M est un véritable tremplin pour des centaines de Bruxellois·es, avec un taux d'insertion professionnel durable.",
    },
  ];
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-28">
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#111827]">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-[#016baf]/20 to-transparent pointer-events-none" />
        <div className="absolute top-10 right-10 w-64 h-64 border-t-2 border-r-2 border-[#f59e0b] rounded-tr-full border-dashed opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainerSlow}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/20 text-[#f59e0b] text-sm font-bold uppercase tracking-widest mb-6 border border-[#f59e0b]/30"
              >
                <HistoryIcon className="w-4 h-4" />
                {" Notre histoire"}
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              >
                {"40 ans d'engagement pour "}
                <span className="text-[#f59e0b]">l'inclusion numérique.</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium mb-8"
              >
                Depuis quatre décennies, le CF2M accompagne les demandeurs
                d'emploi bruxellois. Notre mission : faire du numérique un
                levier d'émancipation sociale et professionnelle.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwaW5jbHVzaXZlfGVufDF8fHx8MTc3Mzc1MTgyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Équipe CF2M"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
              <div className="absolute top-10 -right-10 w-40 h-40 border-4 border-[#016baf] rounded-full border-dashed opacity-40 animate-spin-slow" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white border-y border-[#f3f4f6]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainerSlow}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <HeartHandshakeIcon className="w-8 h-8" />,
                title: "Économie Sociale",
                desc: "Ancrés dans les valeurs de l'économie sociale, nous plaçons l'humain avant le profit, garantissant une formation gratuite et accessible à tous.",
              },
              {
                icon: <Building2Icon className="w-8 h-8" />,
                title: "Réseau MOC",
                desc: "En tant que structure rattachée au Mouvement Ouvrier Chrétien, nous défendons activement l'égalité des chances sur le marché de l'emploi.",
              },
              {
                icon: <GraduationCapIcon className="w-8 h-8" />,
                title: "Pédagogie Active",
                desc: "Nous privilégions une approche basée sur la pratique, la réalisation de projets concrets et l'accompagnement personnalisé de chaque stagiaire.",
              },
            ].map((t, n) => (
              <motion.div
                key={n}
                variants={fadeInUp}
                className="bg-[#FDFBF7] rounded-[2rem] p-8 border border-[#e5e7eb] shadow-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#016baf]/10 text-[#016baf] flex items-center justify-center mb-6">
                  {t.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#111827] mb-3">
                  {t.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#059669]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mb-6">
              Une évolution constante au service de l'emploi
            </h2>
            <p className="text-[#6b7280] text-lg">
              De nos premières formations à la maîtrise des outils numériques de
              pointe d'aujourd'hui, découvrez les grandes étapes qui ont forgé
              l'identité du CF2M.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#016baf]/20 via-[#016baf] to-[#016baf]/20 -translate-x-1/2" />
            <div className="space-y-12 relative">
              {timeline.map((t, n) => (
                <motion.div
                  key={n}
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
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: n * 0.1,
                  }}
                  className={`flex flex-col md:flex-row items-start gap-8 ${n % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 flex flex-col items-start md:px-8 mt-2 pl-12 md:pl-0">
                    <span className="text-[#016baf] font-black text-4xl opacity-40 mb-1">
                      {t.year}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#111827] mb-3">
                      {t.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                  <div className="absolute left-[27px] md:left-1/2 w-4 h-4 bg-white border-4 border-[#016baf] rounded-full -translate-x-1/2 mt-4 md:mt-6 z-10 shadow-md" />
                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="cf2d"
        className="py-24 bg-[#111827] text-white overflow-hidden relative"
      >
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#059669] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="absolute top-20 left-10 w-48 h-48 border-b-2 border-r-2 border-[#f59e0b] rounded-br-full border-dashed opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 text-[#059669] font-bold uppercase tracking-widest text-sm mb-4">
                  <MonitorSmartphoneIcon className="w-5 h-5" />
                  Notre partenaire
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Le CF2D : Le reconditionnement informatique solidaire
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Né de la même volonté sociale, le CF2D (Centre de Formation au
                  Développement Durable) est une entreprise d'économie sociale
                  spécialisée dans la récupération, le reconditionnement et le
                  recyclage de matériel informatique. Une démarche écologique
                  qui donne une seconde vie aux équipements tout en formant de
                  nouveaux profils.
                </p>
                <a
                  href="https://www.cf2d.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-[#059669]/20 group"
                >
                  Découvrir le CF2D
                  <ExternalLinkIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512237017014-1b4a7fa57654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlY3ljbGluZyUyMGRpc21hbnRsaW5nJTIwZWxlY3Ryb25pYyUyMHdhc3RlfGVufDF8fHx8MTc3Mzc4MTI0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Reconditionnement informatique au CF2D"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
