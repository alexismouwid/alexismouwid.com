import React from 'react';
import '../../../tailwind.css';

const SkillsSection = () => (
  <div 
    id="skills-section"
    className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center pointer-events-none z-[1]"
  >
    <div 
      id="skills-inner"
      className="relative z-[1] pointer-events-auto w-full max-w-6xl px-4"
    >
      {/* Título */}
      <h3 
        id="software-experience"
        className="text-[#D4FF00]
        text-center mb-8 md:mb-12

       
          text-2xl sm:text-3xl md:text-4xl           relative top-0
      

        se:relative se:top-10
        xr:relative xr:top-10 xr:text-3xl
        p7:text-3xl
        gs8:relative gs8:top-10 gs8:text-3xl
        
       

        sm:top-8 md:-top-10 px-4
        lg:text-5xl lg:relative: lg:bottom-10
         4k:text-7xl
        "


      >
        Software Experience
      </h3>

      {/* Grid de habilidades */}
      <div 
        id="skills-grid"
        className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
          gap-1 sm:gap-4 md:gap-4
          w-full max-w-5xl mx-auto

        se:relative se:top-10
        gs8:relative gs8:top-10 gs8:text-3xl
      

          relative top-0 sm:-top-8 md:-top-12 lg:-top-0
          px-2 sm:px-4 "
      >
        {[
          { name: 'Javascript', src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
          { name: 'HTML5', src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
          { name: 'CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
          { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
          { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
          { name: 'MongoDB', src: './mongodb.png' },
          { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
          { name: 'Github', src: './git.png' },
          { name: 'Postman', src: './postman.png' },
          { name: 'Neovim', src: './neovim.png' },
          { name: 'Linux', src: './linux.png' },
          { name: 'Docker', src: './docker.png' }
        ].map(({ name, src }) => (
          <div 
            key={name}
            className="flex flex-col items-center justify-center
              bg-transparent p-2 rounded
              hover:scale-110 transition-all duration-300 ease-in-out
              group"
          >
            <img 
              src={src} 
              alt={name}
              className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 4k:w-20 4:h-20 4k:text-2xl
                group-hover:scale-110 transition-all duration-300 ease-in-out
                ${name === 'Javascript' || name === 'HTML5' || name === 'CSS' || name === 'React' || name === 'Node.js' || name === 'Figma' ? 'group-hover:rotate-25' : ''}
                ${name === 'MongoDB' || name === 'Github' || name === 'Docker' ? 'group-hover:-rotate-25' : ''}
                ${name === 'Neovim' ? 'group-hover:-rotate-720' : ''}
                ${name === 'Linux' ? 'group-hover:rotate-720' : ''}
                ${name === 'React' ? 'group-hover:-rotate-35' : ''}`}
            />
            <span 
              className={`text-white text-xs xs:text-sm sm:text-base mt-2
                ${name === 'Javascript' ? 'relative right-0' : ''}
                ${name === 'HTML5' ? 'relative right-0' : ''}`}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
