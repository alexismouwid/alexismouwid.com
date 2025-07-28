import React, { useEffect, useState, forwardRef } from "react";
import '../../tailwind.css';
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
    
    <section class="w-full  px-4 py-12 text-white bg-gray-950  ">
      

      <div ref={ref} class="font-sans font-bold grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 max-w-7xl mx-auto lg:relative lg:bottom-10 lg:right-5 4k:bottom-20 4k:gap-20 4k:relative 4k:right-20">
        {/* Proyecto 1 */}
        <div class="bg-gradient-to-br from-cyan-900 via-cyan-400 to-cyan-500 border border-cyan-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition 
          lg:size-80 lg:hover:scale-90 lg:hover:contrast-125 lg:hover:z[10000] lg:hover:duration-300

          laptop:size-85 laptop:hover:scale-90 laptop:hover:contrast-125 laptop:hover:z[10000] laptop:hover:duration-300
  2xl:size-90 2xl:hover:scale-80 2xl:hover:contrast-125 2xl:hover:z[10000] 2xl:hover:duration-30
          4k:size-110 4k:hover-scale-90 4k:hover:contrast-125 4k:hover:z[10000] 4k:hover:duration-300

          ">
          <img src= "/paint.jpg" alt="paint" class="rounded-xl object-cover h-48 w-full" />
          <p className="
          2xl:text-xl
          4k:text-2xl">Una aplicación que permite al usuario trazar y dibujar figuras geométricas.</p>
          <div class="flex justify-between items-center mt-auto">
            <a href="https://new-paint-with-me.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="https://vercel.com/button" alt="Deploy with Vercel" class="4k:size-13" />
            </a>
            <a href="https://github.com/alexismouwid/new-paint-with-me-?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <img src="/git96.png" alt="GitHub" width="40" height="28" class="border border-gray-300 rounded 4k:size-15" />
            </a>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div class="bg-gradient-to-br from-red-900 via-green-400 to-black-500 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition
           
          lg:size-80 lg:hover:scale-90 lg:hover:contrast-125 lg:hover:z[10000] lg:hover:duration-300
          laptop:size-85 laptop:hover:scale-90 laptop:hover:contrast-125 laptop:hover:z[10000] laptop:hover:duration-300
          2xl:size-90 2xl:hover:scale-80 2xl:hover:contrast-125 2xl:hover:z[10000] 2xl:hover:duration-300
          4k:size-110 4k:hover-scale-90 4k:hover:contrast-125 4k:hover:z[10000] 4k:hover:duration-300
          ">
          <img src="/ecomerce.jpg" alt="ecommerce" class="rounded-xl object-cover h-48 w-full" />
          <p className="
          2xl:text-xl
          4k:text-2xl">Tienda virtual con catálogo, carrito de compras, login/register y autenticación.</p>
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
        <div class="bg-gradient-to-br from-white-100 via-red-400 to-red-900 border border-red-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition
         
          lg:size-80 lg:hover:scale-90 lg:hover:contrast-125 lg:hover:z[10000] lg:hover:duration-300

          laptop:size-85 laptop:hover:scale-90 laptop:hover:contrast-125 laptop:hover:z[10000] laptop:hover:duration-300
          xl:size-80 xl:hover:scale-90 xl:hover:contrast-125 xl:hover:z[10000] xl:hover:duration-300
  2xl:size-90 2xl:hover:scale-80 2xl:hover:contrast-125 2xl:hover:z[10000] 2xl:hover:duration-30

          4k:size-110 4k:hover-scale-90 4k:hover:contrast-125 4k:hover:z[10000] 4k:hover:duration-300
           ">
          <img src="/avianca.jpg" alt="avianca" class="rounded-xl object-cover h-48 w-full" />
          <p className="
          2xl:text-xl
          4k:text-2xl">Clon de la web oficial de Avianca con animaciones y funcionalidades detalladas.</p>
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
0 border border-green-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition

          lg:size-80 lg:hover:scale-90 lg:hover:contrast-125 lg:hover:z[10000] lg:hover:duration-300
          laptop:size-85 laptop:hover:scale-90 laptop:hover:contrast-125 laptop:hover:z[10000] laptop:hover:duration-300
          2xl:size-90 2xl:hover:scale-80 2xl:hover:contrast-125 2xl:hover:z[10000] 2xl:hover:duration-30
          4k:size-110 4k:hover-scale-90 4k:hover:contrast-125 4k:hover:z[10000] 4k:hover:duration-300
">
          <img src="/inventory.png" alt="inventory" class="rounded-xl object-cover h-48 w-full
          " />
          <p className="
2xl:text-xl
          4k:text-2xl">Aplicación de gestión de inventario con login, autenticación y encriptación de usuarios.</p>
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
        <a href="https://api.whatsapp.com/send?phone=573043405723&text=Hola%2C+quiero+m%C3%A1s+informaci%C3%B3n" target="_blank" class="font-sans font-bold inline-block px-6 py-3 bg-lime-300 text-white rounded hover:bg-lime-400 transition ejeY 
2xl:relative 
xl:text-2xl
          2xl:bottom-10  2xl:text-2xl
          4k:relative 4k:bottom-20">
          ¡Empecemos a discutir sobre tu desarrollo!
        </a>
      </div>
    </section>
  );
});

export default ProyectosRecientes;

