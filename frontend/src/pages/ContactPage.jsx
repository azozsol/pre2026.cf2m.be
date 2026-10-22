import {
  CircleCheckIcon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { InfoSessionModal } from "../components/modals/InfoSessionModal";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isInfoSessionOpen, setIsInfoSessionOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = (u) => {
    const d = {};
    const h = u.elements.namedItem("firstName")?.value?.trim();
    const f = u.elements.namedItem("lastName")?.value?.trim();
    const m = u.elements.namedItem("email")?.value?.trim();
    const v = u.elements.namedItem("message")?.value?.trim();
    if (!h || h.length < 2) {
      d.firstName = "Le prénom doit contenir au moins 2 caractères.";
    }
    if (!f || f.length < 2) {
      d.lastName = "Le nom doit contenir au moins 2 caractères.";
    }
    if (!m || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) {
      d.email = "Veuillez entrer une adresse email valide.";
    }
    if (!v || v.length < 10) {
      d.message = "Le message doit contenir au moins 10 caractères.";
    }
    setErrors(d);
    return Object.keys(d).length === 0;
  };
  const handleSubmit = (u) => {
    u.preventDefault();
    const d = u.target;
    if (validate(d)) {
      setSubmitted(true);
    }
  };
  const FieldError = ({ field }) =>
    errors[field] ? (
      <p className="text-red-500 text-xs mt-1 font-medium">{errors[field]}</p>
    ) : null;
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-28">
      <div className="bg-[#111827] text-white py-16 mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#016baf] rounded-full blur-[100px] opacity-30 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-10 w-48 h-48 border-b-2 border-r-2 border-[#f59e0b] rounded-br-full border-dashed opacity-40 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            {"Nous "}
            <span className="text-[#f59e0b]">contacter</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-lg text-gray-300 max-w-xl mx-auto"
          >
            Comment pouvons-nous vous aider aujourd'hui ?
          </motion.p>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-[#059669]/10 rounded-full flex items-center justify-center text-[#059669] mb-6">
                    <CircleCheckIcon className="w-10 h-10" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                    Message envoyé !
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Merci de nous avoir contactés. Notre équipe vous répondra
                    dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrors({});
                    }}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
                >
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-8"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">
                        Vos coordonnées
                      </label>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label
                            htmlFor="firstName"
                            className="text-sm font-medium text-gray-700"
                          >
                            Prénom
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              className={`w-full bg-gray-50 border ${errors.firstName ? "border-red-400" : "border-gray-200"} text-gray-900 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#059669]/50 focus:border-[#059669] transition-all`}
                              placeholder="Jean"
                            />
                          </div>
                          <FieldError field="firstName" />
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="lastName"
                            className="text-sm font-medium text-gray-700"
                          >
                            Nom
                          </label>
                          <div className="relative">
                            <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              className={`w-full bg-gray-50 border ${errors.lastName ? "border-red-400" : "border-gray-200"} text-gray-900 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#059669]/50 focus:border-[#059669] transition-all`}
                              placeholder="Dupont"
                            />
                          </div>
                          <FieldError field="lastName" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Adresse email
                      </label>
                      <div className="relative">
                        <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`w-full bg-gray-50 border ${errors.email ? "border-red-400" : "border-gray-200"} text-gray-900 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#059669]/50 focus:border-[#059669] transition-all`}
                          placeholder="jean.dupont@exemple.com"
                        />
                      </div>
                      <FieldError field="email" />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Votre message
                      </label>
                      <div className="relative">
                        <MessageSquareIcon className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className={`w-full bg-gray-50 border ${errors.message ? "border-red-400" : "border-gray-200"} text-gray-900 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#059669]/50 focus:border-[#059669] transition-all resize-none`}
                          placeholder="Comment pouvons-nous vous aider ?"
                        />
                      </div>
                      <FieldError field="message" />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#059669] hover:bg-[#047857] text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all shadow-lg shadow-[#059669]/20"
                    >
                      Envoyer ma demande
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-heading text-xl font-bold text-[#111827] mb-6 tracking-tight">
                Infos pratiques
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center shrink-0 text-[#059669]">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-sm">
                      Adresse
                    </div>
                    <div className="text-[#6b7280] text-sm leading-relaxed">
                      87-89 Avenue du Parc
                      <br />
                      1060 Saint-Gilles
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#016baf]/10 flex items-center justify-center shrink-0 text-[#016baf]">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-sm">
                      Téléphone
                    </div>
                    <a
                      href="tel:+3225390360"
                      className="text-[#6b7280] text-sm hover:text-[#016baf] transition-colors"
                    >
                      02/539 03 60
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#016baf]/10 flex items-center justify-center shrink-0 text-[#016baf]">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-sm">
                      Email
                    </div>
                    <a
                      href="mailto:info@cf2m.be"
                      className="text-[#6b7280] text-sm hover:text-[#016baf] transition-colors"
                    >
                      info@cf2m.be
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/10 flex items-center justify-center shrink-0 text-[#f59e0b]">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#111827] text-sm">
                      Accueil ouvert
                    </div>
                    <div className="text-[#6b7280] text-sm leading-relaxed">
                      Lun - Ven : 9h00 - 17h00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#016baf] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 border-2 border-white/10 rounded-full border-dashed -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <h3 className="font-heading text-lg font-bold mb-3 tracking-tight">
                Séance d'info gratuite
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Venez découvrir nos locaux et rencontrer nos formateurs. Sans
                engagement, sans inscription préalable.
              </p>
            </div>
            <div className="relative h-0">
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#f59e0b]/30 rounded-full border-dashed pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
      <InfoSessionModal
        isOpen={isInfoSessionOpen}
        onClose={() => setIsInfoSessionOpen(false)}
      />
    </main>
  );
}
