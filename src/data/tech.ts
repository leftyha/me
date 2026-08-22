export type Tool = { name: string; relations: string[] };
export type ClusterId = "build" | "product" | "systems" | "data" | "automation" | "cloud" | "enterprise";

export const techClusters: Record<ClusterId, Tool[]> = {
  build: [
    { name: "Python", relations: ["Backend", "Automation", "Data", "AI"] },
    { name: "TypeScript", relations: ["Product", "APIs", "Type safety"] },
    { name: "Node.js", relations: ["APIs", "Integrations", "Realtime"] },
    { name: "Django", relations: ["Backend", "Admin", "Data models"] },
    { name: "FastAPI", relations: ["APIs", "Async", "Contracts"] },
    { name: "PHP / Laravel", relations: ["Backend", "Legacy web", "Delivery"] },
  ],
  product: [
    { name: "React", relations: ["Product", "Frontend", "Experience"] },
    { name: "Next.js", relations: ["Product", "SSR", "SEO"] },
    { name: "Vue", relations: ["Enterprise UI", "Payments tooling"] },
    { name: "JavaScript", relations: ["Interfaces", "Interaction"] },
  ],
  systems: [
    { name: "REST", relations: ["Contracts", "Integrations"] },
    { name: "GraphQL", relations: ["Aggregation", "Product APIs"] },
    { name: "Docker", relations: ["Runtime", "Reproducibility"] },
    { name: "Nginx", relations: ["Routing", "Edge", "Performance"] },
    { name: "Linux", relations: ["Operations", "Production"] },
  ],
  data: [
    { name: "PostgreSQL", relations: ["Truth", "Modelling", "Reporting"] },
    { name: "Redis", relations: ["Cache", "Queues", "Speed"] },
    { name: "SQL Server", relations: ["Enterprise", "Reporting"] },
    { name: "SQLite", relations: ["Prototypes", "Edge storage"] },
    { name: "R", relations: ["Analysis", "Statistics"] },
  ],
  automation: [
    { name: "Python", relations: ["Scripts", "Pipelines", "Agents"] },
    { name: "Workflows", relations: ["Operations", "Back office"] },
    { name: "Agents", relations: ["Assisted work", "Decisions"] },
    { name: "Integrations", relations: ["Systems", "Partners"] },
  ],
  cloud: [
    { name: "AWS", relations: ["Hosting", "Storage", "Scale"] },
    { name: "Docker", relations: ["Deploys", "Environments"] },
    { name: "Nginx", relations: ["Traffic", "TLS"] },
  ],
  enterprise: [
    { name: "IBM i", relations: ["Payments", "Enterprise", "Legacy systems"] },
    { name: "AS400", relations: ["Core banking", "Batch"] },
    { name: "RPGLE", relations: ["Payments", "Business logic"] },
    { name: ".NET", relations: ["Enterprise apps", "Services"] },
    { name: "Java", relations: ["Enterprise", "Services"] },
  ],
};

export const clusterAccent: Record<ClusterId, string> = {
  build: "var(--blue)", product: "var(--cyan)", systems: "var(--teal)", data: "var(--purple)", automation: "var(--orange)", cloud: "var(--gold)", enterprise: "var(--coral)",
};
