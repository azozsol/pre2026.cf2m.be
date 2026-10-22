import logo from "../../assets/cf2m-logo.png";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { navFormations } from "../../data/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileFormationsOpen, setIsMobileFormationsOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const formationsRef = useRef(null);
  const aboutRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const g = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", g);
    return () => window.removeEventListener("scroll", g);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsFormationsOpen(false);
    setIsAboutOpen(false);
    setIsMobileFormationsOpen(false);
    setIsMobileAboutOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const g = (x) => {
      if (formationsRef.current && !formationsRef.current.contains(x.target)) {
        setIsFormationsOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(x.target)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", g);
    return () => document.removeEventListener("mousedown", g);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 h-[88px] flex items-center ${isScrolled ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#016baf]/10 py-0" : "bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2.5 relative z-50">
            <img
              src={logo}
              alt="CF2M - Centre de formation 2mille"
              className={`h-14 object-contain transition-all duration-300 ${!isScrolled && location.pathname === "/" ? "brightness-0 invert" : ""}`}
            />
          </Link>
          <nav
            className={`hidden lg:flex items-center gap-10 font-medium text-[15px] transition-colors ${!isScrolled && location.pathname === "/" ? "text-white/90" : "text-[#4b5563]"}`}
          >
            <div ref={formationsRef} className="relative">
              <button
                onClick={() => setIsFormationsOpen(!isFormationsOpen)}
                className="flex items-center gap-1.5 hover:text-[#016baf] transition-colors group relative"
              >
                Formations
                <ChevronDownIcon
                  className={`w-4 h-4 transition-all duration-300 ${!isScrolled && location.pathname === "/" ? "text-white/70 group-hover:text-white" : "text-[#9ca3af] group-hover:text-[#016baf]"} ${isFormationsOpen ? "rotate-180" : ""}`}
                />
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${!isScrolled && location.pathname === "/" ? "bg-white" : "bg-[#016baf]"}`}
                />
              </button>
              <AnimatePresence>
                {isFormationsOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 overflow-hidden"
                  >
                    <div className="px-4 pb-2 pt-1 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#9ca3af]">
                        Nos formations
                      </span>
                    </div>
                    {navFormations.map((g) => (
                      <Link
                        key={g.slug}
                        to={`/formations/${g.slug}`}
                        className="flex items-center justify-between px-4 py-2.5 hover:bg-[#FDFBF7] transition-colors group/item"
                      >
                        <span className="font-medium text-[#111827] group-hover/item:text-[#016baf] transition-colors text-sm">
                          {g.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${g.tag === "Ouvert" || g.tag === "En continu" ? "bg-[#059669]/10 text-[#059669]" : "bg-gray-100 text-gray-500"}`}
                        >
                          {g.tag}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/notre-histoire"
              className={`flex items-center transition-colors group relative ${!isScrolled && location.pathname === "/" ? "hover:text-white" : "hover:text-[#016baf]"}`}
            >
              Notre histoire
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${!isScrolled && location.pathname === "/" ? "bg-white" : "bg-[#016baf]"}`}
              />
            </Link>
            <Link
              to="/#recruteurs"
              className={`flex items-center transition-colors group relative ${!isScrolled && location.pathname === "/" ? "hover:text-white" : "hover:text-[#016baf]"}`}
            >
              Recruteurs
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${!isScrolled && location.pathname === "/" ? "bg-white" : "bg-[#016baf]"}`}
              />
            </Link>
            <div ref={aboutRef} className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={`flex items-center gap-1.5 transition-colors group relative ${!isScrolled && location.pathname === "/" ? "hover:text-white" : "hover:text-[#016baf]"}`}
              >
                À propos
                <ChevronDownIcon
                  className={`w-4 h-4 transition-all duration-300 ${!isScrolled && location.pathname === "/" ? "text-white/70 group-hover:text-white" : "text-[#9ca3af] group-hover:text-[#016baf]"} ${isAboutOpen ? "rotate-180" : ""}`}
                />
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${!isScrolled && location.pathname === "/" ? "bg-white" : "bg-[#016baf]"}`}
                />
              </button>
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 overflow-hidden"
                  >
                    <Link
                      to="/pixel-and-co"
                      className="flex items-center px-4 py-2.5 hover:bg-[#FDFBF7] transition-colors group/item"
                    >
                      <span className="font-medium text-[#111827] group-hover/item:text-[#016baf] transition-colors text-sm">
                        Pixel & Co
                      </span>
                    </Link>
                    <Link
                      to="/notre-histoire#cf2d"
                      className="flex items-center justify-between px-4 py-2.5 hover:bg-[#FDFBF7] transition-colors group/item"
                    >
                      <span className="font-medium text-[#111827] group-hover/item:text-[#016baf] transition-colors text-sm">
                        Le CF2D
                      </span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-full font-medium text-[15px] transition-all shadow-md ${!isScrolled && location.pathname === "/" ? "bg-white text-[#016baf] hover:bg-white/90 shadow-black/10" : "bg-[#016baf] hover:bg-[#015893] text-white shadow-[#016baf]/20"}`}
            >
              Nous contacter
            </Link>
          </div>
          <button
            className={`lg:hidden relative z-50 p-2 rounded-full transition-colors ${!isScrolled && location.pathname === "/" ? (isMobileMenuOpen ? "text-[#111827] bg-[#f5f4ef]" : "text-white bg-white/20 hover:bg-white/30") : "text-[#111827] bg-[#f5f4ef] hover:bg-[#e8e6df]"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-40 bg-[#FDFBF7] pt-28 px-6 pb-6 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-2 text-xl font-heading font-medium">
              <button
                onClick={() =>
                  setIsMobileFormationsOpen(!isMobileFormationsOpen)
                }
                className="flex items-center justify-between border-b border-[#e8e6df] pb-4 pt-2 w-full text-left"
              >
                Formations
                <ChevronDownIcon
                  className={`w-5 h-5 text-[#9ca3af] transition-transform duration-300 ${isMobileFormationsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isMobileFormationsOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-4 space-y-1">
                      {navFormations.map((g) => (
                        <Link
                          key={g.slug}
                          to={`/formations/${g.slug}`}
                          className="flex items-center justify-between py-2.5 text-base font-medium text-[#4b5563] hover:text-[#016baf] transition-colors"
                        >
                          {g.name}
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${g.tag === "Complet" ? "bg-gray-100 text-gray-500" : "bg-[#059669]/10 text-[#059669]"}`}
                          >
                            {g.tag}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                className="flex items-center justify-between border-b border-[#e8e6df] pb-4 pt-2 w-full text-left"
              >
                À propos
                <ChevronDownIcon
                  className={`w-5 h-5 text-[#9ca3af] transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {isMobileAboutOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 pb-4 space-y-1">
                      <Link
                        to="/pixel-and-co"
                        className="flex items-center justify-between py-2.5 text-base font-medium text-[#4b5563] hover:text-[#016baf] transition-colors"
                      >
                        Pixel & Co
                      </Link>
                      <Link
                        to="/notre-histoire#cf2d"
                        className="flex items-center justify-between py-2.5 text-base font-medium text-[#4b5563] hover:text-[#016baf] transition-colors"
                      >
                        Le CF2D
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                to="/notre-histoire"
                className="flex items-center justify-between border-b border-[#e8e6df] pb-4 pt-2 w-full text-left"
              >
                Notre histoire
              </Link>
              <Link
                to="/#recruteurs"
                className="flex items-center justify-between border-b border-[#e8e6df] pb-4 pt-2 w-full text-left"
              >
                Recruteurs
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-between border-b border-[#e8e6df] pb-4 pt-2"
              >
                Nous contacter
              </Link>
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <Link
                to="/contact"
                className="w-full bg-[#016baf] text-white px-6 py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#016baf]/20"
              >
                Nous contacter
              </Link>
              <div className="text-center text-[#6b7280] text-sm mt-4">
                {"© "}
                {new Date().getFullYear()}
                {" CF2M"}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
