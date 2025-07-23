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
          duration: 9999,
          delay: 0.1,
          ease: "power3.inOut"
        },
        // markers: true,
      }
    });

    // Helper function to register animation per sección
    const animateSection = (id, pauseAfter = true) => {
      tl.fromTo(id, { scale: 0.5, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 4 });
      tl.to(id, { scale: 1, autoAlpha: 1, duration: 4 });
      tl.from(id, { scale: 1, autoAlpha: 1, duration: 20, ease: "power3.inOut" });
      if (pauseAfter) tl.to({}, { duration: 20 }); // Espacio entre secciones
    };

    // Sección 0: Hero
    tl.from("#hero-inner", { scale: 1, autoAlpha: 1, duration: 10, ease: "power3.inOut" });
    tl.fromTo("#hero-inner", { scale: 1, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 8 });
    tl.to("#hero-inner", { scale: 0.5, autoAlpha: 0, duration: 8 });
    tl.to({}, { duration: 20 });

    // Sección 1: Profile
    animateSection("#profile-inner");

    // Sección 2: Skills
    animateSection("#skills-inner");

    // Sección 3: About Me
    animateSection("#about-me");

    // Sección 4: Servicios
    animateSection("#serv-title");

    // Sección 5: Proyectos Información
    animateSection("#proyectos-info");

    // Sección 6: Proyecto 1
    animateSection("#proyecto-1");

    // Sección 7: Proyecto 2
    animateSection("#proyecto-2");

    // Sección 8: Proyecto 3
    animateSection("#proyecto-3");

    // Sección 9: Proyecto 4
    animateSection("#proyecto-4");

    // Sección 10: Preguntas
    animateSection("#preguntas-contenedor", false); // Última: sin pausa extra

  }, []);
}

