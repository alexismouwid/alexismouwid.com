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
    <section ref={ref} className="w-full min-h-screen flex flex-col justify-center px-6 py-20 lg:px-20">
      <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono mb-4">
        Lo que ofrezco
      </p>
      <h2 className="text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white mb-14">
        Servicios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl">
        {servicios.map((s, i) => (
          <div
            key={i}
            className={`bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 hover:border-[#D4FF00]/30 transition-all duration-300 ${s.full ? "md:col-span-2" : ""}`}
          >
            <h3 className="text-white font-semibold text-lg 2xl:text-xl 4k:text-2xl mb-3">{s.titulo}</h3>
            <p className="text-gray-300 font-sans text-base 2xl:text-lg 4k:text-xl leading-relaxed">{s.descripcion}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="https://api.whatsapp.com/send?phone=573044266017&text=Hola%2C+quiero+más+información"
          target="_blank"
          className="inline-block font-bebas text-2xl relative top-0 bottom-5 backdrop-blur-sm bg-blue-950/40 rounded-[15px] transition-all duration-300 ease-in-out hover:!text-black hover:bg-[#D4FF00] hover:backdrop-blur-none p-2 sm:p-3"
    style={{ color: "#D4FF00", border: "1px solid #D4FF00" }}
        >
          Contáctame
        </a>
      </div>
    </section>
  );
});

export default Servicios;
