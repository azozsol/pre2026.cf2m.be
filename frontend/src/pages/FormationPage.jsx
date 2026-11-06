import { useState } from "react";
import { Link, useParams } from "react-router";
import { lireFormation } from "../api/formations";
import { AutoEvaluationSection } from "../components/formation/AutoEvaluationSection";
import { FormationCta } from "../components/formation/FormationCta";
import { FormationHero } from "../components/formation/FormationHero";
import { MetierSection } from "../components/formation/MetierSection";
import { OrganisationSection } from "../components/formation/OrganisationSection";
import { OtherFormations } from "../components/formation/OtherFormations";
import { ProgramSection } from "../components/formation/ProgramSection";
import { RecrutementSection } from "../components/formation/RecrutementSection";
import { InfoSessionModal } from "../components/modals/InfoSessionModal";
import { NotifyModal } from "../components/modals/NotifyModal";
import { useApi } from "../hooks/useApi";
import { ACCENT_PAR_DEFAUT } from "../lib/formation";

const Message = ({ titre, texte }) => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24 px-6 text-center bg-[#FDFBF7]">
    <h1 className="font-heading text-3xl font-bold text-[#111827]">{titre}</h1>
    <p className="text-[#6b7280] max-w-md">{texte}</p>
    <Link
      to="/"
      className="bg-[#016baf] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#015893] transition-colors"
    >
      Retour à l'accueil
    </Link>
  </div>
);

const Chargement = () => (
  <div
    className="min-h-screen bg-[#FDFBF7] pt-32 pb-24"
    aria-busy="true"
    aria-label="Chargement de la formation"
  >
    <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 animate-pulse">
      <div className="lg:col-span-7 space-y-8">
        <div className="flex gap-3">
          <div className="h-8 w-40 bg-[#e5e7eb] rounded-full" />
          <div className="h-8 w-32 bg-[#e5e7eb] rounded-full" />
        </div>
        <div className="h-16 w-3/4 bg-[#e5e7eb] rounded-2xl" />
        <div className="space-y-3">
          <div className="h-5 bg-[#e5e7eb] rounded" />
          <div className="h-5 w-5/6 bg-[#e5e7eb] rounded" />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-16 bg-[#e5e7eb] rounded-2xl" />
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 h-96 bg-[#e5e7eb] rounded-[2rem]" />
    </div>
  </div>
);

export function FormationPage() {
  const { slug } = useParams();
  const { donnees: formation, chargement, erreur } = useApi(
    (signal) => lireFormation(slug, { signal }),
    [slug],
  );
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [isInfoSessionOpen, setIsInfoSessionOpen] = useState(false);

  if (chargement) {
    return <Chargement />;
  }
  if (erreur?.statut === 404) {
    return (
      <Message
        titre="Formation introuvable"
        texte="Cette formation n'existe pas ou n'est plus proposée."
      />
    );
  }
  if (erreur) {
    return (
      <Message
        titre="Formation indisponible"
        texte="Les informations de cette formation ne peuvent pas être chargées pour le moment. Réessayez dans quelques instants."
      />
    );
  }

  const accent = {
    primary: formation.couleurPrincipale ?? ACCENT_PAR_DEFAUT,
  };
  const ouvrirNotification = () => setIsNotifyOpen(true);
  const ouvrirSeanceInfo = () => setIsInfoSessionOpen(true);

  // key : l'état interne des sections (onglet actif, cases cochées) repart de zéro à chaque formation
  return (
    <main key={slug} className="font-sans text-[#4b5563] bg-[#FDFBF7]">
      <FormationHero
        formation={formation}
        accent={accent}
        onNotify={ouvrirNotification}
        onInfoSession={ouvrirSeanceInfo}
      />
      <MetierSection formation={formation} accent={accent} />
      <ProgramSection formation={formation} accent={accent} />
      <AutoEvaluationSection formation={formation} accent={accent} />
      <RecrutementSection accent={accent} />
      <OrganisationSection formation={formation} accent={accent} />
      <FormationCta
        formation={formation}
        accent={accent}
        onNotify={ouvrirNotification}
        onInfoSession={ouvrirSeanceInfo}
      />
      <OtherFormations currentSlug={slug} />
      <NotifyModal
        isOpen={isNotifyOpen}
        onClose={() => setIsNotifyOpen(false)}
      />
      <InfoSessionModal
        isOpen={isInfoSessionOpen}
        onClose={() => setIsInfoSessionOpen(false)}
      />
    </main>
  );
}
