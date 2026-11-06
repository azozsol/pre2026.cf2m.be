import { useEffect, useState } from "react";

/**
 * Exécute un appel API à chaque changement de `deps` et expose son état.
 * La requête précédente est annulée (démontage, changement de slug…) : sa réponse tardive est ignorée.
 */
export function useApi(appel, deps) {
  const [etat, setEtat] = useState({
    donnees: null,
    chargement: true,
    erreur: null,
  });

  useEffect(() => {
    const controleur = new AbortController();
    setEtat({ donnees: null, chargement: true, erreur: null });

    appel(controleur.signal)
      .then((donnees) => {
        setEtat({ donnees, chargement: false, erreur: null });
      })
      .catch((erreur) => {
        if (erreur.name === "AbortError") {
          return;
        }
        setEtat({ donnees: null, chargement: false, erreur });
      });

    return () => controleur.abort();
  }, deps);

  return etat;
}
