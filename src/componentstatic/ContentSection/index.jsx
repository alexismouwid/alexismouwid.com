import React, { forwardRef } from 'react';
import '../../tailwind.css';
import { useVisibilityObserver } from '../../utils/useVisibilityObserver';
import Contacto from './Contacto.jsx';
import Perfil from './Perfil.jsx';
import Habilidades from './Habilidades.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContentSection = forwardRef((props, ref) => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const splitText = new SplitText("#visualizar", { type: "words, chars, lines" });
    const splitText2 = new SplitText("#cuento", { type: "words, chars, lines" });
    const tl = gsap.timeline();

    tl.from(splitText.chars, { duration: 0.5, y: 20, stagger: 0.1, opacity: 0, filter: "blur(10px)" })
      .from("#perfil-image", { duration: 0.5, scale: 0.1, opacity: 0 }, "<")
      .from(splitText.words, { duration: 0.5, y: 10, stagger: 0.1, opacity: 0, filter: "blur(10px)" })
      .from("#grid-skills", { x: 500, y: 500, opacity: 0, duration: 1 }, "<")
      .from(splitText2.words, { duration: 0.1, y: 20, stagger: 0.1, opacity: 0, filter: "blur(10px)" }, ">")
      .from(".habilidad-item-busqueda", { y: 500, opacity: 0, duration: 1 }, "<");
  }, []);

  return (
    <div ref={ref} className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-16 gap-6">
      <Contacto />
      <Perfil />
      <Habilidades />
    </div>
  );
});

export default ContentSection;
