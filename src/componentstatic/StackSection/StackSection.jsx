import React, { forwardRef } from "react";
import "../../tailwind.css";

const stack = [
  { nombre: "Javascript", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", categoria: "Lenguaje" },
  { nombre: "HTML5", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", categoria: "Lenguaje" },
  { nombre: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", categoria: "Lenguaje" },
  { nombre: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", categoria: "Frontend" },
  { nombre: "Tailwind", img: "/tailwind.png", categoria: "Frontend" },
  { nombre: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", categoria: "Diseño" },
  { nombre: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", categoria: "Backend" },
  { nombre: "MongoDB", img: "/mongodb.png", categoria: "Backend" },
  { nombre: "Docker", img: "/docker.png", categoria: "DevOps" },
  { nombre: "Linux", img: "/linux.png", categoria: "DevOps" },
  { nombre: "GitHub", img: "/git.png", categoria: "DevOps" },
  { nombre: "Neovim", img: "/neovim.png", categoria: "Tools" },
];

const StackSection = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full py-12 sm:py-20 px-4 sm:px-6 flex flex-col items-center gap-6 sm:gap-10"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono">
          Tecnologías
        </p>
        <h2 className="font-bebas text-4xl sm:text-5xl xl:text-7xl text-white">
          Mi Stack Tecnológico
        </h2>
        <p className="text-white/70 font-sans text-sm sm:text-base max-w-xs sm:max-w-md">
          Herramientas y tecnologías con las que construyo soluciones reales.
        </p>
        <div className="w-12 sm:w-16 h-[2px] bg-[#D4FF00] mt-1" />
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-6 max-w-3xl w-full">
        {stack.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 sm:gap-2 group cursor-default"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg sm:rounded-xl bg-white/5 border border-white/10 group-hover:border-[#D4FF00]/50 group-hover:bg-white/10 transition-all duration-300 p-2 sm:p-3">
              <img
                src={item.img}
                alt={item.nombre}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-white text-[10px] sm:text-xs font-sans text-center group-hover:text-[#D4FF00] transition-colors duration-300">
              {item.nombre}
            </span>
            <span className="hidden sm:block text-[9px] text-white/50 font-mono uppercase tracking-wider">
              {item.categoria}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
});

export default StackSection;
