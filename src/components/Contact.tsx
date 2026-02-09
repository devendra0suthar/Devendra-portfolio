"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Replace with actual form handling (e.g., API route, Formspree, etc.)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 grid-bg">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-foreground/50 mt-4 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I&apos;m always open to new opportunities.
          </p>
          <div className="section-divider w-24 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-mono text-accent mb-6">
              {"// contact info"}
            </h3>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-foreground/60 hover:text-accent transition-colors duration-200"
              >
                <FiMail className="text-accent" />
                {personalInfo.email}
              </a>
            </div>

            <h3 className="text-xl font-mono text-accent mb-4">
              {"// find me on"}
            </h3>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-foreground/50 hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-foreground/50 hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-foreground/50 hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 transition-colors duration-200"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 glow"
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
