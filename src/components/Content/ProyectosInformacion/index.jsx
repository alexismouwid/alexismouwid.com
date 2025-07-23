import React, { useEffect, useState, forwardRef } from "react";
import '../../../tailwind.css';

const ProyectosInformacion = forwardRef((props, ref) => {
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
    
    <section id="proyectos-info"  className="fixed top-0 left-0  w-full h-screen items-center 
    flex flex-col justify-center pointer-events-none align-center
 
      ">
      <h1 class="text-balance  mx-auto

            se:text-sm
            xr:text-4xl
            12p:text-3xl

            
            12pm:text-1xl
           p7:text-1xl
            gs8:text-1xl

            im:text-4xl

            sp7:text-3xl

             lg:text-7xl 
        4k:text-7xl






      "> Sección de proyectos</h1>
      <p class="


            se:text-xl
            xr:text-2xl
            12p:text-2xl


            12pm:text-2xl
            p7:text-1xl
            gs8:text-1xl
            im:text-4xl
        nh:text-3xl
        nhm:text-4xl
        4k:text-5xl

        sp7:text-2xl
      
      




        text-balance width-text-center mx-auto lg:mx-auto font-sans  px-5 py-15 text-xl text-slate

      relative  text-sm  text-gray-100
       sm:text-yellow-600 
        md:text-gray-100 md:text-5xl md:mx-auto md:text-balance
        lg:text-gray-100   lg:text-2xl lg:w-[80%]
        xl:text-gray-100 xl:text-4xl xl:w-[70%]
        sp7:text-5xl


        ">Presento proyectos que combinan diseño intuitivo y funcionalidades sólidas.
Cada uno refleja mi compromiso con la calidad, rendimiento y experiencia del usuario. </p>
    </section>
  );
});

export default ProyectosInformacion;



