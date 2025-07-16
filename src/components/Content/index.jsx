import React, { useEffect, useState } from "react";
import { useIsMobile } from "../../utils/useIsMobile";
import useScrollTrigger from "../../utils/scrollTrigger";
import HeroSection from "./Home/Hero-Section";
import ProfileSection from "./Home/Profile-Section";
import SkillsSection from "./Home/Skills-Section";
import Servicios from "./Services/Services-Section";
import Proyectos from "./Proyectos/ProyectoSection";
import Preguntas from "./Preguntas"
import '../../styles/tailwind-component.output.css';


const ContentSection = ()  => {
  const [isMobile, setIsMobile] = useState(false);
  
  useIsMobile();
    useScrollTrigger();

  return (

    <div id="content-principal" class="w-full h-[600vh] text-white flex justify-center items-centerl">
      <div id="content-container" class="
        lg:bg-scroll bg-scroll-mobile
        w-full h-[8000px] py-24  text-white" >
        <HeroSection  />
        <ProfileSection />
        <SkillsSection />
        <Servicios  />
        <Proyectos  />
        <Preguntas  />
             </div>
    </div>
 
  );
};

export default ContentSection;
