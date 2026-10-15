# Décision architecturale — Frontend React (SPA séparée, Symfony en backend)

**Date** : 2026-10-15 (révision de la décision du 2026-10-02)
**Statut** : Adopté — remplace l'option A (îlots React dans Twig), migration à planifier
**Auteur** : Soliman Azoz / Claude Opus

> Le nom du fichier est conservé pour ne pas casser les liens existants ; il décrit désormais l'option B.

---

## Contexte

Le nouveau design du site est réalisé sous Figma et doit être intégré avec **React**. Le site existant repose
sur Twig + AssetMapper/ImportMap + Stimulus + Turbo + Bootstrap, et tout le fonctionnel (sécurité, voters,
formulaires avec CSRF/Turnstile, SEO, EasyAdmin) passe par Symfony.

Le 2026-10-02, l'option A (îlots React montés dans Twig) avait été retenue et mise en place
(`feature/32-react-islands`, `feature/33-design-tokens-figma`). Après nouvelle discussion le 2026-10-15,
l'équipe passe à l'option B : **un frontend React autonome, Symfony restant le backend**.

## Options évaluées

| Option | Principe | Verdict |
|---|---|---|
| A. Îlots React dans Twig | Twig rend la page ; des composants React sont montés à des endroits précis via `react_component()` (Symfony UX React) | **Remplacée** (était retenue le 2026-10-02) |
| **B. SPA React séparée + API Symfony** | Application React autonome (Vite) ; Symfony conserve le métier, la sécurité, la BDD et EasyAdmin, et expose une API JSON | **Retenue** |
| C. Rester en Twig | Intégrer Figma uniquement avec Twig + CSS + Stimulus | Rejetée : pas de React pour les interactions riches |

## Décision

1. **Symfony reste le backend** : entités, services, repositories, voters, Doctrine/MariaDB, emails,
   EasyAdmin. Les règles métier et les contrôles de droits restent côté serveur (**aucun test de rôle dans React**).
2. **Le frontend public devient une SPA React 19 (Vite)**, dans un dossier dédié du dépôt (`frontend/`).
3. **Symfony expose une API JSON** (`/api/...`) : contrôleurs renvoyant `JsonResponse` / `$this->json(...)`
   avec groupes de sérialisation, protégés par `#[IsGranted]` / voters. Les DTO remplacent les props d'îlots.
4. **EasyAdmin reste en Twig** sur `/admin` (aucune réécriture du back-office).
5. **Le build de la SPA se fait en CI** (GitHub Actions), le VPS n'ayant pas Node : les fichiers compilés sont
   envoyés sur le serveur et servis par Apache/Nginx, Symfony gardant `/api` et `/admin`.

## Points à trancher (recommandation entre parenthèses)

| Sujet | Choix possibles | Recommandation |
|---|---|---|
| Authentification | Session Symfony par cookie (même domaine) / JWT | **Session par cookie, même domaine** : réutilise le firewall, la 2FA et les voters existants ; pas de jeton stocké côté navigateur |
| CSRF | Jeton fourni par l'API / cookie `SameSite=Strict` + en-tête | Jeton CSRF fourni par un point d'API, envoyé en en-tête sur les écritures |
| SEO (pages formations, travaux) | SPA pure / pré-rendu des pages publiques / SSR (Next.js) | À décider : une SPA pure est mal indexée, à éviter pour les pages de formations |
| Hébergement de la SPA | Même domaine (`/` → SPA, `/api` et `/admin` → Symfony) / sous-domaine | Même domaine (pas de CORS, cookies simples) |
| Formulaires (contact, inscription, mot de passe oublié) | Réécriture React + validation API | Validation Symfony (`Validator`) conservée côté API ; Turnstile vérifié côté serveur |

## Conséquences sur l'existant

| Élément | Devenir |
|---|---|
| Composants JSX (`assets/react/src/components/`, `islands/`) | **Réutilisés** dans la SPA (Header, Footer, Hero, Logo, ThemeToggle…) |
| Tokens Figma (`assets/styles/tokens.css`, `layout.css`) | **Réutilisés** dans la SPA |
| `LayoutPropsBuilder` / `LayoutExtension` | Logique déplacée vers un point d'API (ex. `GET /api/layout`) ; tests à adapter |
| `symfony/ux-react`, compilation Babel, `assets/react/build/` | Supprimés une fois la migration terminée |
| Templates Twig publics, Stimulus, Turbo | Supprimés progressivement, page par page ; conservés pour EasyAdmin et les emails |
| Formulaires Symfony publics (4) | Remplacés par des formulaires React + API |
| Service `node` de Docker | Lance le serveur de dev Vite au lieu de `react:watch` |
| Workflows `deploy-preprod.yml` / `deploy-prod.yml` | Ajout du build Vite et de l'envoi des fichiers compilés |

## Migration (proposition, par étapes)

1. ✅ Squelette `frontend/` (Vite + React 19), service Docker, build en CI — branche `feature/34-spa-react` (voir ci-dessous).
2. Authentification par session + point d'API `/api/me` et `/api/layout` ; en-tête/pied de page/hero portés dans la SPA.
3. Pages publiques en lecture (accueil, formations, travaux, pages statiques) via API.
4. Formulaires (contact, inscription, connexion/2FA, réinitialisation du mot de passe, profil).
5. Suppression de Symfony UX React, Babel, Stimulus/Turbo et des templates publics devenus inutiles.

Tant que la migration n'est pas terminée, le site Twig actuel (avec les îlots déjà en place) reste en production.

## Organisation de la SPA (`frontend/`)

```
frontend/
├── package.json, package-lock.json   ← dépendances de la SPA (versionnées) ; React à la même version que importmap.php
├── vite.config.js                    ← serveur de dev 5173 + relais des routes Symfony vers nginx
├── index.html                        ← page unique, monte <App /> dans #root
└── src/
    ├── main.jsx, App.jsx             ← point d'entrée et routes (react-router)
    ├── api/client.js                 ← appels à l'API Symfony (même origine, cookie de session)
    └── pages/                        ← une page par route
```

- **Dev** : `docker compose up -d` → http://localhost:5173. Vite relaie `/api`, `/admin`, `/login`, `/logout`,
  `/uploads`, `/images` vers nginx : SPA et API partagent la même origine.
- **API** : contrôleurs dans `src/Controller/Api/`, routes `/api/...`, réponses JSON. Premier point : `GET /api/statut`
  (`StatutController`, testé par `tests/Controller/Api/StatutControllerTest.php`).
- **CI** : le job `frontend-build` de `symfony.yml` fait `npm ci` + `npm run build` et publie `frontend/dist`
  (artefact `frontend-dist`). `dist/` n'est pas versionné. Le déploiement sur le VPS reste à faire.
- Imports **sans** extension `.js` (Vite résout les `.jsx`), contrairement aux îlots.

## Historique

- **2026-10-02** : option A adoptée (îlots React via Symfony UX React, JSX compilé par Babel, sortie versionnée
  dans `assets/react/build/`, React servi par l'importmap). Voir `documentations-dev/134-...` et `135-...`.
- **2026-10-15** : passage à l'option B après nouvelle discussion d'équipe ; Symfony conservé comme backend.
