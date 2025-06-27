// src/components/ContentSection/ProfileSection.jsx
import React from 'react';
import './Profile-section.css';
import sprite from './sprite.svg';
const ProfileSection = () => (
  <div id="profile-section" class="fixed relative top-2 w-full h-dvh
    flex flex-col justify-center pointer-events-none align-center z-1 mx-auto">

    <div id="profile-inner" class="relative right-2 z-1 pointer-events-auto" > 

      <div id="profile-image" class="relative mx-auto bottom-20">
  <img 
    id="perfil" 
    src="./test.jpg" 
    alt="Perfil" 
    class="
      w-60 h-60           <!-- Tamaño fijo para móviles (ajusta según necesidad) -->
      relative
      mx-auto
      bottom-5
      sm:w-32 sm:h-32      <!-- Tamaño para sm (≥640px) -->
      md:w-40 md:h-40      <!-- Tamaño para md (≥768px) -->
      lg:w-48 lg:h-48      <!-- Tamaño para lg (≥1024px) -->
      rounded-full        <!-- Bordes redondeados -->
      object-cover        <!-- Ajuste de imagen -->
      mask-radial-at-center mask-radial-from-50% mask-radial-to-70%
    "
  />
</div>
<span
            class="
              text-sky-400 text-xl font-mono px-3 py-1
              border border-sky-500/50 rounded-full shadow-sm
              justify-center bg-black/65 cursor-crosshair z-10
              inline-flex items-center relative bottom-30
            "
          >
            @mrcommitt
            <svg
              class="ml-1 size-5 text-skv-400 inline"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 11.172l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              />
            </svg>
          </span>
    <div id="profile-info"
    class="flex flex-col w-full bg-transparent relative">
      <h2
        class="lg:text-3xl  text-2xl text-white relative bottom-30 p-5 relative">Alexis Vega</h2>
         <p class="font-bebas text-center mt-4 text-2xl relative bottom-30">
          Desarrollador web <span class=" text-[#D4FF00]">Junior</span>
        </p>
      <section class="flex gap-2 justify-center flex-wrap relative bottom-25">
          {/* Twitch */}
          <a
            class="p-2 size-10 sm:size-12 flex bg-violet-100 items-center justify-center rounded-full hover:bg-purple-200 hover:scale-110 transition-transform animation-slide-up-fade"
            href="https://twitch.tv/alexis"
            target="_blank"
            rel="noreferrer"
            aria-label="twitch"
            title="Ir a Twich de @alexis"
          >
            <svg class="w-6 h-6" width="28" height="28" aria-hidden="true">
              <use href={`${sprite}#twitch`} />
            </svg>
          </a>

          {/* GitHub */}
          <a
            class="p-2 size-10 sm:size-12 flex bg-zinc-900 items-center justify-center rounded-full hover:bg-gray-800 hover:scale-110 transition-transform"
            href="https://github.com/alexismouwid"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="Ir al GitHub de @alexis"
          >
            <svg class="w-6 h-6 text-white" width="28" height="28" aria-hidden="true">
              <use href={`${sprite}#github`} />
            </svg>
          </a>

          {/* Instagram */}
          <a
            class="p-2 size-10 sm:size-12 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            href="https://instagram.com/alexismouwid"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Ir al Instagram de @alexis"
            style={{
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
            }}
          >
            <svg width="28" height="28" aria-hidden="true">
              <use href={`${sprite}#instagram`} />
            </svg>
          </a>

         
          {/* X (Twitter) */}
          <a
            class="p-2 size-10 sm:size-12 flex bg-black items-center justify-center rounded-full hover:bg-gray-800 hover:scale-110 transition-transform"
            href="https://x.com/alexis"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            title="Ir al perfil de X de @alexis"
          >
            <svg class="w-6 h-6 text-white" width="28" height="28" aria-hidden="true">
              <use href={`${sprite}#x`} />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            class="bg-white hover:bg-black-200 p-2 size-10 sm:size-12 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
            href="https://linkedin.com/in/alexis"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="Ir al LinkedIn de @alexis"
          >
            <svg class="w-6 h-6 text-white" width="28" height="28" aria-hidden="true">
              <use href={`${sprite}#linkedin`} />
            </svg>
          </a>
        </section>


    </div>
   

         </div>
  </div>
);

export default ProfileSection;

