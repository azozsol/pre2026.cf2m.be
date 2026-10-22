import { motion } from "motion/react";
import { Link } from "react-router";
import { otherFormations } from "../../data/formations";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export const OtherFormations = ({ currentSlug }) => {
  const t = otherFormations.filter((n) => n.slug !== currentSlug).slice(0, 3);
  return (
    <section className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#016baf] mb-3 block">
              Aussi chez CF2M
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
              Autres formations
            </h2>
          </div>
          <Link
            to="/#formations"
            className="text-[#016baf] font-bold hover:text-[#059669] transition-colors flex items-center gap-2 group"
          >
            Voir tout le catalogue
          </Link>
        </div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          variants={staggerContainer}
        >
          {t.map((n) => (
            <motion.div key={n.slug} variants={fadeInUp}>
              <Link
                to={`/formations/${n.slug}`}
                className="bg-white border border-[#e5e7eb] rounded-[2rem] p-8 hover:border-[#016baf]/30 hover:shadow-lg transition-all duration-300 group flex items-start gap-6 h-full"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform ${n.color}`}
                >
                  {n.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#111827] mb-2 tracking-tight group-hover:text-[#016baf] transition-colors">
                    {n.title}
                  </h3>
                  <p className="text-[#6b7280] font-medium leading-relaxed">
                    {n.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
