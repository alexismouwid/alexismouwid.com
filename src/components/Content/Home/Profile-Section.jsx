// src/components/ContentSection/ProfileSection.jsx
import React from 'react';
import sprite from './sprite.svg';
import '../../../tailwind.css';

const ProfileSection = () => (
  <div id="profile-section" className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center pointer-events-none">
    <div id="profile-inner" className="flex flex-col items-center gap-3 pointer-events-auto">

      <img
        id="perfil"
        src="./test.jpg"
        alt="Perfil"
        className="w-48 h-48 lg:w-52 lg:h-52 4k:w-72 4k:h-72 rounded-full object-cover mask-radial-at-center mask-radial-from-50% mask-radial-to-70%"
      />

      <span className="text-sky-400 text-base 4k:text-3xl font-mono px-3 py-1 border border-sky-500/50 rounded-full bg-black/65 inline-flex items-center gap-1">
        @LOROAI
        <svg className="size-4 4k:size-8" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
        </svg>
      </span>

      <h2 className="text-2xl lg:text-3xl 4k:text-5xl text-white font-bold">Alexis Vega</h2>

      <p className="font-bebas text-2xl 4k:text-4xl text-center">
        Desarrollador web <span className="text-[#D4FF00]">Junior</span>
      </p>

      <section className="flex gap-2 justify-center flex-wrap mt-2">
        <a className="p-2 size-10 sm:size-12 4k:size-24 flex bg-violet-100 items-center justify-center rounded-full hover:bg-purple-200 hover:scale-110 transition-transform" href="https://twitch.tv/alexis" target="_blank" rel="noreferrer" aria-label="twitch">
          <svg className="w-6 h-6 4k:w-12 4k:h-12" width="28" height="28" aria-hidden="true"><use href={`${sprite}#twitch`} /></svg>
        </a>
        <a className="p-2 size-10 sm:size-12 4k:size-24 flex bg-zinc-900 items-center justify-center rounded-full hover:bg-gray-800 hover:scale-110 transition-transform" href="https://github.com/alexismouwid" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg className="w-6 h-6 4k:w-12 4k:h-12 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#github`} /></svg>
        </a>
        <a className="p-2 size-10 sm:size-12 4k:size-24 flex items-center justify-center rounded-full hover:scale-110 transition-transform" href="https://instagram.com/alexismouwid" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}>
          <svg className="w-4 h-4 4k:w-12 4k:h-12 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#instagram`} /></svg>
        </a>
        <a className="p-2 size-10 sm:size-12 4k:size-24 flex bg-black items-center justify-center rounded-full hover:bg-gray-800 hover:scale-110 transition-transform" href="https://x.com/alexis" target="_blank" rel="noreferrer" aria-label="X">
          <svg className="w-6 h-6 4k:w-12 4k:h-12 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#x`} /></svg>
        </a>
        <a className="p-2 size-10 sm:size-12 4k:size-24 flex bg-white items-center justify-center rounded-full hover:scale-110 transition-transform" href="https://linkedin.com/in/alexis" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg className="w-6 h-6 4k:w-12 4k:h-12 text-white" width="28" height="28" aria-hidden="true"><use href={`${sprite}#linkedin`} /></svg>
        </a>
      </section>
    </div>
  </div>
);

export default ProfileSection;
