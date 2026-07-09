export const nav = [
  { label: "Product", href: "#product" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#compare" },
  { label: "Customers", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
];

export const stats = [
  { value: 42000, suffix: "+", label: "Automations running live" },
  { value: 99.98, suffix: "%", label: "Pipeline uptime", decimals: 2 },
  { value: 6, suffix: "x", label: "Faster incident response" },
  { value: 180, suffix: "+", label: "Countries with active teams" },
];

export const products = [
  {
    id: "flows",
    title: "Flows",
    tag: "Automation",
    description:
      "Drag-and-drop pipelines that connect your stack and run themselves — retries, branching, and approvals included.",
    bullets: ["Visual pipeline builder", "Conditional branching", "One-click rollback"],
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "signal",
    title: "Signal",
    tag: "Analytics",
    description:
      "Live dashboards that surface the one metric that matters before it becomes an incident report.",
    bullets: ["Real-time metric streams", "Custom alert thresholds", "Shareable dashboards"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "relay",
    title: "Relay",
    tag: "Alerting",
    description:
      "Route the right alert to the right person on the right channel, every single time — no more noisy pages.",
    bullets: ["Smart on-call routing", "Slack, SMS & voice", "Noise-cancelling rules"],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
];

export const plans = [
  {
    name: "Starter",
    tagline: "For small teams shipping their first automations.",
    monthly: 19,
    yearly: 15,
    popular: false,
    features: [
      "Up to 5 active flows",
      "10k automation runs / mo",
      "Community support",
      "1 workspace",
    ],
  },
  {
    name: "Growth",
    tagline: "For teams that live inside their pipelines.",
    monthly: 49,
    yearly: 39,
    popular: true,
    features: [
      "Unlimited active flows",
      "250k automation runs / mo",
      "Priority support",
      "5 workspaces",
      "Advanced analytics",
    ],
  },
  {
    name: "Scale",
    tagline: "For orgs running mission-critical operations.",
    monthly: 129,
    yearly: 99,
    popular: false,
    features: [
      "Unlimited everything",
      "Dedicated infrastructure",
      "24/7 white-glove support",
      "Unlimited workspaces",
      "SSO & audit logs",
      "Custom SLAs",
    ],
  },
];

export const comparison = {
  groups: [
    {
      name: "Core",
      rows: [
        { label: "Active flows", starter: "5", growth: "Unlimited", scale: "Unlimited" },
        { label: "Automation runs / month", starter: "10k", growth: "250k", scale: "Unlimited" },
        { label: "Workspaces", starter: "1", growth: "5", scale: "Unlimited" },
      ],
    },
    {
      name: "Observability",
      rows: [
        { label: "Real-time dashboards", starter: false, growth: true, scale: true },
        { label: "Custom alert routing", starter: false, growth: true, scale: true },
        { label: "Audit logs", starter: false, growth: false, scale: true },
      ],
    },
    {
      name: "Support",
      rows: [
        { label: "Community support", starter: true, growth: true, scale: true },
        { label: "Priority support", starter: false, growth: true, scale: true },
        { label: "Dedicated Slack channel", starter: false, growth: false, scale: true },
      ],
    },
  ],
};

export const testimonials = [
  {
    name: "Amelia Voss",
    role: "VP Engineering, Northwind",
    quote:
      "We replaced four brittle cron jobs and a spreadsheet with one Pulsecore flow. Incidents dropped by half in the first month.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Daniel Osei",
    role: "Head of Ops, Fieldstone",
    quote:
      "Relay's on-call routing alone paid for the subscription. Our responders finally trust the pages they get.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Raman",
    role: "COO, Ledger Labs",
    quote:
      "Signal gives our leadership team a live view of the business without waiting on a weekly export.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Marcus Ihejirika",
    role: "Platform Lead, Vantree",
    quote:
      "Migrating from our old scheduler took an afternoon. Support was in our Slack the whole time.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=68",
  },
];

export const faqs = [
  {
    q: "Can I migrate my existing automations into Pulsecore?",
    a: "Yes. Our import tool reads from most common schedulers and webhook configs, and our migration team can help move anything custom during onboarding.",
  },
  {
    q: "Does Pulsecore work with my existing stack?",
    a: "Pulsecore ships with 120+ native connectors — Slack, GitHub, Stripe, Postgres, and more — plus a generic HTTP and webhook node for everything else.",
  },
  {
    q: "What happens if I exceed my plan's run limit?",
    a: "We never hard-stop a live flow. You'll get an alert at 80% usage, and overage runs are billed at a transparent per-run rate you approve in advance.",
  },
  {
    q: "Is there a free trial?",
    a: "Every plan starts with a 14-day trial, no card required. You can invite your whole team and build real flows before deciding.",
  },
  {
    q: "How is my data secured?",
    a: "All data is encrypted in transit and at rest. Scale plans include SSO, granular audit logs, and a signed BAA on request.",
  },
];

export const blogPosts = [
  {
    category: "Engineering",
    title: "How we cut alert noise by 74% with routing rules",
    excerpt:
      "A look inside the scoring model that decides which alerts actually deserve a page.",
    date: "Jun 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Product",
    title: "Introducing conditional branching in Flows",
    excerpt:
      "Build pipelines that make decisions — approvals, retries, and fallbacks without leaving the canvas.",
    date: "Jun 05, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Customers",
    title: "Inside Northwind's zero-downtime migration",
    excerpt:
      "How a 40-person platform team moved 300 automations without a single missed run.",
    date: "May 22, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
];

export const footerLinks = {
  Product: ["Flows", "Signal", "Relay", "Integrations", "Changelog"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Docs", "API Reference", "Status", "Community"],
  Legal: ["Privacy", "Terms", "Security"],
};

export const socials = [
  { label: "X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];
