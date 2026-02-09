export const personalInfo = {
  name: "Devendra Suthar",
  title: "Full-Stack Developer",
  taglines: [
    "I build modern web applications.",
    "I craft scalable full-stack solutions.",
    "I design intuitive user experiences.",
    "I turn ideas into production code.",
  ],
  bio: `I'm a passionate Full-Stack Developer with hands-on experience building
modern web applications using TypeScript, React, Next.js, and Node.js. From
learning management platforms to real-time collaborative apps, I love turning
ideas into polished, production-ready products. I thrive on solving complex
problems across the entire stack and continuously exploring new technologies.`,
  email: "devendra.suthar@example.com",
  github: "https://github.com/devendra0suthar",
  linkedin: "https://www.linkedin.com/in/devendra-suthar/",
  twitter: "https://twitter.com/",
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/49274867?v=4",
};

export const skills = {
  Frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss3" },
  ],
  Backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express", icon: "SiExpress" },
    { name: "Python", icon: "SiPython" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "GraphQL", icon: "SiGraphql" },
  ],
  DevOps: [
    { name: "Docker", icon: "SiDocker" },
    { name: "AWS", icon: "SiAmazon" },
    { name: "Git", icon: "SiGit" },
    { name: "GitHub Actions", icon: "SiGithubactions" },
    { name: "Linux", icon: "SiLinux" },
    { name: "Vercel", icon: "SiVercel" },
  ],
  Tools: [
    { name: "Vercel", icon: "SiVercel" },
    { name: "Figma", icon: "SiFigma" },
    { name: "Postman", icon: "SiPostman" },
    { name: "Jira", icon: "SiJira" },
    { name: "Redis", icon: "SiRedis" },
    { name: "Firebase", icon: "SiFirebase" },
  ],
};

export const projects = [
  {
    title: "LMS Platform",
    description:
      "A full-featured Learning Management System for creating, managing, and consuming online courses. Built with a modern stack and deployed on Vercel.",
    tags: ["TypeScript", "Next.js", "React", "Vercel"],
    image: "/projects/lms.png",
    liveUrl: "https://lms-platform-flame-theta.vercel.app",
    githubUrl: "https://github.com/devendra0suthar/-lms-platform-",
  },
  {
    title: "WatchParty",
    description:
      "A real-time watch party application that lets users watch videos together in sync with friends. Features collaborative viewing experience.",
    tags: ["TypeScript", "React", "Real-Time", "Vercel"],
    image: "/projects/watchparty.png",
    liveUrl: "https://watchparty-lac.vercel.app",
    githubUrl: "https://github.com/devendra0suthar/watchparty",
  },
];

export const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Corp",
    duration: "2023 - Present",
    description:
      "Leading development of microservices architecture, mentoring junior devs, and building customer-facing features serving 100K+ users.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    duration: "2021 - 2023",
    description:
      "Built and shipped the core product from MVP to production. Implemented CI/CD pipelines, REST APIs, and responsive frontend interfaces.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    duration: "2019 - 2021",
    description:
      "Developed responsive websites and web apps for 20+ clients. Focused on React, performance optimization, and accessibility.",
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
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
