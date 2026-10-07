import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Hero de la page d'accueil (maquette Figma « Header + Hero »).
 * Props construites par App\Service\Layout\LayoutPropsBuilder::hero().
 * Le <h1> et le bouton existent aussi dans le contenu de repli Twig
 * (home/_hero_fallback.html.twig) pour le SEO et l'affichage avant React.
 */
export default function Hero({
  title,
  subtitle,
  stats,
  tagline,
  cta,
  background,
  portrait
}) {
  return /*#__PURE__*/_jsxs("section", {
    className: "cf2m-home-hero",
    children: [/*#__PURE__*/_jsxs("picture", {
      className: "cf2m-home-hero__bg",
      children: [/*#__PURE__*/_jsx("source", {
        media: "(max-width: 767.98px)",
        srcSet: background.mobile
      }), /*#__PURE__*/_jsx("img", {
        src: background.desktop,
        alt: "",
        fetchPriority: "high"
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "container cf2m-home-hero__inner",
      children: /*#__PURE__*/_jsxs("div", {
        className: "row align-items-center g-4",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "col-lg-7",
          children: [/*#__PURE__*/_jsxs("h1", {
            className: "cf2m-home-hero__title",
            children: [title, /*#__PURE__*/_jsx("span", {
              className: "cf2m-home-hero__subtitle",
              children: subtitle
            })]
          }), /*#__PURE__*/_jsx("dl", {
            className: "cf2m-home-hero__stats",
            children: stats.map(stat => /*#__PURE__*/_jsxs("div", {
              className: "cf2m-home-hero__stat",
              children: [/*#__PURE__*/_jsx("dt", {
                className: "cf2m-home-hero__stat-value",
                children: stat.value
              }), /*#__PURE__*/_jsx("dd", {
                className: "cf2m-home-hero__stat-label",
                children: stat.label
              })]
            }, stat.label))
          }), /*#__PURE__*/_jsx("p", {
            className: "cf2m-home-hero__tagline",
            children: tagline
          }), /*#__PURE__*/_jsx("a", {
            href: cta.url,
            className: "cf2m-home-hero__cta",
            children: cta.label
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "col-lg-5 d-none d-lg-flex justify-content-center",
          children: /*#__PURE__*/_jsxs("div", {
            className: "cf2m-home-hero__portrait",
            children: [/*#__PURE__*/_jsx("img", {
              className: "cf2m-home-hero__ring",
              src: portrait.ring,
              alt: "",
              "aria-hidden": "true"
            }), /*#__PURE__*/_jsx("img", {
              className: "cf2m-home-hero__photo",
              src: portrait.src,
              alt: portrait.alt,
              width: "340",
              height: "340"
            })]
          })
        })]
      })
    })]
  });
}