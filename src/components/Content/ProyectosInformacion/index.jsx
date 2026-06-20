import React, { forwardRef } from "react";
import '../../../tailwind.css';

const ProyectosInformacion = forwardRef((props, ref) => {
  return (
    <section
      id="proyectos-info"
      className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center pointer-events-none px-6 lg:px-20"
    >
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono">
          Mi trabajo
        </p>
        <h2 className="text-4xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white">
          Proyectos
        </h2>
        <p className="text-gray-300 font-sans text-base lg:text-xl 2xl:text-2xl 4k:text-3xl leading-relaxed max-w-2xl">
          Presento proyectos que combinan diseño intuitivo y funcionalidades sólidas. Cada uno refleja mi compromiso con la calidad, rendimiento y experiencia del usuario.
        </p>
      </div>
    </section>
  );
});

export default ProyectosInformacion;
