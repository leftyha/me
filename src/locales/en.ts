export const en = {
  meta: { title: "Leonardo Mora — I turn complex problems into working systems", description: "Interactive professional experience of Leonardo Mora, Software Engineer, Backend & Full-Stack Engineer, Product Builder and Systems Thinker with 7+ years building production systems, integrations and payments." },
  nav: { journey: "Journey", experience: "Experience", lab: "Lab", about: "About", cta: "Let's connect", langLabel: "Language", menu: "Open navigation" },
  stations: ["Arrival", "How I think", "Transformation", "Experience", "Technology", "Systems Lab", "Why me", "Contact"],
  arrival: {
    name: "Leonardo Mora", roles: "Software Engineer · Product Builder · Systems Thinker", headline: "I turn complex problems into working systems.", support: "7+ years turning ambiguity into architecture: backend, integrations, financial systems and products that reach production.", ctaPrimary: "Explore my work", ctaSecondary: "Contact", engineTitle: "Solution engine", inputLabel: "Complexity in", processLabel: "Thinking", outputLabel: "Clarity out", scrollHint: "Scroll to run the engine",
    inputs: ["Data", "APIs", "Business", "Users", "Constraints", "Automation", "Complexity"], outputs: ["Scalable systems", "Elegant APIs", "Products", "Automated workflows", "Insights", "Impact"],
  },
  thinking: {
    kicker: "Scene 02", title: "How I think", copy: "I build mental models, test assumptions and connect systems before I write code.", hint: "Pick a reasoning path — the network reroutes.", core: "Mental model",
    paths: [
      { id: "product", name: "Product thinking", note: "Start from the person, end at value that can be measured.", nodes: ["Users", "Business", "Product", "Data"] },
      { id: "engineering", name: "Engineering thinking", note: "Architecture first, then code that stays cheap to change.", nodes: ["Systems", "Code", "Data", "Automation"] },
      { id: "problem", name: "Problem solving", note: "Name the constraint, price the tradeoff, then commit.", nodes: ["Constraints", "Systems", "Business", "Product"] },
    ],
    nodeLabels: { Business: "Business", Product: "Product", Code: "Code", Data: "Data", Systems: "Systems", Automation: "Automation", Users: "Users", Constraints: "Constraints" } as Record<string, string>,
  },
  transformation: {
    kicker: "Scene 03", title: "From noise to a system", copy: "The same problem travels through every stage. Nothing is thrown away — it is reorganised.", hint: "Scroll: the object keeps its identity while its shape changes.",
    stages: [
      { name: "Understand", note: "Listen, map the mess, find the real question." }, { name: "Design", note: "Group the chaos into clusters that make sense." }, { name: "Build", note: "Turn clusters into modules with clear contracts." }, { name: "Integrate", note: "Connect them to the systems that already exist." }, { name: "Ship", note: "Production, monitoring, rollback, reality." }, { name: "Impact", note: "Iterate on what the data and the people tell you." },
    ],
  },
  experience: {
    kicker: "Scene 04", title: "The route so far", copy: "A professional line, not a résumé list: software → backend → systems → payments → product.", hint: "Select a station", present: "Present",
    stops: [
      { id: "foundations", station: "Foundations", period: "Early years", role: "Software development", note: "Fundamentals, web applications and the habit of shipping something that a real person uses.", tags: ["PHP / Laravel", "JavaScript", "SQL"] },
      { id: "backend", station: "Backend engineering", period: "Growth years", role: "Backend engineer", note: "APIs, data models, background work and services that must not fall over at 3am.", tags: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"] },
      { id: "fullstack", station: "Full-stack & product", period: "Growth years", role: "Full-stack / product engineer", note: "Building whole products end to end: interface, API, database, deployment, iteration.", tags: ["TypeScript", "React", "Next.js", "Node.js"] },
      { id: "integration", station: "Integration & cloud", period: "Growth years", role: "Integration engineer", note: "Making separate systems behave like one: contracts, queues, retries, observability.", tags: ["REST", "GraphQL", "AWS", "Docker", "Nginx"] },
      { id: "enterprise", station: "Enterprise systems", period: "Recent years", role: "Systems engineer", note: "Business-critical applications where legacy and modern stacks have to coexist.", tags: [".NET", "Java", "SQL Server"] },
      { id: "payments", station: "Financial systems & payments", period: "2026 — present", role: "CLAI Payments / Banesco", note: "Mission-critical payment flows, business logic on IBM i, and interfaces that operations teams depend on every day.", tags: ["IBM i", "AS400", "RPGLE", "Vue", "Payments"] },
    ],
  },
  tech: {
    kicker: "Scene 05", title: "Tools, grouped by intent", copy: "Tools change; the ability to build stays. Choose a purpose to see what I reach for and why.", hint: "Hover or tap a tool to see where it connects.", relationLabel: "Connects to",
    clusters: [
      { id: "build", name: "Build", note: "Where the logic lives." }, { id: "product", name: "Product", note: "What people actually touch." }, { id: "systems", name: "Systems", note: "Boundaries, contracts, runtime." }, { id: "data", name: "Data", note: "State, truth and speed." }, { id: "automation", name: "Automation", note: "Work that shouldn't be manual." }, { id: "cloud", name: "Cloud", note: "Where it runs and survives." }, { id: "enterprise", name: "Legacy / Enterprise", note: "Where the money already flows." },
    ],
  },
  lab: {
    kicker: "Scene 06", title: "Systems lab", copy: "How I think when nobody gives me requirements. Directions, not blueprints — the interesting part stays in the room.", hint: "A glimpse, on purpose.", status: "Exploration",
    items: [
      { id: "customer-intelligence", name: "Customer Intelligence", line: "Exploring how behaviour and transactions can become better business decisions.", flow: ["Data", "Patterns", "Decision"] },
      { id: "digital-experiences", name: "Digital Experiences", line: "Exploring how physical environments can gain useful digital layers.", flow: ["Place", "Layer", "Interaction"] },
      { id: "knowledge-systems", name: "Knowledge Systems", line: "Exploring how knowledge can evolve through people, versions and systems.", flow: ["Versions", "Branches", "Evolution"] },
      { id: "emergent-systems", name: "Emergent Systems", line: "Exploring how simple rules can generate unexpected complex worlds.", flow: ["Cells", "Rules", "Ecosystem"] },
      { id: "interactive-narratives", name: "Interactive Narratives", line: "Exploring systems where users become part of the story.", flow: ["Reader", "Choice", "Story"] },
      { id: "intelligent-automation", name: "Intelligent Automation", line: "Exploring how intelligent workflows can reduce complexity and amplify human work.", flow: ["Inputs", "Agents", "Actions"] },
    ],
  },
  why: {
    kicker: "Scene 07", title: "What are you actually hiring?", copy: "Challenges go in on one side. Capabilities come out the other.", inLabel: "In", outLabel: "Out",
    pairs: [
      { from: "Ambiguity", to: "I find structure" }, { from: "Legacy", to: "I connect systems" }, { from: "An idea", to: "I build the first version" }, { from: "Manual process", to: "I automate it" }, { from: "Disconnected systems", to: "I integrate them" }, { from: "New stack", to: "I learn fast" },
    ],
    facts: ["7+ years of professional experience", "Backend & full-stack engineering", "Financial systems and payments", "Enterprise integrations in production", "Products built from zero", "Comfortable between legacy and modern stacks"],
  },
  contact: { kicker: "Scene 08", title: "You saw how I think.", titleAccent: "Now bring me a problem.", copy: "Complex product? Legacy system? Automation? Integration? An idea that still only exists in your head? Let's talk.", cta: "Start a conversation", availability: "Open to engineering roles and consulting projects.", footer: "Built as a demonstration, not a template." },
};

export type Dictionary = typeof en;
