import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: { title: "Leonardo Mora — Convierto problemas complejos en sistemas que funcionan", description: "Experiencia profesional interactiva de Leonardo Mora, Software Engineer, Backend y Full-Stack Engineer, Product Builder y Systems Thinker con más de 7 años construyendo sistemas en producción, integraciones y pagos." },
  nav: { journey: "Recorrido", experience: "Experiencia", lab: "Lab", about: "Sobre mí", cta: "Hablemos", langLabel: "Idioma", menu: "Abrir navegación" },
  stations: ["Llegada", "Cómo pienso", "Transformación", "Experiencia", "Tecnología", "Systems Lab", "Por qué yo", "Contacto"],
  arrival: {
    name: "Leonardo Mora", roles: "Software Engineer · Product Builder · Systems Thinker", headline: "Convierto problemas complejos en sistemas que funcionan.", support: "Más de 7 años convirtiendo ambigüedad en arquitectura: backend, integraciones, sistemas financieros y productos que llegan a producción.", ctaPrimary: "Explorar mi trabajo", ctaSecondary: "Contacto", engineTitle: "Motor de soluciones", inputLabel: "Entra complejidad", processLabel: "Pensamiento", outputLabel: "Sale claridad", scrollHint: "Haz scroll para encender el motor",
    inputs: ["Datos", "APIs", "Negocio", "Usuarios", "Restricciones", "Automatización", "Complejidad"], outputs: ["Sistemas escalables", "APIs elegantes", "Productos", "Flujos automatizados", "Insights", "Impacto"],
  },
  thinking: {
    kicker: "Escena 02", title: "Cómo pienso", copy: "Construyo modelos mentales, pruebo supuestos y conecto sistemas antes de escribir código.", hint: "Elige una ruta de razonamiento — la red se reconfigura.", core: "Modelo mental",
    paths: [
      { id: "product", name: "Pensamiento de producto", note: "Empiezo en la persona y termino en valor que se puede medir.", nodes: ["Users", "Business", "Product", "Data"] },
      { id: "engineering", name: "Pensamiento de ingeniería", note: "Primero la arquitectura; luego código que sigue siendo barato de cambiar.", nodes: ["Systems", "Code", "Data", "Automation"] },
      { id: "problem", name: "Resolución de problemas", note: "Nombrar la restricción, calcular el tradeoff y decidir.", nodes: ["Constraints", "Systems", "Business", "Product"] },
    ],
    nodeLabels: { Business: "Negocio", Product: "Producto", Code: "Código", Data: "Datos", Systems: "Sistemas", Automation: "Automatización", Users: "Usuarios", Constraints: "Restricciones" },
  },
  transformation: {
    kicker: "Escena 03", title: "Del ruido a un sistema", copy: "El mismo problema atraviesa cada etapa. Nada se descarta: se reorganiza.", hint: "Scroll: el objeto mantiene su identidad mientras cambia de forma.",
    stages: [
      { name: "Entender", note: "Escuchar, mapear el desorden, encontrar la pregunta real." }, { name: "Diseñar", note: "Agrupar el caos en clusters con sentido." }, { name: "Construir", note: "Convertir clusters en módulos con contratos claros." }, { name: "Integrar", note: "Conectarlos con los sistemas que ya existen." }, { name: "Desplegar", note: "Producción, monitoreo, rollback, realidad." }, { name: "Impacto", note: "Iterar con lo que dicen los datos y las personas." },
    ],
  },
  experience: {
    kicker: "Escena 04", title: "La ruta hasta aquí", copy: "Una línea profesional, no una lista de CV: software → backend → sistemas → pagos → producto.", hint: "Selecciona una estación", present: "Actual",
    stops: [
      { id: "foundations", station: "Fundamentos", period: "Primeros años", role: "Desarrollo de software", note: "Fundamentos, aplicaciones web y la costumbre de entregar algo que una persona real usa.", tags: ["PHP / Laravel", "JavaScript", "SQL"] },
      { id: "backend", station: "Ingeniería backend", period: "Años de crecimiento", role: "Backend engineer", note: "APIs, modelos de datos, procesos en background y servicios que no pueden caerse a las 3am.", tags: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"] },
      { id: "fullstack", station: "Full-stack y producto", period: "Años de crecimiento", role: "Full-stack / product engineer", note: "Productos completos de punta a punta: interfaz, API, base de datos, despliegue, iteración.", tags: ["TypeScript", "React", "Next.js", "Node.js"] },
      { id: "integration", station: "Integración y cloud", period: "Años de crecimiento", role: "Integration engineer", note: "Hacer que sistemas separados se comporten como uno: contratos, colas, reintentos, observabilidad.", tags: ["REST", "GraphQL", "AWS", "Docker", "Nginx"] },
      { id: "enterprise", station: "Sistemas empresariales", period: "Años recientes", role: "Systems engineer", note: "Aplicaciones críticas de negocio donde legacy y stacks modernos tienen que convivir.", tags: [".NET", "Java", "SQL Server"] },
      { id: "payments", station: "Sistemas financieros y pagos", period: "2026 — actualidad", role: "CLAI Payments / Banesco", note: "Flujos de pago críticos, lógica de negocio sobre IBM i e interfaces de las que dependen los equipos de operaciones cada día.", tags: ["IBM i", "AS400", "RPGLE", "Vue", "Pagos"] },
    ],
  },
  tech: {
    kicker: "Escena 05", title: "Herramientas, agrupadas por objetivo", copy: "Las herramientas cambian; la capacidad de construir permanece. Elige un objetivo y mira qué uso y por qué.", hint: "Pasa o toca una herramienta para ver sus conexiones.", relationLabel: "Se conecta con",
    clusters: [
      { id: "build", name: "Construir", note: "Donde vive la lógica." }, { id: "product", name: "Producto", note: "Lo que la gente realmente toca." }, { id: "systems", name: "Sistemas", note: "Límites, contratos, runtime." }, { id: "data", name: "Datos", note: "Estado, verdad y velocidad." }, { id: "automation", name: "Automatización", note: "Trabajo que no debería ser manual." }, { id: "cloud", name: "Cloud", note: "Donde corre y sobrevive." }, { id: "enterprise", name: "Legacy / Enterprise", note: "Donde el dinero ya circula." },
    ],
  },
  lab: {
    kicker: "Escena 06", title: "Systems lab", copy: "Cómo pienso cuando nadie me da requerimientos. Direcciones, no planos — la parte interesante se queda en la sala.", hint: "Un vistazo, a propósito.", status: "Exploración",
    items: [
      { id: "customer-intelligence", name: "Customer Intelligence", line: "Explorando cómo el comportamiento y las transacciones pueden convertirse en mejores decisiones de negocio.", flow: ["Datos", "Patrones", "Decisión"] },
      { id: "digital-experiences", name: "Digital Experiences", line: "Explorando cómo los entornos físicos pueden ganar capas digitales útiles.", flow: ["Lugar", "Capa", "Interacción"] },
      { id: "knowledge-systems", name: "Knowledge Systems", line: "Explorando cómo el conocimiento puede evolucionar a través de personas, versiones y sistemas.", flow: ["Versiones", "Ramas", "Evolución"] },
      { id: "emergent-systems", name: "Emergent Systems", line: "Explorando cómo reglas simples pueden generar mundos complejos inesperados.", flow: ["Células", "Reglas", "Ecosistema"] },
      { id: "interactive-narratives", name: "Interactive Narratives", line: "Explorando sistemas donde los usuarios se vuelven parte de la historia.", flow: ["Lector", "Decisión", "Historia"] },
      { id: "intelligent-automation", name: "Intelligent Automation", line: "Explorando cómo los flujos inteligentes pueden reducir complejidad y amplificar el trabajo humano.", flow: ["Entradas", "Agentes", "Acciones"] },
    ],
  },
  why: {
    kicker: "Escena 07", title: "¿Qué estás contratando realmente?", copy: "Por un lado entran retos. Por el otro salen capacidades.", inLabel: "Entra", outLabel: "Sale",
    pairs: [
      { from: "Ambigüedad", to: "Encuentro estructura" }, { from: "Legacy", to: "Conecto sistemas" }, { from: "Una idea", to: "Construyo la primera versión" }, { from: "Proceso manual", to: "Lo automatizo" }, { from: "Sistemas desconectados", to: "Los integro" }, { from: "Stack nuevo", to: "Aprendo rápido" },
    ],
    facts: ["Más de 7 años de experiencia profesional", "Ingeniería backend y full-stack", "Sistemas financieros y pagos", "Integraciones empresariales en producción", "Productos construidos desde cero", "Cómodo entre legacy y tecnologías modernas"],
  },
  contact: { kicker: "Escena 08", title: "Ya viste cómo pienso.", titleAccent: "Ahora tráeme un problema.", copy: "¿Producto complejo? ¿Sistema legacy? ¿Automatización? ¿Integración? ¿Una idea que todavía solo existe en tu cabeza? Hablemos.", cta: "Iniciar una conversación", availability: "Abierto a roles de ingeniería y proyectos de consultoría.", footer: "Construido como demostración, no como plantilla." },
};
