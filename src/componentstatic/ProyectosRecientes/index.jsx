import React, { forwardRef } from "react";
import '../../tailwind.css';
import { useVisibilityObserver } from "../../utils/useVisibilityObserver";

const CARD_BASE = `
  rounded-2xl p-4 sm:p-5 flex flex-col gap-3
  hover:scale-105 hover:brightness-110 transition-all duration-300
  lg:hover:scale-95 lg:hover:duration-300
`;

const proyectos = [
  { id: 1, nombre: "Paint With Me", imagen: "/paint.jpg", alt: "paint", descripcion: "App de dibujo interactivo que permite trazar y crear figuras geométricas en tiempo real.", deploy: "https://new-paint-with-me.vercel.app/", github: "https://github.com/alexismouwid/new-paint-with-me-", color: "bg-gradient-to-br from-zinc-950 via-green-900 to-lime-700 border border-green-900/50" },
  { id: 2, nombre: "E-Commerce", imagen: "/ecomerce.jpg", alt: "ecommerce", descripcion: "Tienda virtual con catálogo, carrito de compras, login/register y autenticación JWT.", deploy: "https://e-commerce-two-topaz-93.vercel.app/", github: "https://github.com/alexismouwid/e-commerce", color: "bg-gradient-to-br from-green-900 via-emerald-700 to-black border border-emerald-900/50" },
  { id: 3, nombre: "Avianca.co", imagen: "/avianca.jpg", alt: "avianca", descripcion: "Clon de la web oficial de Avianca con animaciones y funcionalidades detalladas.", deploy: "https://avianca-co-fn142.vercel.app/", github: "https://github.com/alexismouwid/avianca.co", color: "bg-gradient-to-br from-zinc-900 via-red-800 to-red-600 border border-red-900/50" },
  { id: 4, nombre: "Inventory Management", imagen: "/inventory.png", alt: "inventory", descripcion: "Sistema de gestión de inventario con login, autenticación y encriptación de usuarios.", deploy: "https://inventory-management-taupe-one.vercel.app/", github: "https://github.com/alexismouwid/inventory-management", color: "bg-gradient-to-br from-orange-900 via-orange-700 to-zinc-900 border border-orange-900/50" },
  { id: 5, nombre: "GuitarTone AI", imagen: "/guitarTone.png", alt: "guitartone", descripcion: "App de IA para guitarra con wizard de 4 pasos. React 19 + TypeScript, tRPC y Tailwind v4.", deploy: "https://guitar-tone-ai.vercel.app/", github: "https://github.com/loro-ai/GuitarTone-AI", color: "bg-gradient-to-br from-black via-red-900 to-red-700 border border-red-900/50" },
  { id: 6, nombre: "Brief of Tecnicore", imagen: "/brief.png", alt: "brief", descripcion: "App fullstack cliente-servidor. React + TypeScript, Node.js, tipos compartidos y shadcn/ui.", deploy: "https://brief-of-tecnicore.vercel.app/", github: "https://github.com/alexismouwid/brief-of-tecnicore", color: "bg-gradient-to-br from-indigo-950 via-indigo-700 to-violet-600 border border-indigo-900/50" },
  { id: 7, nombre: "Productivity OS", imagen: "/productividad.png", alt: "productivity", descripcion: "Sistema operativo de productividad en el navegador. Tareas, notas y flujos en una interfaz.", deploy: "https://productivity-os-zeta.vercel.app/login", github: "https://github.com/loro-ai/Productivity-OS", color: "bg-gradient-to-br from-teal-950 via-teal-700 to-green-600 border border-teal-900/50" },
  { id: 8, nombre: "Inventario AI", imagen: "/inventario.png", alt: "inventario-ai", descripcion: "Inventario potenciado con IA. Autenticación, Tailwind CSS y arquitectura modular con Vite.", deploy: "https://inventario-ai-psi.vercel.app/login", github: "https://github.com/loro-ai/Inventario-AI", color: "bg-gradient-to-br from-blue-950 via-blue-700 to-sky-500 border border-blue-900/50" },
  { id: 9, nombre: "COREDS Tecnologies", imagen: "/coreds.png", alt: "coreds", descripcion: "Tienda tech: smartwatches, cámaras y streaming. Login con JWT y atención por WhatsApp.", deploy: "https://coreds-tecnologies.vercel.app/", github: "https://github.com/alexismouwid/COREDS-Tecnologies", color: "bg-gradient-to-br from-slate-950 via-cyan-900 to-cyan-600 border border-cyan-900/50" },
];

const ProyectosRecientes = forwardRef((props, ref) => {
  useVisibilityObserver(".ejeY");

  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-20 lg:px-20">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
        {proyectos.map((p) => (
          <div key={p.id} className={`${CARD_BASE} ${p.color}`}>
            <img src={p.imagen} alt={p.alt} className="rounded-xl object-cover h-36 sm:h-44 w-full" />
            <h3 className="text-white font-semibold text-sm sm:text-base">{p.nombre}</h3>
            <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed flex-1">{p.descripcion}</p>
            <div className="flex justify-between items-center mt-auto pt-2">
              <a href={p.deploy} target="_blank" rel="noopener noreferrer">
                <img src="https://vercel.com/button" alt="Deploy with Vercel" />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <img src="/git96.png" alt="GitHub" width="36" height="26" className="border border-white/20 rounded" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-14 text-center">
        <a
          href={`https://api.whatsapp.com/send?phone=573044266017&text=Hola%2C+quiero+más+información`}
          target="_blank"
          rel="noopener noreferrer"
            className="inline-block font-bebas text-2xl relative top-0 backdrop-blur-sm bg-blue-950/40 rounded-[8px] transition-all duration-300 ease-in-out hover:!text-black hover:bg-[#D4FF00] hover:backdrop-blur-none p-1 sm:p-3" 
style={{ color: "#D4FF00", border: "1px solid #D4FF00" }} style={{ color: "#D4FF00", border: "1px solid #D4FF00" }}  >
          ¡Empecemos a construir tu proyecto!
        </a>
      </div>
    </section>
  );
});

export default ProyectosRecientes;
