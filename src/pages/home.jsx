// src/page/home.jsx
import React from "react";
import heroImg from "@/assets/images/cordillera.png"; 
import Programas from "@/pages/public/programas/programas.jsx";
import Filosofia from "@/pages/public/filosofia/filosofia.jsx";
import Eventos from "@/pages/public/eventos/eventos.jsx";
import NewsletterForm from "@/components/newsletterForm.jsx";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full rounded-lg overflow-hidden shadow-lg"
        aria-hidden="false"
      >
        <div
          className="w-full h-[70vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="w-full max-w-4xl text-center px-4">
            <div className="bg-black/40 p-8 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 drop-shadow-md">Mente Libre</h1>
              <p className="text-md md:text-lg text-gray-100/90 max-w-2xl mx-auto">
                Reconecta con tu presencia — herramientas prácticas para calma, foco y crecimiento interior.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#programas" className="ml-btn">Ver programas</a>
                <a href="#filosofia" className="ml-btn bg-white text-indigo-700 hover:bg-gray-100">Conócenos</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section id="filosofia" className="mt-12">
        <Filosofia />
      </section>

      {/* Programas */}
      <section id="programas" className="mt-8">
        <Programas />
      </section>

      {/* Newsletter */}
      <section className="mt-12">
        <NewsletterForm />
      </section>
    </>
  );
}
