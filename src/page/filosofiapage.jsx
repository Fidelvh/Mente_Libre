/**
 * FilosofiaPage.jsx
 *
 * Página independiente para mostrar la filosofía del proyecto Mente Libre.
 * Usa el componente Filosofia para reutilizar diseño y animaciones.
 */

/* import Layout from '../components/layout'
import Filosofia from '../components/filosofia' 
import Programas from '../components/programas' ( REEMPLAZADO )*/

import React, { useEffect } from "react";
import Layout from "../components/layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FilosofiaPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Layout>
      {/* Hero con imagen de fondo */}
      <section
        className="hero-section text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url('src/assets/filosofia/filosofiahero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        data-aos="fade-in"
      >
        <h1
          className="display-4 fw-bold text-center"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          Filosofía
        </h1>
      </section>

      {/* Introducción */}
      <section className="container py-5" data-aos="fade-up">
        <h2 className="fw-bold">Introducción</h2>
        <p>
          Vivimos en una época marcada por la virtualización de la vida y la
          economía. Automatización del pensamiento y desconexión emocional, en
          este contexto, surge una necesidad urgente de una transformación
          profunda que devuelva a las personas al ser.
        </p>
        <p>
          Desde esta premisa nace el concepto de <strong>Mente Libre</strong>,
          una invitación a repensar la vida y reconectar con lo esencial.
        </p>
      </section>

      {/* Qué está ocurriendo / Qué proponemos */}
      <section className="container py-9" data-aos="fade-up">
        <div className="row">
          {/* Columna 1 */}
          <div className="col-md-6">
            <h3>¿Qué está ocurriendo?</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-emoji-frown text-warning me-2"></i>
                Las personas están desconectadas de sus emociones.
              </li>
              <li className="mb-3">
                <i className="bi bi-cpu text-warning me-2"></i>
                La vida moderna ha automatizado los procesos mentales,
                eliminando la reflexión.
              </li>
              <li className="mb-3">
                <i className="bi bi-diagram-3 text-warning me-2"></i>
                Las redes sociales manipulan la percepción individual a través
                del algoritmo.
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="col-md-6">
            <h3>¿Qué proponemos?</h3>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-arrow-counterclockwise text-warning me-2"></i>
                Desaprender las formas tradicionales y automáticas de
                pensamiento.
              </li>
              <li className="mb-3">
                <i className="bi bi-lightbulb text-warning me-2"></i>
                Reconectarte con el poder creador del pensamiento.
              </li>
              <li className="mb-3">
                <i className="bi bi-eye text-warning me-2"></i>
                Comprender que la mente no lo es todo; hay un sentir y un ser
                presentes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Definiciones clave */}
      <section
        className="container py-5 text-center"
        style={{
          background: "linear-gradient(180deg, #fdfcfb 0%, #e2d1c3 100%)",
          borderRadius: "10px",
        }}
        data-aos="fade-up"
      >
        <h3 className="mb-4 fw-bold">Definiciones clave</h3>
        <div className="row">
          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">Mente</h5>
                <p>
                  Mente instrumental del alma; traduce pensamientos profundos en
                  ideas y acciones concretas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">Libre</h5>
                <p>
                  No estar sujeto a dogmas ni juicios, liberado del
                  condicionamiento consciente.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold">Inteligencia</h5>
                <p>
                  Observar sin juicio, aprender y actuar con atención plena para
                  crear comprensión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
