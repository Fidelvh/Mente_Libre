// src/pages/public/filosofiapage.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion/dist/framer-motion";

export default function FilosofiaPage() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (<>
      <section
        className="text-white h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('/src/assets/images/filosofia/filosofiahero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-aos="fade-in"
      >
        <div className="text-center w-full bg-black/40 py-20">
          <h1 className="text-5xl font-bold text-indigo-300">Filosofía</h1>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-4">Introducción</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Vivimos en una época marcada…
        </p>
      </section>
    </>
  );
}
