import React, { useEffect, useState } from "react";
import { useIsMobile } from "../../utils/useIsMobile";
import useScrollTrigger from "../../utils/scrollTrigger";
import HeroSection from "./Home/Hero-Section";
import ProfileSection from "./Home/Profile-Section";
import SkillsSection from "./Home/Skills-Section";
import AboutMe from "./AboutMe";
import Servicios from "./Services";
import ProyectosInformacion from "./ProyectosInformacion";
import Proyectos from "./Proyectos/ProyectoSection";
import Preguntas from "./Preguntas"
import  "../../tailwind.css"

const ContentSection = ()  => {
  const [isMobile, setIsMobile] = useState(false);
  const [modeDark, setModeDark] = useState(false);
  
  useIsMobile();
    useScrollTrigger();

  return (

    <div id="content-principal" className="w-full h-[600vh] text-white flex justify-center items-centerl">
      <div id="content-container" className="
      
        bg-scroll 
        w-full h-[8000px] py-24  text-white" >
        <HeroSection  />
        <ProfileSection />
        <SkillsSection />
        <AboutMe />
        <Servicios  />
        <ProyectosInformacion  />
        <Proyectos  />
        <Preguntas  />
             </div>
    </div>
 
  );
};

export default ContentSection;
