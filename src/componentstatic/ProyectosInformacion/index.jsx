import React, { forwardRef } from "react";
import '../../tailwind.css';

const ProyectosInformacion = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
      <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono mb-4">
        Mi trabajo
      </p>
      <h2 className="text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white mb-6">
        Proyectos
      </h2>
      <p className="text-gray-300 font-sans text-lg lg:text-xl 2xl:text-2xl 4k:text-3xl leading-relaxed max-w-2xl">
        Proyectos que combinan diseño intuitivo y funcionalidades sólidas. Cada uno refleja mi compromiso con la calidad, el rendimiento y la experiencia del usuario.
      </p>
    </section>
  );
});

export default ProyectosInformacion;
