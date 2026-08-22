export const en = {
  meta: { title: "Leonardo Mora — I turn complex problems into working systems", description: "Interactive professional experience of Leonardo Mora, Software Engineer, Backend & Full-Stack Engineer, Product Builder and Systems Thinker with 7+ years building production systems, integrations and payments." },
  nav: { journey: "Journey", experience: "Experience", lab: "Services", about: "About", cta: "Let's connect", langLabel: "Language", menu: "Primary navigation", skip: "Skip to content" },
  stations: ["Start", "How I decide", "How I build", "Experience", "Technology", "Services", "Impact", "Profile", "Contact"],
  arrival: {
    name: "Leonardo Mora", roles: "Software Engineer · Product Builder · Systems Thinker", headline: "I turn complex problems into working systems.", support: "7+ years in backend, integrations, payments and production products.", ctaPrimary: "Explore my work", ctaSecondary: "Contact", engineTitle: "Solution engine", inputLabel: "Problem", processLabel: "Judgment", outputLabel: "System", engineProgressLabel: "Problem → judgment → system",
    inputs: ["Data", "APIs", "Business", "Users", "Constraints", "Automation", "Complexity"], outputs: ["Scalable systems", "Elegant APIs", "Products", "Automated workflows", "Insights", "Impact"],
  },
  thinking: {
    kicker: "Decision map", title: "I do not start with technology", copy: "I understand the business, constraints and impact before choosing the stack.", pathsLabel: "Thinking paths", core: "Decision",
    paths: [
      { id: "product", name: "Product thinking", note: "Value before features.", nodes: ["Users", "Business", "Product", "Data"] },
      { id: "engineering", name: "Engineering thinking", note: "Change without breaking.", nodes: ["Systems", "Code", "Data", "Automation"] },
      { id: "problem", name: "Problem solving", note: "Decide within constraints.", nodes: ["Constraints", "Systems", "Business", "Product"] },
    ],
    nodeLabels: { Business: "Business", Product: "Product", Code: "Code", Data: "Data", Systems: "Systems", Automation: "Automation", Users: "Users", Constraints: "Constraints" } as Record<string, string>,
  },
  transformation: {
    kicker: "Working method", title: "How disorder becomes working software",
    stages: [
      { name: "Understand", note: "Problem and constraints." }, { name: "Design", note: "Architecture and contracts." }, { name: "Build", note: "Verifiable modules." }, { name: "Integrate", note: "Data, APIs and systems." }, { name: "Ship", note: "Deployment and observability." }, { name: "Impact", note: "Measure and iterate." },
    ],
  },
  experience: {
    kicker: "Professional experience", title: "Real problems, not desktop exercises", copy: "Banking, telecommunications, education and hospitality. Software with users, payments and real operations.", jobsLabel: "Experience by company",
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
    kicker: "Production stack", title: "Technology changes. The ability to build remains.", copy: "The stack follows the problem, not the other way around.", relationLabel: "I use it for",
    clusters: [
      { id: "build", name: "Build", note: "Backend and rules." }, { id: "product", name: "Product", note: "Interfaces and experience." }, { id: "systems", name: "Systems", note: "Contracts and runtime." }, { id: "data", name: "Data", note: "Persistence and speed." }, { id: "automation", name: "Automation", note: "Repeatable processes." }, { id: "cloud", name: "Cloud", note: "Delivery and operations." }, { id: "enterprise", name: "Legacy / Enterprise", note: "Modernisation without disruption." },
    ],
  },
  lab: {
    kicker: "Services", title: "What I can build or solve with you", status: "What I deliver",
    items: [
      { id: "backend-apis", name: "Backend and APIs", line: "Services, data models and contracts built to grow.", flow: ["Architecture", "API", "Testing", "Observability"] },
      { id: "fullstack-products", name: "Full-stack products", line: "Interface, backend, data, authentication and deployment.", flow: ["Discovery", "MVP", "Production", "Iteration"] },
      { id: "integrations-payments", name: "Integrations and payments", line: "APIs, webhooks, OAuth and payments with traceability.", flow: ["Contract", "Integration", "Retries", "Traceability"] },
      { id: "automation-ai", name: "Automation and applied AI", line: "Workflows and assistants applied to concrete team tasks.", flow: ["Process", "Automation", "Control", "Outcome"] },
      { id: "cloud-delivery", name: "Cloud and production delivery", line: "Containers, delivery, monitoring and operations.", flow: ["Docker", "Cloud", "CI/CD", "Operations"] },
      { id: "legacy-modernization", name: "Legacy-system modernisation", line: "Layered modernisation without stopping what already works.", flow: ["Diagnosis", "Bridge", "Migration", "Continuity"] },
    ],
  },
  why: {
    kicker: "Impact", title: "What changes in a company when I join", inLabel: "Before", outLabel: "After",
    pairs: [
      { from: "Vague requirements", to: "Scope and priorities", note: "Risks and decisions visible before coding." }, { from: "Fragile backend", to: "Reliable services", note: "Contracts, tests and operational traceability." }, { from: "An idea", to: "Usable product", note: "A first version ready for real use." }, { from: "Manual process", to: "Automated flow", note: "Validation and human control where they matter." }, { from: "Isolated systems", to: "Traceable integration", note: "Visible errors, retries and states." }, { from: "Untouchable legacy", to: "Safe evolution", note: "Layered changes without stopping operations." },
    ],
    facts: ["7+ years of professional experience", "Backend & full-stack engineering", "Financial systems and payments", "Enterprise integrations in production", "Products built from zero", "Comfortable between legacy and modern stacks"],
  },
  profileSection: { kicker: "Professional profile", role: "Software Engineer · Backend & Full-Stack", location: "Caracas, Venezuela · Available remotely", title: "Backend, product and production systems", highlights: ["7+ years across telecommunications, education, hospitality and banking", "Python, Node.js, React, Next.js and Vue", "Payments, APIs and enterprise integrations", "AWS, Docker, CI/CD and production operations"], educationLabel: "Education", education: "Associate Degree in Computer Science · Telecommunications Engineering in progress", languagesLabel: "Languages", languages: "Native Spanish · Technical English" },
  contact: { kicker: "Contact", title: "What do you need", titleAccent: "to solve?", cta: "Email me", availability: "Available for remote roles and projects." },
};

export type Dictionary = typeof en;
