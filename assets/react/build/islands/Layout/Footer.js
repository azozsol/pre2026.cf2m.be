import Logo from '../../components/Logo.js';

/**
 * Pied de page du site (en attente de la maquette Figma : reprend le design actuel).
 * Props construites par App\Service\Layout\LayoutPropsBuilder::footer().
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function Footer({
  homeUrl,
  logo,
  tagline,
  activities,
  year
}) {
  return /*#__PURE__*/_jsx("div", {
    className: "container",
    children: /*#__PURE__*/_jsxs("div", {
      className: "row align-items-center",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start gap-2",
        children: [/*#__PURE__*/_jsx("a", {
          href: homeUrl,
          "aria-label": "CF2m \u2014 Accueil",
          children: /*#__PURE__*/_jsx(Logo, {
            logo: logo,
            size: 50
          })
        }), /*#__PURE__*/_jsx("span", {
          className: "text-muted",
          children: tagline
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "col-md-4 mb-3 mb-md-0",
        children: activities.length > 0 && /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("p", {
            className: "text-muted small fw-semibold mb-1 text-uppercase",
            children: "Nos activit\xE9s"
          }), /*#__PURE__*/_jsx("ul", {
            className: "list-unstyled mb-0",
            children: activities.map(activity => /*#__PURE__*/_jsx("li", {
              children: /*#__PURE__*/_jsx("a", {
                className: "text-muted text-decoration-none cf2m-footer-link small",
                href: activity.url,
                children: activity.label
              })
            }, activity.url))
          })]
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "col-md-4 text-center text-md-end",
        children: /*#__PURE__*/_jsxs("small", {
          className: "text-muted",
          children: ["\xA9 ", year, " CF2m \u2014 Tous droits r\xE9serv\xE9s"]
        })
      })]
    })
  });
}