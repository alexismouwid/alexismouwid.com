import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../../tailwind.css";
const Header = ( {toggleApp} ) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 z-[9999] bg-black/10 backdrop-blur-sm text-white transition-transform duration-300 animate-[aparecer_1s_ease-in-out] ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex items-center justify-between h-[10vh] py-4 px-6 md:px-12">
        {/* Logo */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="w-10 md:w-24"
          />
        </div>

        {/* Menú grande */}
        <ul className="hidden lg:flex gap-4 text-lg font-medium uppercase">
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
            />
          </a>

          </li>
     <li className="bg-transparent  text-white transition duration-200  text-center"> 
  <a
            href="https://github.com/alexismouwid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="./gy.png" alt="Github" width={35} height={35} />
          </a>

          </li>
               </ul>

        {/* Botón hamburguesa (solo móvil) */}
        <div
          className="lg:hidden text-3xl cursor-pointer z-50"
          onClick={handleNav}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-3/5 h-screen bg-black text-white p-10 pt-24 transition-transform duration-300 ease-in-out ${ 
            menuOpen ? "se:translate-x-32  xr:translate-x-38 12p:translate-x-34 p7:translate-x-37 gs8:translate-x-29 im:translate-x-85 sd:translate-x-56 gzf5:translate-x-27 " : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 text-lg font-medium uppercase">
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
            />
          </a>


          </li>
     <li className="bg-transparent  text-white transition duration-200  text-center"> 
  <a
            href="https://github.com/alexismouwid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img src="./gy.png" alt="Github" width={35} height={35} />
          </a>

          </li> 

        
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

