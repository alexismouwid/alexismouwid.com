import React from "react";

const AboutMe = () => {
  return (
    <div id="about-me" className="fixed w-full h-screen mx-auto p-6 rounded-lg relative bottom-200 text-xs lg:text-2xl lg:relative lg:bottom-180  ">
     
      <div className="w-full flex flex-col md:flex-row gap-6 items-center md:items-start mb-8 relative top-20 lg:relative lg:top-10">
       
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white lg:relative lg:left-20 ">Sobre mi</h1>
            </div>
            <div className="flex flex-wrap gap-2 lg:relative lg:right-120">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm 
                lg:text-xl">Front-End</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm
                lg:text-xl">Back-End</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm lg:text-xl">Computer-Science</span>
            </div>
          </div>
          
          {/* Resumen profesional */}
          <p className="text-sm lg:text-xl text-gray-700 dark:text-gray-300 font-sans text-lg mb-4">
          Desarrollador con 2 años de experiencia, autodidacta y apasionado por crear soluciones web eficientes. Especializado en Javascript, con experiencia en proyectos personales desde landing pages hasta e-commerce.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="space-y-6 text-gray-700 dark:text-gray-300 font-sans lg:relative lg:top-10">
        {/* Sección de enfoque */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative top-10 lg:relative lg:top-10">
          <div className=" p-4 rounded-lg">
            <h3 className="font-semibold lg:text-2xl lg:relative lg:bottom-8  mb-2 ">Mi Enfoque</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span>Aprendizaje continuo (recursos online/Academias)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span>Mentalidad resolutiva y perseverante</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span>Colaboración proactiva en equipos</span>
              </li>
            </ul>
          </div>
          
          {/* Sección de citas */}
          <div className="space-y-4 relative -top-5 lg:relative lg:top-0">
            <div className="border-l-4 border-blue-500 pl-4 italic">
              <p className="font-medium">"Solo sé que no sé nada"</p>
              <p className="text-sm">- Sócrates</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 italic">
              <p className="font-medium">"Sigamos hambrientos y alocados"</p>
              <p className="text-sm">- Steve Jobs</p>
            </div>
          </div>
        </div>

        {/* Llamado a la acción */}
        <div className="mt-6 text-center">
          <p className="mb-4 relative top-5">Busco oportunidades para unirme a equipos talentosos y contribuir con mis habilidades.</p>
        </div>
      </div>

         </div>
  );
};

export default AboutMe;

