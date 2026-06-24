import React, { forwardRef } from "react";
import "../../tailwind.css";

const servicios = [
  {
    titulo: "Diseño de UI/UX de sitios web",
    descripcion: "Interfaces atractivas y experiencias de usuario intuitivas que combinan estética y funcionalidad. Sitios fáciles de usar, visualmente efectivos y adaptados a tus objetivos.",
  },
  {
    titulo: "Diseño de UI/UX móvil",
    descripcion: "Interfaces para aplicaciones móviles enfocadas en usabilidad, estética y rendimiento. Apps intuitivas, modernas y adaptadas a las necesidades de tus usuarios.",
  },
  {
    titulo: "Dashboards y software personalizado",
    descripcion: "Dashboards con interfaces claras y funcionales que facilitan la gestión de datos y mejoran la experiencia del usuario en plataformas digitales.",
    full: true,
  },
];

const Servicios = forwardRef((_, ref) => {
  return (
    // Se cambia min-h-screen por h-auto en móviles y min-h-screen en pantallas grandes md:
    <section 
      ref={ref} 
      className="w-full h-auto md:min-h-screen flex flex-col justify-center items-center px-4 py-16 sm:px-6 lg:px-20 max-w-7xl mx-auto"
    >
      {/* Contenedor wrapper para mantener la alineación izquierda de textos y grid */}
      <div className="w-full flex flex-col items-start">
        
        {/* Subtítulo: un poco más pequeño en móvil (text-xs) */}
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono mb-3">
          Lo que ofrezco
        </p>
        
        {/* Título: Escala de text-3xl en móvil a text-5xl y superiores */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white mb-8 md:mb-14">
          Servicios
        </h2>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {servicios.map((s, i) => (
            <div
              key={i}
              className={`bg-white/5 border border-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-2xl hover:bg-white/10 hover:border-[#D4FF00]/30 transition-all duration-300 ${s.full ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-white font-semibold text-base sm:text-lg 2xl:text-xl 4k:text-2xl mb-2 sm:mb-3">
                {s.titulo}
              </h3>
              <p className="text-gray-300 font-sans text-sm sm:text-base 2xl:text-lg 4k:text-xl leading-relaxed">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Contenedor del Botón: Se centra automáticamente en móviles y se alinea a la izquierda en pantallas md: */}
        <div className="mt-10 w-full flex justify-center md:justify-start">
          <a
            href="https://api.whatsapp.com/send?phone=573044266017&text=Hola%2C+quiero+más+información"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bebas text-xl sm:text-2xl backdrop-blur-sm bg-blue-950/40 rounded-[15px] transition-all duration-300 ease-in-out hover:!text-black hover:bg-[#D4FF00] hover:backdrop-blur-none py-2.5 px-6 sm:p-3"
            style={{ color: "#D4FF00", border: "1px solid #D4FF00" }}
          >
            Contáctame
          </a>
        </div>

      </div>
    </section>
  );
});

export default Servicios;
