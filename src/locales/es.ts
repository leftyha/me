import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: { title: "Leonardo Mora — Convierto problemas complejos en sistemas que funcionan", description: "Experiencia profesional interactiva de Leonardo Mora, Software Engineer, Backend y Full-Stack Engineer, Product Builder y Systems Thinker con más de 7 años construyendo sistemas en producción, integraciones y pagos." },
  nav: { journey: "Recorrido", experience: "Experiencia", lab: "Servicios", about: "Sobre mí", cta: "Hablemos", langLabel: "Idioma", menu: "Abrir navegación" },
  stations: ["Inicio", "Cómo decido", "Cómo construyo", "Experiencia", "Tecnología", "Servicios", "Impacto", "Perfil", "Contacto"],
  arrival: {
    name: "Leonardo Mora", roles: "Software Engineer · Product Builder · Systems Thinker", headline: "Convierto problemas complejos en sistemas que funcionan.", support: "Más de 7 años convirtiendo ambigüedad en arquitectura: backend, integraciones, sistemas financieros y productos que llegan a producción.", ctaPrimary: "Explorar mi trabajo", ctaSecondary: "Contacto", engineTitle: "Motor de soluciones", inputLabel: "Entra complejidad", processLabel: "Pensamiento", outputLabel: "Sale claridad", scrollHint: "Haz scroll para encender el motor",
    inputs: ["Datos", "APIs", "Negocio", "Usuarios", "Restricciones", "Automatización", "Complejidad"], outputs: ["Sistemas escalables", "APIs elegantes", "Productos", "Flujos automatizados", "Insights", "Impacto"],
  },
  thinking: {
    kicker: "Mapa de decisión", title: "No empiezo por la tecnología", copy: "Primero entiendo el problema, el negocio y a quién afecta. Después conecto producto, datos y sistemas para decidir qué vale la pena construir.", hint: "Haz scroll o elige una ruta: la red se reconstruye.", core: "Decisión",
    paths: [
      { id: "product", name: "Pensamiento de producto", note: "Empiezo en la persona y termino en valor que se puede medir.", nodes: ["Users", "Business", "Product", "Data"] },
      { id: "engineering", name: "Pensamiento de ingeniería", note: "Primero la arquitectura; luego código que sigue siendo barato de cambiar.", nodes: ["Systems", "Code", "Data", "Automation"] },
      { id: "problem", name: "Resolución de problemas", note: "Nombrar la restricción, calcular el tradeoff y decidir.", nodes: ["Constraints", "Systems", "Business", "Product"] },
    ],
    nodeLabels: { Business: "Negocio", Product: "Producto", Code: "Código", Data: "Datos", Systems: "Sistemas", Automation: "Automatización", Users: "Usuarios", Constraints: "Restricciones" },
  },
  transformation: {
    kicker: "Método de trabajo", title: "Cómo algo desordenado termina siendo software", copy: "No salto del problema al código. El trabajo avanza por etapas visibles hasta convertirse en una solución que puede operar en producción.", hint: "Continúa: cada etapa completa la anterior.",
    stages: [
      { name: "Entender", note: "Escuchar, mapear el desorden, encontrar la pregunta real." }, { name: "Diseñar", note: "Agrupar el caos en clusters con sentido." }, { name: "Construir", note: "Convertir clusters en módulos con contratos claros." }, { name: "Integrar", note: "Conectarlos con los sistemas que ya existen." }, { name: "Desplegar", note: "Producción, monitoreo, rollback, realidad." }, { name: "Impacto", note: "Iterar con lo que dicen los datos y las personas." },
    ],
  },
  experience: {
    kicker: "Experiencia profesional", title: "Problemas reales, no proyectos de escritorio", copy: "Más de siete años construyendo, manteniendo y corrigiendo productos que operan con usuarios, pagos, reglas de negocio y equipos reales.", hint: "Haz scroll o selecciona una empresa", present: "Actual",
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
    kicker: "Stack en producción", title: "La tecnología cambia. La capacidad de construir permanece.", copy: "No vendo una lista de logos. Uso cada tecnología donde aporta velocidad, confiabilidad o una mejor experiencia de producto.", hint: "Haz scroll o elige un objetivo para ver el stack.", relationLabel: "La uso para",
    clusters: [
      { id: "build", name: "Construir", note: "Donde vive la lógica." }, { id: "product", name: "Producto", note: "Lo que la gente realmente toca." }, { id: "systems", name: "Sistemas", note: "Límites, contratos, runtime." }, { id: "data", name: "Datos", note: "Estado, verdad y velocidad." }, { id: "automation", name: "Automatización", note: "Trabajo que no debería ser manual." }, { id: "cloud", name: "Cloud", note: "Donde corre y sobrevive." }, { id: "enterprise", name: "Legacy / Enterprise", note: "Donde el dinero ya circula." },
    ],
  },
  lab: {
    kicker: "Servicios", title: "Qué puedo construir o resolver contigo", copy: "La abstracción solo importa si termina en algo útil. Estas son las formas concretas en las que puedo entrar a un proyecto y producir valor.", hint: "Haz scroll o selecciona un servicio.", status: "Lo que entrego",
    items: [
      { id: "backend-apis", name: "Backend y APIs", line: "Diseño servicios, modelos de datos y contratos que puedan crecer sin convertir cada cambio en una emergencia.", flow: ["Arquitectura", "API", "Pruebas", "Observabilidad"] },
      { id: "fullstack-products", name: "Productos full-stack", line: "Convierto una idea o proceso en una aplicación completa: interfaz, backend, datos, autenticación y despliegue.", flow: ["Descubrimiento", "MVP", "Producción", "Iteración"] },
      { id: "integrations-payments", name: "Integraciones y pagos", line: "Conecto plataformas, proveedores y sistemas existentes con webhooks, OAuth y flujos transaccionales trazables.", flow: ["Contrato", "Integración", "Reintentos", "Trazabilidad"] },
      { id: "automation-ai", name: "Automatización e IA aplicada", line: "Reduzco tareas manuales con flujos, asistentes y agentes que resuelven un problema real del equipo.", flow: ["Proceso", "Automatización", "Control", "Resultado"] },
      { id: "cloud-delivery", name: "Cloud y puesta en producción", line: "Preparo aplicaciones para vivir fuera del portátil: contenedores, infraestructura, despliegues y monitoreo.", flow: ["Docker", "Cloud", "CI/CD", "Operación"] },
      { id: "legacy-modernization", name: "Modernización de sistemas legacy", line: "Entiendo lo que ya funciona, reduzco riesgo y conecto tecnología antigua con productos modernos sin reescribir por moda.", flow: ["Diagnóstico", "Puente", "Migración", "Continuidad"] },
    ],
  },
  why: {
    kicker: "Impacto", title: "Qué cambia en una empresa cuando entro", copy: "No solo agrego capacidad técnica: convierto incertidumbre, deuda y procesos manuales en decisiones y sistemas que el equipo puede sostener.", inLabel: "Antes", outLabel: "Después",
    pairs: [
      { from: "Requisitos difusos", to: "Alcance y prioridades", note: "Traduzco necesidades de negocio en decisiones técnicas ejecutables." }, { from: "Backend frágil", to: "Servicios confiables", note: "Diseño contratos, pruebas y observabilidad para reducir sorpresas." }, { from: "Una idea", to: "Producto usable", note: "Construyo una primera versión completa y preparada para aprender." }, { from: "Proceso manual", to: "Flujo automatizado", note: "Elimino pasos repetitivos sin perder control humano." }, { from: "Sistemas aislados", to: "Integración trazable", note: "Conecto APIs, datos y proveedores con fallos manejables." }, { from: "Legacy intocable", to: "Evolución segura", note: "Modernizo por capas mientras la operación continúa." },
    ],
    facts: ["Más de 7 años de experiencia profesional", "Ingeniería backend y full-stack", "Sistemas financieros y pagos", "Integraciones empresariales en producción", "Productos construidos desde cero", "Cómodo entre legacy y tecnologías modernas"],
  },
  profileSection: { kicker: "Perfil profesional", role: "Software Engineer · Backend & Full-Stack", location: "Caracas, Venezuela · Disponible remoto", title: "Ingeniería con contexto de producto y negocio", copy: "Trabajo cómodo entre sistemas modernos y legacy, desde una API nueva hasta un flujo bancario crítico. Puedo entrar por el diagnóstico, construir la solución y acompañarla hasta producción.", highlights: ["Más de 7 años construyendo software para telecomunicaciones, educación, hotelería y banca", "Backend con Python y Node.js; frontend con React, Next.js y Vue", "Pagos e integraciones con Stripe, MercadoPago, WebPay, webhooks y OAuth", "Experiencia remota con equipos distribuidos de Latinoamérica", "AWS, Docker, CI/CD y resolución de incidencias en producción", "Aprendizaje rápido para trabajar con stacks modernos y empresariales"], educationLabel: "Educación", education: "T.S.U. en Informática · I.U.T. Antonio José de Sucre", languagesLabel: "Idiomas", languages: "Español nativo · Inglés técnico" },
  contact: { kicker: "Contacto", title: "Trae un problema, una idea", titleAccent: "o una oportunidad.", copy: "Puedo ayudarte a diseñar el sistema, construir un producto, integrar plataformas o resolver lo que hoy frena a tu equipo.", cta: "Escribirme por email", availability: "Abierto a roles de ingeniería, trabajo remoto y proyectos de consultoría.", footer: "Diseñado y construido por Leonardo Mora." },
};
