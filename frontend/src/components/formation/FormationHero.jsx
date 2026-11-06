import {
  CalendarCheckIcon,
  CalendarIcon,
  CircleCheckBigIcon,
  ClockIcon,
  EuroIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { Icone } from "../../lib/icones";
import {
  decouperTitre,
  estEnRecrutement,
  getCtaLabel,
} from "../../lib/formation";
import { fadeInUp, staggerContainer } from "../../lib/animations";

const Badge = ({ children, className = "", style }) => (
  <span
    className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider ${className}`}
    style={style}
  >
    {children}
  </span>
);

const EncadreConditions = ({ formation, accent }) => {
  const synthese = [
    {
      icon: <ClockIcon className="w-4 h-4" />,
      label: "Durée totale",
      value: [formation.duree, formation.heuresTotales && `(${formation.heuresTotales})`]
        .filter(Boolean)
        .join(" "),
    },
    {
      icon: <CalendarIcon className="w-4 h-4" />,
      label: "Rythme",
      value: formation.rythme,
    },
    {
      icon: <EuroIcon className="w-4 h-4" />,
      label: "Coût",
      value: formation.cout,
    },
  ].filter((ligne) => ligne.value);

  return (
    <div
      className="bg-white rounded-[2rem] border border-[#e5e7eb] shadow-xl p-8 border-t-4"
      style={{
        borderTopColor: accent.primary,
      }}
    >
      {formation.conditions.length > 0 && (
        <>
          <h2 className="font-heading text-xl font-bold text-[#111827] tracking-tight mb-6 flex items-center justify-between gap-4 pb-4 border-b border-[#f3f4f6]">
            Conditions d'accès
            {formation.organismeConditions && (
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  color: accent.primary,
                  background: `${accent.primary}1a`,
                }}
              >
                {formation.organismeConditions}
              </span>
            )}
          </h2>
          <ul className="space-y-4">
            {formation.conditions.map((condition) => (
              <li key={condition.titre} className="flex items-start gap-3">
                <CircleCheckBigIcon
                  className="w-5 h-5 mt-0.5 shrink-0 text-[#059669]"
                  aria-hidden="true"
                />
                <div>
                  <span className="block font-bold text-[#111827]">
                    {condition.titre}
                  </span>
                  {condition.detail && (
                    <span className="text-sm text-[#6b7280] font-medium">
                      {condition.detail}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      {synthese.length > 0 && (
        <dl
          className={`bg-[#FDFBF7] rounded-2xl p-5 space-y-3 ${formation.conditions.length > 0 ? "mt-8" : ""}`}
        >
          {synthese.map((ligne) => (
            <div
              key={ligne.label}
              className="flex justify-between items-start gap-4 text-sm"
            >
              <dt className="flex items-center gap-2 text-[#6b7280] font-medium shrink-0">
                {ligne.icon}
                {ligne.label}
              </dt>
              <dd className="font-bold text-[#111827] text-right">
                {ligne.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
      <a
        href="tel:+3225390360"
        className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold hover:underline"
        style={{
          color: accent.primary,
        }}
      >
        <PhoneIcon className="w-4 h-4" aria-hidden="true" />
        Une question ? 02 539 03 60
      </a>
    </div>
  );
};

export const FormationHero = ({ formation, accent, onNotify, onInfoSession }) => {
  const estOuverte = estEnRecrutement(formation);
  const { debut, dernierMot } = decouperTitre(formation.titre);
  return (
    <section className="bg-[#FDFBF7] pt-32 pb-24 overflow-hidden relative">
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-[0.08]"
        style={{
          background: accent.primary,
        }}
      />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3"
            >
              <Badge
                className={
                  estOuverte
                    ? "bg-[#059669]/10 text-[#059669]"
                    : "bg-gray-100 text-gray-500"
                }
              >
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${estOuverte ? "bg-[#059669]" : "bg-gray-400"}`}
                />
                {estOuverte ? "Recrutement en cours" : "Complet"}
              </Badge>
              {formation.prochaineSession && (
                <Badge
                  className="text-white"
                  style={{
                    background: accent.primary,
                  }}
                >
                  <CalendarCheckIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  Session {formation.prochaineSession}
                </Badge>
              )}
              <Badge className="bg-[#059669] text-white">100% Gratuite</Badge>
              {formation.modalite && (
                <Badge className="bg-[#f3f4f6] text-[#4b5563]">
                  <MapPinIcon className="w-3.5 h-3.5" aria-hidden="true" />
                  {formation.modalite}
                </Badge>
              )}
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-[#111827] leading-[1.05] tracking-tight"
            >
              {debut && (
                <>
                  {debut} <br className="hidden md:block" />
                </>
              )}
              <span
                style={{
                  color: accent.primary,
                }}
              >
                {dernierMot}
              </span>
            </motion.h1>
            {formation.descriptionCourte && (
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-[#4b5563] leading-relaxed font-medium"
              >
                {formation.descriptionCourte}
              </motion.p>
            )}
            {formation.pointsForts.length > 0 && (
              <motion.ul
                variants={fadeInUp}
                className="grid sm:grid-cols-3 gap-4"
              >
                {formation.pointsForts.map((point) => (
                  <li
                    key={point.libelle}
                    className="flex items-center gap-3 bg-white border border-[#e5e7eb] rounded-2xl px-4 py-3 shadow-sm"
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        color: accent.primary,
                        background: `${accent.primary}1a`,
                      }}
                    >
                      <Icone nom={point.icone} className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="text-xs text-[#9ca3af] font-bold uppercase tracking-wide">
                        {point.libelle}
                      </div>
                      <div className="text-sm font-bold text-[#111827]">
                        {point.valeur}
                      </div>
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}
            <motion.div variants={fadeInUp} className="pt-2">
              <button
                type="button"
                onClick={estOuverte ? onInfoSession : onNotify}
                className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-all inline-flex items-center justify-center gap-3 shadow-xl hover:opacity-90"
                style={{
                  background: accent.primary,
                }}
              >
                {getCtaLabel(estOuverte)}
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            <EncadreConditions formation={formation} accent={accent} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
