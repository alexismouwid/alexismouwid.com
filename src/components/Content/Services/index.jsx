import React from 'react';
import '../../../tailwind.css';

const servicios = [
  {
    titulo: "Diseño de UI/UX de sitios web",
    descripcion: "Diseño interfaces atractivas y experiencias de usuario intuitivas que combinan estética y funcionalidad. Creo sitios web fáciles de usar, visualmente efectivos y adaptados a tus objetivos.",
    full: false,
  },
  {
    titulo: "Diseño de UI/UX de aplicaciones móviles",
    descripcion: "Diseño interfaces y experiencias de usuario para aplicaciones móviles, enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas, modernas y adaptadas a las necesidades de tus usuarios.",
    full: false,
  },
  {
    titulo: "Diseño de dashboards de control y software",
    descripcion: "Diseño dashboards y software personalizados con interfaces claras y funcionales. Ofrezco soluciones visuales que facilitan la gestión de datos y mejoran la experiencia del usuario en plataformas digitales.",
    full: true,
  },
];

const Servicios = ({ refServicios }) => {
  return (
    <div
      id="serv-title"
      ref={refServicios}
      className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center pointer-events-auto px-6 lg:px-20"
    >
      <div className="w-full max-w-4xl flex flex-col gap-8">
        <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono">
          Lo que ofrezco
        </p>

        <h2 className="text-4xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicios.map((s, i) => (
            <div
              key={i}
              className={`bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/10 hover:border-[#D4FF00]/30 transition-all duration-300 ${s.full ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-white font-semibold text-base lg:text-lg 2xl:text-xl 4k:text-3xl mb-3">
                {s.titulo}
              </h3>
              <p className="text-gray-300 font-sans text-sm lg:text-base 2xl:text-lg 4k:text-2xl leading-relaxed">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>

        <a
          href={`https://api.whatsapp.com/send?phone=573044266017&text=Hola%2C+quiero+más+información`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-center inline-block font-sans font-semibold text-white border border-[#D4FF00] px-6 py-3 rounded-sm text-sm  lg:text-xl 4k:text-2xl hover:!text-black hover:bg-[#D4FF00] hover:backdrop-blur-none transition-all duration-300"
        style={{ color: "#D4FF00", border: "1px solid #D4FF00" }}   >
          Contáctame
        </a>
      </div>
    </div>
  );
};

export default Servicios;
