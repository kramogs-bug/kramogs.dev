"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  titleAccent?: string;
  description?: string;
  accentColor?: "green" | "blue" | "cyan";
}

export default function SectionHeader({
  label,
  title,
  titleAccent,
  description,
  accentColor = "green",
}: SectionHeaderProps) {
  const accentClass = {
    green: "text-neon-green border-neon-green/15 bg-neon-green/5",
    blue: "text-neon-blue border-neon-blue/15 bg-neon-blue/5",
    cyan: "text-neon-cyan border-border bg-surface-2",
  }[accentColor];

  const titleAccentClass = {
    green: "text-neon-green",
    blue: "text-neon-blue",
    cyan: "text-neon-cyan",
  }[accentColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <span
        className={`inline-block px-3 py-1 text-xs font-semibold border rounded-full mb-4 ${accentClass}`}
      >
        {label.replace("// ", "").replace(".", " ")}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
        {title}
        {titleAccent && (
          <>
            {" "}
            <span className={titleAccentClass}>{titleAccent}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
