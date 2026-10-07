import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Icônes SVG du site (trait, 24×24), décoratives par défaut (aria-hidden).
 */
const PATHS = {
  sun: /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }), /*#__PURE__*/_jsx("line", {
      x1: "12",
      y1: "1",
      x2: "12",
      y2: "3"
    }), /*#__PURE__*/_jsx("line", {
      x1: "12",
      y1: "21",
      x2: "12",
      y2: "23"
    }), /*#__PURE__*/_jsx("line", {
      x1: "4.22",
      y1: "4.22",
      x2: "5.64",
      y2: "5.64"
    }), /*#__PURE__*/_jsx("line", {
      x1: "18.36",
      y1: "18.36",
      x2: "19.78",
      y2: "19.78"
    }), /*#__PURE__*/_jsx("line", {
      x1: "1",
      y1: "12",
      x2: "3",
      y2: "12"
    }), /*#__PURE__*/_jsx("line", {
      x1: "21",
      y1: "12",
      x2: "23",
      y2: "12"
    }), /*#__PURE__*/_jsx("line", {
      x1: "4.22",
      y1: "19.78",
      x2: "5.64",
      y2: "18.36"
    }), /*#__PURE__*/_jsx("line", {
      x1: "18.36",
      y1: "5.64",
      x2: "19.78",
      y2: "4.22"
    })]
  }),
  moon: /*#__PURE__*/_jsx("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  }),
  user: /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("circle", {
      cx: "12",
      cy: "8",
      r: "4"
    }), /*#__PURE__*/_jsx("path", {
      d: "M4 20c0-4 3.6-7 8-7s8 3 8 7"
    })]
  }),
  external: /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/_jsx("polyline", {
      points: "15 3 21 3 21 9"
    }), /*#__PURE__*/_jsx("line", {
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })]
  })
};
export default function Icon({
  name,
  size = 16,
  className = ''
}) {
  return /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    "aria-hidden": "true",
    children: PATHS[name]
  });
}