import React from "react";

const Contacto = () => {
  return (
    <div className="w-full lg:w-[30%] lg:h-[500px] h-dvh bg-transparent p-2 text-center relative top-40 flex flex-col gap-3 ">
      <h1>
        Yo puedo
        <h2 className="text-[#D4FF00] mt-7 mb-7">Visualizar</h2>
        Su Idea
      </h1>
      <p className="text-balance p-6 mx-auto">
        Cuento con el conocimiento y las herramientas necesarias
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+más+información"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bebas text-[#D4FF00] backdrop-blur-sm bg-transparent border border-[#D4FF00] rounded-[2px] transition-all duration-300 ease-in-out relative top-16 text-[1.2rem] px-6 py-3 cursor-pointer hover:text-black hover:bg-[#D4FF00] hover:backdrop-blur-none 
        w-[12rem] mx-auto"
      >
        Contactame Ahora
      </a>
    </div>
  );
};

export default Contacto;

