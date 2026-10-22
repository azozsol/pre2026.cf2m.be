import { CalendarCheckIcon, XIcon } from "lucide-react";
import { useState } from "react";

export const InfoSessionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    age: "",
    niveauEtudes: "",
    demandeurEmploi: false,
  });
  const [submitted, setSubmitted] = useState(false);
  if (!isOpen) return null;
  const handleSubmit = (u) => {
    u.preventDefault();
    setSubmitted(true);
  };
  const handleChange = (u) => {
    const { name, value, type } = u.target;
    setFormData((m) => ({
      ...m,
      [name]: type === "checkbox" ? u.target.checked : value,
    }));
  };
  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 outline-none transition-all";
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 md:p-10"
        onClick={(u) => u.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <XIcon className="w-5 h-5 text-gray-500" />
        </button>
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto">
              <CalendarCheckIcon className="w-8 h-8 text-[#059669]" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#111827]">
              Inscription reçue !
            </h3>
            <p className="text-[#6b7280]">
              Vous recevrez un email de confirmation avec la date et les détails
              pratiques de la séance d'info.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#059669] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#047857] transition-colors"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#059669]/10 rounded-xl flex items-center justify-center">
                <CalendarCheckIcon className="w-5 h-5 text-[#059669]" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#111827]">
                Séance d'info
              </h3>
            </div>
            <p className="text-[#6b7280] mb-8">
              Inscrivez-vous à notre prochaine séance d'information gratuite et
              sans engagement.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Âge *
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="18"
                    max="99"
                    value={formData.age}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Niveau d'études *
                  </label>
                  <select
                    name="niveauEtudes"
                    required
                    value={formData.niveauEtudes}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Sélectionner</option>
                    <option value="aucun">Aucun diplôme</option>
                    <option value="ceb">CEB</option>
                    <option value="ce1d">CE1D</option>
                    <option value="cess">CESS</option>
                    <option value="bachelier">Bachelier</option>
                    <option value="master">Master ou +</option>
                  </select>
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  name="demandeurEmploi"
                  checked={formData.demandeurEmploi}
                  onChange={handleChange}
                  className="mt-0.5 w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669] accent-[#059669]"
                />
                <span className="text-sm text-[#374151]">
                  Je suis inscrit·e comme demandeur·euse d'emploi (Actiris /
                  Forem / VDAB)
                </span>
              </label>
              <button
                type="submit"
                className="w-full bg-[#059669] text-white py-4 rounded-full font-semibold text-lg hover:bg-[#047857] transition-colors mt-4"
              >
                S'inscrire à la séance d'info
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
