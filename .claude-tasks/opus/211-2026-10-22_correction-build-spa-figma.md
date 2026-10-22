# 211 — Correction du build de la SPA après import du code Figma Make

- **Modèle** : Opus
- **Justification** : diagnostic d'un build cassé (imports manquants, incompatibilité de version), traité dans la session en cours.

## Fichiers modifiés
- `frontend/src/data/formations.jsx` (ajouté, copié depuis `ux-ui-agent/cf2m-site/src/data/`)
- `frontend/src/data/navigation.js` (ajouté, même origine)
- `frontend/vite.config.js` — branchement du plugin `@tailwindcss/vite`
- `frontend/package.json`, `frontend/package-lock.json` — `lucide-react` figé à `0.487.0`

## Résumé
Après la copie des nouveaux dossiers dans `frontend/src/`, `vite build` échouait :

1. `src/data/` n'avait pas été copié : `FormationPage`, `Navbar`, `FormationHero`, `FormationCta` et `OtherFormations` importaient `data/formations` et `data/navigation` sans les trouver.
2. Le code importe des icônes de marques (`FigmaIcon`…) supprimées dans `lucide-react` 1.x. Retour à `0.487.0`, la version du projet d'origine (compatible React 19).
3. Le plugin Tailwind n'était pas déclaré dans Vite : `@import "tailwindcss"` dans `styles/index.css` ne générait aucune classe.

4. En dev Docker, rien ne s'affichait. Le conteneur `frontend` (Linux Alpine) partageait le `node_modules` installé depuis Windows, et Vite plantait au chargement de la config (`Cannot find module '../lightningcss.linux-x64-musl.node'`). Ajout d'un volume nommé `frontend_node_modules` dans `docker-compose.yml` : le conteneur a désormais son propre `node_modules`, avec les binaires Linux.

Fichier supplémentaire modifié : `docker-compose.yml`.

Le build passe désormais. Seul reste un avertissement : le bundle JS dépasse 500 kB (651 kB, 200 kB gzip). On pourra le découper plus tard par route avec `import()`.
