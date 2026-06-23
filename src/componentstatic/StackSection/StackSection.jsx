// StackSection.jsx
import React, { useRef, forwardRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../tailwind.css";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".stack-title", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      y: 40,
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(".stack-item", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      y: 60,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={ref || sectionRef}
      className="w-full py-24 px-6 flex flex-col items-center gap-12"
    >
      <div className="stack-title flex flex-col items-center gap-3 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono">
          Tecnologías
        </p>
        <h2 className="font-bebas text-5xl sm:text-6xl xl:text-7xl text-white">
          Mi Stack Tecnológico
        </h2>
        <p className="text-gray-400 font-sans text-base max-w-md">
          Herramientas y tecnologías con las que construyo soluciones reales.
        </p>
        <div className="w-16 h-[2px] bg-[#D4FF00] mt-2" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-4xl w-full">
        {stack.map((item, i) => (
          <div
            key={i}
            className="stack-item flex flex-col items-center gap-2 group cursor-default"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#D4FF00]/50 group-hover:bg-white/10 transition-all duration-300 p-3">
              <img
                src={item.img}
                alt={item.nombre}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-white text-xs font-sans text-center group-hover:text-[#D4FF00] transition-colors duration-300">
              {item.nombre}
            </span>
            <span className="text-[10px] text-white font-mono uppercase tracking-wider">
              {item.categoria}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
});

export default StackSection;
