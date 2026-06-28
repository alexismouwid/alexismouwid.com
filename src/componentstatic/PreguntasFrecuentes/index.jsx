import React, { useState, forwardRef } from "react";
import "../../tailwind.css";

const preguntas = [
  {
    pregunta: "¿De dónde obtuviste tus conocimientos?",
    respuesta: "A través de formación autodidacta, cursos especializados y experiencia práctica en proyectos reales.",
  },
  {
    pregunta: "¿Cuánto cobras por un proyecto?",
    respuesta: "Los precios varían según la complejidad y duración del proyecto. ¡Contáctame para una cotización personalizada!",
  },
  {
    pregunta: "¿Cómo puedo ayudarte a hacer crecer tu negocio?",
    respuesta: "Puedo ayudarte a destacar con diseños atractivos y funcionales que mejoran la experiencia del usuario, impulsan la interacción y fortalecen tu presencia digital.",
  },
];

const PreguntasFrecuentes = forwardRef((props, ref) => {
  const [activa, setActiva] = useState(null);

  return (
    <div ref={ref} className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-16 sm:py-20 max-w-5xl mx-auto">
      <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono mb-3 sm:mb-4">
        FAQ
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white mb-8 sm:mb-14">
        Preguntas<br />frecuentes
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start">
        <div className="w-full lg:w-[40%]">
          <img
            src="./diseño.jpg"
            alt="preguntas"
            className="w-full max-w-xs sm:max-w-sm rounded-xl sm:rounded-2xl object-cover mask-radial-at-center mask-radial-from-50% mask-radial-to-90%"
          />
        </div>

        <div className="w-full lg:w-[60%] flex flex-col gap-2 sm:gap-3">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-5 hover:border-[#D4FF00]/30 transition-all duration-300 cursor-pointer"
              onClick={() => setActiva(activa === index ? null : index)}
            >
              <div className="flex justify-between items-center text-white font-semibold font-sans text-sm sm:text-base 2xl:text-lg">
                <span>{item.pregunta}</span>
                <span className="text-[#D4FF00] text-lg sm:text-xl font-bold ml-4 flex-shrink-0">
                  {activa === index ? "−" : "+"}
                </span>
              </div>
              {activa === index && (
                <p className="mt-2 sm:mt-3 text-gray-300 font-sans text-xs sm:text-sm 2xl:text-base leading-relaxed">
                  {item.respuesta}
                </p>
              )}
            </div>
          ))}

          <div className="mt-6 sm:mt-8">
                     </div>
        </div>
      </div>
    </div>
  );
});

export default PreguntasFrecuentes;
