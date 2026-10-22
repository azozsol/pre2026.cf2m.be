# 210 — Ajout des dépendances manquantes de la SPA (Tailwind, Radix, motion…)

- **Modèle** : Opus
- **Justification** : tâche simple (installation npm), traitée dans la session en cours sans délégation.

## Fichiers modifiés
- `frontend/package.json`
- `frontend/package-lock.json`

## Résumé
Ajout uniquement des paquets absents de la SPA :

- dependencies : `@radix-ui/react-dialog`, `@radix-ui/react-label`, `clsx`, `motion`, `tailwind-merge`
- devDependencies : `@tailwindcss/vite` (4.1.12, figée), `tailwindcss` (4.1.12, figée), `prettier`, `tw-animate-css`

Conservés tels quels (déjà présents en version plus récente que la liste fournie) :
`react` / `react-dom` 19.3.0, `react-router` ^7.9, `lucide-react` ^1.61, `vite` ^7.1, `@vitejs/plugin-react` ^5.

Reste à faire : brancher `@tailwindcss/vite` dans `frontend/vite.config.js` et ajouter `@import "tailwindcss";` dans la feuille CSS principale.
