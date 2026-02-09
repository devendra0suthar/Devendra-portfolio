"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { personalInfo, skills, experiences, projects, education } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-10 border-b border-card-border pb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-accent">{personalInfo.name}</span>
          </h1>
          <p className="text-xl text-foreground/60 font-mono mb-4">
            {personalInfo.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/50">
            <span className="flex items-center gap-1">
              <FiPhone /> {personalInfo.phone}
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <FiMail /> {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <FiGithub /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <span className="flex items-center gap-1">
              <FiMapPin /> {personalInfo.location}
            </span>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-bold font-mono text-accent mb-3 uppercase tracking-wider">
            // Summary
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            {personalInfo.bio}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-lg font-bold font-mono text-accent mb-4 uppercase tracking-wider">
            // Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="border-l-2 border-accent/30 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <p className="text-foreground/50 font-mono text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-accent font-mono text-sm whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-foreground/60 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-accent shrink-0">&#8226;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-lg font-bold font-mono text-accent mb-4 uppercase tracking-wider">
            // Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project, i) => (
              <div key={i} className="border-l-2 border-accent/30 pl-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.liveUrl !== "https://example.com" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline"
                      >
                        Live
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-accent hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-foreground/60 text-sm mt-1">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-lg font-bold font-mono text-accent mb-4 uppercase tracking-wider">
            // Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-mono text-sm text-foreground/50 mb-2">
                  {category}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {items.map((s) => s.name).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-bold font-mono text-accent mb-4 uppercase tracking-wider">
            // Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="border-l-2 border-accent/30 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{edu.degree}</h3>
                  <p className="text-foreground/50 font-mono text-sm">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-accent font-mono text-sm whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-card-border">
          <a
            href={personalInfo.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 glow"
          >
            <FiDownload /> Download PDF
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Back to Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}
