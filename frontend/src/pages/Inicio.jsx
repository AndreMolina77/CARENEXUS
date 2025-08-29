import React from "react";
// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenido a Carenexus
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Tu plataforma confiable para conectar pacientes, doctores y servicios médicos con eficiencia y tecnología.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition">
          Empezar ahora
        </button>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Citas Médicas</h3>
            <p>Agenda citas fácilmente con especialistas certificados en línea o presencial.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Historial Clínico</h3>
            <p>Accede a tu historial médico desde cualquier dispositivo, de forma segura.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Atención 24/7</h3>
            <p>Consulta médica en línea las 24 horas, con profesionales disponibles al instante.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
