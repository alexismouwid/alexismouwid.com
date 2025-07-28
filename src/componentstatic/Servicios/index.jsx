import React, { forwardRef } from "react";
import "../../tailwind.css";

const Servicios = forwardRef((_, ref) => {
  return (
    <section ref={ref} className="w-full h-[150dvh]  lg:h-screen   px-4 py-16   border:none

bg-static-mobile bg-static-mobile-parte-3
      text-white
        " >
      <h2 className=" font-extrabold  text-center text-gray-100
        se:text-4xl se:relative se:top-14 
        im:text-6xl
        lg:relative  lg:text-5xl
        laptop:relative  laptop:-top-10 
        nhm:text-6xl nhm:-top-7
        xl:text-7xl
        2xl:text-7xl
        4k:text-8xl ">
        Servicios      </h2>

      <div className="  
        grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto 
        relative top-20 

        lg:relative lg:top-20
nhm:w-[100%] nhm:-top-0
        2xl:w-[100%] 2xl:-top-5 
        4k:w-[100%] 4k:-top-8">
        <div className="bg-gradient-to-br from-sky-900 via-gray-800 to-sky-700 border border-emerald-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125" p>
          <h3 className="text-1xl font-semibold mb-2 
            im:text-2xl
            lg:text-xl
            nhm:text-2xl
            xl:text-3xl
         2xl:text-3xl
          4k:text-4xl
          ">Diseño de UI/UX de sitios web</h3>
          <p className="lg:text-xl leading-relaxed font-sans 
            im:text-xl
            nhm:text-xl
             xl:text-2xl
            2xl:text-2xl
            4k:text-3xl">
            Diseño interfaces atractivas y experiencias de usuario intuitivas que
            combinan estética y funcionalidad. Creo sitios web fáciles de usar,
            visualmente efectivos y adaptados a tus objetivos.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky-900 via-gray-800 to-sky-700 to-purple-700 border  border-emerald-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition hover:contrast-125">
          <h3 className="text-1xl font-semibold mb-2 
 im:text-2xl
            lg:text-xl
            nhm:text-2xl
            xl:text-3xl
            2xl:text-3xl
          4k:text-4xl">Diseño de UI/UX de aplicaciones móviles</h3>
          <p className="lg:text-xl leading-relaxed font-sans 
            im:text-xl
            nhm:text-xl
2xl:text-2xl
            xl:text-2xl
            4k:text-3xl">
            Diseño interfaces y experiencias de usuario para aplicaciones móviles,
            enfocadas en usabilidad, estética y rendimiento. Creo apps intuitivas,
            modernas y adaptadas a las necesidades de tus usuarios.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky-900 via-gray-800 to-sky-700 to-emerald-700 border border-emerald-700 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition md:col-span-2 hover:contrast-125">
          <h3 className="text-1xl font-semibold mb-2 lg:text-xl 
            im:text-2xl
            nhm:text-2xl
            xl:text-3xl
            2xl:text-3xl
          4k:text-4xl">Diseño de dashboards de control y software</h3>
          <p className=" leading-relaxed font-sans lg:text-xl text-sm
            im:text-xl
nhm:text-xl
            xl:text-2xl
            2xl:text-2xl 4k:text-3xl">
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
          className="inline-block font-sans font-extrabold text-white px-6 py-3 bg-lime-300 text-white rounded-[5px] hover:bg-lime-400 transition hover:scale-110
          relative top-20
          im:text-2xl im:top-13
          lg:relative lg:top-10 
nhm:text-2xl nhm:-top-5
          xl:text-3xl
          2xl:-top-10 2xl:text-3xl
          4k:text-4xl 4k:-top-12" 
        >
          Contáctame
        </a>
      </div>
    </section>
  );
});

export default Servicios;

