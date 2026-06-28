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
    <section ref={ref} className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-16 sm:py-20">
      <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono mb-3 sm:mb-4">
        Lo que ofrezco
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white mb-8 sm:mb-12">
        Servicios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 ">
        {servicios.map((s, i) => (
          <div
            key={i}
            className={`bg-white/5 border border-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-[#D4FF00]/30 transition-all duration-300 ${s.full ? "md:col-span-2" : ""}`}
          >
            <h3 className="text-white font-semibold text-sm sm:text-lg 2xl:text-xl mb-2 sm:mb-3">{s.titulo}</h3>
            <p className="text-gray-300 font-sans text-xs sm:text-base 2xl:text-lg leading-relaxed">{s.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12">
        <a
          href={`https://api.whatsapp.com/send?phone=573044266017&text=Hola%2C+quiero+más+información`}
          target="_blank"
          rel="noopener noreferrer"
                className="inline-block font-bebas text-2xl relative top-0 backdrop-blur-sm bg-blue-950/40 rounded-[8px] transition-all duration-300 ease-in-out hover:!text-black hover:bg-[#D4FF00] hover:backdrop-blur-none p-1 sm:p-3" 
style={{ color: "#D4FF00", border: "1px solid #D4FF00" }}
        >
          Contáctame
        </a>
      </div>
    </section>
  );
});

export default Servicios;
