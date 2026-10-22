import logo from "../../assets/cf2m-logo.png";
import {
  ArrowUpRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { Link } from "react-router";

export const Footer = () => (
  <footer className="bg-[#0f172a] text-[#94a3b8] py-24 md:py-32 relative overflow-hidden font-sans">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
        <div className="lg:col-span-5 pr-8">
          <Link
            to="/"
            className="flex items-center gap-3 mb-8 group inline-flex"
          >
            <img
              src={logo}
              alt="CF2M - Centre de formation 2mille"
              className="h-14 object-contain group-hover:-rotate-3 transition-transform duration-300 brightness-0 invert"
            />
          </Link>
          <p className="text-lg leading-relaxed font-medium text-[#cbd5e1] max-w-md mb-8">
            Centre de formation professionnelle aux métiers du numérique pour
            demandeurs d'emploi à Bruxelles. Acteur de l'économie sociale depuis
            40 ans.
          </p>
          <div className="flex gap-4">
            {["Facebook", "LinkedIn", "Instagram"].map((e) => (
              <a
                key={e}
                href="#"
                className="text-sm font-medium hover:text-white transition-colors border border-[#1e293b] px-4 py-2 rounded-full hover:bg-[#1e293b]"
              >
                {e}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-heading text-white font-bold text-lg mb-8 tracking-tight">
            Formations
          </h3>
          <ul className="space-y-4 font-medium">
            {[
              {
                name: "Web Developer",
                slug: "web-developer",
              },
              {
                name: "Digital Designer",
                slug: "digital-designer",
              },
              {
                name: "Tech PC & Réseaux",
                slug: "tech-pc-reseaux",
              },
              {
                name: "Animateur Digital",
                slug: "animateur-digital",
              },
              {
                name: "Chèques TIC",
                slug: "cheques-tic",
              },
              {
                name: "Aventure Digitale",
                slug: "aventure-digitale",
              },
            ].map((e) => (
              <li key={e.slug}>
                <Link
                  to={`/formations/${e.slug}`}
                  className="group flex items-center gap-1 hover:text-white transition-colors"
                >
                  <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#016baf]" />
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-heading text-white font-bold text-lg mb-8 tracking-tight">
            Informations
          </h3>
          <ul className="space-y-4 font-medium">
            {[
              "S'inscrire",
              "Espace Recruteurs",
              "Notre histoire",
              "Studio Pixel & Co",
              "Contact",
            ].map((e) => (
              <li key={e}>
                <a
                  href="#"
                  className="group flex items-center gap-1 hover:text-white transition-colors"
                >
                  <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#016baf]" />
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-heading text-white font-bold text-lg mb-8 tracking-tight">
            Nous contacter
          </h3>
          <ul className="space-y-6 font-medium">
            <li className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 group-hover:bg-[#016baf] group-hover:text-white transition-colors">
                <MapPinIcon className="w-4 h-4" />
              </div>
              <span className="pt-2 leading-tight">
                87-89 Avenue du Parc
                <br />
                1060 St-Gilles
              </span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 group-hover:bg-[#016baf] group-hover:text-white transition-colors">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <span className="tracking-wide">02/539 03 60</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0 group-hover:bg-[#016baf] group-hover:text-white transition-colors">
                <MailIcon className="w-4 h-4" />
              </div>
              <a
                href="mailto:info@cf2m.be"
                className="hover:text-white transition-colors"
              >
                info@cf2m.be
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center gap-6 font-medium text-sm text-[#64748b]">
        <p>
          {"© "}
          {new Date().getFullYear()}
          {" CF2M. Tous droits réservés."}
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Politique de confidentialité
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
);
