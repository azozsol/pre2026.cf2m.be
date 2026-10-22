import {
  ImageIcon,
  LayersIcon,
  PenToolIcon,
  PhoneIcon,
  PrinterIcon,
  ZapIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { fadeInUp, staggerContainerSlow } from "../lib/animations";

export function PixelAndCoPage() {
  const services = [
    {
      icon: <PenToolIcon className="w-6 h-6" />,
      title: "Création graphique",
      description:
        "Conception d'identités visuelles complètes, logos, chartes graphiques et supports de communication percutants pour votre entreprise.",
    },
    {
      icon: <PrinterIcon className="w-6 h-6" />,
      title: "Impression multi-formats",
      description:
        "Service d'impression professionnelle allant de la simple carte de visite jusqu'à l'affiche A0, avec un contrôle qualité rigoureux.",
    },
    {
      icon: <LayersIcon className="w-6 h-6" />,
      title: "Mise en page",
      description:
        "Édition de brochures, rapports annuels, dépliants et flyers avec une attention particulière à la typographie et à la lisibilité.",
    },
  ];
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-28">
      <section className="py-16 md:py-24 relative overflow-hidden bg-[#111827]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f59e0b]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute top-10 left-10 w-64 h-64 border-t-2 border-l-2 border-[#f59e0b] rounded-tl-full border-dashed opacity-40 pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-b-2 border-r-2 border-[#f59e0b] rounded-br-full border-dashed opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainerSlow}
              className="max-w-2xl text-white lg:py-10"
            >
              <motion.h1
                variants={fadeInUp}
                className="font-heading text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-none"
              >
                Pixel & Co.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 leading-relaxed font-medium mb-8"
              >
                Votre studio de design graphique et d'impression professionnelle
                intégré au cœur du CF2M. De l'idée à la maquette, jusqu'au
                support final.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#f59e0b]/20 text-lg"
                >
                  Nos services
                </a>
              </motion.div>
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
              className="relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 grid grid-cols-2 gap-6 -rotate-3 scale-105">
                <div className="space-y-6 pt-16">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1716471330459-063b3baf247e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHN3YXRjaCUyMHBhbnRvbmUlMjBwcmludCUyMGRlc2lnbnxlbnwxfHx8fDE3NzM3ODEwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pantone et couleurs"
                    className="w-full h-64 object-cover rounded-[2rem] shadow-2xl shadow-black/40 border-4 border-white/10"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1626785773579-c50bd69824c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW50b25lJTIwY29sb3JzfGVufDF8fHx8MTc3Mzc1MjI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Color palette"
                    className="w-full h-48 object-cover rounded-[2rem] shadow-2xl shadow-black/40 border-4 border-white/10"
                  />
                </div>
                <div className="space-y-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzczNzUyMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Printing"
                    className="w-full h-56 object-cover rounded-[2rem] shadow-2xl shadow-black/40 border-4 border-white/10"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwbGF5b3V0JTIwZGVzaWduJTIwbWFnYXppbmV8ZW58MXx8fHwxNzczNzgxMDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mise en page et typographie"
                    className="w-full h-72 object-cover rounded-[2rem] shadow-2xl shadow-black/40 border-4 border-white/10"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white border-y border-[#f3f4f6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mb-6">
                {"Une équipe "}
                <span className="text-[#016baf]">experte</span>
                {" et réactive."}
              </h2>
              <div className="space-y-6 text-[#6b7280] text-lg leading-relaxed">
                <p>
                  {"Pixel & Co est un "}
                  <strong>studio professionnel à part entière</strong>.
                  Contrairement à nos pôles de formation, les projets qui nous
                  sont confiés sont pris en charge de bout en bout par notre
                  équipe de professionnels de l'image et de l'impression.
                </p>
                <p>
                  Nous garantissons des délais serrés, des finitions de haute
                  qualité et une communication claire pour vos projets B2B,
                  institutionnels ou associatifs.
                </p>
                <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-[#e5e7eb] flex items-start gap-4 mt-8">
                  <ZapIcon className="w-8 h-8 text-[#f59e0b] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#111827] mb-1">
                      Collaboration pédagogique ciblée
                    </h4>
                    <p className="text-base text-[#6b7280]">
                      Lors de missions spécifiques, nous impliquons
                      ponctuellement nos stagiaires les plus avancés (sections
                      Digital Designer & Animateur·trice Digitale), leur offrant
                      ainsi un environnement de travail réel et supervisé pour
                      leur portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              variants={staggerContainerSlow}
              className="lg:w-1/2 grid sm:grid-cols-2 gap-6"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-[#111827] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1529119835860-ce3d90485424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvJTIwcHJpbnRlZCUyMG1hdGVyaWFsc3xlbnwxfHx8fDE3NzM3ODEwMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-[#111827]/40 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">350+</div>
                  <div className="text-gray-400 font-medium">
                    Projets réalisés
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-[#016baf] text-white p-8 rounded-[2rem] shadow-xl sm:translate-y-8 relative overflow-hidden"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1693031630177-b897fb9d7154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJnZSUyMGZvcm1hdCUyMHByaW50ZXIlMjBwcmludGluZyUyMHBvc3RlcnxlbnwxfHx8fDE3NzM3ODEwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#016baf] via-[#016baf]/80 to-[#016baf]/40 pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                    <PrinterIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2">A0</div>
                  <div className="text-blue-100 font-medium">
                    Impression grand format
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="services" className="py-24 bg-[#111827] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {"Nos "}
              <span className="text-[#f59e0b]">services</span>
            </h2>
            <p className="text-gray-400 text-lg">
              De la conception sur mesure à la production de vos supports
              physiques.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={staggerContainerSlow}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((t, n) => (
              <motion.div
                key={n}
                variants={fadeInUp}
                className="bg-white/[0.08] p-8 rounded-[2rem] border border-white/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/25 text-[#f59e0b] flex items-center justify-center mb-6">
                  {t.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">
                  {t.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{t.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center justify-center gap-2 bg-white text-[#111827] hover:bg-[#f59e0b] hover:text-white px-10 py-4 rounded-full font-bold transition-colors shadow-lg cursor-pointer border-none outline-none">
                    Contactez-nous pour votre projet
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-[#111827] border border-white/10 text-white rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden text-left">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl font-bold font-heading">
                      {"Démarrons votre "}
                      <span className="text-[#f59e0b]">projet</span>
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Parlez-nous de vos besoins en design graphique ou
                      impression. Notre équipe vous recontactera rapidement.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    className="space-y-4"
                    onSubmit={(t) => {
                      t.preventDefault();
                      const n = t.currentTarget.querySelector(
                        'button[type="submit"]',
                      );
                      if (n) {
                        const r = n.innerHTML;
                        n.innerHTML = "Demande envoyée !";
                        n.classList.add("bg-green-600", "hover:bg-green-700");
                        setTimeout(() => {
                          n.innerHTML = r;
                          n.classList.remove(
                            "bg-green-600",
                            "hover:bg-green-700",
                          );
                        }, 3e3);
                      }
                    }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">
                        Nom / Entreprise
                      </Label>
                      <Input
                        id="name"
                        required
                        placeholder="Votre nom ou entreprise"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#f59e0b]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">
                        Email professionnel
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="exemple@entreprise.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#f59e0b]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-300">
                        Service concerné
                      </Label>
                      <div className="relative">
                        <select
                          id="service"
                          className="w-full bg-[#111827] border border-white/10 text-white h-10 px-3 py-2 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#f59e0b] focus:border-[#f59e0b]"
                        >
                          <option value="graphique">Création graphique</option>
                          <option value="impression">
                            Impression multi-formats
                          </option>
                          <option value="mise-en-page">Mise en page</option>
                          <option value="autre">Autre demande</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-white">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Détails du projet
                      </Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Décrivez votre besoin..."
                        className="min-h-[100px] resize-none bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-[#f59e0b]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg mt-2"
                    >
                      Envoyer ma demande
                    </button>
                  </form>
                </DialogContent>
              </Dialog>
              <div className="text-white/60 font-medium hidden sm:block">
                ou
              </div>
              <a
                href="tel:+3225390360"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white hover:text-[#f59e0b] px-8 py-4 rounded-full font-bold transition-colors shadow-none cursor-pointer border border-white/20 hover:border-[#f59e0b] outline-none group"
              >
                <PhoneIcon className="w-5 h-5 text-white/70 group-hover:text-[#f59e0b] transition-colors" />
                Appelez le 02/539 03 60
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
