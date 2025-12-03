// src/layouts/mainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar.jsx";
import Footer from "@/components/navigation/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-gray-100 antialiased">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0d1117]/90 backdrop-blur-lg shadow-md border-b border-white/5">
        <Navbar />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto pt-24 px-4 md:px-8">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
}
