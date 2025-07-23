import React from 'react';
import '../../../tailwind.css';

const Servicios = ({ refServicios }) => {
  return (
    <div 
      id="serv-title"
      ref={refServicios}
      class="fixed top-0 left-0  w-full h-screen items-center 
    flex flex-col justify-center pointer-events-none align-center
      "
         
    >
      <p 
        id="servicios-titulo"
        class="text-3xl  font-extrabold mb-12 text-center bg-gradient-to-r from-[#D4FF00] via-[#0084ff] to-[#00ffd4] bg-clip-text text-transparent mx-auto
        relative top-7 
        se:text-3xl se:top-20
        gs8:text-3xl gs8:top-15
        lg:right-12 lg:text-3xl lg:-top-1
        4k:-left-10 4k:-top-10 4k:text-7xl
        lg:top-10
        nhm:-left-3 nhm:text-5xl       "
      >
       Servicios 
      </p>
      
      <div 
        id="servicios-grid"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:relative lg:left-0 gap-4 max-w-6xl mx-auto w-full 
         relative
        se:top-16 se:text-xs
       gs8:top-15
        lg:top-10 lg:w-full "
      >
        <div 
          id="servicio-box"
          class="bg-gradient-to-br from-sky-900 via-gray-800 to-sky-700 border border-emerald-700  p-2 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125"
        >
          <h3 class="text-lg font-semibold mb-2 

            se:text-sm
          2xl:text-2xl
          4k:text-3xl">Diseño de UI/UX de sitios web </h3>
          <p class="text-[0.7rem] lg:text-[1rem] lg:text-sm text-balance leading-relaxed font-sans font-bold

            2xl:text-2xl
            4k:text-3xl">
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>
        
        <div 
          id="servicio-box"
          class="bg-gradient-to-br from-sky-900 via-gray-800 to-sky-700 to-purple-700 border border-emerald-700 p-2 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125"
        >
          <h3 class="text-lg font-semibold mb-2 
            se:text-sm
            2xl:text-2xl 4k:text-3xl
4:text-2xl">Diseño de UI/UX de aplicaciones móviles</h3>
          <p class="text-[0.6rem]  lg:text-[1rem] lg:text-sm leading-relaxed font-sans font-bold
 2xl:text-2xl

            4k:text-3xl">
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>
        
        <div 
          id="servicio-box"
          class="bg-gradient-to-br from-sky-900 via-gray-800 to-sky-700 to-emerald-700 border border-emerald-700 p-2 rounded-2xl shadow-lg hover:scale-[1.02] transition md:col-span-2 hover:contrast-125"
        >
          <h3 class="text-lg  font-semibold mb-2 
            se:text-sm
            2xl:text-2xl 4k:text-3xl
">Diseño de dashboards de control y software</h3>
          <p class="text-[0.7rem] lg:text-[1rem] text-sm leading-relaxed font-sans font-bold
 2xl:text-2xl

            4k:text-3xl
            ">
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
          class="inline-block text-white px-6 py-3 bg-lime-300 rounded-lg hover:bg-lime-400 transition
          relative bottom-8
          se:top-7 se:text-xs
           gs8:top-10 
           lg:top-5 font-bold font-sans
          nhm:text-2xl nhm:-top-1
          4k:-left-10 4k:text-4xl 4k:-top-1"
        >
          Contáctame
        </a>
      </div>
    </div>
  );
};

export default Servicios;
