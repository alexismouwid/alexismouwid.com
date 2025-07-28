import React, { useState, forwardRef } from "react";
import "../../tailwind.css";

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
      class="w-full  mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-gray-950 

      "
    >
      <div class=" flex flex-col items-center 
 text-center 
        lg:items-startlg:text-left 
        4k:relative 4k:left-60 4k:top-10">
        <h2 class="text-4xl font-extrabold text-[#D4FF00] mb-6 relative



          se:left-0
          lg:left-50 lg:text-4xl
            

          nhm:left-60 nhm:-top-10 nhm:text-5xl
          xl:text-5xl
          4k:text-6xl 4k:relative 4k:-top-20" >
      
          Preguntas <br class="hidden sm:inline " /> frecuentes
        </h2>
        <div class="w-70 h-70 sm:w-80 sm:h-80 overflow-hidden rounded-xl shadow-lg 

          xl:relative xl:left-20 xl:bottom-5
          4k:w-100 4k:h-100 4k:relative 4k:-top-20">
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
            class="bg-gray-800 border border-gray-700 rounded-xl shadow p-4  min-h-fit pb-6
            
            font-bebas
            relative  right-70  top-30 
            se:text-2xl  se:left-5 se:-top-5
            12p:text-xl
             gs8:text-sm gs8:left-0 gs8:-top-0
            im:text-3xl im:w-150 im:h-25 im:left-18 im:-top-10
            sp7:text-2xl sp7:w-160 sp7:h-25 sp7:left-30 sp7:top-0
            sd:text-xl sd:w-120 sd:h- sd:left-0 sd:top-0
            gzf5:text-2xl gzf5:w-75 gzf5:h-30 gzf5:left-0 gzf5:-top-10
            sa:text-xl sa:w-90 sa:h-25
            lg:text-2xl lg:w-130 lg:h-22  lg:-left-25 lg:top-30
            laptop:relative laptop:top-30
            nhm:text-2xl nhm:w-160 nhm:h-22 nhm:-left-40
            xl:text-2xl xl:w-210 xl:h-22 xl:-left-70
            2xl:text-2xl 2xl:w-130 2xl:h-22 2xl:-left-40
            hover:contrast-125 transition
            4k:text-4xl 4k:w-230 4k:h-30 4k:relative 4k:top-30 4k:-left-80" 
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
              <div class="mt-2 lg:text-[1rem] font-sans text-white text-sm text-gray-300 whitespace-normal overflow-hidden
                gzf5:text-xl
                im:text-xl
                azf:text-2xl
                ">
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

