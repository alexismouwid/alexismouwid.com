// useContentSectionAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollTrigger() {
  useGSAP(() => {
  

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#content-container",
        start: "top top",
        end: "+=7500",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: 1 / 10, // 10 secciones (9 saltos)
          duration:  9999,
          delay: 0.1,
          ease: "power3.inOut"
        },
        //markers: true
      }
    });
      
    tl.from("#hero-inner",{ scale: 1, autoAlpha: 1, duration: 10, ease: "power3.inOut" });
    // Sección 1: Hero
    tl.fromTo("#hero-inner", { scale: 1, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 8  });
      tl.to("#hero-inner", { scale: 0.5, autoAlpha: 0, duration: 8 });
 tl.to({}, { duration: 20 })


    // Sección 2: Profile
    tl.fromTo("#profile-inner", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 });
    tl.to("#profile-inner", { scale: 1, autoAlpha: 1, duration: 4 });
    tl.from("#profile-inner",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
tl.to({}, { duration: 20 })


    // Sección 3: Skills
    tl.fromTo("#skills-inner", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 });
      tl.to("#skills-inner", { scale: 1, autoAlpha: 1, duration: 4 });
    tl.from("#skills-inner",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
tl.to({}, { duration: 20 })


 tl.fromTo("#about-me", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 });
      tl.to("#about-me", { scale: 1, autoAlpha: 1, duration: 4 });
    tl.from("#about-me",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
tl.to({}, { duration: 20 })


    // Sección 4: Servicios
    tl.fromTo("#serv-title", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 });
      tl.to("#serv-title", { scale: 1, autoAlpha: 1, duration: 4 });
    tl.from("#serv-title",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });

tl.to({}, { duration: 20 })
  tl.fromTo("#proyectos-info", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 });
      tl.to("#proyectos-info", { scale: 1, autoAlpha: 1, duration: 4 });
    tl.from("#proyectos-info",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });

tl.to({}, { duration: 20 })


    // Sección 5: Proyecto 1
    tl.fromTo("#proyecto-1", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 });
      tl.to("#proyecto-1", { scale: 1, autoAlpha: 1, duration: 4 });
    tl.from("#proyecto-1",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
tl.to({}, { duration: 20 })

    // Sección 6: Proyecto 2
    tl.fromTo("#proyecto-2", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 })
      tl.to("#proyecto-2", { scale: 1, autoAlpha: 1, duration: 4 })
    tl.from("#proyecto-2",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
tl.to({}, { duration: 20 })

    // Sección 7: Proyecto 3
    tl.fromTo("#proyecto-3", { scale: 0.5, autoAlpha: 0 , duration: 4}, { scale: 1, autoAlpha: 1, duration: 4 })
      tl.to("#proyecto-3", { scale: 1, autoAlpha: 1, duration: 4 })
    tl.from("#proyecto-3",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });

tl.to({}, { duration: 20 })

    // Sección 8: Proyecto 4
    tl.fromTo("#proyecto-4", { scale: 0.5, autoAlpha: 0 , duration: 4}, { scale: 1, autoAlpha: 1, duration: 4 })
      tl.to("#proyecto-4", { scale: 1, autoAlpha: 1, duration: 4 })
    tl.from("#proyecto-4",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
tl.to({}, { duration: 20 })

    // Sección 9: Preguntas
    tl.fromTo("#preguntas-contenedor", { scale: 0.5, autoAlpha: 0, duration: 4 }, { scale: 1, autoAlpha: 1, duration: 4 })
      tl.to("#preguntas-contenedor", { scale: 1, autoAlpha: 1, duration: 4 })
     tl.from("#preguntas-contenedor",{ scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
  

  }, []);
}

