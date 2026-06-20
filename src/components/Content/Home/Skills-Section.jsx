import React from 'react';
import '../../../tailwind.css';

const skills = [
  { name: 'Javascript', src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { name: 'HTML5', src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'MongoDB', src: './mongodb.png' },
  { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'Github', src: './gy.png' },
  { name: 'Postman', src: './postman.png' },
  { name: 'Neovim', src: './neovim.png' },
  { name: 'Linux', src: './linux.png' },
  { name: 'Docker', src: './docker.png' },
];

const getRotation = (name) => {
  if (['Javascript', 'HTML5', 'CSS', 'Node.js', 'Figma'].includes(name)) return 'group-hover:rotate-25';
  if (name === 'React') return 'group-hover:-rotate-35';
  if (['MongoDB', 'Github', 'Docker'].includes(name)) return 'group-hover:-rotate-25';
  if (name === 'Neovim') return 'group-hover:-rotate-720';
  if (name === 'Linux') return 'group-hover:rotate-720';
  return '';
};

const SkillsSection = () => (
  <div
    id="skills-section"
    className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center pointer-events-none"
  >
    <div
      id="skills-inner"
      className="pointer-events-auto w-full max-w-4xl px-6 flex flex-col gap-8"
    >
      <div>
        <p className="text-sm tracking-[0.3em] uppercase text-[#D4FF00] font-mono mb-2">
          Stack técnico
        </p>
        <h3 className="text-4xl lg:text-5xl 2xl:text-6xl 4k:text-7xl font-bold text-white">
          Software Experience
        </h3>
      </div>

      <div
        id="skills-grid"
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full font-sans font-bold"
      >
        {skills.map(({ name, src }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4FF00]/30 hover:bg-white/10 transition-all duration-300 group"
          >
            <img
              src={src}
              alt={name}
              className={`w-10 h-10 sm:w-12 sm:h-12 4k:w-16 4k:h-16 group-hover:scale-110 transition-all duration-300 ${getRotation(name)}`}
            />
            <span className="text-white text-xs sm:text-sm 4k:text-lg mt-2 text-center">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
