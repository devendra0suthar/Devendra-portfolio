"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group bg-card-bg border border-card-border rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,240,255,0.1)]"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-accent/10 to-accent-secondary/10 flex items-center justify-center relative overflow-hidden">
                <motion.span
                  className="text-4xl font-bold text-foreground/10 font-mono"
                  whileHover={{ scale: 1.1 }}
                >
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </motion.span>
                {/* Animated shine overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full"
                  animate={isInView ? { translateX: ["−100%", "200%"] } : {}}
                  transition={{ duration: 2, delay: 1 + index * 0.3, repeat: Infinity, repeatDelay: 5 }}
                />
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-200"
                >
                  {project.title}
                </motion.h3>
                <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.05 + 0.3 }}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05, x: 2 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/50 hover:text-accent transition-colors duration-200"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05, x: 2 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/50 hover:text-accent transition-colors duration-200"
                  >
                    <FiGithub /> Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
