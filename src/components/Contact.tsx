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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    { href: personalInfo.github, icon: <FaGithub className="text-xl" />, label: "GitHub" },
    { href: personalInfo.linkedin, icon: <FaLinkedin className="text-xl" />, label: "LinkedIn" },
    { href: personalInfo.twitter, icon: <FaTwitter className="text-xl" />, label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 px-6 grid-bg">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7 }}
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
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-mono text-accent mb-6">
              {"// contact info"}
            </h3>

            <div className="space-y-4 mb-8">
              <motion.a
                whileHover={{ x: 4 }}
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-foreground/60 hover:text-accent transition-colors duration-200"
              >
                <FiMail className="text-accent" />
                {personalInfo.email}
              </motion.a>
            </div>

            <h3 className="text-xl font-mono text-accent mb-4">
              {"// find me on"}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4, borderColor: "rgba(0,240,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-card-bg border border-card-border flex items-center justify-center text-foreground/50 hover:text-accent transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { type: "text", placeholder: "Your Name" },
                { type: "email", placeholder: "Your Email" },
              ].map((field, i) => (
                <motion.div
                  key={field.placeholder}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-200"
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card-bg border border-card-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 focus:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-200 resize-none"
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,240,255,0.4)" }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 glow"
              >
                {submitted ? (
                  <motion.span
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    Message Sent!
                  </motion.span>
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
