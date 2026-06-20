import React from "react";
import '../../tailwind.css';
import sprite from './sprite.svg';

const Perfil = () => {
  return (
    <div className="w-full lg:w-[30%] flex flex-col items-center justify-center gap-4 p-6">
      <img
        id="perfil-image"
        alt="alexis sonriendo"
        src="/alexis.jpg"
        className="h-52 lg:h-44 xl:h-52 2xl:h-60 4k:h-72 object-cover rounded-full mask-radial-at-center mask-radial-from-50% mask-radial-to-70%"
      />
      <div className="flex flex-col items-center gap-1">
        <span className="text-sky-400 text-base font-mono px-3 py-1 border border-sky-500/40 rounded-full bg-black/50 inline-flex items-center gap-1">
          @LOROAI
          <svg className="size-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
        </span>
        <p className="font-bebas text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl 4k:text-4xl text-white">Alexis Vega</p>
        <p className="font-sans text-sm lg:text-base 2xl:text-lg 4k:text-xl text-gray-300">
          Desarrollador Web
        </p>
      </div>

      <div className="flex gap-3 flex-wrap justify-center mt-2">
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
