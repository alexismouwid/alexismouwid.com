import React, { forwardRef } from 'react';
import '../../../tailwind.css';

const HeroSection = forwardRef((props, ref) => {
  return (
    <div 
      id="hero-section" 
      class="fixed  w-full h-dvh flex flex-col justify-center pointer-events-none z-1 lg:left-60


      im:relative im:left-20
      laptop:left-100
      xl:left-120
      2xl:left-120
      4k:left-170
      ultrawide:left-220
      
      " 
      ref={ref}
    >
      <div id="hero-inner" class="relative 
         pointer-events-auto z-1 bottom-10 

        sm:bottom-20 px-4 sm:px-0
        ">
        {/* Títulos principales */}
        <div id="el-h1" class="text-center sm:text-left">
          <p id="yo-puedo" class="


            se:text-4xl
            xr:text-5xl
            12p:text-5xl
            12pm:text-6xl
            p7:text-6xl
            gs8:text-4xl
            im:text-7xl
            sp7:text-8xl
             








            text-5xl sm:text-5xl lg:text-5xl text-white relative top-1 mb-7">
            Yo puedo
          </p>
          <p id="visco" class="
           
            se:text-5xl
            xr:text-6xl
            12p:text-6xl
            12pm:text-7xl
            p7:text-7xl
            gs8:text-5xl
            im:text-8xl
            sp7:text-9xl



            text-6xl sm:text-6xl lg:text-8xl text-[#D4FF00] relative top-1 ">
            Visualizar
          </p>
          <p id="yo-puedo" class="

            se:text-4xl
            xr:text-5xl
            12p:text-5xl
            12pm:text-6xl
            p7:text-6xl
            gs8:text-4xl
            im:text-7xl
            sp7:text-8xl



            text-5xl sm:text-5xl lg:text-7xl text-white relative top-1 mt-7">
            Su Idea
          </p>
        </div>

        {/* Texto descriptivo */}
        <p 
          id="cuento" 
          class="

           se:text-lg
            xr:text-2xl
            12p:text-2xl
          12pm:text-3xl
            p7:text-2xl
            gs8:text-xl
          im:text-2xl
          sp7:text-3xl
          gzf:text-sm

          font-bebas text-balance p-4 sm:p-6 mx-auto sm:mx-0 text-center sm:text-left text-white text-2xl sm:text-2xl lg:text-3xl max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] relative top-5"
        >
          Cuento con el conocimiento y las herramientas necesarias
        </p>

        {/* Botón de contacto */}
        <div class="text-center sm:text-left">
          <a
            href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+informacion"
            target="_blank"
            rel="noopener noreferrer"
            id="button-static"
            class="inline-block font-bebas text-2xl sm:text-2xl relative top-5 text-white backdrop-blur-sm bg-transparent border border-[#D4FF00] rounded-[2px] transition-all duration-300 ease-in-out hover:text-black hover:bg-[#D4FF00] hover:backdrop-blur-none p-2 sm:p-3 hover:contrast-125 relative top-10"
          >
            Contactame Ahora
          </a>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
