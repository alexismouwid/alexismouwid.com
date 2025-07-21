import React from 'react';
import { useState,  useEffect, useRef } from 'react';
import { useIsMobile } from './utils/useIsMobile';
import { useN8nChat } from './utils/useN8nChat';
import { useDynamicCss } from './utils/useDynamicCss';
import { useDelayedLoading } from './utils/useDelayedLoading';
import Header from './components/Header';
import Content from './components/Content';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import './styles/tailwind-component.output.css';
import ScrollProgress from './components/ScrollProgress';

import '@n8n/chat/style.css';


export default function App( {toggleApp} ) {

const totalSteps = 18; // 9 secciones * (entrada + salida)
  const visibleSteps = [1, 3, 5, 7, 9, 11, 13, 15, 17]; // pasos visibles

   const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modeStatic, setmodeStatic] = useState(false);

   //declared Utils
  const loading = useDelayedLoading(300);
  const isMobile = useIsMobile();
    useDynamicCss('/styles/App.css', 'app-css');
    useN8nChat();





   if(loading) {
    return (
<div className="loading-bar">Loading</div>
   ); 
  }  
  return (
    <>

 
      <div className='App'> 

        <div className='content'> 
 <Header 
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
     />
 <Content />
          <div id="n8n-chat" />
  <button onClick={toggleApp} class="

          opacity-70
          rounded-full
          text-[0.9rem]
          font-bebas
          text-white
          fixed
          p-2
          bottom-[9rem]
          right-[0rem]
          z-[1000]
          lg:hover:scale-125
           hover:z-[1000]
          hover:font-bold
          hover:opacity-125
          hover:contrast-125
          transition-all duration-300 ease-in-out
    group">
    <img src="/changemode.png" alt="GitHub" width="60" height="38" class="  rounded" />
    <span class="
    group-hover:text-sky-900 
    group:text-[1rem]
    group:rotate-45
    ">Mode Static </span>    

  </button>
          <FloatingWhatsAppButton />

      <ScrollProgress totalSteps={totalSteps} visibleSteps={visibleSteps} /> {/* 18 pasos: entrada + salida por sección */}
                 </div>
      </div>

    </>
  );
}
