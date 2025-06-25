import React from "react";

const Habilidades = () => {
  return (
    <>
      {/* Sección 3: Habilidades */}
      <div className="w-full lg:w-[30%] flex flex-col gap-4 p-8 bg-transparent relative top-10 mx-auto">
        <h3 className="text-[1.4rem] text-[#D4FF00] pb-2 relative -bottom-12">
          Software Experience
        </h3>

        {/* Aquí comienza el grid */}
        <div className="grid grid-cols-2 gap-2 relative top-10">
          {/* Item 1 */}
          <div className="flex flex-col gap-1 items-center">
            <span>Javascript</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="Javascript"
              className="size-10"
            />
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-1 items-center">
            <span>HTML5</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
              className="size-10"
            />
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-1 items-center">
            <span>CSS</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS"
              className="size-10"
            />
          </div>

          {/* Item 4 */}
          <div className="flex flex-col gap-1 items-center">
            <span>React</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React"
              className="size-10"
            />
          </div>

          {/* Item 5 */}
          <div className="flex flex-col gap-1 items-center">
            <span>Node.js</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              alt="Node.js"
              className="size-10"
            />
          </div>

          {/* Item 6 */}
          <div className="flex flex-col gap-1 items-center">
            <span>MongoDB</span>
            <img src="./mongodb.png" alt="MongoDB" className="size-10" />
          </div>

          {/* Item 7 */}
          <div className="flex flex-col gap-1 items-center">
            <span>Figma</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="Figma"
              className="size-10"
            />
          </div>

          {/* Item 8 */}
          <div className="flex flex-col gap-1 items-center">
            <span>GitHub</span>
            <img src="./git.png" alt="GitHub" className="size-10" />
          </div>

          {/* Item 9 */}
          <div className="flex flex-col gap-1 items-center">
            <span>Postman</span>
            <img src="./postman.png" alt="Postman" className="size-10" />
          </div>

          {/* Item 10 */}
          <div className="flex flex-col gap-1 items-center">
            <span>Neovim</span>
            <img src="./neovim.png" alt="Neovim" className="size-10" />
          </div>

          {/* Item 11 */}
          <div className="flex flex-col gap-1 items-center">
            <span>Linux</span>
            <img src="./linux.png" alt="Linux" className="size-10" />
          </div>

          {/* Item 12 */}
          <div className="flex flex-col gap-1 items-center">
            <span>Docker</span>
            <img src="./docker.png" alt="Docker" className="size-10" />
          </div>
        </div>
        {/* Aquí acaba el grid */}
      </div>
    </>
  );
};

export default Habilidades;

