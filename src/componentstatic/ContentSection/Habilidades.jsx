import React from "react";
import "../../tailwind.css";

const Habilidades = () => {
  return (
    <>
      {/* Sección 3: Habilidades */}
    <div class="w-full  flex flex-col gap-4 p-8 bg-transparent relative  bottom-20
      
    lg:relative lg:left-10 lg:-top-12
      im:-top-80
      nhm:top-20 nhm:w-[35%]
      2xl:w-[35%] 2xl:top-30
      4k:top-40 ">
      <h3 class="text-[1.4rem] text-[#D4FF00] pb-2 relative -bottom-20
        lg:text-[1.2rem]
        im:text-[2.5rem]
        nhm:text-[1.6rem]
        2xl:text-[1.8rem]
        4k:text-[2rem]">
    Software Experience
  </h3>

      <div id="grid-skills" class="grid grid-cols-2 gap-3 relative top-19 font-sans font-bold 

        im:gap-6
        lg:gap-0
        nhm:gap-3
        4k:gap-5">
    {/* Item 1 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript" class="size-10 4k:size-14 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out 
      2xl:size-11
      4k:size-12 " />
      <span class="4k:text-[1.2rem] im:text-[1.2rem] lg:text-[1rem]">Javascript</span>
    </div>

    {/* Item 2 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" class="size-10 4k:size-14 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem] lg:text-[1rem]">HTML5</span>
    </div>

    {/* Item 3 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" class="size-10 4k:size-14 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem]">CSS</span>
    </div>

    {/* Item 4 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" class="size-10 4k:size-14 group-hover:scale-110 group-hover:-rotate-35 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem] lg:text-[1rem]">React</span>
    </div>

    {/* Item 5 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" class="size-10 4k:size-14 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem] lg:text-[1rem]">Node.js</span>
    </div>

    {/* Item 6 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="./mongodb.png" alt="MongoDB" class="size-10 4k:size-14 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem]">MongoDB</span>
    </div>

    {/* Item 7 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" class="size-10 4k:size-14 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem] lg:text-[1rem]">Figma</span>
    </div>

    {/* Item 8 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="./git.png" alt="GitHub" class="size-10 4k:size-14 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem]a lg:text-[1rem]">GitHub</span>
    </div>

    {/* Item 9 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="./tailwind.png" alt="TailwindCSS" class="size-10 4k:size-14 group-hover:scale-110 group-hover:rotate-25 transition-all duration-300 ease-in-out" />
      <span>TailwindCSS</span>
    </div>

    {/* Item 10 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="./neovim.png" alt="Neovim" class="size-9 group-hover:scale-110 group-hover:-rotate-720 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem] lg:text-[1rem]">Neovim</span>
    </div>

    {/* Item 11 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="./linux.png" alt="Linux" class="size-10 4k:size-14 group-hover:scale-110 group-hover:rotate-720 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem]  lg:text-[1rem]">Linux</span>
    </div>

    {/* Item 12 */}
    <div class="flex flex-col gap-1 items-center hover:scale-110 transition-all duration-300 ease-in-out group">
      <img src="./docker.png" alt="Docker" class="size-10 4k:size-14 group-hover:scale-110 group-hover:-rotate-25 transition-all duration-300 ease-in-out" />
      <span class="4k:text-[1.2rem] im:text-[1.2rem]  lg:text-[1rem]">Docker</span>
    </div>
  </div>
</div>
    </>
  );
};

export default Habilidades;

