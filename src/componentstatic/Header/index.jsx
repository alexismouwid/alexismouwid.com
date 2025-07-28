import { useState, useRef } from "react";
import "../../tailwind.css";

const Header = ({ menuOpen, setMenuOpen, scrollToHome, scrollToSobreMi, scrollToServicios, scrollToProyectos, scrollToPreguntas }) => {
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollAndClose = (scrollFn) => {
    setMenuOpen(false);
    setTimeout(() => {
      scrollFn();
    }, 300);
  };

  return (
    <nav
      ref={headerRef}
      className="fixed top-0 left-0 w-full h-[10vh] bg-black bg-opacity-10 text-white font-poppins z-50 flex justify-between items-center px-4 animate-slideDown"
    >
      <div className="flex items-center w-full justify-between">
        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white text-3xl ml-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
  
      

        {/* Logo */}
        <div className="hidden md:flex relative mr-12 ml-2 bottom-20 right-8">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-[150px] h-[150px] relative right-64"
          />
        </div>

        {/* Redes móviles */}
        <div className="flex md:hidden gap-4 mr-4 
          relative
          se:left-40 
          xr:left-45
          12:left-48
          p7:left-45
          gzf5:left-40
          gs8:left-38
          sd:left-60
          ">
          <a
            href="https://www.linkedin.com/in/alexis-vega-3b4437333/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="Linkedin"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://github.com/alexismouwid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="./gy.png" alt="Github" width={35} height={35} />
          </a>
        </div>

        {/* Menú móvil */}
        <ul
          className={`fixed top-0 left-0 w-full h-[60h]  bg-black flex flex-col items-center text-center gap-1 p-0 z-40 transition-transform duration-300 md:hidden border-b border-[#A4F522] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center w-full p-4">
            <div className="flex items-center mr-auto">
              <img src="./logo.png" alt="Logo" width={120} />
            </div>
            <button
              onClick={toggleMenu} 
              className="text-[#A4F522] text-3xl font-bold"
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>

          <li className="w-full px-6 
            se:relative se:bottom-10
            gs8:relative gs8:bottom-10
            ">
            <button
              onClick={() => handleScrollAndClose(scrollToHome)}
              className="w-full text-white text-base py-2 relative top-4 hover:font-bold hover:border-l-4 border-[A4F522] transition-all"
            >
              Home
            </button>
          </li>
          <li className="w-full px-6 

            se:relative se:bottom-10
            gs8:relative gs8:bottom-10


            ">
            <button
              onClick={() => handleScrollAndClose(scrollToSobreMi)}
              className="w-full text-white text-base py-2 relative top-4 hover:font-bold hover:border-l-4 border-[A4F522] transition-all"
            >
              Sobre mí
            </button>
          </li>
          <li className="w-full px-6 

            se:relative se:bottom-10
            gs8:relative gs8:bottom-10

            ">
            <button
              onClick={() => handleScrollAndClose(scrollToServicios)}
              className="w-full text-white text-base py-2 relative top-4 hover:font-bold hover:border-l-4 border-[A4F522] transition-all"
            >
              Servicios
            </button>
          </li>
          <li className="w-full px-6 
            se:relative se:bottom-10
             gs8:relative gs8:bottom-10
">
            <button
              onClick={() => handleScrollAndClose(scrollToProyectos)}
              className="w-full text-white text-base py-2 relative top-4 hover:font-bold hover:border-l-4 border-[A4F522] transition-all
              gs8:relative  gs8:right-2


              "
            >
              Proyectos
            </button>
            <span className="absolute right-20 top-3 bg-[#A4F522] text-black text-xs font-bold px-2 rounded-md
              se:relative se:-top-5
              gs8:relative gs8:-top-8 gs8:-right-18
            
              ">
              Recientes
            </span>
          </li>
          <li className="w-full px-6 relative 
            gs8:-top-17 gs8:right-2
            se:bottom-10">
            <button
              onClick={() => handleScrollAndClose(scrollToPreguntas)}
              className="w-full text-white text-base py-2 relative top-4 hover:font-bold hover:border-l-4 border-[A4F522] transition-all"
            >
              Preguntas
            </button>
            <span className="absolute right-19 top-8 bg-[#A4F522] text-black text-xs font-bold px-2 rounded-md
              ">
              Frecuentes
            </span>
          </li>
        </ul>

        {/* Menú escritorio */}
        <ul className="hidden md:flex items-center space-x-10 mr-1r

          im:mr-0 im:space-x-1  im:relative im:-left-20 im:text-xs im:space-x-0
         xl:mr-0 xl:space-x-1 xl:relative xl:-left-10 xl:text-sm xl:space-x-0
          2xl:mr-0 2xl:space-x-1 2xl:relative 2xl:-left-20 2xl:text-[1rem] 2xl:space-x-0
          4k:space-x-20 4k:text-2xl 4k:relative 4k:-left-10
          ">
<li className="li-desktop font-poppins bg-black w-[100px] text-white transition duration-100  text-center h-[65px]">
           <img
            src="./logo.png"
            alt="Logo"
            className="w-[100px] h-[100px] relative right-80 bottom-2
              lg:relative lg:right-25
              nhm:relative nhm:right-50
             im:relative im:-right-5 im:-top-3
             2xl:relative 2xl:right-60 2xl:h-30
             4k:relative 4k:right-70 4k:h-30
             "

             
          />

          </li>


          <li className="li-desktop font-poppins bg-black w-[100px] text-white transition duration-50 hover:font-bold hover:cursor-pointer hover:text-white hover:border-b-4 border-[A4F522] text-center h-[55px]">
            <button onClick={scrollToHome} className="w-full py-2 relative top-4 ">
              Home
            </button>
          </li>
          <li className="li-desktop font-anton bg-transparent w-[70px] text-white transition duration-50 hover:font-bold hover:cursor-pointer hover:border-b-4 border-[A4F522] text-center
            h-[55px]">
            <button onClick={scrollToSobreMi} className="w-full py-2 relative top-4" >
              Sobre mí
            </button>
          </li>
          <li className="li-desktop bg-transparent w-[100px] text-white transition duration-50 hover:font-bold hover:cursor-pointer hover:border-b-4 border-[A4F522] text-center
             h-[55px]">
            <button onClick={scrollToServicios} className="w-full py-2 relative top-4">
              Servicios
            </button>
          </li>
          <li className="li-desktop bg-transparent w-[100px] text-white transition duration-50 hover:font-bold hover:cursor-pointer hover:border-b-4 border-[A4F522] text-center relative
             h-[55px]">
            <button onClick={scrollToProyectos} className="w-full py-2 relative top-3">
              Proyectos
            </button>
            <span className="check absolute left-[90%]  bg-transparent relative top-0
              text-[0.7rem] px-2 rounded-lg im:relative im:left-0  
              

              ">
              Recientes
            </span>
          </li>
          <li className="li-desktop bg-transparent w-[150px] text-white transition duration-200 hover:font-bold hover:cursor-pointer hover:border-b-4 border-[A4F522] text-center relative
 h-[55px]
im:relative im:left-0

            ">
            <button onClick={scrollToPreguntas} className="w-full py-2 relative top-4">
              Preguntas
            </button>
            
          </li>
        </ul>
          
        <ul className=" md:flex items-center s mr-12 gap-2 relative left-10
            se:relative se:left-30
            gs8:relative gs8:left-40
            gzf5:left-40
            
           lg:relative lg:left-30
            nhm:left-50
            laptop:left-60
            2k:left-100
          4k:left-70 
            ">
 <li className="bg-transparent text-white transition duration-200 text-center"> 
  <a
            href="https://www.linkedin.com/in/alexis-vega-3b4437333/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="Linkedin"
              width={35}
              height={35}
              className="
2xl:size-14
              4k:size-17 "
            />
          </a>

          </li>
     <li className="bg-transparent  text-white transition duration-200  text-center"> 
  <a
            href="https://github.com/alexismouwid"
            target="_blank"
            rel="noopener noreferrer"
    className="hover:opacity-80 transition-opacity "
          >
            <img src="./gy.png" alt="Github" width={35} height={35} 
              className="

2xl:size-14
    4k:size-17" />
          </a>

          </li>


            </ul>
         
 <div className="hidden md:flex header-contacto items-center gap-4 relative left-96">
          <a
            href="https://www.linkedin.com/in/alexis-vega-3b4437333/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="Linkedin"
              width={45}
              height={45}
            />
          </a>
          <a
            href="https://github.com/alexismouwid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="./gy.png" alt="Github" width={45} height={45} />
          </a>
        </div>
              
      </div>

      {/* Animación Tailwind definida en tailwind.config.js */}
      <style>
        {`
          @keyframes slideDown {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-slideDown {
            animation: slideDown 1s ease-in-out forwards;
          }
        `}
      </style>
    </nav>
  );
};

export default Header;

