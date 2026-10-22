import { ChevronDownIcon, CircleCheckBigIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { fadeInUp } from "../../lib/animations";

export const ProgramSection = ({ data, accent, slug }) => {
  const isChequesTic = slug === "cheques-tic";
  const [activePhase, setActivePhase] = useState(0);
  return (
    <section className="py-24 lg:py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeInUp}
          >
            <span
              className="text-sm font-bold uppercase tracking-widest mb-4 block"
              style={{
                color: accent.primary,
              }}
            >
              Programme
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#111827] tracking-tight mb-6 leading-tight">
              {data.duration}
              {" pour"}
              <br />
              {"devenir "}
              <span
                style={{
                  color: accent.primary,
                }}
              >
                expert·e.
              </span>
            </h2>
            <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 shadow-sm">
              <div className="font-heading text-lg font-bold text-[#111827] mb-4">
                Organisation
              </div>
              <div className="space-y-3 text-[#4b5563] font-medium">
                <div className="flex justify-between items-start pb-3 border-b border-[#f3f4f6]">
                  <span className="shrink-0 mr-4">Horaires</span>
                  <span className="font-bold text-[#111827] text-right">
                    {data.schedule}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-[#f3f4f6]">
                  <span>Volume</span>
                  <span className="font-bold text-[#111827]">
                    {data.totalHours}
                  </span>
                </div>
                {data.stageHours !== "0h" && (
                  <div className="flex justify-between items-center">
                    <span>Stage</span>
                    <span className="font-bold text-[#111827]">
                      {data.stageHours}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-8 space-y-4">
            {data.phases.map((o, s) => {
              const c = activePhase === s;
              return (
                <motion.div
                  key={s}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: s * 0.1,
                  }}
                  className={`rounded-[1.5rem] border-2 transition-all duration-300 overflow-hidden ${c ? "bg-white shadow-md" : "border-[#e5e7eb] bg-white hover:border-[#d1d5db]"}`}
                  style={
                    c
                      ? {
                          borderColor: accent.primary,
                        }
                      : {}
                  }
                >
                  <button
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none"
                    onClick={() => setActivePhase(c ? null : s)}
                  >
                    <div className="flex items-center gap-6">
                      {!isChequesTic && (
                        <span
                          className="font-heading text-4xl lg:text-5xl font-black transition-colors"
                          style={{
                            color: c ? accent.primary : "#d1d5db",
                          }}
                        >
                          {o.num}
                        </span>
                      )}
                      <div>
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#111827] tracking-tight mb-1">
                          {o.title}
                        </h3>
                        <span className="text-[#6b7280] font-semibold">
                          {o.duration}
                        </span>
                      </div>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
                      style={
                        c
                          ? {
                              background: accent.primary,
                              color: "white",
                            }
                          : {
                              background: "#f3f4f6",
                              color: "#6b7280",
                            }
                      }
                    >
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-300 ${c ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                  <AnimatePresence>
                    {c && (
                      <motion.div
                        key="c"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 lg:px-8 lg:pb-10 pt-2 lg:ml-20">
                          <div className="grid sm:grid-cols-2 gap-4">
                            {o.skills.map((u, d) => (
                              <div key={d} className="flex items-start gap-3">
                                <CircleCheckBigIcon
                                  className="w-5 h-5 mt-0.5 shrink-0"
                                  style={{
                                    color: accent.primary,
                                  }}
                                />
                                <span className="text-[#4b5563] font-medium leading-relaxed">
                                  {u}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
