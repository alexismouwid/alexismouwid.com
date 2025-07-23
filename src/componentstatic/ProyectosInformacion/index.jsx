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
      <h1 class=" text-5xl font-bold font-bebas "> Sección de proyectos</h1>
      <p class="text-balance width-text-center font-sans font-bold px-5 py-15 text-xl text-slate">Presento proyectos que combinan diseño intuitivo y funcionalidades sólidas.
Cada uno refleja mi compromiso con la calidad, rendimiento y experiencia del usuario. </p>
    </section>
  );
});

export default ProyectosInformacion;


