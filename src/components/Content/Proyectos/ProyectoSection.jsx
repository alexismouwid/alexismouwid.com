import React, { useEffect, useState, forwardRef } from "react";
import '../../../tailwind.css';

const Proyectos = forwardRef((props, ref) => {

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
    <section  class=" w-full px-4 py-12 text-white h-dvh mx-auto">
    

      <div ref={ref} class="flex flex-col  gap-6 max-w-7xl mx-auto">
        {/* Proyecto 1 */}
        <div id="proyecto-1" 
 class="
          fixed top-0 left-0  w-full h-screen items-center 
    flex flex-col justify-center pointer-events-auto align-center
          se:w-[500px] se:h-[400px] se:top-50
          xr:top-60
          12p:top-70
          12pm:top-70
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


          bg-gradient-to-br from-cyan-900 via-cyan-400 to-cyan-500 border border-cyan-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">

          
          <div>

          </div>
          
          <img src= "/paint.jpg" alt="paint" class="rounded-xl object-cover h-48 w-full lg:h-[350px]" />
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
        <div 
          id="proyecto-2"
          class="
          fixed z-1 
          fixed top-0 left-0  w-full h-screen items-center 
    flex flex-col justify-center pointer-events-auto align-center
          se:w-[500px] se:h-[400px] se:top-50
          xr:top-60
          12p:top-70
          12pm:top-70
          gs8:top-50 gs8:w-[500px] gs8:h-[400px]
          im:left-30
          ia:top-90 ia:w-[550px] ia:h-[380px]
          
          ip:left-35 ip:top-110 ip:w-[700px] ip:h-[450px]
          sp7:top-110 sp7:w-[700px] sp7:h-[450px]
          lg:top-30
          laptop:top-30 laptop:left-70
          nhm:left-70 nhm:top-50 
          2xl:left-100
          4k:left-120 4k:top-80 4k:w-[900px] 4k:h-[600px] 




          bg-gradient-to-br from-red-900 via-green-400 to-black-500 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">
          <img src="/ecomerce.jpg" alt="ecommerce" class="rounded-xl object-cover h-48 w-full lg:h-[350px]" />
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
        <div 
         id="proyecto-3"
          class="
         fixed z-1 
          fixed top-0 left-0  w-full h-screen items-center 
    flex flex-col justify-center pointer-events-auto align-center
          se:w-[500px] se:h-[400px] se:top-50
          xr:top-60
          12p:top-70
          12pm:top-70
          gs8:top-50 gs8:w-[500px] gs8:h-[400px]
          im:left-30
          ia:top-90 ia:w-[550px] ia:h-[380px]
          
          ip:left-35 ip:top-110 ip:w-[700px] ip:h-[450px]
          sp7:top-110 sp7:w-[700px] sp7:h-[450px]
          lg:top-30
          laptop:top-30 laptop:left-70
          nhm:left-70 nhm:top-50 
          2xl:left-100
          4k:left-120 4k:top-80 4k:w-[900px] 4k:h-[600px] 



        
          bg-gradient-to-br from-cyan-900 via-cyan-400 to-cyan-500 border border-cyan-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition
          bg-gradient-to-br from-white-100 via-red-400 to-red-900 border border-red-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">
          <img src="/avianca.jpg" alt="avianca" class="rounded-xl object-cover h-48 w-full lg:h-[350px]" />
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
        <div 
          id="proyecto-4"
          class=" 
           fixed z-1 
          fixed top-0 left-0  w-full h-screen items-center 
    flex flex-col justify-center pointer-events-auto align-center
          se:w-[500px] se:h-[400px] se:top-50
          xr:top-60
          12p:top-70
          12pm:top-70
          gs8:top-50 gs8:w-[500px] gs8:h-[400px]
          im:left-30
          ia:top-90 ia:w-[550px] ia:h-[380px]
          
          ip:left-35 ip:top-110 ip:w-[700px] ip:h-[450px]
          sp7:top-110 sp7:w-[700px] sp7:h-[450px]
          lg:top-30
          laptop:top-30 laptop:left-70
          nhm:left-70 nhm:top-50 
          2xl:left-100
          4k:left-120 4k:top-80 4k:w-[900px] 4k:h-[600px] 


               


          bg-gradient-to-br from-cyan-900 via-cyan-400 to-cyan-500
          border border-cyan-900 rounded-3xl 
          p-6
          min-h-[250px]
          flex flex-col gap-4
          hover:scale-105 
          hover:contrast-125
          transition
          bg-gradient-to-br from-orange-400 via-orange-600 to-neutral-900
0 border border-green-900 rounded-3xl p-6 min-h-[250px] flex flex-col gap-4 hover:scale-105 hover:contrast-125 transition">
          <img src="/inventory.png" alt="inventory" class="rounded-xl object-cover h-48 w-full lg:h-[350px]" />
          <p>Aplicación de gestión de inventario con login, autenticación y encriptación de usuarios.</p>
          <div class="flex justify-between items-center mt-auto ">
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
             </div>
    </section>
  );
});

export default Proyectos;


