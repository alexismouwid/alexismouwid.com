import React from "react";
import '../../../tailwind.css';

const AboutMe = () => {
  return (
    <div id="about-me" className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center pointer-events-none px-6 lg:px-20">
      <div className="w-full max-w-4xl flex flex-col gap-8 pointer-events-auto">

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-xs lg:text-base 4k:text-2xl font-mono tracking-wider">Front-End</span>
          <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full text-xs lg:text-base 4k:text-2xl font-mono tracking-wider">Back-End</span>
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full text-xs lg:text-base 4k:text-2xl font-mono tracking-wider">Computer-Science</span>
        </div>

        <h2 className="text-white text-4xl lg:text-6xl 2xl:text-7xl 4k:text-8xl font-bold">
          Sobre mí
        </h2>

        <p className="text-gray-300 font-sans text-base lg:text-xl 2xl:text-2xl 4k:text-3xl leading-relaxed max-w-2xl">
          Desarrollador con 2 años de experiencia, autodidacta y apasionado por crear soluciones web eficientes. Especializado en Javascript, con experiencia en proyectos desde landing pages hasta e-commerce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg lg:text-xl 4k:text-3xl mb-4">Mi Enfoque</h3>
            <ul className="space-y-3 text-gray-300 font-sans text-sm lg:text-lg 4k:text-2xl">
              <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-1">✔</span><span>Aprendizaje continuo con recursos Open Source</span></li>
              <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-1">✔</span><span>Mentalidad resolutiva y perseverante</span></li>
              <li className="flex items-start gap-2"><span className="text-[#D4FF00] mt-1">✔</span><span>Colaboración proactiva en equipos</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <blockquote className="border-l-2 border-[#D4FF00] pl-4">
              <p className="text-white font-medium italic lg:text-lg 4k:text-2xl">"Solo sé que no sé nada"</p>
              <p className="text-gray-400 text-sm 4k:text-xl mt-1">— Sócrates</p>
            </blockquote>
            <blockquote className="border-l-2 border-[#D4FF00] pl-4">
              <p className="text-white font-medium italic lg:text-lg 4k:text-2xl">"Sigamos hambrientos y alocados"</p>
              <p className="text-gray-400 text-sm 4k:text-xl mt-1">— Steve Jobs</p>
            </blockquote>
          </div>
        </div>

        <p className="text-gray-300 font-sans text-sm lg:text-lg 4k:text-2xl">
          Busco oportunidades para unirme a equipos talentosos y contribuir con mis habilidades.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
