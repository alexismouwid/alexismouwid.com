import React, { useState, forwardRef } from "react";
import { useVisibilityObserver } from "../../../utils/useVisibilityObserver";
import '../../../tailwind.css';

const preguntas = [
  {
    pregunta: "¿De dónde obtuviste tus conocimientos?",
    respuesta: "A través de formación autodidacta, cursos especializados y experiencia práctica.",
  },
  {
    pregunta: "¿Cuánto cobras por un proyecto?",
    respuesta: "Los precios varían según la complejidad y duración del proyecto. ¡Contáctame para una cotización!",
  },
  {
    pregunta: "¿Cómo puedo ayudarte a hacer crecer tu negocio?",
    respuesta: "Puedo ayudarte a destacar con diseños atractivos y funcionales que mejoran la experiencia del usuario, impulsan la interacción y fortalecen tu presencia digital.",
  },
];

const Preguntas = forwardRef((props, ref) => {
  useVisibilityObserver(".ejeX");

  const [activa, setActiva] = useState(null);
  const togglePregunta = (index) => {
    setActiva(activa === index ? null : index);
  };

  return (
    <div 
      ref={ref} 
      id="preguntas-contenedor"
      class="fixed z-1 mx-auto  
           left-0 right-0 mx-auto
      

      overflow-x-hidden
      top-30
      overflow-y-auto
       max-h-screen 
      lg:top-15 lg:left-20
      nhm:top-30
      laptop:top-20
      2xl:top-35
              
      w-full max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
    >
      <div id="preguntas-left" class="flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 id="preguntas-titulo" class="text-2xl lg:text-4xl font-extrabold text-[#D4FF00] mb-6 relative
          lg:left-80 lg:-top-5
          md:text-4xl md:mb-20
          laptop:left-120 laptop:-top-10">
          Preguntas <br class="hidden sm:inline" /> frecuentes
        </h2>
        <div id="preguntas-image" class="w-50 h-50 sm:w-80 sm:h-80 lg:w-70 lg:h-70  overflow-hidden rounded-xl shadow-lg">
          <img
            src="./diseño.jpg"
            alt="preguntas"
            id="image-proyect"
            class="w-full h-full object-cover  mask-radial-at-center mask-radial-from-70% mask-radial-to-90%"
          />
        </div>
      </div>

      <div id="preguntas-right" class="flex flex-col gap-4 relative lg:left-20">
        {preguntas.map((item, index) => (
          <div
            key={index}
            id="preguntas-item"
            class="bg-gray-800 border border-gray-700 rounded-xl shadow p-4 lg:w-210 lg:h-22 font-bebas lg:text-2xl lg:relative right-70 top-30 hover:contrast-125 transition"
          >
            <div
              id="preguntas-pregunta"
              class="ejeX flex justify-between items-center cursor-pointer text-white font-medium"
              onClick={() => togglePregunta(index)}
            >
              <span>{item.pregunta}</span>
              <span id="icono" class="text-xl font-bold">
                {activa === index ? "−" : "+"}
              </span>
            </div>
            {activa === index && (
              <div id="preguntas-respuesta" class="mt-2 text-[1rem] text-sm text-white">
                {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Preguntas;
