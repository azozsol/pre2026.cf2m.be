import Icon from './Icon.js';

/**
 * Menu de l'utilisateur connecté. Les liens présents (administration, badge des
 * révisions en attente) sont décidés côté serveur (LayoutPropsBuilder) : aucun
 * test de rôle ici. La déconnexion recharge toute la page (data-turbo="false")
 * pour que l'en-tête, permanent entre les navigations Turbo, soit remis à jour.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function UserMenu({
  user
}) {
  return /*#__PURE__*/_jsxs("div", {
    className: "dropdown",
    children: [/*#__PURE__*/_jsxs("button", {
      className: "cf2m-user-dropdown-toggle dropdown-toggle",
      type: "button",
      id: "dropdownUser",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false",
      children: [/*#__PURE__*/_jsx("span", {
        className: "cf2m-user-avatar-icon",
        children: /*#__PURE__*/_jsx(Icon, {
          name: "user"
        })
      }), user.name]
    }), /*#__PURE__*/_jsxs("ul", {
      className: "dropdown-menu dropdown-menu-end cf2m-dropdown cf2m-user-dropdown",
      "aria-labelledby": "dropdownUser",
      children: [/*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          className: "dropdown-item cf2m-dropdown-item",
          href: user.profileUrl,
          children: [/*#__PURE__*/_jsx("span", {
            className: "cf2m-dropdown-arrow",
            children: "\u203A"
          }), "Mon profil"]
        })
      }), user.adminUrl && /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          className: "dropdown-item cf2m-dropdown-item",
          href: user.adminUrl,
          "data-turbo": "false",
          children: [/*#__PURE__*/_jsx("span", {
            className: "cf2m-dropdown-arrow",
            children: "\u203A"
          }), "Administration", user.pendingRevisions && /*#__PURE__*/_jsx("span", {
            className: "badge rounded-pill ms-1 cf2m-badge-pending",
            "aria-label": `${user.pendingRevisions} révisions en attente`,
            children: user.pendingRevisions
          })]
        })
      }), /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("hr", {
          className: "dropdown-divider cf2m-dropdown-divider"
        })
      }), /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("a", {
          className: "dropdown-item cf2m-dropdown-all",
          href: user.logoutUrl,
          "data-turbo": "false",
          children: "D\xE9connexion"
        })
      })]
    })]
  });
}