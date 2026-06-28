import React, { useEffect, useState } from "react";
import '../../tailwind.css';
import sprite from './sprite.svg';

 
const stats = [
  { valor: 3, sufijo: "+", label: "Años de experiencia" },
  { valor: 9, sufijo: "", label: "Proyectos completados" },
  { valor: 6, sufijo: "", label: "Tecnologías dominadas" },
  { valor: 1, sufijo: "h", label: "Tiempo de respuesta" },
];

const useCounter = (target, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === null) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

const StatCard = ({ valor, sufijo, texto, label }) => {
  const count = useCounter(valor);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-[#D4FF00]/30 transition-all duration-300">
      <span className="text-white font-bold text-2xl lg:text-xl xl:text-2xl">
        {texto ? texto : `${count}${sufijo}`}
      </span>
      <span className="text-gray-400 font-sans text-xs mt-1">{label}</span>
    </div>
  );
};

const Perfil = () => {
  return (
    <div className="w-full lg:w-[30%] min-h-screen lg:min-h-0 flex flex-col items-center justify-center gap-6 p-8 lg:p-6">

      <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-sky-400 text-base font-mono px-3 py-1 border border-sky-500/40 rounded-full bg-black/50 inline-flex items-center gap-1">
          @LOROAI
          <svg className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
        </span>
        <p className="font-bebas text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl 4k:text-5xl text-white">Alexis Vega</p>
        <p className="font-sans text-sm lg:text-base 2xl:text-lg 4k:text-xl text-gray-300">
          Desarrollador Web
        </p>
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        <a className="p-2 size-9 flex bg-violet-100 items-center justify-center rounded-full hover:bg-purple-200 hover:scale-110 transition-transform" href="https://twitch.tv/alexis" target="_blank" rel="noreferrer" aria-label="twitch">
          <svg className="w-5 h-5" width="28" height="28" aria-hidden="true"><use href={`${sprite}#twitch`} /></svg>
        </a>
        <a className="p-2 size-9 flex bg-zinc-900 items-center justify-center rounded-full hover:bg-gray-800 hover:scale-110 transition-transform" href="https://github.com/alexismouwid" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg className="w-5 h-5 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#github`} /></svg>
        </a>
        <a className="p-2 size-9 flex items-center justify-center rounded-full hover:scale-110 transition-transform" href="https://instagram.com/alexismouwid" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}>
          <svg className="w-5 h-5 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#instagram`} /></svg>
        </a>
        <a className="p-2 size-9 flex bg-black items-center justify-center rounded-full hover:bg-gray-800 hover:scale-110 transition-transform" href="https://x.com/alexis" target="_blank" rel="noreferrer" aria-label="X">
          <svg className="w-5 h-5 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#x`} /></svg>
        </a>
        <a className="p-2 size-9 flex bg-white items-center justify-center rounded-full hover:scale-110 transition-transform" href="https://linkedin.com/in/alexis" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg className="w-5 h-5 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#linkedin`} /></svg>
        </a>
      </div>
    </div>
  );
};

export default Perfil;
