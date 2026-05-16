/**
 * AppModel.js
 * Jav's Corp — Modelo de datos de la aplicación
 * Patrón MVC: el Modelo gestiona estado y datos puros.
 */

const AppModel = (() => {
  const _data = {
    brand: {
      name: "Jav's Corp",
      tagline: "Conectamos talento con oportunidades reales.",
      description:
        "Somos un grupo de freelancers especializados en referir candidatos a call centers de primer nivel. Trabajamos principalmente con Teleperformance y cerramos más de 80 referencias exitosas por mes.",
      email: "javscorp503@gmail.com",
      emailDisplay: "✉ javscorp503@gmail.com",
      whatsapp: "+503 7269-9393",
      whatsappLink: "https://wa.me/50372699393",
      social: "@javscorp",
      year: 2025,
    },

    stats: [
      { value: "80+",  label: "Referencias por mes",  count: 80,  suffix: "+" },
      { value: "100%", label: "Proceso gratuito",     count: 100, suffix: "%" },
      { value: "48h",  label: "Respuesta promedio",   count: 48,  suffix: "h" },
      { value: "5★",   label: "Satisfacción",         count: 5,   suffix: "★" },
    ],

    services: [
      {
        id: "referidos",
        icon: "◈",
        title: "Referencias a Call Centers",
        description:
          "Te conectamos con las mejores oportunidades en call centers como Teleperformance. Sin costo para el candidato, proceso ágil y acompañado.",
      },
      {
        id: "teleperformance",
        icon: "◉",
        title: "Teleperformance SV",
        description:
          "Somos referidores activos de Teleperformance El Salvador. Te guiamos desde la postulación hasta tu primer día de trabajo.",
      },
      {
        id: "orientacion",
        icon: "◍",
        title: "Orientación de Carrera",
        description:
          "Te asesoramos sobre qué posición se adapta mejor a tu perfil, nivel de inglés y disponibilidad horaria.",
      },
      {
        id: "prep",
        icon: "◎",
        title: "Preparación para Entrevistas",
        description:
          "Tips, simulacros y consejos para que llegues seguro a tu entrevista y aumentes tus probabilidades de ser contratado.",
      },
      {
        id: "seguimiento",
        icon: "◐",
        title: "Seguimiento del Proceso",
        description:
          "No te dejamos solo. Hacemos seguimiento de tu aplicación y te mantenemos informado en cada etapa.",
      },
      {
        id: "red",
        icon: "◑",
        title: "Red de Freelancers",
        description:
          "Contamos con un equipo activo de referidores en todo El Salvador, lo que nos permite cubrir múltiples posiciones simultáneamente.",
      },
    ],

    portfolio: [
      {
        id: 1,
        client: "Teleperformance SV",
        category: "Call Center · Bilingüe",
        result: "50+ referidos activos",
        color: "#60a5fa",
      },
      {
        id: 2,
        client: "Campaña Enero 2025",
        category: "Reclutamiento masivo",
        result: "80 referencias en 30 días",
        color: "#a78bfa",
      },
      {
        id: 3,
        client: "Red de Freelancers",
        category: "Equipo interno",
        result: "10+ referidores activos",
        color: "#34d399",
      },
      {
        id: 4,
        client: "Candidatos Bilingües",
        category: "Inglés B2 / C1",
        result: "95% tasa de contratación",
        color: "#f9a8d4",
      },
    ],

    navLinks: [
      { href: "#sobre",     label: "Nosotros" },
      { href: "#servicios", label: "Servicios" },
      { href: "#portafolio",label: "Portafolio" },
      { href: "#contacto",  label: "Contacto" },
    ],
  };

  // Getter público, inmutable
  const get = (key) => {
    if (!(key in _data)) throw new Error(`Model: key "${key}" no existe.`);
    return _data[key];
  };

  return { get };
})();
