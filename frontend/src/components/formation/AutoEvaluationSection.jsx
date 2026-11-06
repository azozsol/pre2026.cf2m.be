import { motion } from "motion/react";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "../../lib/animations";

const messageScore = (score, total) => {
  if (score === 0) {
    return "Cochez les affirmations ci-dessus pour évaluer votre profil.";
  }
  if (score === total) {
    return "Ce profil vous ressemble : venez nous rencontrer lors d'une séance d'information !";
  }
  if (score / total >= 0.6) {
    return "Belle affinité avec la formation. La séance d'information vous aidera à confirmer votre choix.";
  }
  return "Quelques points restent à explorer : parlons-en lors d'une séance d'information.";
};

export const AutoEvaluationSection = ({ formation, accent }) => {
  const affirmations = formation.affirmationsProfil;
  const [cochees, setCochees] = useState(() => new Set());
  if (affirmations.length === 0) {
    return null;
  }
  const score = cochees.size;
  const total = affirmations.length;

  const basculer = (index) => {
    setCochees((precedentes) => {
      const suivantes = new Set(precedentes);
      if (suivantes.has(index)) {
        suivantes.delete(index);
      } else {
        suivantes.add(index);
      }
      return suivantes;
    });
  };

  return (
    <section id="profil" className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-[2rem] border border-[#e5e7eb] shadow-xl p-8 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={staggerContainer}
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <motion.span
              variants={fadeInUp}
              className="text-sm font-bold uppercase tracking-widest mb-4 block"
              style={{
                color: accent.primary,
              }}
            >
              Test d'adéquation
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl font-bold text-[#111827] tracking-tight mb-4"
            >
              Ce profil vous ressemble-t-il ?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#6b7280] font-medium"
            >
              Cochez les affirmations qui vous correspondent pour tester votre
              affinité avec la formation.
            </motion.p>
          </div>
          <motion.fieldset variants={fadeInUp} className="space-y-3">
            <legend className="sr-only">Affirmations</legend>
            {affirmations.map((affirmation, index) => {
              const cochee = cochees.has(index);
              return (
                <label
                  key={affirmation}
                  className="flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-colors"
                  style={{
                    background: cochee ? `${accent.primary}0d` : "#FDFBF7",
                    borderColor: cochee ? accent.primary : "transparent",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={cochee}
                    onChange={() => basculer(index)}
                    className="w-5 h-5 mt-0.5 shrink-0 rounded"
                    style={{
                      accentColor: accent.primary,
                    }}
                  />
                  <span className="text-[#111827] font-medium leading-relaxed">
                    {affirmation}
                  </span>
                </label>
              );
            })}
          </motion.fieldset>
          <motion.div
            variants={fadeInUp}
            className="mt-10 p-6 bg-[#FDFBF7] rounded-2xl border border-[#e5e7eb] text-center"
            aria-live="polite"
          >
            <div className="text-xs text-[#6b7280] font-bold uppercase tracking-wider">
              Votre niveau d'adéquation
            </div>
            <div className="font-heading text-3xl font-black text-[#111827] my-2">
              {score} / {total} critères
            </div>
            <div
              className="w-full max-w-md mx-auto h-2.5 bg-[#e5e7eb] rounded-full overflow-hidden my-3"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={score}
              aria-label="Niveau d'adéquation"
            >
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(score / total) * 100}%`,
                  background: accent.primary,
                }}
              />
            </div>
            <p className="text-[#4b5563] font-medium">
              {messageScore(score, total)}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
