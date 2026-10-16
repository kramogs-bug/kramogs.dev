export const personalInfo = {
  name: "John Mark R. Valdez",
  shortName: "John Mark",
  brand: "Kramogs.Dev",
  role: "Computer Engineering Student | Full-Stack & Automation Developer",
  headline: "I build reliable software for real-world workflows.",
  summary:
    "Fourth-year Computer Engineering student focused on full-stack web development, practical automation, and systems that make everyday work simpler.",
  objective:
    "Seeking a 480-hour OJT in software development, IT, or automation where I can contribute to production work and keep learning from an engineering team.",
  email: "vjohnmark673@gmail.com",
  github: "https://github.com/kramogs-bug",
  linkedin: "https://www.linkedin.com/in/john-mark-valdez-580099402/",
  location: "Bongabon, Nueva Ecija",
  availability: "Available November 9, 2026",
  resumeUrl: "/John-Mark-Valdez-OJT-Resume.pdf",
};

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "Wesleyan University-Philippines",
  location: "Cabanatuan City",
  graduation: "Expected 2027",
};

export const focusAreas = [
  {
    number: "01",
    title: "Full-stack development",
    description:
      "Responsive applications with clear interfaces, authentication, databases, and role-based workflows.",
  },
  {
    number: "02",
    title: "Automation",
    description:
      "Purpose-built tools that reduce repetitive work through macros, OCR, browser flows, and data handling.",
  },
  {
    number: "03",
    title: "Practical engineering",
    description:
      "Solutions shaped around the actual users, constraints, and outcomes of a project—not just the technology.",
  },
];

export const projects = [
  {
    id: "wescomm",
    title: "WESCOMM",
    type: "Capstone Project",
    year: "2026",
    tagline: "Wesleyan Integrated Commissary Management System",
    description:
      "A deployed campus commissary platform that brings reservations, inventory, digital receipts, notifications, claiming, and reporting into one system.",
    contribution:
      "Implemented authentication and role-based experiences for students, staff, and administrators.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Prisma"],
    image: "/assets/wescoom-preview.png",
    liveUrl: "https://wescomm.store/",
    repoUrl: "",
    featured: true,
  },
  {
    id: "paper-flowers",
    title: "Paper Flowers Manila",
    type: "Paid Client Project",
    year: "2026",
    tagline: "Responsive website for a wedding and event styling business",
    description:
      "Translated a client's requirements into a polished production website and streamlined how customer inquiries are handled.",
    contribution: "Delivered the responsive interface and deployed the project on Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/assets/paper-flowers-preview.png",
    liveUrl: "https://paper-flowers-manila.vercel.app/",
    repoUrl: "https://github.com/kramogs-bug/paper-flowers-manila",
    featured: false,
  },
  {
    id: "cruze-it",
    title: "Cruze IT",
    type: "School Project",
    year: "2025",
    tagline: "Car-rental web application",
    description:
      "A full-stack academic project with user authentication, dashboard views, vehicle browsing, and booking workflows.",
    contribution: "Built the core interface and end-to-end application flow.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/assets/cruz-it-preview.png",
    liveUrl: "https://cruze-it.vercel.app/",
    repoUrl: "",
    featured: false,
  },
  {
    id: "amyt",
    title: "AMYT",
    type: "Personal Automation Tool",
    year: "2025–Present",
    tagline: "Automation Made for You",
    description:
      "A free Windows automation tool with keystroke recording, image detection, OCR, and AI-assisted navigation.",
    contribution: "Designed and built the tool around repetitive desktop workflows.",
    stack: ["Macro Scripting", "OCR", "Image Detection", "Automation"],
    image: "/assets/amyt-preview.png",
    liveUrl: "https://amyt.netlify.app/",
    repoUrl: "https://github.com/kramogs-bug/AMYT-app-download",
    featured: false,
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & data",
    skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "Prisma ORM", "Authentication", "Role-based access"],
  },
  {
    label: "Automation",
    skills: ["Macro scripting", "Web automation", "Data-entry automation", "OCR", "Image detection"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "AutoCAD 2D/3D", "Microsoft Office"],
  },
];

export const certificates = [
  ["CCNA: Introduction to Networks", "Nov 2025"],
  ["Exploring Networking with Cisco Packet Tracer", "Jul 2025"],
  ["Linux Essentials", "Feb 2025"],
  ["Linux Unhatched", "Jan 2025"],
  ["Operating Systems Basics", "Jan 2025"],
  ["Data Analytics Essentials", "Feb 2024"],
  ["Introduction to Data Science", "Jan 2024"],
] as const;

export const experience = [
  {
    role: "AutoCAD Drafter",
    company: "Domingo Surveying Office",
    period: "2024",
    description: "Prepared and revised technical drawings for surveying projects.",
  },
  {
    role: "Cable Installer / Helper",
    company: "ENCI Cable",
    period: "2021–2022",
    description:
      "Assisted with cable installation and on-site troubleshooting while following safety procedures.",
  },
];
