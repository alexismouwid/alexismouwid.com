import React from 'react';
import '../../../styles/tailwind-component.output.css';

const Servicios = ({ refServicios }) => {
  return (
    <div 
      id="serv-title"
      ref={refServicios}
      class="fixed w-full flex flex-col items-center justify-center z-1 px-4 py-16 relative bottom-228 lg:bottom-180"
    >
      <p 
        id="servicios-titulo"
        class="text-[2.4rem] lg:text-[3rem] font-extrabold mb-12 text-center bg-gradient-to-r from-[#D4FF00] via-[#0084ff] to-[#00ffd4] bg-clip-text text-transparent mx-auto relative top-3"
      >
        Ofrezco
      </p>
      
      <div 
        id="servicios-grid"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:relative lg:left-50 gap-2 max-w-6xl mx-auto w-full lg:-top-7"
      >
        <div 
          id="servicio-box"
          class="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 border border-sky-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125"
        >
          <h3 class="text-2xl font-semibold mb-8">Diseño de UI/UX de sitios web</h3>
          <p class="text-[0.6rem] lg:text-[1rem] lg:text-sm text-balance leading-relaxed ">
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>
        
        <div 
          id="servicio-box"
          class="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 to-purple-700 border border-purple-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125"
        >
          <h3 class="text-2xl font-semibold mb-4">Diseño de UI/UX de aplicaciones móviles</h3>
          <p class="text-[0.6rem]  lg:text-[1rem] lg:text-sm leading-relaxed">
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>
        
        <div 
          id="servicio-box"
          class="bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 to-emerald-700 border border-emerald-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition md:col-span-2 hover:contrast-125"
        >
          <h3 class="text-2xl  font-semibold mb-4">Diseño de dashboards de control y software</h3>
          <p class="text-[0.6rem] lg:text-[1rem] text-sm leading-relaxed">
            Diseño dashboards y software personalizados con interfaces claras y
            funcionales. Ofrezco soluciones visuales que facilitan la gestión de
            datos y mejoran la experiencia del usuario en plataformas digitales.
          </p>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a
          href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n"
          target="_blank"
          class="inline-block text-white px-6 py-3 bg-lime-300 rounded-lg hover:bg-lime-400 transition lg:relative
          lg:bottom-15"
        >
          Contáctame
        </a>
      </div>
    </div>
  );
};

export default Servicios;
