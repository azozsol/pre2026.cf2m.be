# SPA : page formation branchée sur l'API

**Modèle utilisé** : Opus (session en cours ; tâche de niveau Sonnet : composants React et appels API)

**Justification** : reconstruction de la page détail d'une formation à partir de l'API, sans changement backend.

**Branche** : `feature/35-formation-champs-detail`

## Résumé

La page `/formations/:slug` lit désormais `GET /api/formations/{slug}` au lieu des données statiques Figma Make. Elle suit la structure de la maquette HTML (hero et conditions, métier, programme en piliers, auto-évaluation, recrutement, organisation) avec le style actuel de la SPA. La couleur d'accent vient de `couleurPrincipale`. Chaque section est masquée quand ses données sont vides : une seule page sert pour toutes les formations.

## Fichiers

- Nouveaux : `src/api/formations.js`, `src/hooks/useApi.js`, `src/lib/icones.jsx` (table explicite d'icônes lucide, repli sur un cercle), `src/lib/formation.js`, `components/formation/MetierSection.jsx`, `AutoEvaluationSection.jsx`, `OrganisationSection.jsx`
- Réécrits : `pages/FormationPage.jsx` (chargement, 404, erreur), `components/formation/FormationHero.jsx`, `ProgramSection.jsx` (onglets ARIA avec navigation clavier), `FormationCta.jsx`, `OtherFormations.jsx` (liste API)
- Modifié : `src/api/client.js` (`erreur.statut`)
- Slugs BDD : `data/navigation.js`, `components/layout/Footer.jsx`, `components/home/FormationsSection.jsx`
- Supprimés : `data/formations.jsx`, `KeyFacts`, `SkillsSection`, `CareersSection`, `ConditionsSection`, `FormationTestimonial`, `StackedTabs`

## Vérifications

- `npm run build` réussi.
- Serveur Vite de dev : tous les nouveaux modules se compilent ; via le proxy, `/api/formations/digital-designer` répond 200 et un slug inconnu 404.
- Non vérifié dans un navigateur : rendu visuel, responsive, onglets au clavier, quiz, modales.
