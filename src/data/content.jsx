import {
  Eye,
  MessageSquareOff,
  TrendingDown,
  Clock,
  Repeat,
  Unplug,
  Compass,
  Palette,
  Rocket,
  Search,
  Lightbulb,
  Hammer,
  BarChart3,
  PenTool,
  Video,
  Monitor,
  Megaphone,
  MessageCircle,
  Mail,
  Bot,
  Headphones,
  Plug,
  Zap,
  Settings,
  Activity,
} from 'lucide-react'

// ─── Hero ────────────────────────────────────────────────────

export const hero = {
  growth: {
    badge: 'Medios Creativos + Estratégicos',
    headline: (
      <>
        Eleva tu marca con medios creativos{' '}
        <span className="font-display italic text-rojho">estratégicos</span>
      </>
    ),
    description:
      'Somos la agencia que combina mensajes estratégicos, narrativa visual y experiencias enfocadas en conversión para ayudar a fundadores y negocios modernos a crecer con claridad e impacto.',
    cta: 'Iniciar un Proyecto',
    ctaSecondary: 'Conoce Más',
    stats: [
      { target: 50, suffix: '+', label: 'Proyectos Entregados' },
      { target: 200, suffix: '%', label: 'Crecimiento Prom.' },
      { target: 4.9, suffix: '', decimals: 1, label: 'Calificación' },
      { target: 15, suffix: '+', label: 'Expertos Creativos' },
    ],
    dashboardTitle: 'Rendimiento de Marca',
    dashboardBadge: 'En vivo',
    floatingCard: { value: '+180%', label: 'Crecimiento de engagement' },
    floatingNotification: 'Campaña activa',
  },
  automation: {
    badge: 'Automatización Inteligente',
    headline: (
      <>
        Tu negocio operando en{' '}
        <span className="font-display italic text-rojho">automático</span>,
        24/7
      </>
    ),
    description:
      'Conectamos WhatsApp, Instagram, Facebook y Email con inteligencia artificial para que tu negocio responda, agende y venda mientras tú te enfocas en crecer.',
    cta: 'Automatiza tu Negocio',
    ctaSecondary: 'Ver Cómo Funciona',
    stats: [
      { target: 3, suffix: 's', label: 'Tiempo de Respuesta' },
      { target: 40, suffix: 'hrs', label: 'Ahorradas por Semana' },
      { target: 98, suffix: '%', label: 'Satisfacción Cliente' },
      { target: 24, suffix: '/7', label: 'Disponibilidad' },
    ],
    dashboardTitle: 'Centro de Automatización',
    dashboardBadge: 'Activo',
    floatingCard: { value: '-85%', label: 'Tiempo de respuesta' },
    floatingNotification: 'Bot respondiendo',
  },
}

// ─── Pain Points ─────────────────────────────────────────────

export const painPoints = {
  growth: {
    badge: '¿Te suena familiar?',
    title: 'Los retos que frenan el crecimiento de tu marca',
    description:
      'La mayoría de los fundadores saben que algo falla, simplemente les cuesta identificar qué.',
    items: [
      {
        icon: Eye,
        title: 'Bonito pero sin resultados',
        description:
          'Tu marca se ve increíble por fuera, pero tus visuales aún están lejos de generar conversiones. Lo bonito solo rara vez paga las cuentas.',
      },
      {
        icon: MessageSquareOff,
        title: 'Mensajes inconsistentes',
        description:
          'Tu voz cambia de plataforma en plataforma. Sin un posicionamiento claro, tu audiencia difícilmente puede confiar en ti, mucho menos recordarte.',
      },
      {
        icon: TrendingDown,
        title: 'Sin embudo de historia a venta',
        description:
          'Estás creando contenido sin un camino narrativo claro de la atención a la acción. Atención sin conversión es dinero perdido.',
      },
    ],
  },
  automation: {
    badge: '¿Te suena familiar?',
    title: 'Lo que está frenando tus operaciones',
    description:
      'Tu negocio crece, pero tus procesos manuales se quedan atrás.',
    items: [
      {
        icon: Clock,
        title: 'Respuestas lentas que pierden clientes',
        description:
          'Cada minuto que tardas en responder es un cliente que se va con tu competencia. Estar pendiente de cada mensaje todo el día es imposible.',
      },
      {
        icon: Repeat,
        title: 'Tareas repetitivas que consumen tu tiempo',
        description:
          'Agendar, responder las mismas preguntas, dar seguimiento: tu equipo pierde horas en tareas que una máquina puede hacer mejor.',
      },
      {
        icon: Unplug,
        title: 'Canales desconectados',
        description:
          'WhatsApp por un lado, Instagram por otro, emails sin seguimiento. Sin un sistema unificado, pierdes conversaciones y ventas.',
      },
    ],
  },
}

// ─── Solution ────────────────────────────────────────────────

export const solution = {
  growth: {
    badge: 'Nuestro Enfoque',
    title: (
      <>
        Estrategia y creatividad.{' '}
        <span className="text-rojho">Los resultados llegan solos.</span>
      </>
    ),
    description:
      'Construimos sistemas de medios que mueven a las personas de la atención a la acción. Cada pieza con estrategia, cada detalle con intención.',
    steps: [
      {
        icon: Compass,
        phase: '01',
        title: 'Estrategia',
        description:
          'Comenzamos con un trabajo profundo de posicionamiento: entendemos a tu audiencia, tu ventaja competitiva y la historia que vende.',
      },
      {
        icon: Palette,
        phase: '02',
        title: 'Creatividad',
        description:
          'Después le damos vida con contenido visual premium, sistemas de marca y medios que conectan con tu gente.',
      },
      {
        icon: Rocket,
        phase: '03',
        title: 'Ejecución',
        description:
          'Finalmente, desplegamos experiencias digitales enfocadas en conversión que transforman la atención en acción y generan resultados medibles.',
      },
    ],
  },
  automation: {
    badge: 'Nuestro Enfoque',
    title: (
      <>
        Conectamos tus canales.{' '}
        <span className="text-rojho">Tu negocio responde solo.</span>
      </>
    ),
    description:
      'Diseñamos sistemas de automatización que entienden a tus clientes y responden con la precisión de tu mejor vendedor.',
    steps: [
      {
        icon: Search,
        phase: '01',
        title: 'Diagnóstico',
        description:
          'Analizamos tus canales, flujos de venta y puntos de contacto para identificar exactamente dónde la automatización genera más impacto.',
      },
      {
        icon: Plug,
        phase: '02',
        title: 'Integración',
        description:
          'Conectamos WhatsApp, Instagram, Facebook y Email a un cerebro central inteligente que entiende el contexto de cada conversación.',
      },
      {
        icon: Zap,
        phase: '03',
        title: 'Activación',
        description:
          'Lanzamos tus automatizaciones, entrenamos al sistema con tu tono de voz y optimizamos hasta que funcione como tu mejor empleado.',
      },
    ],
  },
}

// ─── Services ────────────────────────────────────────────────

export const services = {
  growth: {
    badge: 'Lo Que Hacemos',
    title: (
      <>
        Todo lo que tu marca necesita para{' '}
        <span className="font-display italic text-rojho">brillar</span>
      </>
    ),
    description:
      'De la estrategia a la ejecución, ofrecemos un stack completo de medios diseñado para fundadores que quieren resultados reales.',
    items: [
      {
        icon: PenTool,
        title: 'Estrategia y Posicionamiento de Marca',
        description:
          'Definimos tu voz única, audiencia y ventaja competitiva con claridad estratégica que impulsa cada decisión.',
      },
      {
        icon: Video,
        title: 'Producción de Contenido y Medios',
        description:
          'Narrativa visual premium: desde videos de marca hasta sistemas fotográficos y contenido social que captura la atención.',
      },
      {
        icon: Monitor,
        title: 'Landing Pages y Presencia Digital',
        description:
          'Experiencias digitales de alta conversión que se ven premium, cargan rápido y convierten visitantes en clientes.',
      },
      {
        icon: Megaphone,
        title: 'Sistemas Creativos de Campaña',
        description:
          'Creatividad de campaña de principio a fin que funciona en todos los canales, mantiene la marca y escala con tu crecimiento.',
      },
    ],
  },
  automation: {
    badge: 'Lo Que Hacemos',
    title: (
      <>
        Automatización que{' '}
        <span className="font-display italic text-rojho">trabaja</span> por ti
      </>
    ),
    description:
      'Conectamos tus canales de comunicación con inteligencia artificial para que tu negocio siempre esté atendiendo, vendiendo y creciendo.',
    items: [
      {
        icon: MessageCircle,
        title: 'WhatsApp Inteligente, 24/7',
        description:
          'Respuestas instantáneas en WhatsApp que agendan, resuelven dudas y cierran ventas. Como tu mejor vendedor, pero disponible siempre.',
      },
      {
        icon: Bot,
        title: 'Conversaciones Automáticas en Meta',
        description:
          'Atención automatizada en Instagram y Messenger que convierte comentarios y mensajes en clientes reales, día y noche.',
      },
      {
        icon: Mail,
        title: 'Emails que se Envían Solos',
        description:
          'Seguimiento inteligente por email que se adapta al comportamiento de cada cliente y envía el mensaje correcto en el momento justo.',
      },
      {
        icon: Headphones,
        title: 'Soporte al Cliente sin Esperas',
        description:
          'Un sistema de atención que resuelve preguntas frecuentes, escala casos complejos y mantiene a tus clientes felices de forma automática.',
      },
    ],
  },
}

// ─── Results ─────────────────────────────────────────────────

export const results = {
  growth: {
    badge: 'Pruebas y Resultados',
    title: 'Que los resultados hablen',
    description:
      'Esto es lo que dicen nuestros clientes, respaldado por los números.',
    testimonials: [
      {
        quote:
          'Pasamos de publicar sin estrategia a tener una presencia que realmente conecta con nuestra audiencia. Nuestras tablas de quesos y maridajes ahora se agotan antes de anunciarlas.',
        author: 'Jeisson Cruz',
        role: 'Fundador @ Vino Colibrí',
        stars: 5,
      },
      {
        quote:
          'Me ayudaron a construir mi marca personal y darle estructura a mi plataforma de cursos. Hoy mi comunidad de bienestar crece de forma orgánica y constante.',
        author: 'Leticia Neri',
        role: 'Terapeuta y Fundadora @ Todo Está Bien',
        stars: 5,
      },
      {
        quote:
          'Llegamos a RoJho sin saber cómo posicionar nuestra galería en digital. Ahora nuestras piezas se mueven antes de las exposiciones gracias al contenido que creamos juntos.',
        author: 'Lourdes G.',
        role: 'Directora @ Galería Luesga, Tlaxcala',
        stars: 5,
      },
    ],
    kpis: [
      { target: 2, suffix: 'x', label: 'Aumento Prom. en Conversión' },
      { target: 300, suffix: '+', label: 'Piezas de Contenido' },
      { target: 95, suffix: '%', label: 'Retención de Clientes' },
      { target: 10, suffix: '+', label: 'Marcas Transformadas' },
    ],
  },
  automation: {
    badge: 'Pruebas y Resultados',
    title: 'Resultados que hablan solos',
    description:
      'Negocios que ya automatizaron sus operaciones con nosotros, y los números que lograron.',
    testimonials: [
      {
        quote:
          'Automatizaron nuestros pedidos por Instagram, Facebook y WhatsApp. Antes perdíamos ventas por tardar en responder; ahora el sistema cotiza y confirma solo.',
        author: 'Jeisson Cruz',
        role: 'Fundador @ Vino Colibrí',
        stars: 5,
      },
      {
        quote:
          'Teníamos todo en libretas y grupos de WhatsApp. Nos armaron un sistema donde los pedidos llegan organizados y los clientes reciben confirmación al instante.',
        author: 'Lourdes G.',
        role: 'Directora @ Galería Luesga, Tlaxcala',
        stars: 5,
      },
      {
        quote:
          'Nuestras operaciones de impresión dependían de llamadas y mensajes manuales. Ahora los clientes cotizan, aprueban y pagan sin que tengamos que intervenir.',
        author: 'Vero Guzmán',
        role: 'Directora @ ServiPrint',
        stars: 5,
      },
    ],
    kpis: [
      { target: 3, suffix: 's', label: 'Tiempo de Respuesta Prom.' },
      { target: 40, suffix: 'hrs', label: 'Ahorradas por Semana' },
      { target: 98, suffix: '%', label: 'Satisfacción del Cliente' },
      { target: 10, suffix: '+', label: 'Negocios Automatizados' },
    ],
  },
}

// ─── Process ─────────────────────────────────────────────────

export const process = {
  growth: {
    badge: 'Cómo Trabajamos',
    title: (
      <>
        Un proceso probado diseñado para{' '}
        <span className="font-display italic text-rojho">resultados</span>
      </>
    ),
    description:
      'Sin improvisación. Sin esfuerzo desperdiciado. Solo un camino claro de la idea al impacto.',
    steps: [
      {
        icon: Search,
        number: '01',
        title: 'Descubrimiento y Estrategia',
        description:
          'Nos sumergimos en tu marca, audiencia y objetivos para construir una base estratégica clara para todo lo que sigue.',
      },
      {
        icon: Lightbulb,
        number: '02',
        title: 'Dirección Creativa',
        description:
          'Desarrollamos la dirección visual y narrativa que dará vida a tu marca y conectará con tu audiencia.',
      },
      {
        icon: Hammer,
        number: '03',
        title: 'Producción y Desarrollo',
        description:
          'Nuestro equipo crea contenido premium, diseños y experiencias digitales, todo alineado con tu estrategia.',
      },
      {
        icon: BarChart3,
        number: '04',
        title: 'Lanzamiento y Optimización',
        description:
          'Lanzamos, medimos y refinamos para máximo impacto. Cada decisión impulsada por datos y resultados reales.',
      },
    ],
  },
  automation: {
    badge: 'Cómo Trabajamos',
    title: (
      <>
        De la idea a la{' '}
        <span className="font-display italic text-rojho">automatización</span>{' '}
        en 4 pasos
      </>
    ),
    description:
      'Un proceso claro para que tu negocio opere en automático sin complicaciones técnicas.',
    steps: [
      {
        icon: Search,
        number: '01',
        title: 'Auditoría de Canales',
        description:
          'Mapeamos tus flujos de comunicación actuales (WhatsApp, redes, email) e identificamos las oportunidades de automatización con mayor retorno.',
      },
      {
        icon: Settings,
        number: '02',
        title: 'Diseño del Sistema',
        description:
          'Creamos los flujos conversacionales, reglas de negocio y respuestas inteligentes adaptadas a tu tono de voz y necesidades.',
      },
      {
        icon: Plug,
        number: '03',
        title: 'Conexión e Integración',
        description:
          'Conectamos tus canales (WhatsApp, Meta, Email) con el motor de automatización y tu CRM o herramientas existentes.',
      },
      {
        icon: Activity,
        number: '04',
        title: 'Lanzamiento y Monitoreo',
        description:
          'Activamos el sistema, lo monitoreamos en tiempo real y optimizamos las conversaciones para maximizar conversiones y satisfacción.',
      },
    ],
  },
}

// ─── Final CTA ───────────────────────────────────────────────

export const finalCTA = {
  growth: {
    title: (
      <>
        ¿Listo para construir una marca que{' '}
        <span className="font-display italic text-rojho">realmente</span>{' '}
        convierta?
      </>
    ),
    description:
      'Platiquemos sobre tu marca, tus objetivos y cómo podemos crear experiencias de medios que generen resultados reales de negocio.',
    cta: 'Agenda una Llamada',
    ctaSecondary: 'Ver Nuestro Trabajo',
    ctaSecondaryHref: '#results',
  },
  automation: {
    title: (
      <>
        ¿Listo para que tu negocio{' '}
        <span className="font-display italic text-rojho">trabaje solo</span>?
      </>
    ),
    description:
      'Platiquemos sobre tus canales, tus procesos y cómo podemos automatizar las tareas que te quitan tiempo y clientes.',
    cta: 'Agenda una Demo',
    ctaSecondary: 'Ver Resultados',
    ctaSecondaryHref: '#results',
  },
}
