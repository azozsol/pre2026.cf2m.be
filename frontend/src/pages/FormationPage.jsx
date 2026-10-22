import { useState } from "react";
import { Link, useParams } from "react-router";
import { CareersSection } from "../components/formation/CareersSection";
import { ConditionsSection } from "../components/formation/ConditionsSection";
import { FormationCta } from "../components/formation/FormationCta";
import { FormationHero } from "../components/formation/FormationHero";
import { FormationTestimonial } from "../components/formation/FormationTestimonial";
import { KeyFacts } from "../components/formation/KeyFacts";
import { OtherFormations } from "../components/formation/OtherFormations";
import { ProgramSection } from "../components/formation/ProgramSection";
import { SkillsSection } from "../components/formation/SkillsSection";
import { InfoSessionModal } from "../components/modals/InfoSessionModal";
import { NotifyModal } from "../components/modals/NotifyModal";
import { accents, formationsData } from "../data/formations";

export function FormationPage() {
  const { slug } = useParams();
  const data = formationsData[slug || "web-developer"];
  const accent = accents[slug || "web-developer"] || accents["web-developer"];
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [isInfoSessionOpen, setIsInfoSessionOpen] = useState(false);
  return data ? (
    <main className="font-sans text-[#4b5563] bg-[#FDFBF7]">
      <FormationHero
        data={data}
        accent={accent}
        onNotify={() => setIsNotifyOpen(true)}
        onInfoSession={() => setIsInfoSessionOpen(true)}
        slug={slug || "web-developer"}
      />
      <KeyFacts data={data} accent={accent} />
      <ProgramSection
        data={data}
        accent={accent}
        slug={slug || "web-developer"}
      />
      <SkillsSection data={data} accent={accent} />
      <CareersSection data={data} accent={accent} />
      <ConditionsSection data={data} accent={accent} />
      <FormationTestimonial data={data} accent={accent} />
      <FormationCta
        data={data}
        accent={accent}
        onNotify={() => setIsNotifyOpen(true)}
        onInfoSession={() => setIsInfoSessionOpen(true)}
      />
      <OtherFormations currentSlug={slug || "web-developer"} />
      <NotifyModal
        isOpen={isNotifyOpen}
        onClose={() => setIsNotifyOpen(false)}
      />
      <InfoSessionModal
        isOpen={isInfoSessionOpen}
        onClose={() => setIsInfoSessionOpen(false)}
      />
    </main>
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24 bg-[#FDFBF7]">
      <div className="text-6xl">🚧</div>
      <h1 className="font-heading text-3xl font-bold text-[#111827]">
        Page en construction
      </h1>
      <p className="text-[#6b7280]">Cette formation sera bientôt disponible.</p>
      <Link
        to="/"
        className="bg-[#016baf] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#015893] transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
