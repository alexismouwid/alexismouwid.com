// useContentSectionAnimation.js
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollTrigger() {
  useGSAP(() => {

    gsap.fromTo("#hero-inner",
      { scale: 0.6, autoAlpha: 0 },
      { scale: 0.8, autoAlpha: 1, duration: 0.5, ease: "power3.inOut" }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#content-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // más fluido
        pin: true,
        pinSpacing: false,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 1 },
          delay: 0.1,
          ease: "power1.inOut"
        }
        // markers: true, // Descomenta para debug visual
      }
    });

    tl.addLabel("hero-start")
      .from("#hero-inner", { scale: 0.8, autoAlpha: 1, duration: 0.01 })

      .addLabel("hero-visible")
      .fromTo("#hero-inner", { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1 })

      .addLabel("hero-exit")
      .to("#hero-inner", { scale: 2, autoAlpha: 0, duration: 2 })

      .addLabel("profile-entry")
      .fromTo("#profile-inner", { scale: 0.4, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 3 })

      .addLabel("profile-exit")
      .to("#profile-inner", { scale: 2, autoAlpha: 0, duration: 2 })

      .addLabel("skills-entry")
      .fromTo("#skills-inner", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 4 })

      .addLabel("skills-exit")
      .to("#skills-inner", { scale: 2, autoAlpha: 0, duration: 4 })

      .addLabel("serv-title-entry")
      .fromTo("#serv-title", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2 })

      .addLabel("serv-title-exit")
      .to("#serv-title", { scale: 2, autoAlpha: 0, duration: 3 })

      .addLabel("proyecto-1-entry")
      .fromTo("#proyecto-1", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2 })

      .addLabel("proyecto-1-exit")
      .to("#proyecto-1", { scale: 2, autoAlpha: 0, duration: 3 })

      .addLabel("proyecto-2-entry")
      .fromTo("#proyecto-2", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2 })

      .addLabel("proyecto-2-exit")
      .to("#proyecto-2", { scale: 2, autoAlpha: 0, duration: 3 })

      .addLabel("proyecto-3-entry")
      .fromTo("#proyecto-3", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2 })

      .addLabel("proyecto-3-exit")
      .to("#proyecto-3", { scale: 2, autoAlpha: 0, duration: 3 })

      .addLabel("proyecto-4-entry")
      .fromTo("#proyecto-4", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2 })

      .addLabel("proyecto-4-exit")
      .to("#proyecto-4", { scale: 2, autoAlpha: 0, duration: 3 })

      .addLabel("faq-entry")
      .fromTo("#preguntas-contenedor", { scale: 1.2, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2 })

      .addLabel("faq-exit")
      .to("#preguntas-contenedor", { scale: 2, autoAlpha: 0, duration: 3 });
  }, []);
}

