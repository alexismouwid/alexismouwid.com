import React, { useEffect } from "react";
import "../../tailwind.css";
const Contacto = () => {

  return (
    <div class="w-full  lg:h-[500px] h-dvh bg-transparent p-2 text-center relative lg:top-30 lg:right-30 flex flex-col gap-3 top-50 
      im:top-85
      
      lg:-left-20
      
      nhm:top-50 nhm:w-[35%]
      2xl:top-60
      4k:top-80 4k:right-50">

      <h1 className="
nh:text-[2rem]
        4k:text-[4rem]
       "> 
        Yo puedo
        <h2 id="visualizar" class="text-[#D4FF00] mt-7 mb-7 4k:text-[4rem]  3xl:text-[8rem] ">Visualizar</h2>
        Su Idea
      </h1>
      <p id="cuento" class="text-balance p-1 mx-auto font-sans font-bold 

        nhm:text-[1.2rem]
2xl:text-[1.4rem]
        4k:text-[1.8rem] 4k:relative 4k:top-10
      ">
        Cuento con el conocimiento y las herramientas necesarias
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información"
        target="_blank"
        rel="noopener noreferrer"
        class="font-sans font-bold text-gray-100 backdrop-blur-sm bg-transparent border border-[#D4FF00] rounded-[2px] transition-all duration-300 ease-in-out relative top-14 text-[1rem] px-6 py-3 cursor-pointer hover:text-black hover:bg-[#D4FF00] hover:backdrop-blur-none 
        w-[12rem] mx-auto
        lg:w-[13rem] lg:text-[1rem] lg:relative lg:top-5
        4k:w-[15rem] 4k:text-[1.6rem]"
      >
        Contactame Ahora
      </a>
    </div>
  );
};

export default Contacto;

