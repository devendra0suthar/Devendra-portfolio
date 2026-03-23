export const personalInfo = {
  name: "Devendra Suthar",
  title: "Full-Stack Developer",
  taglines: [
    "I build scalable, data-driven web apps.",
    "I craft seamless full-stack experiences.",
    "I optimize workflows and performance.",
    "I turn ideas into production-ready systems.",
  ],
  bio: `Results-driven Full-Stack Developer with 1.6 years of production experience shipping scalable, data-driven web applications used by real teams. Expert in React 18, Next.js 14, TypeScript, Node.js, MongoDB, and PostgreSQL with hands-on experience in real-time systems (Socket.io, WebRTC), cloud infrastructure (AWS S3), and CI/CD automation. IIT Madras graduate (B.S. Data Science). Delivered 15+ end-to-end production features at a SaaS startup. Seeking a Full-Stack / Frontend / Backend role where I can contribute to a high-growth global team.`,
  email: "devendra0suthar@gmail.com",
  phone: "+91 8824035499",
  location: "Jodhpur, Rajasthan, India",
  github: "https://github.com/devendra0suthar",
  linkedin: "https://www.linkedin.com/in/devendra-suthar/",
  twitter: "https://twitter.com/",
  resumeUrl: "/resume",
  resumePdfUrl: "/resume.pdf?v=2",
  avatarUrl: "https://avatars.githubusercontent.com/u/49274867?v=4",
};

export const skills = {
  Frontend: [
    { name: "React 18", icon: "SiReact" },
    { name: "Next.js 14", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Redux Toolkit", icon: "SiRedux" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss3" },
    { name: "React Query", icon: "SiReactquery" },
    { name: "Zustand", icon: "SiZod" },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "GraphQL", icon: "SiGraphql" },
    { name: "Socket.io", icon: "SiSocketdotio" },
    { name: "WebRTC", icon: "SiWebrtc" },
    { name: "JWT", icon: "SiJsonwebtokens" },
    { name: "NextAuth.js", icon: "SiNextdotjs" },
  ],
  Databases: [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "Prisma ORM", icon: "SiPrisma" },
    { name: "Redis", icon: "SiRedis" },
  ],
  "Cloud & DevOps": [
    { name: "AWS S3", icon: "SiAmazon" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "Git", icon: "SiGit" },
    { name: "GitHub Actions", icon: "SiGithubactions" },
    { name: "Docker", icon: "SiDocker" },
  ],
  "Testing & Other": [
    { name: "Jest", icon: "SiJest" },
    { name: "Vitest", icon: "SiVitest" },
    { name: "Figma", icon: "SiFigma" },
    { name: "Agile/Scrum", icon: "SiJira" },
  ],
};

export const projects = [
  {
    title: "Learning Management Platform (LMS)",
    description:
      "Built a full-stack LMS with role-based access control (Admin / Instructor / Student), JWT auth via NextAuth.js, and real-time course progress tracking for concurrent learners. Achieved sub-2s page loads and 90+ Lighthouse score using Next.js 14 SSR, MongoDB indexing, and Tailwind CSS.",
    tags: ["Next.js 14", "React 18", "TypeScript", "MongoDB", "NextAuth.js", "Tailwind CSS", "Vercel", "GitHub Actions"],
    image: "/projects/lms.png",
    liveUrl: "https://lms-platform-flame-theta.vercel.app",
    githubUrl: "https://github.com/devendra0suthar/-lms-platform-",
  },
  {
    title: "WatchParty — Real-Time Video Sync App",
    description:
      "Engineered WebRTC P2P video streaming with Socket.io real-time chat, supporting 20+ concurrent users per room at under 200ms latency. Implemented PostgreSQL + Prisma schema for user sessions, room lifecycle, and message history; full end-to-end TypeScript type safety across client and server.",
    tags: ["Next.js 14", "React 18", "TypeScript", "Socket.io", "WebRTC", "Prisma", "PostgreSQL", "Vercel"],
    image: "/projects/watchparty.png",
    liveUrl: "https://watchparty-lac.vercel.app",
    githubUrl: "https://github.com/devendra0suthar/watchparty",
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Clutterbot (SaaS Data Annotation Platform)",
    duration: "May 2024 – Dec 2025",
    bullets: [
      "Architected AWS S3 direct-upload integration for the annotation platform, eliminating manual upload steps and cutting data-setup time by ~50%, enabling seamless batch ingestion of large-scale datasets.",
      "Designed and shipped 15+ production features (React 18 + Node.js) focused on performance, scalability, and workflow automation — code consistently reviewed and merged with zero regression incidents.",
      "Optimized annotation UI task flows, reducing annotator time-on-task by an estimated 20% and measurably increasing team throughput across 10+ concurrent annotators.",
      "Ran bi-weekly product feedback cycles with 10+ annotators, translating user insights into 6+ shipped workflow improvements per quarter, directly lifting usability scores.",
      "Maintained 95%+ uptime across the full stack by implementing error boundaries, retries, and CI/CD pipelines with automated GitHub Actions deployment to Vercel.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Data Science",
    institution: "Indian Institute of Technology, Madras",
    duration: "",
  },
];

export const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, Tech Corp",
    quote:
      "Devendra is an exceptional developer who consistently delivers high-quality work. His ability to tackle complex problems and communicate clearly makes him an invaluable team member.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager, StartupXYZ",
    quote:
      "Working with Devendra was a great experience. He took our vague requirements and turned them into a polished product that exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    role: "CTO, Digital Agency",
    quote:
      "Devendra has a rare combination of technical skill and design sense. He builds interfaces that are both beautiful and performant.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
