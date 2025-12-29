class CategoriesNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="bg-white border-b border-gray-200 shadow-sm">
      <div class="relative w-full">
        <!-- Mobile Dropdown (Visible only on mobile/tablet) -->
        <details class="md:hidden group relative z-20">
          <summary class="list-none flex items-center justify-between w-full px-5 py-4 bg-white text-slate-800 font-bold cursor-pointer hover:bg-slate-50 border-b border-gray-200 transition-all duration-300 shadow-sm">
            <div class="flex items-center gap-3">
              <div class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#0070d2]">
                <i class="fas fa-th-large text-sm"></i>
              </div>
              <span class="text-sm tracking-wide">VER CATEGORÍAS DE PRODUCTOS</span>
            </div>
            <span class="transform transition-transform duration-300 group-open:rotate-180 text-slate-400">
              <i class="fas fa-chevron-down"></i>
            </span>
          </summary>

          <!-- Dropdown Content -->
          <div class="absolute w-full bg-white shadow-lg border-b border-gray-200 py-2 animate-fadeIn">
            <div class="grid grid-cols-2 gap-2 px-3 pb-3">
              <a href="https://www.ds3comunicaciones.com/cisco/catalys_9200l.html" class="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 shadow-sm hover:bg-blue-50 transition bg-white">
                <div class="h-8 w-8 flex items-center justify-center mb-1">
                  <img src="./icons/Switch Catalyst.ico" class="max-h-full max-w-full" alt="Switch Catalyst" />
                </div>
                <span class="text-[11px] font-medium text-gray-700 text-center leading-tight">Switch Catalyst</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/bussines_sg350.html" class="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 shadow-sm hover:bg-blue-50 transition bg-white">
                <div class="h-8 w-8 flex items-center justify-center mb-1">
                  <img src="./icons/Cisco Business.ico" class="max-h-full max-w-full" alt="Cisco Business" />
                </div>
                <span class="text-[11px] font-medium text-gray-700 text-center leading-tight">Cisco Business</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/precios_cisco_switch_industrial_b.html" class="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 shadow-sm hover:bg-blue-50 transition bg-white">
                <div class="h-8 w-8 flex items-center justify-center mb-1">
                  <img src="./icons/Switch Industrial.ico" class="max-h-full max-w-full" alt="Switch Industrial" />
                </div>
                <span class="text-[11px] font-medium text-gray-700 text-center leading-tight">Switch Industrial</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/precios_cisco_access_point_b.html" class="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 shadow-sm hover:bg-blue-50 transition bg-white">
                <div class="h-8 w-8 flex items-center justify-center mb-1">
                  <svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="white" stroke="black" stroke-width="2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27 21C27 24.3137 24.3137 27 21 27C17.6863 27 15 24.3137 15 21C15 17.6863 17.6863 15 21 15C24.3137 15 27 17.6863 27 21Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29 21C29 25.4183 25.4183 29 21 29C16.5817 29 13 25.4183 13 21C13 16.5817 16.5817 13 21 13C25.4183 13 29 16.5817 29 21Z" fill="white" stroke="black" stroke-width="2" />
                  </svg>
                </div>
                <span class="text-[11px] font-medium text-gray-700 text-center leading-tight">Aironet</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/precios_cisco_telefonos_b.html" class="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 shadow-sm hover:bg-blue-50 transition bg-white">
                <div class="h-8 w-8 flex items-center justify-center mb-1">
                  <img src="./icons/Télefono.ico" class="max-h-full max-w-full" alt="Teléfono" />
                </div>
                <span class="text-[11px] font-medium text-gray-700 text-center leading-tight">Teléfono</span>
              </a>

              <a href="https://ds3comunicaciones.com/cisco/precios_cisco_meraki_b.html" class="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 shadow-sm hover:bg-blue-50 transition bg-white">
                <div class="h-8 w-8 flex items-center justify-center mb-1">
                  <img src="./icons/mariakii.ico" class="max-h-full max-w-full" alt="Meraki" />
                </div>
                <span class="text-[11px] font-medium text-gray-700 text-center leading-tight">Meraki</span>
              </a>

              <a href="#" class="flex flex-col items-center justify-center p-2 rounded-lg border border-gray-100 shadow-sm hover:bg-blue-50 transition bg-white col-span-2">
                <div class="h-8 w-8 flex items-center justify-center mb-1">
                  <img src="./icons/Transceiver.ico" class="max-h-full max-w-full" alt="Transceiver" />
                </div>
                <span class="text-[11px] font-medium text-gray-700 text-center leading-tight">Transceiver</span>
              </a>
            </div>
          </div>
        </details>

        <!-- Desktop Navbar (Professional Pill Style) -->
        <div class="hidden md:block bg-white border-b border-slate-200 shadow-sm py-3">
          <div class="max-w-7xl mx-auto px-4">
            <div class="flex items-center justify-center gap-4 overflow-x-auto scrollbar-hide pb-2 pt-1">
              <a href="https://www.ds3comunicaciones.com/cisco/catalys_9200l.html" class="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-max">
                <div class="w-6 h-6 flex items-center justify-center">
                  <img src="./icons/Switch Catalyst.ico" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" alt="Switch Catalyst" />
                </div>
                <span class="text-xs font-bold text-slate-600 group-hover:text-[#0070d2] tracking-wide uppercase">Switch Catalyst</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/bussines_sg350.html" class="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-max">
                 <div class="w-6 h-6 flex items-center justify-center">
                  <img src="./icons/Cisco Business.ico" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" alt="Cisco Business" />
                </div>
                <span class="text-xs font-bold text-slate-600 group-hover:text-[#0070d2] tracking-wide uppercase">Cisco Business</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/precios_cisco_switch_industrial_b.html" class="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-max">
                 <div class="w-6 h-6 flex items-center justify-center">
                  <img src="./icons/Switch Industrial.ico" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" alt="Switch Industrial" />
                </div>
                <span class="text-xs font-bold text-slate-600 group-hover:text-[#0070d2] tracking-wide uppercase">Switch Industrial</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/precios_cisco_access_point_b.html" class="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-max">
                 <div class="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" class="grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#94a3b8" stroke="none" class="group-hover:fill-white group-hover:stroke-black group-hover:stroke-2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27 21C27 24.3137 24.3137 27 21 27C17.6863 27 15 24.3137 15 21C15 17.6863 17.6863 15 21 15C24.3137 15 27 17.6863 27 21Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29 21C29 25.4183 25.4183 29 21 29C16.5817 29 13 25.4183 13 21C13 16.5817 16.5817 13 21 13C25.4183 13 29 16.5817 29 21Z" fill="none" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <span class="text-xs font-bold text-slate-600 group-hover:text-[#0070d2] tracking-wide uppercase">Aironet</span>
              </a>

              <a href="https://www.ds3comunicaciones.com/cisco/precios_cisco_telefonos_b.html" class="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-max">
                 <div class="w-6 h-6 flex items-center justify-center">
                  <img src="./icons/Télefono.ico" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" alt="Teléfono" />
                </div>
                <span class="text-xs font-bold text-slate-600 group-hover:text-[#0070d2] tracking-wide uppercase">Teléfono</span>
              </a>

              <a href="https://ds3comunicaciones.com/cisco/precios_cisco_meraki_b.html" class="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-max">
                 <div class="w-6 h-6 flex items-center justify-center">
                  <img src="./icons/mariakii.ico" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" alt="Meraki" />
                </div>
                <span class="text-xs font-bold text-slate-600 group-hover:text-[#0070d2] tracking-wide uppercase">Meraki</span>
              </a>

              <a href="#" class="group flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-w-max">
                 <div class="w-6 h-6 flex items-center justify-center">
                  <img src="./icons/Transceiver.ico" class="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" alt="Transceiver" />
                </div>
                <span class="text-xs font-bold text-slate-600 group-hover:text-[#0070d2] tracking-wide uppercase">Transceiver</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-slate-900 py-10 px-4 sm:px-6 lg:px-8 w-full border-t-[5px] border-[#0070d2]">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Columna 1: Logo y contacto -->
          <div class="space-y-4">
            <div class="bg-white p-2 w-fit rounded-lg">
               <img src="http://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg" alt="DS3 Comunicaciones" class="w-32 h-auto mix-blend-multiply" />
            </div>

            <div class="space-y-2">
              <h3 class="text-lg font-bold text-white">Redes Sociales</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-slate-400 hover:text-white hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-all">
                  <i class="fab fa-facebook-f text-lg"></i>
                </a>
                <a href="https://wa.me/994428965?text=Hola nesecito ayuda" target="_blank" class="text-slate-400 hover:text-white hover:bg-green-600 w-8 h-8 rounded-full flex items-center justify-center transition-all">
                  <i class="fab fa-whatsapp text-lg"></i>
                </a>
              </div>
            </div>

            <div class="space-y-2">
              <h3 class="text-lg font-bold text-white">Correo</h3>
              <a href="mailto:netperu100@hotmail.com" class="flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                <i class="fas fa-envelope mr-2 text-[#0070d2]"></i>
                netperu100@hotmail.com
              </a>
            </div>
          </div>

          <!-- Columna 2: Soluciones -->
          <div class="space-y-4">
            <h3 class="text-lg font-bold text-white border-b border-slate-700 pb-2 w-fit">Soluciones</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="https://www.ds3comunicaciones.com/l-com/AccessPoint.html" target="_blank" class="text-slate-400 hover:text-[#0070d2] transition-colors flex items-center">
                   <i class="fas fa-angle-right mr-2 text-xs text-slate-600"></i> Access Point
                </a>
              </li>
              <li>
                <a href="https://www.ds3comunicaciones.com/lcom/AntenasMIMO.html" target="_blank" class="text-slate-400 hover:text-[#0070d2] transition-colors flex items-center">
                   <i class="fas fa-angle-right mr-2 text-xs text-slate-600"></i> Antenas MIMO
                </a>
              </li>
              <li>
                <a href="https://www.ds3comunicaciones.com/l-com/AntenasPanel.html" target="_blank" class="text-slate-400 hover:text-[#0070d2] transition-colors flex items-center">
                   <i class="fas fa-angle-right mr-2 text-xs text-slate-600"></i> Antenas de Panel
                </a>
              </li>
              <li>
                <a href="https://ds3comunicaciones.com/l-com/pigtail/Pigtail.html" target="_blank" class="text-slate-400 hover:text-[#0070d2] transition-colors flex items-center">
                   <i class="fas fa-angle-right mr-2 text-xs text-slate-600"></i> Cable Pigtail
                </a>
              </li>
              <li>
                <a href="https://www.ds3comunicaciones.com/trendnet/MediaConvert.html" target="_blank" class="text-slate-400 hover:text-[#0070d2] transition-colors flex items-center">
                   <i class="fas fa-angle-right mr-2 text-xs text-slate-600"></i> Media Converter
                </a>
              </li>
            </ul>
          </div>

          <!-- Columna 3: Soporte y más -->
          <div class="space-y-4">
            <h3 class="text-lg font-bold text-white border-b border-slate-700 pb-2 w-fit">Soporte</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="https://www.ds3comunicaciones.com/soporte.html" target="_blank" class="text-slate-400 hover:text-[#0070d2] transition-colors flex items-center">
                  <i class="fas fa-angle-right mr-2 text-xs text-slate-600"></i> Soporte Técnico
                </a>
              </li>
              <li>
                <a href="https://ds3comunicaciones.com/us.html" target="_blank" class="text-slate-400 hover:text-[#0070d2] transition-colors flex items-center">
                  <i class="fas fa-angle-right mr-2 text-xs text-slate-600"></i> Acerca de Nosotros
                </a>
              </li>
            </ul>
          </div>

          <!-- Columna 4: Contacto -->
          <div class="space-y-4">
            <h3 class="text-lg font-bold text-white border-b border-slate-700 pb-2 w-fit">Contacto</h3>
            <div class="space-y-3 text-sm">
              <a href="https://wa.me/994428965?text=Hola nesecito ayuda" target="_blank" class="flex items-center text-slate-400 hover:text-green-400 transition-colors">
                <i class="fas fa-phone-alt mr-2 text-[#0070d2]"></i>
                <span>994 428 965</span>
              </a>
              <a href="https://wa.me/996533223?text=Hola nesecito ayuda" target="_blank" class="flex items-center text-slate-400 hover:text-green-400 transition-colors">
                <i class="fas fa-phone-alt mr-2 text-[#0070d2]"></i>
                <span>996 533 223</span>
              </a>
            </div>

            <div class="pt-4 border-t border-slate-800 mt-4">
              <p class="text-slate-500 text-xs">Lunes a Viernes: 9:00 - 18:00</p>
              <p class="text-slate-500 text-xs">Sábados: 9:00 - 13:00</p>
            </div>
          </div>
        </div>

        <!-- Derechos de autor -->
        <div class="border-t border-slate-800 mt-10 pt-6 text-center text-slate-600 text-sm">
          <p>&copy; 2023 DS3 Comunicaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('categories-navbar', CategoriesNavbar);
customElements.define('site-footer', SiteFooter);

class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="bg-white w-full shadow-md border">
      <div class="container mx-auto px-4">
        <!-- Desktop Navbar -->
        <div class="hidden lg:flex justify-between items-center py-4">
          <!-- Logo y nombre -->
          <div class="flex items-center">
            <img src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg" alt="NetPeru Logo" class="h-12 mr-3" />
          </div>

          <!-- Info de contacto -->
          <div class="flex space-x-8 text-black">
            <div class="flex items-center">
              <i class="fas fa-phone-alt mr-2 text-black "></i>
              <div>
                <p class="text-sm font-bold">533-4339</p>
                <p class="text-sm font-bold">994-428-965</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="fas fa-phone-alt mr-2 text-black "></i>
              <div>
                <p class="text-sm font-bold">99653-3223</p>
                <p class="text-sm font-bold">937-514-867</p>
              </div>
            </div>
            <div class="flex items-center">
              <i class="fas fa-envelope mr-2 text-black "></i>
              <span class="text-sm font-bold">netperu100@hotmail.com</span>
            </div>
            <div class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2 text-black "></i>
              <span class="text-sm font-bold">Lima, PERÚ</span>
            </div>
            <div>
              <img src="https://www.ds3comunicaciones.com/cisco/images/cisco-gif.gif" alt="cisco" class="h-10" />
            </div>
          </div>

          <!-- Botón de búsqueda -->
          <div class="flex items-center">
            <button id="search-button" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <i class="fas fa-search text-black"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Navbar -->
        <div class="lg:hidden flex flex-col gap-2">
          <!-- navbar superior  -->
          <div class="flex justify-between items-center py-2">
            <!-- div izquierdo -->
            <div class="flex gap-1">
              <!-- boton hamburgesa -->
              <button id="mobile-menu-button" class="p-2 rounded-full hover:bg-gray-300 transition-colors">
                <i class="fas fa-bars text-black"></i>
              </button>

              <!-- Logo -->
              <div class="flex items-center gap-2">
                <img src="https://www.ds3comunicaciones.com/mikrotik/images/Logo1.jpg" alt="NetPeru Logo" class="h-10" />
                <img src="http://www.ds3comunicaciones.com/cisco/images/logo-cisco.gif" alt="NetPeru Logo" class="h-10" />
              </div>
            </div>

            <!-- Botones buscar -->
            <button id="mobile-search-button" class="p-2 rounded-md hover:bg-gray-300 transition-colors border border-black flex gap-3 items-center">
              <i class="fas fa-search text-black"></i>
            </button>
          </div>

          <!-- nabvar inferior -->
          <div class="py-2 pl-3">
            <div class="flex items-start">
              <i class="fas fa-phone-alt mt-1 mr-1 text-black"></i>
              <p class="">996533223</p>
              <i class="pl-4 fas fa-phone-alt mt-1 mr-1 text-black"></i>
              <p class="">994428965</p>
            </div>
            <div class="flex items-center">
              <i class="fas fa-envelope mr-1 text-black"></i>
              <span>netperu100@hotmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Menú móvil desplegable - Lado derecho -->
      <div id="mobile-menu" class="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform -translate-x-full transition-transform duration-300 ease-in-out overflow-y-auto">
        <!-- Botón de cerrar -->
        <div class="flex justify-end p-4">
          <button id="close-menu" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times text-2xl"></i>
          </button>
        </div>

        <!-- Contenido del menú -->
        <div class="px-6 pb-8">
          <!-- Enlaces adicionales -->
          <div class="">
            <div class="flex flex-wrap justify-start gap-2">
              <!-- Enlaces principales -->
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Lista Completa</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_access_point_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Access Point</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_switch_small_bussines_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Switch Small Business</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_switch_catalyst_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Switch Catalyst</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_meraki_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Cisco Meraki</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_nexus_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Cisco Nexus</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_router_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Routers</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_telefonos_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Teléfonos Cisco</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_modulo_transceiver_fibra_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Módulo/Transceiver de Fibra</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_accesorios_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Accesorios</a>
              <a href="http://ds3comunicaciones.com/cisco/precios_cisco_switch_industrial_b.html" class="border-b w-full block py-2 font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm md:text-base">Switch Industrial</a>
            </div>
          </div>

          <!-- Lista de precios (desplegable) -->
           <div class="">
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer list-none py-3 border-b">
                <span class="font-bold text-gray-800">Lista de Precios</span>
                <i class="fas fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform"></i>
              </summary>
              <div class="mt-2">
                <ul class="flex flex-col gap-2">
                  <li class="hover:bg-blue-50 rounded transition-colors"><a href="https://www.ds3comunicaciones.com/AMP/precios_amp.html" target="_blank" class="block px-3 py-1.5 text-sm text-blue-600 hover:underline font-medium">Lista de precios AMP</a></li>
                  <li class="hover:bg-blue-50 rounded transition-colors"><a href="https://www.ds3comunicaciones.com/amphenol/precios_amphenol.html" target="_blank" class="block px-3 py-1.5 text-sm text-blue-600 hover:underline font-medium">Lista de precios Amphenol</a></li>
                  <li class="hover:bg-blue-50 rounded transition-colors"><a href="https://www.ds3comunicaciones.com/andrew/precios_andrew.html" target="_blank" class="block px-3 py-1.5 text-sm text-blue-600 hover:underline font-medium">Lista de precios Andrew</a></li>
                  <li class="hover:bg-blue-50 rounded transition-colors"><a href="https://www.ds3comunicaciones.com/apc/precios_apc.html" target="_blank" class="block px-3 py-1.5 text-sm text-blue-600 hover:underline font-medium">Lista de precios APC</a></li>
                  <li class="hover:bg-blue-50 rounded transition-colors"><a href="https://www.ds3comunicaciones.com/cisco/precios_cisco.html" target="_blank" class="block px-3 py-1.5 text-sm text-blue-600 hover:underline font-medium">Lista de precios CISCO</a></li>
                  <!-- ... more list items ... -->
                </ul>
              </div>
            </details>
          </div>

          <!-- Marcas (desplegable) -->
          <div class="">
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer list-none py-3 border-b">
                <span class="font-bold text-gray-800">Marcas</span>
                <i class="fas fa-chevron-down text-gray-500 group-open:rotate-180 transition-transform"></i>
              </summary>
              <div class="flex flex-col items-center justify-center gap-2 mt-2">
                 <!-- ... Marcas links ... -->
                 <a href="https://www.ds3comunicaciones.com/cisco/index.html" class="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-all hover:-translate-y-0.5">
                   <img src="http://www.ds3comunicaciones.com/cisco/images/logo-cisco.gif" alt="Cisco" class="max-w-[100px] max-h-8 w-auto h-auto object-contain" />
                 </a>
                 <!-- Added a representative sample, normally would include all -->
              </div>
            </details>
          </div>

          <!-- Contacto -->
          <div class="mt-2">
            <h3 class="text-lg font-bold mb-4 border-b pb-2">Contacto</h3>
            <div class="space-y-3">
              <div class="flex items-start">
                <i class="fas fa-phone-alt mt-1 mr-3 text-black"></i>
                <div><p class="font-medium">533-4339</p><p class="text-sm">994-428-965</p></div>
              </div>
              <div class="flex items-center">
                <i class="fas fa-envelope mr-3 text-black"></i>
                <span>netperu100@hotmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overlay para menú móvil -->
      <div id="menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div>
    </nav>

    <!-- Modal de Búsqueda -->
    <section id="search-modal" class="fixed top-0 left-0 right-0 bottom-0 h-screen w-full px-5 pt-7 anim none z-50" style="background-color: rgba(0, 0, 0, 0.575)">
      <div class="max-w-[600px] mx-auto flex gap-2 justify-between">
        <form name="form1" method="get" action="https://www.ds3comunicaciones.com/find.html" class="mx-auto flex items-center justify-between px-1 border w-full rounded-md bg-white">
          <div class="flex items-center w-full">
            <i class="fa-solid fa-magnifying-glass ps-2 text-gray-500"></i>
            <input name="q" type="text" class="outline-none px-3 py-3 w-full" placeholder="Buscar..." required />
          </div>
          <div class="cursor-pointer px-3 py-1 rounded-md text-sm relative flex items-center bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            <input name="sa" type="submit" value="Buscar" class="cursor-pointer bg-transparent border-none text-white" />
          </div>
        </form>
        <button id="close-search" class="cursor-pointer text-white text-2xl flex items-center justify-center w-[35px] h-[42px] rounded-md font-medium hover:bg-gray-700 transition-colors">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </section>
    `;

    this.initializeScripts();
    this.addDynamicStyles();
  }

  addDynamicStyles() {
    if (!document.getElementById('main-header-styles')) {
      const style = document.createElement('style');
      style.id = 'main-header-styles';
      style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
            .anim { animation: fadeIn 0.3s ease-in-out; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            .none { display: none; }
            .-translate-x-full { transform: translateX(-100%); }
            #mobile-menu { transition: transform 0.3s ease-in-out; }
            #menu-overlay { background-color: rgba(0, 0, 0, 0.5); }
        `;
      document.head.appendChild(style);
    }
  }

  initializeScripts() {
    // Mobile Menu Logic
    const mobileMenuButton = this.querySelector('#mobile-menu-button');
    const closeMenuButton = this.querySelector('#close-menu');
    const mobileMenu = this.querySelector('#mobile-menu');
    const menuOverlay = this.querySelector('#menu-overlay');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('-translate-x-full');
        mobileMenu.classList.remove('hidden'); // Ensure it's visible if hidden class was used
        if (menuOverlay) menuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      });

      const closeMobileMenu = () => {
        mobileMenu.classList.add('-translate-x-full');
        if (menuOverlay) menuOverlay.classList.add('hidden');
        document.body.style.overflow = '';

        const icon = mobileMenuButton.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      };

      if (closeMenuButton) closeMenuButton.addEventListener('click', closeMobileMenu);
      if (menuOverlay) menuOverlay.addEventListener('click', closeMobileMenu);
    }

    // Search Modal Logic
    const searchModal = this.querySelector('#search-modal');
    const searchButton = this.querySelector('#search-button');
    const mobileSearchButton = this.querySelector('#mobile-search-button');
    const closeSearch = this.querySelector('#close-search');

    const openSearchModal = () => {
      if (searchModal) {
        searchModal.classList.remove('none');
        searchModal.classList.add('anim');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeSearchModal = () => {
      if (searchModal) {
        searchModal.classList.add('none');
        document.body.style.overflow = '';
      }
    };

    if (searchButton) searchButton.addEventListener('click', openSearchModal);
    if (mobileSearchButton) mobileSearchButton.addEventListener('click', openSearchModal);
    if (closeSearch) closeSearch.addEventListener('click', closeSearchModal);

    // Close search on click outside
    if (searchModal) {
      searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearchModal();
      });
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('none')) {
        closeSearchModal();
      }
    });
  }
}

customElements.define('main-header', MainHeader);
