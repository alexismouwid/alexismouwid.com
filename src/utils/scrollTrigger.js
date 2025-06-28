// useContentSectionAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollTrigger() {
  useGSAP(() => {
    gsap.fromTo(
      "#hero-inner",
      { scale: 0.6, autoAlpha: 0 },
      { scale: 0.8, autoAlpha: 1, duration: 0.5, ease: "power3.inOut" }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: 1 / 18, // 10 secciones (9 saltos)
          duration: { min: 0.2, max: 1 },
          delay: 0.1,
          ease: "power1.inOut"
        },
        // markers: true
      }
    });

    // Sección 1: Hero
    tl.fromTo("#hero-inner", { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#hero-inner", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 2: Profile
    tl.fromTo("#profile-inner", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#profile-inner", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 3: Skills
    tl.fromTo("#skills-inner", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#skills-inner", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 4: Servicios
    tl.fromTo("#serv-title", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#serv-title", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 5: Proyecto 1
    tl.fromTo("#proyecto-1", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#proyecto-1", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 6: Proyecto 2
    tl.fromTo("#proyecto-2", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#proyecto-2", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 7: Proyecto 3
    tl.fromTo("#proyecto-3", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#proyecto-3", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 8: Proyecto 4
    tl.fromTo("#proyecto-4", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#proyecto-4", { scale: 2, autoAlpha: 0, duration: 1 });

    // Sección 9: Preguntas
    tl.fromTo("#preguntas-contenedor", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      .to("#preguntas-contenedor", { scale: 2, autoAlpha: 0, duration: 1 });
  }, []);
}

