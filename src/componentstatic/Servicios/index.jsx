import React, { forwardRef } from "react";
import "../../styles/tailwind-component.output.css";

const Servicios = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="w-full px-4 py-16 bg-[linear-gradient(to_right,_#0f2027,_#8e2de2)] text-white " >
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#D4FF00] via-[#0084ff] to-[#00ffd4] bg-clip-text text-transparent animate-shine">
        Servicios que ofrezco
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 border border-sky-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125" p>
          <h3 className="text-2xl font-semibold mb-2">Diseño de UI/UX de sitios web</h3>
          <p className="text-sm leading-relaxed">
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 to-purple-700 border border-purple-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125">
          <h3 className="text-2xl font-semibold mb-2">Diseño de UI/UX de aplicaciones móviles</h3>
          <p className="text-sm leading-relaxed">
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 to-emerald-700 border border-emerald-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition md:col-span-2 hover:contrast-125">
          <h3 className="text-2xl font-semibold mb-2">Diseño de dashboards de control y software</h3>
          <p className="text-sm leading-relaxed">
            Diseño dashboards y software personalizados con interfaces claras y
            funcionales. Ofrezco soluciones visuales que facilitan la gestión de
            datos y mejoran la experiencia del usuario en plataformas digitales.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n"
          target="_blank"
          className="inline-block  text-white px-6 py-3 bg-lime-300 text-white rounded- hover:bg-lime-400 transition"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
});

export default Servicios;

