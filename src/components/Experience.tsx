"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBookOpen } from "react-icons/fi";
import { experiences, education } from "@/data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 grid-bg">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-accent">Experience</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent glow mt-6" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content card */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <div className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300">
                  <span className="text-accent font-mono text-sm">
                    {exp.duration}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                  <p className="text-foreground/50 font-mono text-sm mt-1">
                    {exp.company}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-foreground/60 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-1.5 shrink-0">&#8226;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-accent">Education</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1">
                <FiBookOpen />
              </div>
              <div>
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-foreground/50 font-mono text-sm mt-1">
                  {edu.institution}
                </p>
                <span className="text-accent font-mono text-sm">
                  {edu.duration}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
