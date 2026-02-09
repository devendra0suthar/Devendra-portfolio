"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGraphql,
  SiAmazon,
  SiGit,
  SiGithub,
  SiSocketdotio,
  SiWebrtc,
  SiLinux,
  SiVercel,
  SiFigma,
  SiPostman,
  SiFirebase,
} from "react-icons/si";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGraphql,
  SiAmazon,
  SiGit,
  SiGithub,
  SiSocketdotio,
  SiWebrtc,
  SiLinux,
  SiVercel,
  SiFigma,
  SiPostman,
  SiFirebase,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 px-6 grid-bg">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <h3 className="text-lg font-mono text-accent mb-6">
                {`// ${category}`}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((skill, i) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + i * 0.05,
                      }}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent/5 hover:border-accent/20 border border-transparent transition-all duration-200 group"
                    >
                      {IconComponent && (
                        <IconComponent className="text-2xl text-foreground/50 group-hover:text-accent transition-colors duration-200" />
                      )}
                      <span className="text-xs text-foreground/50 group-hover:text-foreground/80 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
