// useContentSectionAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollTrigger() {
  useGSAP(() => {
    gsap.fromTo(
      "#hero-inner",
      { scale: 1, autoAlpha: 0, left: 2000},
      { scale: 1, autoAlpha: 1, left: 0, duration: 0.3  }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: 1 / 18, // 10 secciones (9 saltos)
          duration:  9999,
          delay: 0.1,
          ease: "power3.inOut"
        },
        // markers: true
      }
    });
      
    tl.from("#hero-inner",{ scale: 1, autoAlpha: 1, duration: true });
    // Sección 1: Hero
    tl.fromTo("#hero-inner", { scale: 1, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1  });
      tl.to("#hero-inner", { scale: 1, autoAlpha: 0, duration: 1 });

    // Sección 2: Profile
    tl.fromTo("#profile-inner", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 });
    tl.to("#profile-inner", { scale: 1.5, autoAlpha: 0, duration: 1 });

    // Sección 3: Skills
    tl.fromTo("#skills-inner", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 });
      tl.to("#skills-inner", { scale: 1.5, autoAlpha: 0, duration: 1 });

    // Sección 4: Servicios
    tl.fromTo("#serv-title", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 });
      tl.to("#serv-title", { scale: 1.5, autoAlpha: 0, duration: 1 });

    // Sección 5: Proyecto 1
    tl.fromTo("#proyecto-1", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 });
      tl.to("#proyecto-1", { scale: 1.5, autoAlpha: 0, duration: 1 });

    // Sección 6: Proyecto 2
    tl.fromTo("#proyecto-2", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 })
      tl.to("#proyecto-2", { scale: 1.5, autoAlpha: 0, duration: 1 })

    // Sección 7: Proyecto 3
    tl.fromTo("#proyecto-3", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 })
      tl.to("#proyecto-3", { scale: 1.5, autoAlpha: 0, duration: 1 })

    // Sección 8: Proyecto 4
    tl.fromTo("#proyecto-4", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 })
      tl.to("#proyecto-4", { scale: 1.5, autoAlpha: 0, duration: 1 })

    // Sección 9: Preguntas
    tl.fromTo("#preguntas-contenedor", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })
      tl.to("#preguntas-contenedor", { scale: 1, autoAlpha: 0, duration: 0.1 })
    
    tl.fromTo("#preguntas-contenedor", { scale: 1, autoAlpha: 0, duration: 0.1 }, { scale: 1, autoAlpha: 1, duration: 0.1 })

  }, []);
}

