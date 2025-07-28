import React, { forwardRef } from "react";
import "../../tailwind.css";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="about-me"
      className="w-full h-screen mx-auto p-6 rounded-lg bg-static-mobile bg-static-mobile-parte-2

      "
    >
      <div className=" flex flex-col md:flex-row gap-6 items-center md:items-start mb-8 
        relative 
        lg:top-20
        nhm:top-40
        laptop:top-40
        ">
        <div className="flex-1">
          <div className="lg:w-[90%] flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <p className="text-3xl font-bold text-gray-800 dark:text-white     
               relative 

                im:left-10 im:text-5xl
               lg:text-5xl
                nhm:text-5xl  nhm:left-10
                xl:text-6xl
                2xl:text-6xl
                4k:text-7xl">
                Sobre mi
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm 
                im:text-xl
                nhm:text-xl
                xl:text-2xl
                2xl:text-2xl
                4k:text-3xl">
                Front-End
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm
                im:text-xl
                nhm:text-xl
                xl:text-2xl
                2xl:text-2xl
                4k:text-3xl">
                Back-End
              </span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm 
                im:text-xl
                nhm:text-xl
                xl:text-2xl
                2xl:text-2xl
                4k:text-3xl">
                Computer-Science
              </span>
            </div>
          </div>

          <p className="text-gray-100 dark:text-gray-100 font-sans text-lg mb-4
            se:text-[1rem] 
            im:text-[1.3rem]
            lg:text-[1.3rem]
            nhm:text-[1.4rem]
            xl:text-[1.6rem]
            2xl:text-[1.6rem]
            4k:text-[2.2rem]


            ">
            Desarrollador con 2 años de experiencia, autodidacta y apasionado
            por crear soluciones web eficientes. Especializado en Javascript,
            con experiencia en proyectos personales desde landing pages hasta
            e-commerce.
          </p>
        </div>
      </div>

      <div className="space-y-6 text-gray-100 dark:text-gray-100 font-sans 

        lg:relative lg:top-10 lg:mx-auto xr:relative xr:bottom-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 

          se:relative se:-top-10
          nhm:text-xl nhm:-top-7

         im:text-xl im:top-10
          nhm:top-20
          lg:text-xl 
          laptop:top-20
            xl:text-2xl
          2xl:text-2xl 2xl:-top-9
          4k:text-3xl">
          <div className="p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2
nhm:text-2xl
            2xl:text-3xl
            4k:text-4xl">Mi Enfoque</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span>
                  Aprendizaje continuo (recursos Open Source/Academias)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 laptop:mr-16">✔</span>
                <span>Mentalidad resolutiva y perseverante</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 laptop:mr-16">✔</span>
                <span>Colaboración proactiva en equipos</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4          
            xr:relative xr:top-0 
            lg:relative lg:top-10
            im:top-10
            nhm:top-10
            2xl:top-10
            4k:top-14 
            ">
            <div className="border-l-4 border-[#A9A9A9] pl-4 italic">
              <p className="font-medium">"Solo sé que no sé nada"</p>
              <p className="text-sm">- Sócrates</p>
            </div>
            <div className="border-l-4 border-[#A9A9A9] pl-4 italic">
              <p className="font-medium">"Sigamos hambrientos y alocados"</p>
              <p className="text-sm">- Steve Jobs</p>
            </div>
          </div>
        </div>

        <div className="mt-6 hover:font-bold duration-400 hover:scale-110 hover:text-white 


          se:relative se:-top-10
          text-center  

          xr:relative xr:top-20 
          im:text-xl im:top-10
          nhm:top-20 
lg:relative lg:top-8 lg:text-xl

          laptop:top-20
       nhm:text-xl nhm:-top-7
          2xl:text-2xl 2xl:-top-9
          4k:text-3xl  ">
          <p className="mb-4 font-bold ">
            Busco oportunidades para unirme a equipos talentosos y contribuir
            con mis habilidades.
          </p>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;

