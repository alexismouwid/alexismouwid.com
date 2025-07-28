import React, { useEffect, useState, forwardRef } from "react";
import '../../tailwind.css';
import { useVisibilityObserver } from "../../utils/useVisibilityObserver";

const ProyectosInformacion = forwardRef((props, ref) => {
  useVisibilityObserver(".ejeY");

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    
    <section className="w-full h-screen px-4 h-screen py-12 text-white bg-degrade-top flex flex-col gap-2 items-center  justify-center text-center">
      <p class=" se:text-5xl 
nhm:text-6xl
2xl:text-7xl
      4k:text-8xl"> Sección de proyectos</p>
      <p class="text-balance  width-text-center font-sans px-5  py-15 text-xl text-slate
        text-gray-300
        im:text-2xl
        lg:text-3xl
        nhm:text-3xl
        xl:text-4xl
2xl:text-4xl
        4k:text-5xl">Presento proyectos que combinan diseño intuitivo y funcionalidades sólidas.
Cada uno refleja mi compromiso con la calidad, rendimiento y experiencia del usuario. </p>
    </section>
  );
});

export default ProyectosInformacion;


