import React, { forwardRef } from "react";
import '../../../tailwind.css';

const CARD_BASE = `
  fixed top-0 left-0 w-full h-screen
  flex flex-col justify-center items-center
  pointer-events-auto
  se:w-[500px] se:h-[400px] se:top-50
  xr:top-60 12p:top-70 12pm:top-70
  gs8:top-50 gs8:w-[500px] gs8:h-[400px]
  im:left-30
  ia:top-90 ia:w-[550px] ia:h-[380px]
  gzf5:top-50 gzf5:w-[700px] gzf5:h-[350px]
  ip:left-35 ip:top-120 ip:w-[700px] ip:h-[450px]
  sp7:top-110 sp7:w-[700px] sp7:h-[450px]
  lg:top-30
  laptop:top-30 laptop:left-70
  nhm:left-70 nhm:top-50
  2xl:left-100
  4k:left-120 4k:top-80 4k:w-[900px] 4k:h-[600px]
  rounded-3xl p-6 min-h-[250px]
  flex flex-col gap-4
  hover:scale-105 hover:contrast-125 transition
`;

const proyectos = [
  { id: "proyecto-1", imagen: "/paint.jpg", alt: "paint", descripcion: "App de dibujo interactivo que permite trazar y crear figuras geométricas en tiempo real. Construida con React usando hooks funcionales (useEffect, useRef) para manejar el canvas y los eventos del mouse.", deploy: "https://new-paint-with-me.vercel.app/", github: "https://github.com/alexismouwid/new-paint-with-me-", color: "bg-gradient-to-br from-zinc-950 via-green-900 to-lime-700 border border-green-900" },
  { id: "proyecto-2", imagen: "/ecomerce.jpg", alt: "ecommerce", descripcion: "Tienda virtual completa con catálogo, carrito de compras, login/register y autenticación JWT. Backend en Express con MongoDB y encriptación de contraseñas con Bcrypt.", deploy: "https://e-commerce-two-topaz-93.vercel.app/", github: "https://github.com/alexismouwid/e-commerce", color: "bg-gradient-to-br from-green-900 via-emerald-600 to-black border border-emerald-900" },
  { id: "proyecto-3", imagen: "/avianca.jpg", alt: "avianca", descripcion: "Recreación detallada de la web oficial de Avianca con animaciones fluidas, navegación funcional y diseño responsivo fiel al original.", deploy: "https://avianca-co-fn142.vercel.app/", github: "https://github.com/alexismouwid/avianca.co", color: "bg-gradient-to-br from-white via-red-400 to-red-900 border border-red-900" },
  { id: "proyecto-4", imagen: "/inventory.png", alt: "inventory", descripcion: "Sistema de gestión de inventario con login, autenticación segura y encriptación de usuarios. Panel de control para administrar productos en tiempo real.", deploy: "https://inventory-management-taupe-one.vercel.app/", github: "https://github.com/alexismouwid/inventory-management", color: "bg-gradient-to-br from-orange-400 via-orange-600 to-neutral-900 border border-orange-900" },
  { id: "proyecto-5", imagen: "/guitarTone.png", alt: "guitartone", descripcion: "Aplicación de IA para guitarra con wizard de 4 pasos. Frontend en React 19 + TypeScript con tRPC para comunicación tipo-segura con el backend. Usa shadcn/ui, wouter y Tailwind v4.", deploy: "https://guitar-tone-ai.vercel.app/", github: "https://github.com/loro-ai/GuitarTone-AI", color: "bg-gradient-to-br from-black via-red-900 to-red-700 border border-red-900" },
  { id: "proyecto-6", imagen: "/brief.png", alt: "brief", descripcion: "App fullstack con arquitectura cliente-servidor separada. Frontend en React + TypeScript con Vite, backend en Node.js, tipos compartidos en /shared. Configuración con Prettier y shadcn/ui.", deploy: "https://brief-of-tecnicore.vercel.app/", github: "https://github.com/alexismouwid/brief-of-tecnicore", color: "bg-gradient-to-br from-indigo-900 via-indigo-600 to-violet-400 border border-indigo-900" },
  { id: "proyecto-7", imagen: "/productividad.png", alt: "productivity", descripcion: "Sistema operativo de productividad personal en el navegador. Organización de tareas, notas y flujos de trabajo en una sola interfaz. Stack en React + Tailwind con enfoque en UX limpia.", deploy: "https://productivity-os-zeta.vercel.app/login", github: "https://github.com/loro-ai/Productivity-OS", color: "bg-gradient-to-br from-teal-900 via-teal-600 to-green-400 border border-teal-900" },
  { id: "proyecto-8", imagen: "/inventario.png", alt: "inventario-ai", descripcion: "Sistema de inventario potenciado con IA. Gestión de productos con autenticación, Tailwind CSS para UI y Vite como bundler. Arquitectura modular con componentes reutilizables.", deploy: "https://inventario-ai-psi.vercel.app/login", github: "https://github.com/loro-ai/Inventario-AI", color: "bg-gradient-to-br from-blue-900 via-blue-600 to-sky-400 border border-blue-900" },
  { id: "proyecto-9", imagen: "/coreds.png", alt: "coreds", descripcion: "Tienda online de dispositivos tecnológicos con catálogo, botones de llamado a la acción, especificacion de mensaje y producto directo al whatsApp del vendedor", deploy: "https://coreds-tecnologies.vercel.app/", github: "https://github.com/alexismouwid/COREDS-Tecnologies", color: "bg-gradient-to-br from-zinc-950 via-cyan-800 to-teal-500" },
];

const Proyectos = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="w-full px-4 py-12 text-white h-dvh mx-auto">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {proyectos.map((p) => (
          <div key={p.id} id={p.id} className={`${CARD_BASE} ${p.color}`}>
            <img src={p.imagen} alt={p.alt} className="rounded-xl object-cover h-48 w-full lg:h-[350px]" />
            <p>{p.descripcion}</p>
            <div className="flex justify-between items-center mt-auto">
              <a href={p.deploy} target="_blank" rel="noopener noreferrer">
                <img src="https://vercel.com/button" alt="Deploy with Vercel" />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <img src="/git96.png" alt="GitHub" width="40" height="28" className="border border-gray-300 rounded" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Proyectos;
