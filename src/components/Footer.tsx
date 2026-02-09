"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/40 text-sm font-mono">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent">{personalInfo.name}</span>. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={personalInfo.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-accent transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="text-foreground/30 text-xs font-mono">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
