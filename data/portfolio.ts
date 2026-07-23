// ============================================================
// PORTFOLIO DATA - Edit this file to update all content
// ============================================================

export const personalInfo = {
  name: "Kramogs.Dev",
  title: "Computer Engineering Student & Automation Specialist",
  tagline: "I build practical systems, workflow tools, and custom solutions that turn repetitive work into reliable processes.",
  email: "vjohnmark673@gmail.com",
  github: "",
  linkedin: "https://www.linkedin.com/in/john-mark-valdez-580099402/",
  location: "Philippines",
  availability: "Available for freelance projects",
};

export const stats = [
  {
    id: "automations",
    label: "Automations Built",
    value: "40+",
    icon: "Cpu",
    color: "green",
    description: "Macro scripts, workflows, and full systems",
  },
  {
    id: "hours-saved",
    label: "Hours Saved",
    value: "1,200+",
    icon: "Clock",
    color: "blue",
    description: "Estimated productive hours returned to clients",
  },
  {
    id: "live-systems",
    label: "Live Systems",
    value: "4",
    icon: "Activity",
    color: "cyan",
    description: "Currently running and actively maintained",
  },
  {
    id: "tools",
    label: "Happy Clients",
    value: "20+",
    icon: "Users",
    color: "green",
    description: "People and teams helped through custom builds",
  },
];

export const projects = [
  {
    id: "cruze-it",
    title: "Cruze IT",
    tagline: "Full-stack school management system",
    description:
      "A complete school-oriented web platform built as an academic project, featuring real authentication, dashboard views, and automated data handling workflows.",
    category: "Web Application",
    categoryColor: "blue",
    status: "live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://cruze-it.vercel.app/",
    breakdownUrl: "",
    featured: false,
    gradient: "from-blue-900/20 to-cyan-900/10",
    borderColor: "border-blue-800/30",
    accentColor: "neon-blue",
  },
  {
    id: "paper-flowers",
    title: "Paper Flowers Manila",
    tagline: "Client e-commerce and brand website",
    description:
      "A premium client project for a local Manila-based paper flower brand. Custom-built storefront with optimized UX, product showcases, and integrated inquiry automation.",
    category: "Client Work",
    categoryColor: "green",
    status: "live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://paper-flowers-manila.vercel.app/",
    breakdownUrl: "",
    featured: true,
    clientNote: "Real client - Production deployment",
    gradient: "from-emerald-900/20 to-green-900/10",
    borderColor: "border-emerald-800/30",
    accentColor: "neon-green",
  },
  {
    id: "amyt",
    title: "AMYT",
    tagline: "Automation Made for You - Tool",
    description:
      "My personal flagship automation tool. Built to solve real workflow bottlenecks, AMYT is a custom system I engineered from the ground up - not a project, a product.",
    category: "Automation Tool",
    categoryColor: "cyan",
    status: "live",
    stack: ["Custom Stack", "Automation Engine", "Macro System"],
    liveUrl: "https://amyt.netlify.app/",
    breakdownUrl: "#amyt",
    featured: true,
    clientNote: "Personal flagship - Open to users",
    gradient: "from-cyan-900/20 to-blue-900/10",
    borderColor: "border-cyan-800/40",
    accentColor: "neon-cyan",
  },
  {
    id: "wescomm",
    title: "WESCOMM",
    tagline: "Integrated campus commissary platform",
    description:
      "A centralized commissary platform for Wesleyan students, staff, and administrators, with live stock visibility, reservations, digital receipts, and role-based experiences.",
    category: "Campus Platform",
    categoryColor: "green",
    status: "live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    liveUrl: "https://wescomm.vercel.app/",
    breakdownUrl: "",
    featured: false,
    clientNote: "Production platform - Live deployment",
    gradient: "from-emerald-900/20 to-green-900/10",
    borderColor: "border-emerald-800/30",
    accentColor: "neon-green",
  },
  {
    id: "sellables-calc",
    title: "Sellables Calculator",
    tagline: "In-game economy optimization tool",
    description:
      "A precision calculator I built for personal use to optimize sellable item strategies in my game. Automates complex pricing logic and margin calculations.",
    category: "Utility Tool",
    categoryColor: "blue",
    status: "live",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://sellables-calculators.vercel.app/",
    breakdownUrl: "",
    featured: false,
    gradient: "from-violet-900/20 to-blue-900/10",
    borderColor: "border-violet-800/30",
    accentColor: "neon-blue",
  },
];

export const amytFeatures = [
  {
    icon: "Zap",
    title: "One-Click Execution",
    description: "Trigger complex multi-step workflows with a single action. No technical setup required.",
  },
  {
    icon: "GitBranch",
    title: "Logic Branching",
    description: "Conditional automation paths that adapt based on real-time input data.",
  },
  {
    icon: "Repeat",
    title: "Macro Looping",
    description: "Repeat tasks at defined intervals with smart stop conditions built in.",
  },
  {
    icon: "Shield",
    title: "Error Recovery",
    description: "Automatic retry logic and fallback paths keep automations from silently breaking.",
  },
  {
    icon: "BarChart2",
    title: "Run Analytics",
    description: "Track execution history, time saved, and success rates per automation.",
  },
  {
    icon: "Settings2",
    title: "Custom Parameters",
    description: "Every automation is configurable - built for your exact workflow, not a template.",
  },
];

export const capabilities = [
  {
    id: "data-entry",
    icon: "Database",
    title: "Data Entry Automation",
    description:
      "Eliminate manual data input entirely. I build systems that extract, transform, and fill data across forms, spreadsheets, and platforms without human intervention.",
    examples: ["Form auto-filling", "Spreadsheet population", "Database sync"],
    color: "green",
  },
  {
    id: "macro",
    icon: "Code2",
    title: "Macro Scripting",
    description:
      "Using Jitbit, Macrorify, and custom scripts, I build precise keyboard and mouse macros that execute complex multi-step sequences reliably and fast.",
    examples: ["Jitbit macros", "Macrorify scripts", "AHK automation"],
    color: "blue",
  },
  {
    id: "workflow",
    icon: "GitMerge",
    title: "Workflow Automation",
    description:
      "Map your entire workflow, identify the bottlenecks, and automate the pipeline end-to-end - from trigger to output.",
    examples: ["Multi-app pipelines", "Trigger-based flows", "Scheduled tasks"],
    color: "cyan",
  },
  {
    id: "productivity",
    icon: "TrendingUp",
    title: "Productivity Systems",
    description:
      "Build personal operating systems that auto-organize, auto-file, auto-report, and surface the right information at the right time.",
    examples: ["Auto-sorting", "Status dashboards", "Report generation"],
    color: "green",
  },
  {
    id: "custom-tools",
    icon: "Wrench",
    title: "Custom Tool Development",
    description:
      "When off-the-shelf tools don't fit your workflow, I engineer purpose-built automation utilities from scratch - exactly like AMYT.",
    examples: ["Web tools", "Desktop utilities", "Browser extensions"],
    color: "blue",
  },
  {
    id: "web-automation",
    icon: "Globe",
    title: "Web Automation",
    description:
      "Scraping, monitoring, form interactions, and browser automation that handle web-based tasks at scale without manual clicks.",
    examples: ["Web scraping", "Browser bots", "Site monitoring"],
    color: "cyan",
  },
];

export const serviceFit = [
  {
    label: "Best fit",
    points: [
      "Repeated form, spreadsheet, browser, or file-handling work",
      "Small teams that need custom automation without enterprise overhead",
      "Creators or operators who want one-off tools built around their workflow",
    ],
  },
  {
    label: "Not ideal",
    points: [
      "Projects that require guaranteed 24/7 infrastructure ownership",
      "Automations that violate platform rules or bypass security controls",
      "Requests with unclear input data, success criteria, or ownership",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Small Business Owner",
    company: "Manila Crafts Co.",
    avatar: "SM",
    avatarColor: "green",
    message:
      "I was spending 3 hours every day on data entry. After working with this engineer, that's down to 15 minutes. The automation he built just works - I haven't had to touch it in months.",
    rating: 5,
    result: "3 hrs -> 15 min daily",
    resultColor: "green",
  },
  {
    id: 2,
    name: "James R.",
    role: "Operations Lead",
    company: "E-commerce Startup",
    avatar: "JR",
    avatarColor: "blue",
    message:
      "The workflow system he built for us handles 200+ order updates per day automatically. What used to take our team half a day is now fully hands-off. Insane ROI.",
    rating: 5,
    result: "200+ orders automated",
    resultColor: "blue",
  },
  {
    id: 3,
    name: "Mikael T.",
    role: "Content Creator",
    company: "Independent",
    avatar: "MT",
    avatarColor: "cyan",
    message:
      "He built me a macro system for my streaming setup and content pipeline. Everything I used to do manually between uploads - organized, scheduled, done. Genuinely impressive work.",
    rating: 5,
    result: "Full pipeline automated",
    resultColor: "cyan",
  },
  {
    id: 4,
    name: "Lyra V.",
    role: "Virtual Assistant",
    company: "Freelance",
    avatar: "LV",
    avatarColor: "green",
    message:
      "Hired him to build a data extraction system for a client. Delivered faster than expected, clean code, and he explained everything. The client was thrilled. Will hire again.",
    rating: 5,
    result: "Delivered ahead of schedule",
    resultColor: "green",
  },
];

export const processSteps = [
  {
    step: "01",
    icon: "ScanSearch",
    title: "Analyze Workflow",
    description:
      "I audit your current process end-to-end - mapping every manual step, identifying the true bottlenecks, and quantifying how much time is being lost.",
    color: "green",
    terminal: "$ analyze --workflow --map-bottlenecks",
  },
  {
    step: "02",
    icon: "PenTool",
    title: "Design Automation",
    description:
      "Before writing a single line of code, I architect the automation system - defining the trigger-action logic, error handling, and success metrics.",
    color: "blue",
    terminal: "$ design --system --define-logic",
  },
  {
    step: "03",
    icon: "Code2",
    title: "Build System",
    description:
      "I build the automation using the right tools for the job - whether that's Jitbit, Macrorify, custom scripts, or a full web application.",
    color: "cyan",
    terminal: "$ build --system --run-tests",
  },
  {
    step: "04",
    icon: "CheckCircle2",
    title: "Deliver and Optimize",
    description:
      "You get a working system, full documentation, and follow-up support. I monitor the first run, fix edge cases, and optimize for your exact workflow.",
    color: "green",
    terminal: "$ deploy --production --monitor",
  },
];

export const logMessages = [
  "[SYS] Automation engine initialized",
  "[OK] Workflow scanner loaded - 6 modules active",
  "[RUN] Paper Flowers automation: 847 tasks complete",
  "[AMYT] Session started - macro engine v2.4 ready",
  "[OK] Sellables calculator: live on Vercel",
  "[RUN] Data extraction pipeline: 0 errors detected",
  "[SYS] Cruze IT: 99.9% uptime last 30 days",
  "[OK] Macro script batch completed in 0.8s",
  "[RUN] Workflow trigger received - executing 12 steps",
  "[OK] AMYT: 340 automation runs this week",
  "[SYS] All systems nominal - monitoring active",
  "[RUN] Scheduled task: file sort complete",
  "[OK] Client automation: 3.2 hrs saved today",
  "[SYS] Engine heartbeat: 200ms avg response",
  "[RUN] Jitbit macro: looped 200x with 0 failures",
  "[OK] New workflow mapped - automation ready",
];
