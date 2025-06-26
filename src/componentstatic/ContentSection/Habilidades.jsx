import React from "react";

const Habilidades = () => {
  return (
    <>
      {/* Sección 3: Habilidades */}
      <div class="w-full lg:w-[30%] flex flex-col gap-4 p-8 bg-transparent relative lg:-top-10 lg:left-30 bottom-20 "   >
        <h3 class="text-[1.4rem] text-[#D4FF00] pb-2 relative -bottom-15">
          Software Experience
        </h3>

        {/* Aquí comienza el grid */}
        <div id="grid-skills" class="grid grid-cols-2 gap-3 relative top-19">
          {/* Item 1 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>Javascript</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="Javascript"
              class="size-10 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Item 2 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>HTML5</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
              class="size-10 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Item 3 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>CSS</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS"
              class="size-10 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Item 4 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>React</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              class="size-10 group-hover:scale-110 group-hover:-rotate-35 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Item 5 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>Node.js</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js"
              class="size-10 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Item 6 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>MongoDB</span>
            <img src="./mongodb.png" alt="MongoDB" class="size-10 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out" />
          </div>

          {/* Item 7 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>Figma</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="Figma"
              class="size-10 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Item 8 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>GitHub</span>
            <img src="./git.png" alt="GitHub" class="size-10 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out" />
          </div>

          {/* Item 9 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>TailwindCSS</span>
            <img src="./tailwind.png" alt="Postman" class="size-10 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out" />
          </div>

          {/* Item 10 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>Neovim</span>
            <img src="./neovim.png" alt="Neovim" class="size-10 group-hover:scale-110 group-hover:-rotate-720 transition-all duration-300 ease-in-out" />
          </div>

          {/* Item 11 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
            <span>Linux</span>
            <img src="./linux.png" alt="Linux" class="size-10 group-hover:scale-110 group-hover:rotate-720 transition-all duration-300 ease-in-out" />
          </div>

          {/* Item 12 */}
          <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group" >
            <span>Docker</span>
            <img src="./docker.png" alt="Docker" class="size-10 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out" />
          </div>
        </div>
        {/* Aquí acaba el grid */}
      </div>
    </>
  );
};

export default Habilidades;

