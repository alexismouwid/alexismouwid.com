import React, { forwardRef } from "react";
import "../../tailwind.css";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="about-me" className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-20 py-16 sm:py-20 max-w-5xl mx-auto">

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">Front-End</span>
        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">Back-End</span>
        <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-[10px] sm:text-xs font-mono tracking-wider">Computer-Science</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white mb-4 sm:mb-6">
        Sobre mí
      </h2>

      <p className="text-gray-300 font-sans text-sm sm:text-base lg:text-xl 2xl:text-2xl leading-relaxed max-w-2xl mb-8 sm:mb-12">
        Desarrollador con 2 años de experiencia, autodidacta y apasionado por crear soluciones web eficientes. Especializado en Javascript, con experiencia en proyectos desde landing pages hasta e-commerce.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h3 className="text-white font-semibold text-base sm:text-lg 2xl:text-xl mb-3 sm:mb-4">Mi Enfoque</h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-300 font-sans text-sm sm:text-base 2xl:text-lg">
            <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-0.5">✔</span><span>Aprendizaje continuo con recursos Open Source</span></li>
            <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-0.5">✔</span><span>Mentalidad resolutiva y perseverante</span></li>
            <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-0.5">✔</span><span>Colaboración proactiva en equipos</span></li>
          </ul>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <blockquote className="border-l-2 border-[#D4FF00] pl-3 sm:pl-4">
            <p className="text-white font-medium italic text-sm sm:text-base">"Solo sé que no sé nada"</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">— Sócrates</p>
          </blockquote>
          <blockquote className="border-l-2 border-[#D4FF00] pl-3 sm:pl-4">
            <p className="text-white font-medium italic text-sm sm:text-base">"Sigamos hambrientos y alocados"</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">— Steve Jobs</p>
          </blockquote>
        </div>
      </div>

      <p className="mt-8 sm:mt-12 text-gray-300 font-sans text-sm sm:text-base 2xl:text-lg">
        Busco oportunidades para unirme a equipos talentosos y contribuir con mis habilidades.
      </p>
    </div>
  );
});

export default AboutMe;
