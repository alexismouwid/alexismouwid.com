import React, { forwardRef } from "react";
import "../../tailwind.css";

const AboutMe = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="about-me" className="w-full min-h-screen flex flex-col justify-center px-6 py-20 lg:px-20 max-w-5xl mx-auto">
      
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-xs font-mono tracking-wider">Front-End</span>
        <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full text-xs font-mono tracking-wider">Back-End</span>
        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-xs font-mono tracking-wider">Computer-Science</span>
      </div>

      <h2 className="text-5xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold text-white mb-6">
        Sobre mí
      </h2>

      <p className="text-gray-300 font-sans text-lg lg:text-xl 2xl:text-2xl 4k:text-3xl leading-relaxed max-w-2xl mb-12">
        Desarrollador con 2 años de experiencia, autodidacta y apasionado por crear soluciones web eficientes. Especializado en Javascript, con experiencia en proyectos desde landing pages hasta e-commerce.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg 2xl:text-xl mb-4">Mi Enfoque</h3>
          <ul className="space-y-3 text-gray-300 font-sans text-base 2xl:text-lg">
            <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-1">✔</span><span>Aprendizaje continuo con recursos Open Source</span></li>
            <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-1">✔</span><span>Mentalidad resolutiva y perseverante</span></li>
            <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-1">✔</span><span>Colaboración proactiva en equipos</span></li>
          </ul>
        </div>

        <div className="space-y-4">
          <blockquote className="border-l-2 border-[#D4FF00] pl-4">
            <p className="text-white font-medium italic">"Solo sé que no sé nada"</p>
            <p className="text-gray-400 text-sm mt-1">— Sócrates</p>
          </blockquote>
          <blockquote className="border-l-2 border-[#D4FF00] pl-4">
            <p className="text-white font-medium italic">"Sigamos hambrientos y alocados"</p>
            <p className="text-gray-400 text-sm mt-1">— Steve Jobs</p>
          </blockquote>
        </div>
      </div>

      <p className="mt-12 text-gray-300 font-sans text-base 2xl:text-lg">
        Busco oportunidades para unirme a equipos talentosos y contribuir con mis habilidades.
      </p>
    </div>
  );
});

export default AboutMe;
