import Icon from './Icon.js';

/**
 * Entrée de menu déroulante (Bootstrap dropdown, via data-bs-toggle).
 * Props : { id, label, items: [{label, url, recruiting?}], emptyLabel, footerLink?, external?, active }
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export default function NavDropdown({
  id,
  label,
  items,
  emptyLabel,
  footerLink,
  external,
  active
}) {
  return /*#__PURE__*/_jsxs("li", {
    className: "nav-item dropdown",
    children: [/*#__PURE__*/_jsx("a", {
      className: `nav-link dropdown-toggle${active ? ' active' : ''}`,
      href: "#",
      id: id,
      role: "button",
      "data-bs-toggle": "dropdown",
      "aria-expanded": "false",
      children: label
    }), /*#__PURE__*/_jsxs("ul", {
      className: "dropdown-menu cf2m-dropdown",
      "aria-labelledby": id,
      children: [items.length === 0 && /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsx("span", {
          className: "dropdown-item-text text-muted fst-italic",
          children: emptyLabel
        })
      }), items.map(item => /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          className: `dropdown-item cf2m-dropdown-item${item.recruiting ? ' cf2m-dropdown-item--recruiting' : ''}`,
          href: item.url,
          children: [/*#__PURE__*/_jsx("span", {
            className: "cf2m-dropdown-arrow",
            children: "\u203A"
          }), item.label, item.recruiting && /*#__PURE__*/_jsx("span", {
            className: "badge bg-warning text-dark ms-1 cf2m-badge-recruiting",
            children: "Recrutement"
          })]
        })
      }, item.url)), external && /*#__PURE__*/_jsx("li", {
        children: /*#__PURE__*/_jsxs("a", {
          className: "dropdown-item cf2m-dropdown-item",
          href: external.url,
          target: "_blank",
          rel: "noopener noreferrer",
          title: external.title,
          children: [/*#__PURE__*/_jsx("span", {
            className: "cf2m-dropdown-arrow",
            children: "\u203A"
          }), external.label, " ", /*#__PURE__*/_jsx(Icon, {
            name: "external",
            size: 11,
            className: "cf2m-external-icon"
          })]
        })
      }), footerLink && items.length > 0 && /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("hr", {
            className: "dropdown-divider cf2m-dropdown-divider"
          })
        }), /*#__PURE__*/_jsx("li", {
          children: /*#__PURE__*/_jsx("a", {
            className: "dropdown-item cf2m-dropdown-all",
            href: footerLink.url,
            children: footerLink.label
          })
        })]
      })]
    })]
  });
}