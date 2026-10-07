import { useEffect, useRef } from 'react';
import Logo from '../../components/Logo.js';
import NavDropdown from '../../components/NavDropdown.js';
import ThemeToggle from '../../components/ThemeToggle.js';
import UserMenu from '../../components/UserMenu.js';
import useCurrentPath from '../../hooks/useCurrentPath.js';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function isActive(item, path) {
  return item.exact ? path === item.match : path.startsWith(item.match);
}

/**
 * En-tête du site (maquette Figma « Header + Hero »).
 * Monté une seule fois par chargement complet : l'élément <header> est
 * data-turbo-permanent et l'îlot « permanent » (voir base.html.twig).
 * Props construites par App\Service\Layout\LayoutPropsBuilder::header().
 */
export default function Header({
  homeUrl,
  logo,
  tagline,
  nav,
  user,
  loginUrl
}) {
  const path = useCurrentPath();
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);

  // Le menu mobile reste ouvert entre deux pages (en-tête permanent) : on le referme à chaque navigation.
  useEffect(() => {
    collapseRef.current?.classList.remove('show');
    togglerRef.current?.classList.add('collapsed');
    togglerRef.current?.setAttribute('aria-expanded', 'false');
  }, [path]);
  return /*#__PURE__*/_jsx("nav", {
    className: "navbar navbar-expand-lg cf2m-site-header__nav",
    "aria-label": "Navigation principale",
    children: /*#__PURE__*/_jsxs("div", {
      className: "container",
      children: [/*#__PURE__*/_jsxs("a", {
        className: "navbar-brand cf2m-site-header__brand",
        href: homeUrl,
        "aria-label": "CF2m \u2014 Accueil",
        children: [/*#__PURE__*/_jsx(Logo, {
          logo: logo,
          size: 84
        }), /*#__PURE__*/_jsx("span", {
          className: "cf2m-site-header__tagline",
          children: tagline
        })]
      }), /*#__PURE__*/_jsx(ThemeToggle, {
        className: "d-lg-none ms-auto me-2"
      }), /*#__PURE__*/_jsx("button", {
        ref: togglerRef,
        className: "navbar-toggler collapsed border-0",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#cf2m-main-nav",
        "aria-controls": "cf2m-main-nav",
        "aria-expanded": "false",
        "aria-label": "Afficher/masquer le menu",
        children: /*#__PURE__*/_jsx("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/_jsxs("div", {
        ref: collapseRef,
        className: "collapse navbar-collapse",
        id: "cf2m-main-nav",
        children: [/*#__PURE__*/_jsx("ul", {
          className: "navbar-nav cf2m-site-header__links",
          children: nav.map((item, index) => {
            const active = isActive(item, path);
            return item.type === 'dropdown' ? /*#__PURE__*/_jsx(NavDropdown, {
              id: `cf2m-nav-dropdown-${index}`,
              active: active,
              ...item
            }, item.label) : /*#__PURE__*/_jsx("li", {
              className: "nav-item",
              children: /*#__PURE__*/_jsx("a", {
                className: `nav-link${active ? ' active' : ''}`,
                href: item.url,
                "aria-current": active ? 'page' : undefined,
                children: item.label
              })
            }, item.label);
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "cf2m-site-header__actions",
          children: [/*#__PURE__*/_jsx(ThemeToggle, {
            className: "d-none d-lg-inline-flex"
          }), user ? /*#__PURE__*/_jsx(UserMenu, {
            user: user
          }) : /*#__PURE__*/_jsx("a", {
            className: "cf2m-btn-connexion",
            href: loginUrl,
            children: "Connexion"
          })]
        })]
      })]
    })
  });
}