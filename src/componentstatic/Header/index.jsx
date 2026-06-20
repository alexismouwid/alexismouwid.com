import { useState, useRef } from "react";
import "../../tailwind.css";

const navItems = [
  { label: "Home", fn: "scrollToHome" },
  { label: "Sobre mí", fn: "scrollToSobreMi" },
  { label: "Servicios", fn: "scrollToServicios" },
  { label: "Proyectos", fn: "scrollToProyectos" },
  { label: "Preguntas", fn: "scrollToPreguntas" },
];

const Header = ({ menuOpen, setMenuOpen, scrollToHome, scrollToSobreMi, scrollToServicios, scrollToProyectos, scrollToPreguntas }) => {
  const headerRef = useRef(null);
  const fns = { scrollToHome, scrollToSobreMi, scrollToServicios, scrollToProyectos, scrollToPreguntas };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScrollAndClose = (scrollFn) => {
    setMenuOpen(false);
    setTimeout(() => scrollFn(), 300);
  };

  return (
    <nav
      ref={headerRef}
      className="fixed top-0 left-0 w-full h-[10vh] bg-black/30 backdrop-blur-sm border-b border-white/10 text-white z-50 flex justify-between items-center px-6 animate-slideDown"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="./logo.png" alt="Logo" className="w-20 h-20 object-contain" />
      </div>

      {/* Menú desktop */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map(({ label, fn }) => (
          <li key={label}>
            <button
              onClick={fns[fn]}
              className="text-sm font-sans text-gray-300 hover:text-[#D4FF00] transition-colors duration-300 relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4FF00] group-hover:w-full transition-all duration-300" />
            </button>
          </li>
        ))}
      </ul>

      {/* Redes desktop */}
      <div className="hidden md:flex items-center gap-3">
        <a href="https://www.linkedin.com/in/alexis-vega-3b4437333/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" width={28} height={28} />
        </a>
        <a href="https://github.com/alexismouwid" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
          <img src="./gy.png" alt="Github" width={28} height={28} />
        </a>
      </div>

      {/* Botón hamburguesa móvil */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menú móvil */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40 transition-transform duration-300 md:hidden border-r border-[#D4FF00]/20 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-4 left-4">
          <img src="./logo.png" alt="Logo" width={80} />
        </div>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-6 text-[#D4FF00] text-3xl font-bold"
          aria-label="Cerrar menú"
        >
          ×
        </button>

        {navItems.map(({ label, fn }) => (
          <li key={label} className="w-full text-center">
            <button
              onClick={() => handleScrollAndClose(fns[fn])}
              className="text-white text-2xl font-sans hover:text-[#D4FF00] transition-colors duration-300"
            >
              {label}
            </button>
          </li>
        ))}

        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/alexis-vega-3b4437333/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" width={32} height={32} />
          </a>
          <a href="https://github.com/alexismouwid" target="_blank" rel="noopener noreferrer">
            <img src="./gy.png" alt="Github" width={32} height={32} />
          </a>
        </div>
      </ul>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 1s ease-in-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Header;
