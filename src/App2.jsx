import React from 'react';
import { useState,  useEffect, useRef } from 'react';

import { useIsMobile } from './utils/useIsMobile';
import { useDynamicCss } from './utils/useDynamicCss';
import { useN8nChat } from './utils/useN8nChat';
import Header from './componentstatic/Header';
import ContentSection from './componentstatic/ContentSection';
import StackSection from './componentstatic/StackSection/StackSection.jsx';
import AboutMe from './componentstatic/AboutMe';
import Servicios from './componentstatic/Servicios';
import ProyectosInformacion from './componentstatic/ProyectosInformacion';
import ProyectosRecientes from './componentstatic/ProyectosRecientes';
import PreguntasFrecuentes from './componentstatic/PreguntasFrecuentes';
import FloatingWhatsAppButton from './componentstatic/FloatingWhatsAppButton';
import '/src/tailwind.css';

export default function App2( {toggleApp} ) {

  const [menuOpen, setMenuOpen] = useState(false);
// 🔸 Creamos las referencias
  const serviciosRef = useRef(null);
  const proyectosRef = useRef(null);
  const preguntasRef = useRef(null);
  const homeRef = useRef(null);
  const sobreMiRef = useRef(null);
  const stackRef = useRef(null);
 

  //declared Utils
  const isMobile = useIsMobile();
 useDynamicCss('/styles/App2.css', 'app2-css');
    useN8nChat();


 
const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSobreMi = () => {
    sobreMiRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const scrollToStack = () => {
    stackRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServicios = () => {
    serviciosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProyectos = () => {
    proyectosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPreguntas = () => {
    preguntasRef.current?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <>

      <div className='App'> 
       
 <Header 
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      scrollToHome={scrollToHome}
   scrollToSobreMi={scrollToSobreMi}
      scrollToServicios={scrollToServicios}
      scrollToProyectos={scrollToProyectos}
      scrollToPreguntas={scrollToPreguntas}/>
      <ContentSection ref={homeRef}/>
    <StackSection ref={stackRef}/>
        <AboutMe ref={sobreMiRef}/>
    
      <Servicios ref={serviciosRef}/>
        <ProyectosInformacion ref={proyectosRef}/>
      <ProyectosRecientes ref={proyectosRef}/>
      <PreguntasFrecuentes ref={preguntasRef}/>
     <div id="n8n-chat" />
          <FloatingWhatsAppButton />

         <button onClick={toggleApp} class="

          opacity-70
          rounded-full
          text-[0.9rem]
          font-bebas
          text-white
          fixed
          p-2
          bottom-[9rem]
          right-[1rem]
          z-[1000]
           lg:hover:scale-125
           hover:z-[1000]
          hover:font-bold
          hover:opacity-100
          transition-all duration-300 ease-in-out
    group">
           <img src="/changemode.png" alt="GitHub" width="60" height="38" class="group:rotate-360  rounded" />
    <span class="
    group-hover:text-sky-900 
    group:text-[1rem]
    group:rotate-45
    ">Mode Scroll </span>    

  </button>

      </div>
  
     
    </>
  );
}
