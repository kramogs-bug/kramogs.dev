"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareText, ShieldCheck } from "lucide-react";

const proofImages = [
  { src: "/assets/vouch%20proof/success1.png", width: 473, height: 121 },
  { src: "/assets/vouch%20proof/success2.png", width: 472, height: 120 },
  { src: "/assets/vouch%20proof/success3.png", width: 472, height: 207 },
  { src: "/assets/vouch%20proof/success4.png", width: 442, height: 111 },
  { src: "/assets/vouch%20proof/success5.png", width: 467, height: 123 },
  { src: "/assets/vouch%20proof/success6.png", width: 442, height: 178 },
  { src: "/assets/vouch%20proof/success7.png", width: 458, height: 121 },
  { src: "/assets/vouch%20proof/success8.png", width: 455, height: 181 },
  { src: "/assets/vouch%20proof/success9.png", width: 417, height: 87 },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-mint py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <span className="section-kicker">Proof, not promises</span>
            <h2 className="balanced mt-5 max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
              Work that earned real recommendations.
            </h2>
          </div>
          <div className="rounded-2xl border border-neon-green/15 bg-white/60 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-neon-green" />
              <p className="pretty text-sm leading-6 text-text-secondary">
                These are screenshots from completed macro and automation work—not stock quotes or
                placeholder testimonials.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 columns-1 gap-5 md:columns-2 xl:columns-3">
          {proofImages.map((proof, index) => (
            <motion.figure
              key={proof.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[1.25rem] border border-white/80 bg-ink p-3 shadow-[0_14px_35px_rgba(8,42,47,0.10)]"
            >
              <Image
                src={proof.src}
                alt={`Client feedback screenshot ${index + 1}`}
                width={proof.width}
                height={proof.height}
                sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                className="h-auto w-full rounded-lg"
              />
              <figcaption className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-white/60">
                  <MessageSquareText className="h-3.5 w-3.5 text-neon-cyan" />
                  Community feedback
                </span>
                <CheckCircle2 className="h-4 w-4 text-neon-cyan" aria-hidden="true" />
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
