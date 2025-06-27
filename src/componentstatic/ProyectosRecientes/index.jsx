import React, { useEffect, useState, forwardRef } from "react";
import '../../styles/tailwind-component.output.css';
import { useVisibilityObserver } from "../../utils/useVisibilityObserver";

const ProyectosRecientes = forwardRef((props, ref) => {
  useVisibilityObserver(".ejeY");

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section class="w-full px-4 py-12 text-white bg-degrade  bg-parte-3">
      <h2 class="text-4xl font-extrabold mb-12 text-transparent bg-gradient-to-r from-[#D4FF00] via-[#0084ff] to-[#00ffd4] bg-clip-text animate-shine text-center">
        Mis desarrollos recientes
      </h2>

      <div ref={ref} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Proyecto 1 */}
        <div class="bg-gradient-to-br from-cyan-900 via-cyan-400 to-cyan-500 border border-cyan-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">
          <img src= "/paint.jpg" alt="paint" class="rounded-xl object-cover h-48 w-full" />
          <p>Una aplicación que permite al usuario trazar y dibujar figuras geométricas.</p>
          <div class="flex justify-between items-center mt-auto">
            <a href="https://new-paint-with-me.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
            <a href="https://github.com/alexismouwid/new-paint-with-me-?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <img src="/git96.png" alt="GitHub" width="40" height="28" class="border border-gray-300 rounded" />
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div class="bg-gradient-to-br from-red-900 via-green-400 to-black-500 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">
          <img src="/ecomerce.jpg" alt="ecommerce" class="rounded-xl object-cover h-48 w-full" />
          <p>Tienda virtual con catálogo, carrito de compras, login/register y autenticación.</p>
          <div class="flex justify-between items-center mt-auto">
            <a href="https://e-commerce-two-topaz-93.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
            <a href="https://github.com/alexismouwid/e-commerce" target="_blank" rel="noopener noreferrer">
              <img src="/git96.png" alt="GitHub" width="40" height="28" class="border border-gray-300 rounded" />
            </a>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div class="bg-gradient-to-br from-white-100 via-red-400 to-red-900 border border-red-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">
          <img src="/avianca.jpg" alt="avianca" class="rounded-xl object-cover h-48 w-full" />
          <p>Clon de la web oficial de Avianca con animaciones y funcionalidades detalladas.</p>
          <div class="flex justify-between items-center mt-auto">
            <a href="https://avianca-co-fn142.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
            <a href="https://github.com/alexismouwid/avianca.co" target="_blank" rel="noopener noreferrer">
              <img src="/git96.png" alt="GitHub" width="40" height="28" class="border border-gray-300 rounded" />
            </a>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div class=" bg-gradient-to-br from-orange-400 via-orange-600 to-neutral-900
0 border border-green-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">
          <img src="/inventory.png" alt="inventory" class="rounded-xl object-cover h-48 w-full" />
          <p>Aplicación de gestión de inventario con login, autenticación y encriptación de usuarios.</p>
          <div class="flex justify-between items-center mt-auto">
            <a href="https://inventory-management-taupe-one.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
            <a href="https://github.com/alexismouwid/inventory-management" target="_blank" rel="noopener noreferrer">
              <img src="/git96.png" alt="GitHub" width="40" height="28" class="border border-gray-300 rounded" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n" target="_blank" class="inline-block px-6 py-3 bg-lime-300 text-white rounded hover:bg-lime-400 transition ejeY">
          ¡Empecemos a discutir sobre tu desarrollo!
        </a>
      </div>
    </section>
  );
});

export default ProyectosRecientes;

