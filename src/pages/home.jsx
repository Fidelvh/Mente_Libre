// src/page/home.jsx
import React from "react";
import heroImg from "@/assets/images/cordillera.png";
import Programas from "@/pages/public/programas/programas.jsx";
import Filosofia from "@/pages/public/filosofia/filosofia.jsx";
import Eventos from "@/pages/public/programas/eventos.jsx";
import NewsletterForm from "@/components/newsletterForm.jsx";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full overflow-hidden shadow-lg sm:rounded-lg">

        <div
          className="w-full h-[70vh] sm:h-[75vh] bg-cover bg-center flex items-center justify-center"

          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 w-full max-w-4xl text-center px-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-amber-300 mb-5 leading-tight">
              Un espacio seguro para tu bienestar emocional
            </h1>

            <p className="text-lg md:text-xl text-gray-100/90 max-w-2xl mx-auto mb-8">
              Acompañamiento consciente para calmar la mente, ordenar emociones y
              reconectar contigo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/login-register"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg transition"
              >
                Comenzar mi espacio
              </a>

              <a
                href="#filosofia"
                className="px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-indigo-700 text-lg transition"
              >
                Conocer la filosofía
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Filosofía */}
      <section id="filosofia" className="py-20">
        <Filosofia />
      </section>

      {/* Programas */}
      <section id="programas" className="py-20">
        <Programas />
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <NewsletterForm />
      </section>
    </>
  );
}
