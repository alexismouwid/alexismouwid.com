import React from "react";
import "../../tailwind.css";

const Contacto = () => {
  return (
    <div className="w-full lg:w-[35%] min-h-screen lg:min-h-0 flex flex-col justify-center gap-6 p-8 lg:p-6 text-left">
      <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono">
        Desarrollo Web · Cali, Colombia
      </p>
      <h1 className="text-6xl sm:text-7xl lg:text-4xl xl:text-5xl 2xl:text-6xl 4k:text-7xl font-bold leading-tight text-white">
        Yo puedo{" "}
        <span id="visualizar" className="text-[#D4FF00] block">
          Visualizar
        </span>
        Su Idea
      </h1>
      <p id="cuento" className="text-gray-300 font-sans text-lg sm:text-xl lg:text-lg 2xl:text-xl max-w-sm leading-relaxed">
        Cuento con el conocimiento y las herramientas necesarias para convertir tu idea en una solución web real.
      </p>
      <a
        href={`https://api.whatsapp.com/send?phone=573044266017&text=Hola%2C+quiero+más+información`}
        target="_blank"
        rel="noopener noreferrer"
       className="inline-block font-bebas text-2xl relative top-5 backdrop-blur-sm bg-blue-950/40 rounded-[10px] transition-all duration-300 ease-in-out hover:!text-black hover:bg-[#D4FF00] hover:backdrop-blur-none p-2 sm:p-3" 
style={{ color: "#D4FF00", border: "1px solid #D4FF00" }}
      >
        Contáctame Ahora
      </a>
    </div>
  );
};

export default Contacto;




