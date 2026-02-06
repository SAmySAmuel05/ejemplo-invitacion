document.addEventListener("DOMContentLoaded", () => {
    cargarConfiguracion();
    iniciarAnimaciones();
    iniciarContador();
    iniciarMusica();
    iniciarMapa();
});

function cargarConfiguracion() {
    const c = bodaConfig;

    // 1. 🎨 APLICAR COLORES AL CSS
    const root = document.documentElement;
    root.style.setProperty('--color-primary', c.theme.primaryColor);
    root.style.setProperty('--color-secondary', c.theme.secondaryColor);
    // Aplicar fuentes si es necesario dinámicamente o dejar las clases de Tailwind

    // 2. 🎛️ OCULTAR/MOSTRAR SECCIONES
    toggle('sec-historia', c.secciones.historia);
    toggle('sec-biblia', c.secciones.biblia);
    toggle('sec-vestimenta', c.secciones.vestimenta);
    toggle('sec-itinerario', c.secciones.itinerario);
    toggle('sec-regalos', c.secciones.regalos);
    toggle('sec-rsvp', c.secciones.rsvp);

    // 3. 📝 LLENAR TEXTOS E IMÁGENES
    
    // Inicio
    setTxt('lbl-nombres', c.novios.nombres);
    setTxt('lbl-frase', c.novios.frase);
    setTxt('lbl-fecha', c.novios.fechaTexto);
    setBg('sec-inicio', c.imagenes.fondoInicio);

    // Historia
    if (c.secciones.historia) {
        setTxt('lbl-historia-titulo', c.historia.titulo);
        setTxt('lbl-historia-texto', c.historia.texto);
        setBg('sec-historia', c.imagenes.fondoHistoria);
    }

    // Biblia
    if (c.secciones.biblia) {
        setTxt('lbl-biblia-cita', `"${c.biblia.cita}"`);
        setTxt('lbl-biblia-ref', c.biblia.referencia);
        setBg('sec-biblia', c.imagenes.fondoBiblia);
    }

    // Vestimenta
    if (c.secciones.vestimenta) {
        setTxt('lbl-vestimenta-titulo', c.vestimenta.titulo);
        setTxt('lbl-vestimenta-tipo', c.vestimenta.tipo);
        setTxt('lbl-vestimenta-nota', c.vestimenta.nota);
        setSrc('img-vestimenta', c.vestimenta.icono);
        if(c.imagenes.fondoVestimenta) setBg('sec-vestimenta', c.imagenes.fondoVestimenta);
    }

    // Ubicación
    setTxt('lbl-ubicacion-titulo', c.ubicacion.titulo);
    setTxt('lbl-lugar-nombre', c.ubicacion.nombreLugar);
    setTxt('lbl-lugar-dir', c.ubicacion.direccion);
    setHref('btn-mapa-link', c.ubicacion.mapaUrl);
    setSrc('iframe-mapa', c.ubicacion.iframeUrl);
    setBg('sec-ubicacion', c.imagenes.fondoDetalles); // Fallback

    // Itinerario
    if (c.secciones.itinerario) {
        renderizarItinerario(c.itinerario);
        setBg('sec-itinerario', c.imagenes.fondoItinerario);
    }

    // Regalos
    if (c.secciones.regalos) {
        setTxt('lbl-regalos-frase', c.regalos.frase);
        setBg('sec-regalos', c.imagenes.fondoRegalos);
        
        // Banco
        const bancoInfo = `
            <p><span class="text-gold font-bold">Banco:</span> ${c.regalos.banco}</p>
            <p><span class="text-gold font-bold">Cuenta/CLABE:</span> ${c.regalos.clabe}</p>
            <p><span class="text-gold font-bold">Titular:</span> ${c.regalos.titular}</p>
        `;
        document.getElementById('datos-banco').innerHTML = bancoInfo;

        // Amazon
        if(c.regalos.amazonUrl && c.regalos.amazonUrl !== "") {
            setHref('btn-amazon', c.regalos.amazonUrl);
        } else {
            toggle('box-amazon', false);
        }
    }

    // RSVP
    if (c.secciones.rsvp) {
        setTxt('lbl-rsvp-frase', c.rsvp.frase);
        setHref('btn-rsvp-form', c.rsvp.formUrl);
        const waMsg = `Hola, quiero confirmar mi asistencia a la boda de ${c.novios.nombres}`;
        setHref('btn-rsvp-wa', `https://wa.me/${c.rsvp.whatsapp}?text=${encodeURIComponent(waMsg)}`);
        setBg('sec-rsvp', c.imagenes.fondoRsvp);
    }
}

// --- GENERADOR DE ITINERARIO ---
function renderizarItinerario(items) {
    const container = document.getElementById('itinerario-list');
    
    // Línea de tiempo base
    let html = `
        <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2"></div>
    `;

    items.forEach((item, index) => {
        // Alternar lados (izq/der) solo en desktop
        const sideClass = index % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:text-left sm:pl-12 sm:flex-row-reverse';
        const contentMargin = index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto';
        
        html += `
        <div class="relative flex items-center mb-12 sm:justify-center group">
            
            <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 bg-black border border-gold rounded-full flex items-center justify-center z-10">
                <img src="${item.icono}" class="w-6 h-6 invert icon-anim group-hover:scale-110">
            </div>

            <div class="w-full sm:w-1/2 pl-16 sm:pl-0 ${sideClass}">
                <div class="${contentMargin}">
                    <h3 class="text-2xl text-gold font-script">${item.titulo}</h3>
                    <span class="text-sm font-bold bg-gold text-black px-2 py-1 rounded inline-block my-2">${item.hora} hrs</span>
                    <p class="text-gray-400 text-sm">${item.desc}</p>
                </div>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// --- LÓGICA DE UI Y UTILIDADES ---

function toggle(id, show) {
    const el = document.getElementById(id);
    if(el) el.style.display = show ? '' : 'none';
}

function setTxt(id, txt) { 
    const el = document.getElementById(id); 
    if(el) el.innerText = txt; 
}

function setHref(id, url) {
    const el = document.getElementById(id);
    if(el) el.href = url;
}

function setSrc(id, url) {
    const el = document.getElementById(id);
    if(el) el.src = url;
}

function setBg(id, url) {
    const el = document.getElementById(id);
    if(el) el.style.backgroundImage = `url('${url}')`;
}

function iniciarContador() {
    const fechaBoda = new Date(bodaConfig.novios.fecha).getTime();
    
    setInterval(() => {
        const ahora = new Date().getTime();
        const dist = fechaBoda - ahora;
        
        if (dist < 0) return; // Ya pasó

        document.getElementById('d').innerText = Math.floor(dist / (1000 * 60 * 60 * 24));
        document.getElementById('h').innerText = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('m').innerText = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('s').innerText = Math.floor((dist % (1000 * 60)) / 1000);
    }, 1000);
}

function iniciarAnimaciones() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-anim');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.observe').forEach(el => observer.observe(el));
}

function iniciarMusica() {
    const music = document.getElementById('music');
    const btn = document.getElementById('startBtn');
    const overlay = document.getElementById('overlay');
    const toggleBtn = document.getElementById('music-toggle');
    const toggleIcon = document.getElementById('music-icon');
    let isPlaying = false;

    // Configurar ruta audio
    music.src = bodaConfig.imagenes.musica;

    btn.addEventListener('click', () => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 1000);
        
        music.volume = 0.5;
        music.play().then(() => {
            isPlaying = true;
            toggleBtn.classList.remove('hidden');
        }).catch(e => console.log("Autoplay bloqueado"));
    });

    toggleBtn.addEventListener('click', () => {
        if(isPlaying) {
            music.pause();
            toggleIcon.src = "media/images/icons/boton-de-play.png"; // Cambia icono a Play
        } else {
            music.play();
            toggleIcon.src = "media/images/icons/boton-de-pausa.png"; // Icono Pausa (asumiendo que tienes este png)
        }
        isPlaying = !isPlaying;
    });
}

function iniciarMapa() {
    const btn = document.getElementById('btn-toggle-map');
    const container = document.getElementById('map-container');
    
    if(btn && container) {
        btn.addEventListener('click', () => {
            if (container.style.maxHeight) {
                container.style.maxHeight = null;
                btn.innerText = "VER MAPA";
            } else {
                container.style.maxHeight = container.scrollHeight + "px";
                btn.innerText = "OCULTAR MAPA";
            }
        });
    }
}

// Scroll suave para el menú
window.scrollToId = function(id) {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
}