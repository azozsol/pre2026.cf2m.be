# 212 — Retour en haut de page à chaque navigation dans la SPA

- **Modèle** : Haiku (tâche simple, traitée dans la session en cours)
- **Justification** : ajout d'un composant standard de React Router, une ligne de code.

## Fichiers modifiés
- `frontend/src/components/layout/RootLayout.jsx`

## Résumé
Un clic sur une formation ouvrait la page à la position de scroll de la page précédente. React Router ne réinitialise pas le scroll dans une SPA.
Ajout de `<ScrollRestoration />` (composant officiel des routeurs data, `createBrowserRouter`) dans le layout racine. Il assure :
- le retour en haut de page à chaque nouvelle navigation ;
- le défilement vers les ancres (`/#recruteurs`, `/notre-histoire#cf2d`) ;
- la restauration de la position avec Précédent/Suivant.
