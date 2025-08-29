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

      
    </div>
  );
}
