// Couleur d'accent quand la formation n'en a pas en base
export const ACCENT_PAR_DEFAUT = "#016baf";

export const estEnRecrutement = (formation) =>
  formation.statut === "recruiting";

export const getCtaLabel = (estOuverte) =>
  estOuverte ? "Prochaine étape : séance d'info" : "Être prévenu·e";

/** Sépare le titre en deux : le dernier mot est affiché en couleur d'accent. */
export const decouperTitre = (titre) => {
  const mots = titre.trim().split(/\s+/);
  if (mots.length < 2) {
    return { debut: "", dernierMot: titre };
  }
  return { debut: mots.slice(0, -1).join(" "), dernierMot: mots.at(-1) };
};
