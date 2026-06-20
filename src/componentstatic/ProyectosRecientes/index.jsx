import React, { forwardRef } from "react";
import '../../tailwind.css';
import { useVisibilityObserver } from "../../utils/useVisibilityObserver";

const CARD_BASE = `
  rounded-3xl p-6 min-h-[250px] flex flex-col gap-4
  hover:scale-105 hover:contrast-125 transition
  lg:size-80 lg:hover:scale-90 lg:hover:duration-300
  laptop:size-85 laptop:hover:scale-90 laptop:hover:duration-300
  2xl:size-90 2xl:hover:scale-80 2xl:hover:duration-300
  4k:size-110 4k:hover:contrast-125 4k:hover:duration-300
`;

const proyectos = [
  { id: 1, imagen: "/paint.jpg", alt: "paint", descripcion: "App de dibujo interactivo que permite trazar y crear figuras geométricas en tiempo real.", deploy: "https://new-paint-with-me.vercel.app/", github: "https://github.com/alexismouwid/new-paint-with-me-", color: "bg-gradient-to-br from-zinc-950 via-green-900 to-lime-700 border border-green-900" },
  { id: 2, imagen: "/ecomerce.jpg", alt: "ecommerce", descripcion: "Tienda virtual con catálogo, carrito de compras, login/register y autenticación JWT.", deploy: "https://e-commerce-two-topaz-93.vercel.app/", github: "https://github.com/alexismouwid/e-commerce", color: "bg-gradient-to-br from-green-900 via-emerald-600 to-black border border-emerald-900" },
  { id: 3, imagen: "/avianca.jpg", alt: "avianca", descripcion: "Clon de la web oficial de Avianca con animaciones y funcionalidades detalladas.", deploy: "https://avianca-co-fn142.vercel.app/", github: "https://github.com/alexismouwid/avianca.co", color: "bg-gradient-to-br from-white via-red-400 to-red-900 border border-red-900" },
  { id: 4, imagen: "/inventory.png", alt: "inventory", descripcion: "Sistema de gestión de inventario con login, autenticación y encriptación de usuarios.", deploy: "https://inventory-management-taupe-one.vercel.app/", github: "https://github.com/alexismouwid/inventory-management", color: "bg-gradient-to-br from-orange-400 via-orange-600 to-neutral-900 border border-orange-900" },
  { id: 5, imagen: "/guitarTone.png", alt: "guitartone", descripcion: "App de IA para guitarra con wizard de 4 pasos. React 19 + TypeScript, tRPC, shadcn/ui y Tailwind v4.", deploy: "https://guitar-tone-ai.vercel.app/", github: "https://github.com/loro-ai/GuitarTone-AI", color: "bg-gradient-to-br from-black via-red-900 to-red-700 border border-red-900" },
  { id: 6, imagen: "/brief.png", alt: "brief", descripcion: "App fullstack cliente-servidor. React + TypeScript, Node.js, tipos compartidos en /shared, shadcn/ui.", deploy: "https://brief-of-tecnicore.vercel.app/", github: "https://github.com/alexismouwid/brief-of-tecnicore", color: "bg-gradient-to-br from-indigo-900 via-indigo-600 to-violet-400 border border-indigo-900" },
  { id: 7, imagen: "/productividad.png", alt: "productivity", descripcion: "Sistema operativo de productividad en el navegador. Tareas, notas y flujos en una sola interfaz.", deploy: "https://productivity-os-zeta.vercel.app/login", github: "https://github.com/loro-ai/Productivity-OS", color: "bg-gradient-to-br from-teal-900 via-teal-600 to-green-400 border border-teal-900" },
  { id: 8, imagen: "/inventario.png", alt: "inventario-ai", descripcion: "Inventario potenciado con IA. Autenticación, Tailwind CSS y arquitectura modular con Vite.", deploy: "https://inventario-ai-psi.vercel.app/login", github: "https://github.com/loro-ai/Inventario-AI", color: "bg-gradient-to-br from-blue-900 via-blue-600 to-sky-400 border border-blue-900" },
  { id: 9, imagen: "/coreds.png", alt: "coreds", descripcion: "Tienda tech con catálogo, smartwatches y dispositivos. Login con JWT y atención por WhatsApp.", deploy: "https://coreds-tecnologies.vercel.app/", github: "https://github.com/alexismouwid/COREDS-Tecnologies", color: "bg-gradient-to-br from-slate-950 via-cyan-900 to-cyan-600 border border-cyan-900" },
];

const ProyectosRecientes = forwardRef((props, ref) => {
  useVisibilityObserver(".ejeY");

  return (
    <section className="w-full px-4 py-12 text-white bg-gray-950">
      <div ref={ref} className="font-sans font-bold grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 max-w-7xl mx-auto lg:relative lg:bottom-10 lg:right-5 4k:bottom-20 4k:gap-20 4k:relative 4k:right-20">
        {proyectos.map((p) => (
          <div key={p.id} className={`${CARD_BASE} ${p.color}`}>
            <img src={p.imagen} alt={p.alt} className="rounded-xl object-cover h-48 w-full" />
            <p className="2xl:text-xl 4k:text-2xl">{p.descripcion}</p>
            <div className="flex justify-between items-center mt-auto">
              <a href={p.deploy} target="_blank" rel="noopener noreferrer">
                <img src="https://vercel.com/button" alt="Deploy with Vercel" className="4k:size-13" />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <img src="/git96.png" alt="GitHub" width="40" height="28" className="border border-gray-300 rounded 4k:size-15" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n" target="_blank" className="font-sans font-bold inline-block px-6 py-3 bg-lime-300 text-white rounded hover:bg-lime-400 transition ejeY 2xl:relative xl:text-2xl 2xl:bottom-10 2xl:text-2xl 4k:relative 4k:bottom-20">
          ¡Empecemos a discutir sobre tu desarrollo!
        </a>
      </div>
    </section>
  );
});

export default ProyectosRecientes;
