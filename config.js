const bodaConfig = {
    // 🎨 DISEÑO Y COLORES
    theme: {
        // Color principal (ej. Dorado: #D4AF37, Vino: #722F37, Azul: #1E3A8A)
        primaryColor: "#3e56f4", 
        // Color de texto secundario (Gris suave para leer sobre negro)
        secondaryColor: "#E5E7EB",
        // Fuente principal (Google Fonts): 'Playfair Display', 'Great Vibes', etc.
        fontPrimary: "'Playfair Display', serif" 
    },

    // 🎛️ SECCIONES (true = Mostrar, false = Ocultar)
    secciones: {
        historia: true,
        biblia: false,
        vestimenta: false, // <--- Tu nueva sección
        itinerario: false,
        regalos: false,
        rsvp: false
    },

    // 📅 DATOS PRINCIPALES
    novios: {
        nombres: "Nombres de los Novios",
        frase: "NOS VAMOS A CASAR",
        fecha: "2026-06-06T14:00:00", // Formato ISO: YYYY-MM-DDTHH:mm:ss
        fechaTexto: "Fecha del evento"
    },

    // 🖼️ MULTIMEDIA (Rutas de tus imágenes)
    imagenes: {
        // Fondos de sección
        fondoInicio: "media/images/pareja.png",
        fondoHistoria: "media/images/pareja.png",
        fondoBiblia: "media/images/biblia.jpeg",
        fondoVestimenta: "media/images/pareja2.jpeg", // Fondo para vestimenta
        fondoItinerario: "media/images/pareja5.jpeg",
        fondoRegalos: "media/images/pareja6.jpeg",
        fondoRsvp: "media/images/pareja7.jpeg",
        // Música
        musica: "media/music/music.mp3"
    },

    // 📖 TEXTOS
    historia: {
        titulo: "Nuestra Historia",
        texto: "Un primer encuentro que quedó grabado en nuestras mentes... hemos decidido también ser compañeritos de vida para amarnos por toda la eternidad."
    },

    biblia: {
        cita: "Ponme como un sello sobre tu corazón...",
        referencia: "El Cantar de los Cantares 8:6"
    },

    // 👔 CÓDIGO DE VESTIMENTA (Nueva Sección)
    vestimenta: {
        titulo: "Código de Vestimenta",
        tipo: "Formal Riguroso",
        nota: "Mujeres: Vestido largo (No blanco). Hombres: Traje y corbata.",
        // Puedes usar un icono local o uno online
        icono: "media/images/icons/tuxedo.png" 
    },

    // 📍 UBICACIÓN
    ubicacion: {
        titulo: "Ceremonia y Recepción",
        nombreLugar: "Lugar del evento",
        direccion: "Descripción del lugar",
        mapaUrl: "https://goo.gl/maps/TU_LINK_AQUI", // Link al botón
        iframeUrl: "https://www.google.com/maps/embed?..." // Tu iframe de Google Maps
    },

    // 🕒 ITINERARIO
    itinerario: [
        { hora: "13:45", titulo: "Bienvenida", icono: "media/images/icons/arch.png", desc: "Recepción de invitados." },
        { hora: "14:00", titulo: "Ceremonia", icono: "media/images/icons/bride.png", desc: "Discurso bíblico." },
        { hora: "15:00", titulo: "Fotos", icono: "media/images/icons/camera-flash.png", desc: "Sesión de fotos con los novios." },
        { hora: "16:00", titulo: "Banquete", icono: "media/images/icons/romantic-dinner.png", desc: "Hora de disfrutar los alimentos." },
        { hora: "19:00", titulo: "Baile", icono: "media/images/icons/dance.png", desc: "Apertura de pista." }
    ],

    // 🎁 REGALOS
    regalos: {
        frase: "Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros:",
        banco: "BBVA Bancomer",
        clabe: "012345678901234567",
        titular: "Josué López",
        amazonUrl: "https://amazon.com.mx/..." // Pon "" (vacío) si no hay mesa de regalos Amazon
    },

    // 💌 RSVP (Confirmación)
    rsvp: {
        formUrl: "https://forms.gle/...",
        whatsapp: "",
        frase: "Por favor confirma tu asistencia antes del 1 de Mayo"
    }
};