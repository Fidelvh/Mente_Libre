// src/layouts/mainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/navbar.jsx";
import Footer from "@/components/navigation/footer.jsx";

export default function MainLayout() {
  return (
    <div className="main-layout">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0d1117]/10 backdrop-blur-lg shadow-md  border-white/5 border-b">
        <Navbar />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full pt-24">
        <div className="ml-container">
          <Outlet />
        </div>
      </main>


      {/* FOOTER */}
      <footer className="mt-12">
        <Footer />
      </footer>
    </div>
  );
}
