import React, { forwardRef } from 'react';
import '../../../styles/tailwind-component.output.css';

const HeroSection = forwardRef((props, ref) => {
  return (
    <div 
      id="hero-section" 
      class="fixed mx-auto w-full h-dvh flex flex-col justify-center pointer-events-none z-1" 
      ref={ref}
    >
      <div id="hero-inner" class="relative lg:mx-auto pointer-events-auto z-1 bottom-10 sm:bottom-20 px-4 sm:px-0">
        {/* Títulos principales */}
        <div id="el-h1" class="text-center sm:text-left">
          <p id="yo-puedo" class="text-5xl sm:text-5xl lg:text-7xl text-white relative top-1">
            Yo puedo
          </p>
          <p id="visco" class="text-6xl sm:text-6xl lg:text-8xl text-[#D4FF00] relative top-1">
            Visualizar
          </p>
          <p id="yo-puedo" class="text-5xl sm:text-5xl lg:text-7xl text-white relative top-1">
            Su Idea
          </p>
        </div>

        {/* Texto descriptivo */}
        <p 
          id="cuento" 
          class="font-bebas text-balance p-4 sm:p-6 mx-auto sm:mx-0 text-center sm:text-left text-white text-2xl sm:text-2xl lg:text-3xl max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] relative top-5"
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
