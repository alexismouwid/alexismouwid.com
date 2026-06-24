import React, { useState, forwardRef } from "react";
import { useVisibilityObserver } from "../../../utils/useVisibilityObserver";
import '../../../tailwind.css';

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
      className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center pointer-events-auto px-6 lg:px-20"
    >
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-12 items-center lg:items-start">

        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start gap-6">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono mb-4">FAQ</p>
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl 4k:text-7xl font-bold text-white">
              Preguntas<br />frecuentes
            </h2>
          </div>
          <img
            src="./diseño.jpg"
            alt="preguntas"
            className="w-64 h-64 lg:w-72 lg:h-72 4k:w-96 4k:h-96 object-cover rounded-2xl mask-radial-at-center mask-radial-from-70% mask-radial-to-90%"
          />
        </div>

        <div className="w-full lg:w-[60%] flex flex-col gap-3">
          {preguntas.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#D4FF00]/30 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              onClick={() => togglePregunta(index)}
            >
              <div className="ejeX flex justify-between items-center text-white font-semibold font-sans text-base 2xl:text-lg 4k:text-xl">
                <span>{item.pregunta}</span>
                <span className="text-[#D4FF00] text-xl font-bold ml-4 flex-shrink-0">
                  {activa === index ? "−" : "+"}
                </span>
              </div>
              {activa === index && (
                <p className="mt-3 text-gray-300 font-sans text-sm 2xl:text-base 4k:text-lg leading-relaxed">
                  {item.respuesta}
                </p>
              )}
            </div>
          ))}

          <div className="mt-6">
            <a
              href={`https://api.whatsapp.com/send?phone=573044266017&text=Hola%2C+quiero+más+información`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-semibold text-white border border-[#D4FF00] px-6 py-3 rounded-sm text-sm  lg:text-[1rem] 4k:text-2xl hover:!text-black hover:bg-[#D4FF00] hover:backdrop-blur-none  transition-all duration-300"
          style={{ color: "#D4FF00", border: "1px solid #D4FF00" }}    >
              ¡Empecemos a trabajar juntos!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Preguntas;
