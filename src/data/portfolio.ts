export const personalInfo = {
  name: "Devendra Suthar",
  title: "Full-Stack Developer",
  taglines: [
    "I build scalable, data-driven web apps.",
    "I craft seamless full-stack experiences.",
    "I optimize workflows and performance.",
    "I turn ideas into production-ready systems.",
  ],
  bio: `Full-Stack Developer with 2 years of experience building scalable, data-driven
web applications using React, Next.js, Node.js, Express, and MongoDB. Proven experience
integrating AWS S3 for high-performance data ingestion, optimizing data workflows, and
designing user-friendly interfaces for productivity-focused tools. Strong background in
delivering end-to-end features, collaborating with users for real-time feedback, and
building reliable, production-ready systems.`,
  email: "devendra0suthar@gmail.com",
  phone: "+91 8824035499",
  location: "Jodhpur, Rajasthan, India",
  github: "https://github.com/devendra0suthar",
  linkedin: "https://www.linkedin.com/in/devendra-suthar/",
  twitter: "https://twitter.com/",
  resumeUrl: "/resume",
  resumePdfUrl: "/resume.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/49274867?v=4",
};

export const skills = {
  Frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Redux", icon: "SiRedux" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML/CSS", icon: "SiHtml5" },
  ],
  "Backend & Database": [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Prisma", icon: "SiPrisma" },
    { name: "AWS S3", icon: "SiAmazon" },
  ],
  "Real-Time & APIs": [
    { name: "Socket.io", icon: "SiSocketdotio" },
    { name: "WebRTC", icon: "SiWebrtc" },
    { name: "REST APIs", icon: "SiPostman" },
    { name: "NextAuth.js", icon: "SiNextdotjs" },
    { name: "GraphQL", icon: "SiGraphql" },
    { name: "Vercel", icon: "SiVercel" },
  ],
  "Tools & Practices": [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "Cursor", icon: "SiFigma" },
    { name: "Claude AI", icon: "SiFirebase" },
    { name: "Clean Architecture", icon: "SiLinux" },
    { name: "UI/UX Design", icon: "SiFigma" },
  ],
};

export const projects = [
  {
    title: "LMS Platform",
    description:
      "Built a full-stack LMS with secure role-based access for students and admins. Admins can create and manage courses and track student progress. Students can view courses, track learning progress, and mark courses as completed.",
    tags: ["Next.js", "React", "MongoDB", "NextAuth.js", "Tailwind CSS", "Vercel"],
    image: "/projects/lms.png",
    liveUrl: "https://lms-platform-flame-theta.vercel.app",
    githubUrl: "https://github.com/devendra0suthar/-lms-platform-",
  },
  {
    title: "WatchParty",
    description:
      "A real-time watch-party app that lets users create private chat rooms and invite friends. Stream and enjoy movies or videos together while communicating through live chat, providing a synchronized and interactive group-watching experience.",
    tags: ["Next.js", "React", "TypeScript", "Socket.io", "Prisma", "PostgreSQL", "WebRTC"],
    image: "/projects/watchparty.png",
    liveUrl: "https://watchparty-lac.vercel.app",
    githubUrl: "https://github.com/devendra0suthar/watchparty",
  },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Clutterbot",
    duration: "Nov 2023 - Dec 2025",
    bullets: [
      "Integrated AWS S3 to enable direct data ingestion into the Data Annotation platform, improving data access speed and reducing manual setup.",
      "Optimized data handling and redesigned UI flows to create a more user-friendly annotation experience and improve annotator efficiency.",
      "Collaborated closely with the annotators' team to gather real-time feedback and iteratively improve product usability.",
      "Built and enhanced features focused on productivity, performance, and workflow optimization across the platform.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science",
    institution: "Indian Institute of Technology, Jodhpur",
    duration: "2020 - 2023",
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
