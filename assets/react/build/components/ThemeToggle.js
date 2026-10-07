import Icon from './Icon.js';

/**
 * Bouton de bascule clair/sombre.
 * Le comportement reste dans le contrôleur Stimulus « theme »
 * (assets/controllers/theme_controller.js), qui se connecte aussi aux
 * éléments rendus par React : une seule source de vérité pour le thème.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ThemeToggle({
  className = ''
}) {
  return /*#__PURE__*/_jsxs("button", {
    type: "button",
    className: `cf2m-theme-toggle ${className}`,
    "data-controller": "theme",
    "data-action": "click->theme#toggle",
    "aria-label": "Changer de th\xE8me",
    children: [/*#__PURE__*/_jsx(Icon, {
      name: "sun",
      className: "cf2m-theme-sun"
    }), /*#__PURE__*/_jsx(Icon, {
      name: "moon",
      className: "cf2m-theme-moon"
    })]
  });
}