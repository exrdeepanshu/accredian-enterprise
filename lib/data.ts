// ============================================================
// lib/data.ts — Centralized mock data for all sections
// ============================================================

export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Features", href: "#features" },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Professionals Trained" },
  { value: 150, suffix: "+", label: "Enterprise Partners" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 40, suffix: "+", label: "Expert Mentors" },
];

export const COMPANY_LOGOS = [
  { name: "Amazon", abbr: "AMZ" },
  { name: "Google", abbr: "GGL" },
  { name: "Microsoft", abbr: "MSFT" },
  { name: "TCS", abbr: "TCS" },
  { name: "Accenture", abbr: "ACC" },
  { name: "Meta", abbr: "META" },
  { name: "Infosys", abbr: "INFY" },
  { name: "Wipro", abbr: "WPR" },
  { name: "Deloitte", abbr: "DLT" },
  { name: "IBM", abbr: "IBM" },
  { name: "Cognizant", abbr: "CGN" },
  { name: "HCL", abbr: "HCL" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "🔍",
    title: "Skill Gap Analysis",
    description:
      "We deeply assess your team's current capabilities, identify critical skill gaps, and map them against your strategic business objectives to build a precise baseline.",
    color: "#6366f1",
  },
  {
    step: "02",
    icon: "📋",
    title: "Customized Training Plan",
    description:
      "Our experts co-create a bespoke learning roadmap tailored to your industry, team levels, and organizational culture — delivered through multiple engagement formats.",
    color: "#8b5cf6",
  },
  {
    step: "03",
    icon: "🚀",
    title: "Flexible Program Delivery",
    description:
      "Execute through live cohort sessions, self-paced modules, or blended learning. Real-time ROI dashboards track progress and business impact continuously.",
    color: "#06b6d4",
  },
];

export const DOMAINS = [
  {
    icon: "💡",
    title: "Product & Innovation Hub",
    description:
      "Transform your teams into product-first thinkers. Build frameworks for innovation, roadmapping, and customer-centric design at enterprise scale.",
    tags: ["Product Strategy", "Design Thinking", "Agile Delivery"],
    color: "#f97316",
    gradient: "from-orange-500/20 to-yellow-500/10",
  },
  {
    icon: "🤖",
    title: "Gen-AI Mastery",
    description:
      "Equip engineers and analysts with hands-on AI/ML expertise — from LLM fine-tuning to production MLOps pipelines and responsible AI governance.",
    tags: ["LLMs", "MLOps", "Prompt Engineering"],
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-purple-500/10",
  },
  {
    icon: "👑",
    title: "Leadership Elevation",
    description:
      "Develop next-generation leaders with executive presence, strategic vision, and the ability to navigate complex organizational change at scale.",
    tags: ["Executive Presence", "Strategy", "Change Management"],
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: "📊",
    title: "Tech & Data Insights",
    description:
      "Build a data-driven culture. From SQL to advanced analytics, empower teams to derive actionable insights that drive real business decisions.",
    tags: ["Data Engineering", "BI & Analytics", "Data Governance"],
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-teal-500/10",
  },
  {
    icon: "⚙️",
    title: "Operations Excellence",
    description:
      "Streamline digital operations with automation, process optimization, and digital enterprise tools that create compounding efficiency gains.",
    tags: ["Process Automation", "Digital Transformation", "Six Sigma"],
    color: "#10b981",
    gradient: "from-emerald-500/20 to-green-500/10",
  },
];

export const WHO_WE_SERVE_TABS = [
  {
    id: "tech",
    label: "Tech Professionals",
    icon: "💻",
    headline: "Accelerate Engineering Excellence",
    description:
      "Equip software engineers, data scientists, and cloud architects with next-gen skills in AI, distributed systems, and modern DevOps. Stay ahead of the technology curve with hands-on, project-based learning.",
    benefits: [
      "Hands-on AI & ML labs",
      "Cloud certification pathways",
      "Real-world capstone projects",
      "Peer learning cohorts",
    ],
  },
  {
    id: "non-tech",
    label: "Non-Tech Professionals",
    icon: "📈",
    headline: "Bridge the Digital Divide",
    description:
      "Empower finance, marketing, HR, and operations teams to leverage data analytics, AI tools, and digital platforms — becoming confident, tech-fluent business partners.",
    benefits: [
      "No-code & low-code tools",
      "Data literacy programs",
      "AI for business functions",
      "Digital transformation basics",
    ],
  },
  {
    id: "emerging",
    label: "Emerging Talent",
    icon: "🌱",
    headline: "Future-Proof Your Talent Pipeline",
    description:
      "Rapidly upskill new hires and campus recruits with structured, role-specific bootcamps. Cut time-to-productivity by 60% with curated onboarding learning tracks.",
    benefits: [
      "Role-specific bootcamps",
      "Mentorship programs",
      "Career pathways",
      "Assessment & credentialing",
    ],
  },
  {
    id: "leadership",
    label: "Senior Leadership",
    icon: "🎯",
    headline: "Lead the Transformation",
    description:
      "Prepare C-suite executives and VPs to lead AI-driven organizational transformation. Build strategic fluency in technology, data, and innovation to drive enterprise growth.",
    benefits: [
      "Executive AI literacy",
      "Board-level reporting",
      "Innovation frameworks",
      "Peer executive networks",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Menon",
    role: "VP of Engineering",
    company: "TechCorp India",
    avatar: "RM",
    avatarColor: "#6366f1",
    quote:
      "Accredian's Gen-AI program transformed how our 200-person engineering team approaches problem-solving. Within 3 months, we shipped 4 AI-powered features that directly impacted revenue. The ROI dashboards gave us complete visibility into learning impact.",
    rating: 5,
    metric: "4x faster AI feature delivery",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Chief Data Officer",
    company: "FinanceEdge",
    avatar: "PS",
    avatarColor: "#8b5cf6",
    quote:
      "We needed to upskill 500 analysts across 8 cities simultaneously. Accredian's blended delivery model and customized curriculum made it seamless. Our data literacy scores jumped 78% — a result we couldn't have imagined in such a short timeframe.",
    rating: 5,
    metric: "78% improvement in data literacy",
  },
  {
    id: 3,
    name: "Ankit Verma",
    role: "Head of L&D",
    company: "Global Retail Co.",
    avatar: "AV",
    avatarColor: "#06b6d4",
    quote:
      "The skill gap analysis was a revelation. Accredian uncovered blind spots we didn't know existed and built a targeted program that addressed them precisely. Our onboarding time for new engineers dropped from 6 months to 10 weeks.",
    rating: 5,
    metric: "60% reduction in onboarding time",
  },
  {
    id: 4,
    name: "Sunita Rao",
    role: "CTO",
    company: "HealthTech Solutions",
    avatar: "SR",
    avatarColor: "#10b981",
    quote:
      "The Product & Innovation curriculum was exactly what our PMs needed. They now speak the same language as engineering, and our product velocity has increased dramatically. Accredian is a true strategic partner, not just a training vendor.",
    rating: 5,
    metric: "40% increase in product velocity",
  },
];

export const ENTERPRISE_FEATURES = [
  {
    icon: "🎯",
    title: "Precision Learning",
    description:
      "AI-powered learning paths customized to each employee's role, skill level, and career trajectory. Zero wasted time on irrelevant content.",
    color: "#6366f1",
  },
  {
    icon: "📊",
    title: "ROI Dashboards",
    description:
      "Real-time analytics that connect learning activity to business outcomes. Track completions, assessments, and skills uplift with executive-ready reports.",
    color: "#8b5cf6",
  },
  {
    icon: "🔐",
    title: "Enterprise SSO & Security",
    description:
      "Seamless integration with your existing identity providers (Okta, Azure AD, Google). SOC 2 compliant with enterprise-grade data protection.",
    color: "#06b6d4",
  },
  {
    icon: "🌐",
    title: "Global Scale Delivery",
    description:
      "Multi-region CDN, 99.9% uptime SLA, and multilingual support enables consistent learning experiences for distributed teams across the globe.",
    color: "#10b981",
  },
];

export const FOOTER_LINKS = {
  solutions: [
    { label: "Gen-AI Programs", href: "#" },
    { label: "Product Management", href: "#" },
    { label: "Data & Analytics", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Operations", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Whitepapers", href: "#" },
    { label: "Webinars", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
