import { Link } from "react-router";

export const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6 pt-24">
    <div className="text-8xl font-extrabold text-slate-200">404</div>
    <h1 className="text-3xl font-extrabold text-slate-900">Page introuvable</h1>
    <Link
      to="/"
      className="bg-[#016baf] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#015893] transition-colors"
    >
      Retour à l'accueil
    </Link>
  </div>
);
