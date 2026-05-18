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
        client: "Septiembre 2024",
        category: "Primer mes de operaciones",
        result: "13 personas contratadas",
        color: "#60a5fa",
      },
      {
        id: 2,
        client: "Noviembre 2024",
        category: "Crecimiento sostenido",
        result: "13 personas contratadas",
        color: "#a78bfa",
      },
      {
        id: 3,
        client: "Diciembre 2024",
        category: "Mejor mes hasta la fecha",
        result: "18 personas contratadas",
        color: "#34d399",
      },
      {
        id: 4,
        client: "De 0 a 44",
        category: "Crecimiento total · 3 meses",
        result: "44 contratados",
        color: "#f9a8d4",
      },
    ],

    navLinks: [
      { href: "#sobre",      label: "Nosotros" },
      { href: "#servicios",  label: "Servicios" },
      { href: "#portafolio", label: "Portafolio" },
      { href: "blog.html",   label: "Blog" },
      { href: "aplicar.html", label: "Aplicar ✦" },
      { href: "#contacto",   label: "Contacto" },
    ],

    posts: [
      {
        id: "como-aplicar-teleperformance",
        slug: "como-aplicar-teleperformance",
        category: "Guías",
        tag: "Empleo",
        title: "Cómo aplicar a Teleperformance El Salvador paso a paso",
        excerpt: "Todo lo que necesitás saber antes de postularte: requisitos, horarios, salarios y cómo una referencia puede acelerar tu proceso.",
        date: "2025-04-10",
        dateDisplay: "10 abril 2025",
        readTime: "5 min",
        featured: true,
        body: `
<p>Teleperformance El Salvador es uno de los call centers más grandes del país, con cientos de vacantes abiertas durante todo el año. Si estás pensando en aplicar, esta guía te explica todo el proceso.</p>

<h2>Requisitos básicos</h2>
<ul>
  <li>DUI vigente</li>
  <li>Nivel de inglés B1 o superior (para campañas bilingües)</li>
  <li>Disponibilidad de horario (turnos rotativos)</li>
  <li>Bachillerato completo</li>
</ul>

<h2>El proceso de selección</h2>
<p>El proceso típicamente incluye: aplicación inicial, evaluación de inglés, entrevista con RRHH y capacitación pagada. Con una referencia directa, tu CV llega destacado y el proceso puede acortarse significativamente.</p>

<h2>¿Por qué aplicar con una referencia?</h2>
<p>Las referencias internas tienen prioridad en el proceso. En Jav's Corp gestionamos tu referencia sin costo, te preparamos para la entrevista y hacemos seguimiento hasta tu primer día.</p>

<p>¿Listo para aplicar? Escríbenos por WhatsApp y te guiamos en todo el proceso.</p>
        `,
      },
      {
        id: "consejos-entrevista-call-center",
        slug: "consejos-entrevista-call-center",
        category: "Consejos",
        tag: "Entrevistas",
        title: "Las preguntas más comunes en entrevistas de call center (y cómo responderlas)",
        excerpt: "Conocé las preguntas que casi siempre aparecen en las entrevistas y preparate con tiempo. Practicar antes marca la diferencia.",
        date: "2025-04-22",
        dateDisplay: "22 abril 2025",
        readTime: "6 min",
        featured: true,
        body: `
<p>La entrevista para un call center tiene su propia dinámica. Casi siempre son en inglés, pueden ser por teléfono o Zoom, y hay preguntas que se repiten en prácticamente todos los procesos. Lo más importante: practicá con tiempo y respondé desde tu propia experiencia, no solo leyendo. Queremos que suenes natural.</p>

<h2>Tell me about yourself</h2>
<p>Es casi segura en toda entrevista. Podés hablar de tus intereses, qué hacés en tu tiempo libre, tus habilidades, y un poco de tu experiencia laboral si la tenés. Sé breve pero genuino.</p>

<h2>What are your strengths and weaknesses?</h2>
<p>Para fortalezas, pensá en cualidades reales tuyas: paciencia, adaptabilidad, disposición para aprender. Para debilidades, sé honesto pero mostrá que sos consciente de ellas y que trabajás en mejorarlas. Nunca digas que no tenés debilidades.</p>

<h2>What is customer service for you?</h2>
<p>Habla de ayudar a las personas, resolver sus problemas con actitud positiva y empatía. Es una de las preguntas donde más se nota si entendés el trabajo o no.</p>

<h2>How do you handle stress / work under pressure?</h2>
<p>Mencioná la paciencia, enfocarte en lo que podés controlar y pedir ayuda cuando la necesitás. Si tenés una experiencia real donde manejaste una situación difícil, usala.</p>

<h2>Why do you want to work with us?</h2>
<p>Investigá brevemente la empresa y mencioná algo concreto. Habla de crecimiento profesional y estabilidad. Evitá respuestas genéricas como "porque necesito el trabajo".</p>

<h2>Why should we hire you?</h2>
<p>Si no tenés experiencia en call center, sé honesto y enfocate en tu disposición para aprender, tu actitud positiva y qué tan rápido te adaptás. Eso vale mucho para ellos.</p>

<h2>What are your short and long term goals?</h2>
<p>A corto plazo: conseguir el trabajo y convertirte en un miembro valioso del equipo. A largo plazo: crecer dentro de la empresa y asumir más responsabilidades.</p>

<h2>¿Y si no tenés experiencia previa?</h2>
<p>Para preguntas sobre situaciones específicas (clientes enojados, liderazgo, resolución de problemas), podés decir: <em>"Since this would be my first experience in customer service, I can tell you how I would handle it..."</em> y describís tu enfoque. Eso demuestra madurez y honestidad.</p>

<h2>Consejo final</h2>
<p>Practicá en voz alta, no solo en tu cabeza. Si la entrevista es por teléfono o Zoom, tu tono y fluidez importan tanto como lo que decís. Con Jav's Corp te acompañamos en la preparación antes de tu entrevista.</p>
        `,
      },
      {
        id: "novedades-javscorp-2025",
        slug: "novedades-javscorp-2025",
        category: "Noticias",
        tag: "Jav's Corp",
        title: "Jav's Corp: de 0 a 44 contratados en 3 meses",
        excerpt: "Cómo empezamos, cómo crecimos y qué aprendimos en nuestros primeros meses conectando talento con oportunidades reales en El Salvador.",
        date: "2025-05-01",
        dateDisplay: "1 mayo 2025",
        readTime: "3 min",
        featured: false,
        body: `
<p>Cuando comenzamos en septiembre de 2024, no teníamos certeza de cuántas personas podríamos ayudar. Tres meses después, 44 personas tienen trabajo gracias a la red Jav's Corp.</p>

<h2>Los números reales</h2>
<p>Septiembre fue nuestro primer mes: 13 contratados. En noviembre, otros 13. Y en diciembre cerramos con 18, nuestro mejor mes hasta la fecha. No son cifras inventadas — son personas con nombre y apellido que hoy tienen empleo estable.</p>

<h2>Cómo funciona nuestro modelo</h2>
<p>Somos un equipo de referidores activos en El Salvador. Cada referidor gestiona sus propios candidatos, los prepara para la entrevista y hace seguimiento hasta su primer día de trabajo. El servicio es completamente gratis para el candidato.</p>

<h2>¿Qué sigue?</h2>
<p>Seguimos creciendo. Hoy tenemos cuentas disponibles en Concentrix y Teleperformance con fechas de entrenamiento próximas. Si querés aplicar, entrá a nuestra página de vacantes y elegí la cuenta que más te interese.</p>

<h2>¿Qué viene?</h2>
<p>Estamos expandiendo nuestra red de freelancers y explorando nuevas alianzas con otros call centers. Si te interesa unirte al equipo como referidor, escríbenos.</p>
        `,
      },
    ],
  };

  // Getter público, inmutable
  const get = (key) => {
    if (!(key in _data)) throw new Error(`Model: key "${key}" no existe.`);
    return _data[key];
  };

  return { get };
})();
