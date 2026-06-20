import React from "react";
import "../../tailwind.css";

const skills = [
  { nombre: "Javascript", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
  { nombre: "HTML5", img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { nombre: "CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { nombre: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { nombre: "Node.js", img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { nombre: "MongoDB", img: "./mongodb.png" },
  { nombre: "Figma", img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { nombre: "GitHub", img: "./git.png" },
  { nombre: "Tailwind", img: "./tailwind.png" },
  { nombre: "Neovim", img: "./neovim.png" },
  { nombre: "Linux", img: "./linux.png" },
  { nombre: "Docker", img: "./docker.png" },
];

const Habilidades = () => {
  return (
    <div className="w-full lg:w-[35%] flex flex-col gap-4 p-6 justify-center">
      <h3 className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono">
        Software Experience
      </h3>
      <div id="grid-skills" className="grid grid-cols-3 gap-4 font-sans font-bold">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <img
              src={skill.img}
              alt={skill.nombre}
              className="size-9 2xl:size-11 4k:size-14 group-hover:scale-110 transition-all duration-300"
            />
            <span className="text-xs text-gray-300 2xl:text-sm 4k:text-base">{skill.nombre}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
