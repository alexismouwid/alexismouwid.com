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
      <p class="text-balance  mx-auto

        se:text-[2rem] se:top-20 se:relative
            xr:text-[2.5rem]
            12p:text-[2.7rem]

            
            12pm:text-[3rem]
           p7:text-[2rem]
            gs8:text-[2rem]
        sp7:text-[4rem]
            im:text-[4rem]
        gzf5:text-[2.8rem]
            sp7:text-3xl
       sa:text-[2.6rem]
             lg:text-7xl 
        4k:text-[7rem]
        






      "> Sección de proyectos</p>
      <p class="


            se:text-xl se:top-15 se:relative
            xr:text-2xl
            12p:text-2xl


            12pm:text-2xl
            p7:text-1xl
            gs8:text-1xl
            im:text-[2.4rem]
        gzf5:text-2xl
        nh:text-3xl
        nhm:text-4xl
        4k:text-5xl
        azf:text-2xl
        sp7:text-2xl
      
      




        text-balance width-text-center mx-auto lg:mx-auto font-sans  px-5 py-15 text-xl text-slate

      relative  text-sm  text-gray-100
       sm:text-yellow-600 
        md:text-gray-100  md:mx-auto md:text-balance
        lg:text-gray-100   lg:text-[2.5rem] lg:w-[80%]
        xl:text-gray-100 xl:text-4xl xl:w-[70%]
        sp7:text-5xl


        ">Presento proyectos que combinan diseño intuitivo y funcionalidades sólidas.
Cada uno refleja mi compromiso con la calidad, rendimiento y experiencia del usuario. </p>
    </section>
  );
});

export default ProyectosInformacion;



