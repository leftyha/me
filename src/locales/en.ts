export const en = {
  meta: { title: "Leonardo Mora — I turn complex problems into working systems", description: "Interactive professional experience of Leonardo Mora, Software Engineer, Backend & Full-Stack Engineer, Product Builder and Systems Thinker with 7+ years building production systems, integrations and payments." },
  nav: { journey: "Journey", experience: "Experience", lab: "Services", about: "About", cta: "Let's connect", langLabel: "Language", menu: "Open navigation" },
  stations: ["Start", "How I decide", "How I build", "Experience", "Technology", "Services", "Impact", "Profile", "Contact"],
  arrival: {
    name: "Leonardo Mora", roles: "Software Engineer · Product Builder · Systems Thinker", headline: "I turn complex problems into working systems.", support: "7+ years turning ambiguity into architecture: backend, integrations, financial systems and products that reach production.", ctaPrimary: "Explore my work", ctaSecondary: "Contact", engineTitle: "Solution engine", inputLabel: "Complexity in", processLabel: "Thinking", outputLabel: "Clarity out", scrollHint: "Automatic flow from complexity to solution",
    inputs: ["Data", "APIs", "Business", "Users", "Constraints", "Automation", "Complexity"], outputs: ["Scalable systems", "Elegant APIs", "Products", "Automated workflows", "Insights", "Impact"],
  },
  thinking: {
    kicker: "Decision map", title: "I do not start with technology", copy: "I first understand the problem, the business and who it affects. Then I connect product, data and systems to decide what is worth building.", hint: "Scroll or choose a route: the network rebuilds.", core: "Decision",
    paths: [
      { id: "product", name: "Product thinking", note: "Start from the person, end at value that can be measured.", nodes: ["Users", "Business", "Product", "Data"] },
      { id: "engineering", name: "Engineering thinking", note: "Architecture first, then code that stays cheap to change.", nodes: ["Systems", "Code", "Data", "Automation"] },
      { id: "problem", name: "Problem solving", note: "Name the constraint, price the tradeoff, then commit.", nodes: ["Constraints", "Systems", "Business", "Product"] },
    ],
    nodeLabels: { Business: "Business", Product: "Product", Code: "Code", Data: "Data", Systems: "Systems", Automation: "Automation", Users: "Users", Constraints: "Constraints" } as Record<string, string>,
  },
  transformation: {
    kicker: "Working method", title: "How disorder becomes working software", copy: "I do not jump from a problem straight into code. The work moves through visible stages until it becomes a solution that can operate in production.", hint: "Keep going: every stage completes the previous one.",
    stages: [
      { name: "Understand", note: "Listen, map the mess, find the real question." }, { name: "Design", note: "Group the chaos into clusters that make sense." }, { name: "Build", note: "Turn clusters into modules with clear contracts." }, { name: "Integrate", note: "Connect them to the systems that already exist." }, { name: "Ship", note: "Production, monitoring, rollback, reality." }, { name: "Impact", note: "Iterate on what the data and the people tell you." },
    ],
  },
  experience: {
    kicker: "Professional experience", title: "Real problems, not desktop exercises", copy: "More than seven years building, maintaining and repairing products that operate with real users, payments, business rules and teams.", hint: "Select a company to see the complete experience", present: "Present",
    jobs: [
      { id: "clai", company: "CLAI Payments · Banesco project", period: "2026 — present", role: "Software Engineer", place: "Remote", note: "Evolution of banking modules for cards, fees, issuance, replacement and profiles. Transaction-rule analysis, traceability, testing and incident resolution on critical systems.", impact: ["Safe changes on IBM i without stopping operations", "Bridging RPGLE/SQL business logic with Vue interfaces"], tags: ["IBM i", "AS400", "RPGLE", "SQL", "Vue 2", "Payments"] },
      { id: "antica", company: "Antica", period: "Oct 2021 — Jun 2025", role: "Software Development Engineer", place: "Remote · Chile", note: "Telecommunications backend with decoupled services, REST APIs, WebSockets and automation deployed on AWS.", impact: ["Python and Node.js services for operational processes", "Docker and CI/CD for reproducible delivery"], tags: ["Python", "Flask", "FastAPI", "Node.js", "AWS", "Docker"] },
      { id: "larnu", company: "LarnU", period: "May 2021 — Oct 2021", role: "Full-Stack Developer", place: "Remote · Chile", note: "E-learning platform with user and course management, authentication and analytics integrations.", impact: ["Microservices with Django and FastAPI", "Product experiences built with React"], tags: ["React", "Django", "FastAPI", "PostgreSQL", "APIs"] },
      { id: "paxer", company: "Paxer", period: "Apr 2019 — Mar 2021", role: "Full-Stack Developer", place: "Remote · Chile", note: "Hotel-management system with backend services, administrative interfaces and payment flows connected to regional providers.", impact: ["WebPay, MercadoPago and Stripe integrations", "Maintenance of critical booking and operations modules"], tags: ["Laravel", "Node.js", "React", "jQuery", "MySQL", "Payments"] },
      { id: "fm", company: "FM Solutions", period: "Sep 2020 — Mar 2021", role: "Full-Stack Developer", place: "Remote · Venezuela", note: "Development and maintenance of administrative web systems, from database design to the operations interface.", impact: ["End-to-end delivery of complete modules", "Evolutionary support for internal processes"], tags: ["PHP", "JavaScript", "MySQL", "APIs"] },
      { id: "directv", company: "DirecTV Venezuela", period: "2015 — 2019", role: "Developer / Content Manager", place: "Caracas · Venezuela", note: "Internal tools, web modules, content management and operational-process support in telecommunications.", impact: ["First experience with operational systems at scale", "Automation of internal tasks and direct user support"], tags: ["PHP", "JavaScript", "SQL", "Telecom"] },
    ],
  },
  tech: {
    kicker: "Production stack", title: "Technology changes. The ability to build remains.", copy: "I do not sell a list of logos. I use each technology where it brings speed, reliability or a better product experience.", hint: "Choose a goal to explore the complete stack.", relationLabel: "I use it for",
    clusters: [
      { id: "build", name: "Build", note: "Where the logic lives." }, { id: "product", name: "Product", note: "What people actually touch." }, { id: "systems", name: "Systems", note: "Boundaries, contracts, runtime." }, { id: "data", name: "Data", note: "State, truth and speed." }, { id: "automation", name: "Automation", note: "Work that shouldn't be manual." }, { id: "cloud", name: "Cloud", note: "Where it runs and survives." }, { id: "enterprise", name: "Legacy / Enterprise", note: "Where the money already flows." },
    ],
  },
  lab: {
    kicker: "Services", title: "What I can build or solve with you", copy: "Abstraction only matters when it becomes useful. These are concrete ways I can enter a project and produce value.", hint: "Select a service to see what it includes.", status: "What I deliver",
    items: [
      { id: "backend-apis", name: "Backend and APIs", line: "I design services, data models and contracts that can grow without turning every change into an emergency.", flow: ["Architecture", "API", "Testing", "Observability"] },
      { id: "fullstack-products", name: "Full-stack products", line: "I turn an idea or process into a complete application: interface, backend, data, authentication and deployment.", flow: ["Discovery", "MVP", "Production", "Iteration"] },
      { id: "integrations-payments", name: "Integrations and payments", line: "I connect platforms, providers and existing systems with webhooks, OAuth and traceable transactional flows.", flow: ["Contract", "Integration", "Retries", "Traceability"] },
      { id: "automation-ai", name: "Automation and applied AI", line: "I reduce manual work with workflows, assistants and agents that solve a real team problem.", flow: ["Process", "Automation", "Control", "Outcome"] },
      { id: "cloud-delivery", name: "Cloud and production delivery", line: "I prepare applications to live outside a laptop: containers, infrastructure, deployments and monitoring.", flow: ["Docker", "Cloud", "CI/CD", "Operations"] },
      { id: "legacy-modernization", name: "Legacy-system modernisation", line: "I understand what already works, reduce risk and connect old technology to modern products without rewriting for fashion.", flow: ["Diagnosis", "Bridge", "Migration", "Continuity"] },
    ],
  },
  why: {
    kicker: "Impact", title: "What changes in a company when I join", copy: "I do not only add technical capacity: I turn uncertainty, debt and manual processes into decisions and systems the team can sustain.", inLabel: "Before", outLabel: "After",
    pairs: [
      { from: "Vague requirements", to: "Scope and priorities", note: "I translate business needs into executable technical decisions." }, { from: "Fragile backend", to: "Reliable services", note: "I design contracts, tests and observability to reduce surprises." }, { from: "An idea", to: "Usable product", note: "I build a complete first version prepared to learn." }, { from: "Manual process", to: "Automated flow", note: "I remove repetitive steps without removing human control." }, { from: "Isolated systems", to: "Traceable integration", note: "I connect APIs, data and providers with manageable failures." }, { from: "Untouchable legacy", to: "Safe evolution", note: "I modernise in layers while operations continue." },
    ],
    facts: ["7+ years of professional experience", "Backend & full-stack engineering", "Financial systems and payments", "Enterprise integrations in production", "Products built from zero", "Comfortable between legacy and modern stacks"],
  },
  profileSection: { kicker: "Professional profile", role: "Software Engineer · Backend & Full-Stack", location: "Caracas, Venezuela · Available remotely", title: "Engineering with product and business context", copy: "I work comfortably across modern and legacy systems, from a new API to a critical banking flow. I can enter at diagnosis, build the solution and accompany it into production.", highlights: ["7+ years building software for telecommunications, education, hospitality and banking", "Backend with Python and Node.js; frontend with React, Next.js and Vue", "Payments and integrations with Stripe, MercadoPago, WebPay, webhooks and OAuth", "Remote experience with distributed Latin American teams", "AWS, Docker, CI/CD and production-incident resolution", "Fast learning across modern and enterprise technology stacks"], educationLabel: "Education", education: "Associate Degree in Computer Science · I.U.T. Antonio José de Sucre", languagesLabel: "Languages", languages: "Native Spanish · Technical English" },
  contact: { kicker: "Contact", title: "Bring a problem, an idea", titleAccent: "or an opportunity.", copy: "I can help you design the system, build a product, integrate platforms or solve what is currently slowing your team down.", cta: "Email me", availability: "Open to engineering roles, remote work and consulting projects.", footer: "Designed and built by Leonardo Mora." },
};

export type Dictionary = typeof en;
