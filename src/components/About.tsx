"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-card-bg border border-card-border overflow-hidden glow-border">
                <Image
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border border-accent/20 -z-10" />
              <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl border border-accent-secondary/20 -z-10" />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-mono text-accent mb-4">
              {"// who I am"}
            </h3>
            <p className="text-foreground/70 leading-relaxed mb-6 text-lg">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.resumeUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 glow"
              >
                <FiDownload />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent/50 text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
