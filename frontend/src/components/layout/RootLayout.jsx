import { Outlet, ScrollRestoration } from "react-router";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const RootLayout = () => (
  <div className="min-h-screen bg-[#FDFBF7] text-[#111827] selection:bg-[#016baf] selection:text-white font-sans">
    <Navbar />
    <Outlet />
    <Footer />
    <ScrollRestoration />
  </div>
);
