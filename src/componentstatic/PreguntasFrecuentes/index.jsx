import React, { useState, forwardRef } from "react";
import "../../styles/tailwind-component.output.css";

const preguntas = [
  {
    pregunta: "¿De dónde obtuviste tus conocimientos?",
    respuesta:
      "A través de formación autodidacta, cursos especializados y experiencia práctica.",
  },
  {
    pregunta: "¿Cuánto cobras por un proyecto?",
    respuesta:
      "Los precios varían según la complejidad y duración del proyecto. ¡Contáctame para una cotización!",
  },
  {
    pregunta: "¿Cómo puedo ayudarte a hacer crecer tu negocio?",
    respuesta:
      "Puedo ayudarte a destacar con diseños atractivos y funcionales que mejoran la experiencia del usuario, impulsan la interacción y fortalecen tu presencia digital.",
  },
];

const PreguntasFrecuentes = forwardRef((props, ref) => {

  const [activa, setActiva] = useState(null);
  const togglePregunta = (index) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <div
      ref={ref}
      class="w-full  mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-950"
    >
      <div class=" flex flex-col items-center lg:items-start text-center lg:text-left ">
        <h2 class="text-4xl font-extrabold text-[#D4FF00] mb-6 relative lg:left-140 lg:-top-10" >

          Preguntas <br class="hidden sm:inline" /> frecuentes
        </h2>
        <div class="w-70 h-70 sm:w-80 sm:h-80 overflow-hidden rounded-xl shadow-lg">
          <img
            src="./diseño.jpg"
            alt="preguntas"
            class="w-full h-full object-cover
             mask-radial-at-center mask-radial-from-50% mask-radial-to-90%"
          />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        {preguntas.map((item, index) => (
          <div
            key={index}
            class="bg-gray-800 border border-gray-700 rounded-xl shadow p-4 
            lg:w-220 lg:h-22 
            font-bebas
            lg:text-2xl
            lg:relative 
            right-70  top-30 
            hover:contrast-125 transition"
          >
            <div
              class="flex justify-between items-center cursor-pointer text-white font-medium "
              onClick={() => togglePregunta(index)}
            >
              <span>{item.pregunta}</span>
              <span class="text-xl font-bold text-[#D4FF00]">
                {activa === index ? "−" : "+"}
              </span>
            </div>
            {activa === index && (
              <div class="mt-2 lg:text-[1rem] font-sans text-white text-sm text-gray-300">
                {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default PreguntasFrecuentes;

