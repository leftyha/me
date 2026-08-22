import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: { title: "Leonardo Mora — Convierto problemas complejos en sistemas que funcionan", description: "Experiencia profesional interactiva de Leonardo Mora, Software Engineer, Backend y Full-Stack Engineer, Product Builder y Systems Thinker con más de 7 años construyendo sistemas en producción, integraciones y pagos." },
  nav: { journey: "Recorrido", experience: "Experiencia", lab: "Servicios", about: "Sobre mí", cta: "Hablemos", langLabel: "Idioma", menu: "Abrir navegación" },
  stations: ["Inicio", "Cómo decido", "Cómo construyo", "Experiencia", "Tecnología", "Servicios", "Impacto", "Perfil", "Contacto"],
  arrival: {
    name: "Leonardo Mora", roles: "Software Engineer · Product Builder · Systems Thinker", headline: "Convierto problemas complejos en sistemas que funcionan.", support: "Más de 7 años en backend, integraciones, pagos y productos en producción.", ctaPrimary: "Explorar mi trabajo", ctaSecondary: "Contacto", engineTitle: "Motor de soluciones", inputLabel: "Problema", processLabel: "Criterio", outputLabel: "Sistema", engineProgressLabel: "Problema → criterio → sistema",
    inputs: ["Datos", "APIs", "Negocio", "Usuarios", "Restricciones", "Automatización", "Complejidad"], outputs: ["Sistemas escalables", "APIs elegantes", "Productos", "Flujos automatizados", "Insights", "Impacto"],
  },
  thinking: {
    kicker: "Mapa de decisión", title: "No empiezo por la tecnología", copy: "Entiendo el negocio, las restricciones y el impacto antes de elegir el stack.", pathsLabel: "Rutas de pensamiento", core: "Decisión",
    paths: [
      { id: "product", name: "Pensamiento de producto", note: "Valor antes que features.", nodes: ["Users", "Business", "Product", "Data"] },
      { id: "engineering", name: "Pensamiento de ingeniería", note: "Cambiar sin romper.", nodes: ["Systems", "Code", "Data", "Automation"] },
      { id: "problem", name: "Resolución de problemas", note: "Decidir con restricciones.", nodes: ["Constraints", "Systems", "Business", "Product"] },
    ],
    nodeLabels: { Business: "Negocio", Product: "Producto", Code: "Código", Data: "Datos", Systems: "Sistemas", Automation: "Automatización", Users: "Usuarios", Constraints: "Restricciones" },
  },
  transformation: {
    kicker: "Método de trabajo", title: "Cómo algo desordenado termina siendo software",
    stages: [
      { name: "Entender", note: "Problema y restricciones." }, { name: "Diseñar", note: "Arquitectura y contratos." }, { name: "Construir", note: "Módulos verificables." }, { name: "Integrar", note: "Datos, APIs y sistemas." }, { name: "Desplegar", note: "Despliegue y observabilidad." }, { name: "Impacto", note: "Medir e iterar." },
    ],
  },
  experience: {
    kicker: "Experiencia profesional", title: "Problemas reales, no proyectos de escritorio", copy: "Banca, telecomunicaciones, educación y hotelería. Software con usuarios, pagos y operación real.", jobsLabel: "Experiencia por empresa", present: "Actual",
    jobs: [
      { id: "clai", company: "CLAI Payments · proyecto Banesco", period: "2026 — actualidad", role: "Software Engineer", place: "Remoto", note: "Evolución de módulos bancarios de tarjetas, cargos, emisión, reposición y perfiles. Análisis de reglas transaccionales, trazabilidad, pruebas y resolución de incidencias sobre sistemas críticos.", impact: ["Cambios seguros sobre IBM i sin detener la operación", "Conexión entre lógica RPGLE/SQL e interfaces Vue"], tags: ["IBM i", "AS400", "RPGLE", "SQL", "Vue 2", "Pagos"] },
      { id: "antica", company: "Antica", period: "oct. 2021 — jun. 2025", role: "Software Development Engineer", place: "Remoto · Chile", note: "Backend para telecomunicaciones con servicios desacoplados, APIs REST, WebSockets y automatización desplegada en AWS.", impact: ["Servicios Python y Node.js para procesos operativos", "Docker y CI/CD para entregas reproducibles"], tags: ["Python", "Flask", "FastAPI", "Node.js", "AWS", "Docker"] },
      { id: "larnu", company: "LarnU", period: "may. 2021 — oct. 2021", role: "Full-Stack Developer", place: "Remoto · Chile", note: "Plataforma e-learning con gestión de usuarios, cursos, autenticación e integraciones de analítica.", impact: ["Microservicios con Django y FastAPI", "Experiencias de producto construidas en React"], tags: ["React", "Django", "FastAPI", "PostgreSQL", "APIs"] },
      { id: "paxer", company: "Paxer", period: "abr. 2019 — mar. 2021", role: "Full-Stack Developer", place: "Remoto · Chile", note: "Sistema de gestión hotelera con backend, interfaces administrativas y flujos de pago conectados a proveedores regionales.", impact: ["Integraciones con WebPay, MercadoPago y Stripe", "Mantenimiento de módulos críticos de reservas y operación"], tags: ["Laravel", "Node.js", "React", "jQuery", "MySQL", "Pagos"] },
      { id: "fm", company: "FM Solutions", period: "sep. 2020 — mar. 2021", role: "Full-Stack Developer", place: "Remoto · Venezuela", note: "Desarrollo y mantenimiento de sistemas administrativos web, desde la base de datos hasta la interfaz de operación.", impact: ["Entrega de módulos completos de punta a punta", "Soporte evolutivo para procesos internos"], tags: ["PHP", "JavaScript", "MySQL", "APIs"] },
      { id: "directv", company: "DirecTV Venezuela", period: "2015 — 2019", role: "Developer / Content Manager", place: "Caracas · Venezuela", note: "Herramientas internas, módulos web, gestión de contenido y soporte a procesos operativos en telecomunicaciones.", impact: ["Primer contacto con sistemas de operación a escala", "Automatización de tareas internas y soporte directo a usuarios"], tags: ["PHP", "JavaScript", "SQL", "Telecom"] },
    ],
  },
  tech: {
    kicker: "Stack en producción", title: "La tecnología cambia. La capacidad de construir permanece.", copy: "El stack depende del problema, no al revés.", relationLabel: "La uso para",
    clusters: [
      { id: "build", name: "Construir", note: "Backend y reglas." }, { id: "product", name: "Producto", note: "Interfaces y experiencia." }, { id: "systems", name: "Sistemas", note: "Contratos y ejecución." }, { id: "data", name: "Datos", note: "Persistencia y velocidad." }, { id: "automation", name: "Automatización", note: "Procesos repetibles." }, { id: "cloud", name: "Cloud", note: "Despliegue y operación." }, { id: "enterprise", name: "Legacy / Enterprise", note: "Modernización sin ruptura." },
    ],
  },
  lab: {
    kicker: "Servicios", title: "Qué puedo construir o resolver contigo", status: "Lo que entrego",
    items: [
      { id: "backend-apis", name: "Backend y APIs", line: "Servicios, modelos de datos y contratos preparados para crecer.", flow: ["Arquitectura", "API", "Pruebas", "Observabilidad"] },
      { id: "fullstack-products", name: "Productos full-stack", line: "Interfaz, backend, datos, autenticación y despliegue.", flow: ["Descubrimiento", "MVP", "Producción", "Iteración"] },
      { id: "integrations-payments", name: "Integraciones y pagos", line: "APIs, webhooks, OAuth y pagos con trazabilidad.", flow: ["Contrato", "Integración", "Reintentos", "Trazabilidad"] },
      { id: "automation-ai", name: "Automatización e IA aplicada", line: "Flujos y asistentes aplicados a tareas concretas del equipo.", flow: ["Proceso", "Automatización", "Control", "Resultado"] },
      { id: "cloud-delivery", name: "Cloud y puesta en producción", line: "Contenedores, despliegue, monitoreo y operación.", flow: ["Docker", "Cloud", "CI/CD", "Operación"] },
      { id: "legacy-modernization", name: "Modernización de sistemas legacy", line: "Modernización por capas, sin detener lo que ya funciona.", flow: ["Diagnóstico", "Puente", "Migración", "Continuidad"] },
    ],
  },
  why: {
    kicker: "Impacto", title: "Qué cambia en una empresa cuando entro", inLabel: "Antes", outLabel: "Después",
    pairs: [
      { from: "Requisitos difusos", to: "Alcance y prioridades", note: "Riesgos y decisiones visibles antes de programar." }, { from: "Backend frágil", to: "Servicios confiables", note: "Contratos, pruebas y trazabilidad operativa." }, { from: "Una idea", to: "Producto usable", note: "Una primera versión lista para uso real." }, { from: "Proceso manual", to: "Flujo automatizado", note: "Validaciones y control humano donde importan." }, { from: "Sistemas aislados", to: "Integración trazable", note: "Errores, reintentos y estados visibles." }, { from: "Legacy intocable", to: "Evolución segura", note: "Cambios por capas sin detener la operación." },
    ],
    facts: ["Más de 7 años de experiencia profesional", "Ingeniería backend y full-stack", "Sistemas financieros y pagos", "Integraciones empresariales en producción", "Productos construidos desde cero", "Cómodo entre legacy y tecnologías modernas"],
  },
  profileSection: { kicker: "Perfil profesional", role: "Software Engineer · Backend & Full-Stack", location: "Caracas, Venezuela · Disponible remoto", title: "Backend, producto y sistemas en producción", highlights: ["Más de 7 años en telecomunicaciones, educación, hotelería y banca", "Python, Node.js, React, Next.js y Vue", "Pagos, APIs e integraciones empresariales", "AWS, Docker, CI/CD y operación en producción"], educationLabel: "Educación", education: "T.S.U. en Informática · I.U.T. Antonio José de Sucre", languagesLabel: "Idiomas", languages: "Español nativo · Inglés técnico" },
  contact: { kicker: "Contacto", title: "¿Qué necesitas", titleAccent: "resolver?", cta: "Escribirme por email", availability: "Disponible para roles remotos y proyectos." },
};
