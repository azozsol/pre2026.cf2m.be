import { BuildingIcon } from "lucide-react";
import { Link } from "react-router";

export const RecruitersSection = () => (
  <section
    id="recruteurs"
    className="py-24 bg-[#111827] text-white relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f59e0b] rounded-full blur-[150px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />
    <div className="absolute bottom-10 left-10 w-48 h-48 border-b-2 border-l-2 border-[#f59e0b] rounded-bl-full border-dashed opacity-40 pointer-events-none" />
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 backdrop-blur-sm text-center">
        <div className="w-16 h-16 bg-[#f59e0b]/20 text-[#f59e0b] rounded-2xl flex items-center justify-center mx-auto mb-8">
          <BuildingIcon className="w-8 h-8" />
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">
          {"Entreprises & "}
          <span className="text-[#f59e0b]">Recruteurs</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          Vous cherchez vos futurs talents numériques ? Nos stagiaires sont
          formés aux dernières technologies, encadrés par des professionnels, et
          prêts à intégrer vos équipes pour un stage ou un emploi.
        </p>
        <Link
          to="/contact?type=recruteur"
          className="inline-flex bg-[#f59e0b] hover:bg-[#d97706] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-[#f59e0b]/20"
        >
          Proposer une offre
        </Link>
      </div>
    </div>
  </section>
);
