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
    
    <section id="proyectos-info"  className="fixed w-full h-screen px-4 mx-auto h-screen py-12  flex flex-col gap-2 items-center  align-center z-1  justify-center text-center

      


    
     relative
       se:bottom-340 
       xr:bottom-460 
       12p:bottom-437
 12pm:bottom-475   

                
             p7:bottom-470        
            gs8:bottom-380
            im:bottom-780      
      ia:bottom-885
      ip:bottom-1050
             sp7:bottom-1030         
      sd:bottom-350
      gzf:bottom-970
      gzf5:bottom-450
      nh:bottom-460
      nhm:bottom-610
      lg:bottom-460 
     laptop:bottom-500
      2xl:bottom-590
      4k:bottom-820












  
      ">
      <h1 class="text-balance  mx-auto

            se:text-xl
            xr:text-4xl
            12p:text-3xl

            
            12pm:text-1xl
            p7:text-1xl
            gs8:text-1xl

            im:text-4xl

            sp7:text-1xl

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
            sp7:text-1xl
        nh:text-3xl
        nhm:text-4xl
        4k:text-5xl
      
      




        text-balance width-text-center mx-auto lg:mx-auto font-sans  px-5 py-15 text-xl text-slate

      relative  text-sm  text-gray-100
       sm:text-yellow-600 
        md:text-gray-100 md:text-5xl md:mx-auto md:text-balance
        lg:text-gray-100   lg:text-2xl lg:w-[80%]
        xl:text-gray-100 xl:text-4xl xl:w-[70%]


        ">Presento proyectos que combinan diseño intuitivo y funcionalidades sólidas.
Cada uno refleja mi compromiso con la calidad, rendimiento y experiencia del usuario. </p>
    </section>
  );
});

export default ProyectosInformacion;



