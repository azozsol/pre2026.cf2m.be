# Frontend — CF2m

> **Changement de cap (2026-10-15)** : le frontend public va migrer vers une **SPA React séparée (Vite)**, Symfony
> restant le backend (API JSON, sécurité, EasyAdmin). Ce document décrit l'état **actuel** (Twig + îlots React),
> valable jusqu'à la fin de la migration. Voir `docs/architecture/decision-ilots-react.md`.

## Stack
| Couche | Technologie |
|--------|-------------|
| CSS framework | Bootstrap 5 |
| JS | Stimulus + Turbo (ImportMap, pas de bundler) |
| Îlots React | React 19 via Symfony UX React, JSX compilé par Babel — voir `docs/architecture/decision-ilots-react.md` |
| Templates | Twig |
| Polices | Google Fonts (`Poppins` en titres, `Montserrat` en corps de texte) — chargement non bloquant, voir `docs/architecture/seo-performances.md` |

## Palette de couleurs
Définie dans `assets/styles/app.css` (`:root`), mode sombre par défaut avec bascule mode clair (voir plus bas).

| Variable CSS | Rôle | Hex |
|------|---------|-----|
| `--cf2m-dark` | Fond hero / navbar | `#08111e` |
| `--cf2m-navy` | Fond alternatif | `#0d1e35` |
| `--cf2m-navy-md` | Variante mid | `#142f52` |
| `--cf2m-cyan` | Accent principal (liens, CTA, icônes) | `#00b4d8` |
| `--cf2m-cyan-light` | Cyan clair / hover | `#48cae4` |
| `--cf2m-gold` | Accent secondaire (stats, labels) | `#f4c430` |
| `--cf2m-light` | Fond clair de section | `#f0f6fa` |
| `--cf2m-white` | Blanc | `#ffffff` |
| `--cf2m-muted` | Texte atténué (sur fond sombre) | `rgba(255,255,255,0.6)` |

En mode clair (`[data-theme="light"]`), les variables Bootstrap (`--bs-body-color`, `--bs-emphasis-color`, etc.) sont réécrites — les couleurs `--cf2m-*` restent identiques, c'est le contraste texte/fond qui change.

## Mode sombre / clair — toggle

Géré par le Stimulus controller `theme_controller.js` :
- Thème par défaut : `dark`, persisté dans `localStorage` (clé `cf2m-theme`)
- Bascule via `data-theme` sur `<html>`, piloté entièrement en CSS (pas de classes JS)
- De nombreuses règles `[data-theme="light"] ...` dans `app.css` réécrivent les couleurs pour le mode clair (attention aux règles trop génériques qui peuvent écraser des couleurs de composants spécifiques — voir `documentations-dev/117-...` pour un cas vécu sur les boutons de partage)

## Structure des templates Twig (état réel)
```
templates/
├── base.html.twig                # Layout principal (head, navbar, footer, toggle thème)
├── _matomo.html.twig             # Partial Matomo (voir docs/architecture/analytics.md)
├── home/
│   └── index.html.twig           # Page d'accueil (hero, formations, activités, partenaires)
├── formation/
│   └── show.html.twig            # Détail d'une formation + works publiés
├── works/
│   └── show.html.twig            # Détail d'un travail (sidebar partage réseaux sociaux)
├── page/
│   └── show.html.twig            # Pages statiques (activités, mentions légales, etc.)
├── contact/
│   ├── index.html.twig
│   └── success.html.twig
├── security/
│   ├── login.html.twig
│   ├── reset_password.html.twig
│   └── two_factor.html.twig      # Saisie du code 2FA
├── registration/
│   └── register.html.twig
├── profil/
│   ├── index.html.twig           # Profil connecté
│   ├── edit.html.twig            # Édition profil (avatar, bio, liens)
│   ├── public.html.twig          # Profil public d'un utilisateur
│   └── utilisateurs.html.twig    # Liste des membres (ROLE_FORMATEUR+)
├── admin/
│   ├── dashboard.html.twig
│   ├── revisions-en-attente.html.twig
│   └── formation/stagiaires.html.twig  # (voir docs/architecture/easyadmin.md)
├── bundles/EasyAdminBundle/      # Overrides de layout EasyAdmin (ex: Matomo back-office)
└── emails/                       # Templates d'emails transactionnels
```

> L'en-tête, le pied de page et le hero de l'accueil sont des **îlots React** (voir plus bas) ; leurs contenus de repli Twig sont dans `templates/layout/_header_fallback.html.twig` et `templates/home/_hero_fallback.html.twig`. Il n'y a pas de vue `formation/index.html.twig` séparée — la liste des formations est intégrée à `home/index.html.twig`.

## Structure de base.html.twig
Blocs Twig disponibles (surchargeables par page) :
- `{% block title %}` — titre de la page
- `{% block meta_description %}` / `{% block meta_robots %}` — SEO (voir `docs/architecture/seo-performances.md`)
- `{% block meta_og %}` — Open Graph / Twitter Card (surchargé par ex. dans `works/show.html.twig`)
- `{% block stylesheets %}` — CSS supplémentaire par page
- `{% block body %}` — contenu principal
- `{% block javascripts %}` — JS supplémentaire par page

## En-tête, pied de page et hero (îlots React — maquette Figma)

| Élément | Îlot React | Props (côté serveur) | Repli Twig |
|---|---|---|---|
| En-tête | `assets/react/src/islands/Layout/Header.jsx` | `header_props()` | `templates/layout/_header_fallback.html.twig` |
| Pied de page | `assets/react/src/islands/Layout/Footer.jsx` | `footer_props()` | copyright dans `base.html.twig` |
| Hero accueil | `assets/react/src/islands/Home/Hero.jsx` | `hero_props()` | `templates/home/_hero_fallback.html.twig` |

Composants partagés : `assets/react/src/components/` (`Logo`, `ThemeToggle`, `NavDropdown`, `UserMenu`, `Icon`) ;
hook `useCurrentPath` (`assets/react/src/hooks/`). Styles : `assets/styles/tokens.css` (tokens Figma) et `assets/styles/layout.css`.

**Règles à respecter**
- **Props construites par `App\Service\Layout\LayoutPropsBuilder`** (exposé par `App\Twig\LayoutExtension`) : tableaux sérialisables
  uniquement. Les droits sont vérifiés là : le lien « Administration » n'est envoyé qu'aux `ROLE_STAGIAIRE`, le badge des
  révisions en attente qu'aux `ROLE_ADMIN`. **Aucun test de rôle dans React.** Tests : `tests/Service/Layout/LayoutPropsBuilderTest.php`.
- **En-tête et pied de page permanents** : `data-turbo-permanent` + `react_component(..., {permanent: true})` → montés une seule
  fois par chargement complet, pas de clignotement entre les pages. Conséquences :
  - le lien actif est recalculé côté client à chaque `turbo:load` (`useCurrentPath`, champ `match` des props) ;
  - tout ce qui change l'utilisateur connecté (connexion, 2FA, déconnexion, édition du profil, inscription) doit **recharger
    toute la page** (`data-turbo="false"`), sinon l'en-tête resterait sur l'ancien état ;
  - le badge des révisions en attente n'est rafraîchi qu'au prochain chargement complet.
- **Contenu de repli** : chaque îlot contient un repli Twig (SEO, affichage avant React, mêmes classes CSS pour éviter un saut).
  Penser à le mettre à jour quand on modifie le titre ou les liens principaux.
- Sur l'accueil (`body[data-page="home"]`), l'en-tête est transparent, posé sur la photo du hero, logo blanc dans les deux thèmes.
  Sur les autres pages, il prend `--cf2m-header-bg` (sombre ou blanc selon le thème).
- Le bascule de thème reste le contrôleur Stimulus `theme` : `ThemeToggle` ne fait que rendre le bouton.

**Hero** : titre en capitales espacées, 2 chiffres clés (100 % gratuit, 80 % de pratique), accroche « Change d'orientation »,
bouton pilule cyan, portrait rond dans l'anneau `cercle-contour-blanc.svg`. Images provisoires (`hero-bg.webp`,
`hero-portrait.webp`) en attendant les visuels de la maquette.

## Conventions Bootstrap 5
- Breakpoints : `sm` (576px), `md` (768px), `lg` (992px), `xl` (1200px)
- Grille : `container` + `row` + `col-*`
- Boutons principaux : `btn btn-primary`
- Alertes flash : `alert alert-success/danger/warning/info`
- Formulaires : `form-control`, `form-label`, `form-select`

## Stimulus controllers
Répertoire : `assets/controllers/`

| Controller | Rôle |
|------------|------|
| `theme_controller.js` | Bascule dark/light mode, persistance `localStorage` |
| `suneditor_controller.js` | Active SunEditor sur les textarea du back-office |
| `avatar_crop_controller.js` | Recadrage client de l'avatar (80×80) avant upload VichUploader |
| `csrf_protection_controller.js` | Protection CSRF sur formulaires spécifiques (ex: AJAX) |
| `hello_controller.js` | Contrôleur de démonstration Symfony (scaffold par défaut) |

## ImportMap
Packages déclarés dans `importmap.php` :
- `bootstrap` (CSS + JS)
- `@hotwired/stimulus`
- `@hotwired/turbo`
- `suneditor` (back-office uniquement)

## SEO et performances

Voir `docs/architecture/seo-performances.md` pour :
- Meta descriptions par page (blocs Twig surchargeables)
- `robots.txt`
- Conversion WebP des images (`hero-bg`, `formations-bg`, `hero-portrait`)
- Chargement non bloquant des Google Fonts
- Lazy loading des images hors-écran

## TODO
- [ ] Optimiser `logo-cf2m-blanc.svg` (136 KB → < 10 KB via SVGO)
- [ ] Héberger Google Fonts en local (`@font-face` + `.woff2`) pour supprimer la dépendance réseau