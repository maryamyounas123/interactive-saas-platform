"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { useLanguage } from "@/components/layout/LanguageProvider";

const words = ["busywork.", "cron jobs.", "manual triage.", "the backlog."];

function PipelineVisual() {
  return (
    <svg
      viewBox="0 0 560 420"
      className="w-full max-w-lg"
      role="img"
      aria-label="Animated automation pipeline connecting product nodes"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6c5ce7" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {[
        "M60,80 C160,80 160,80 240,150",
        "M240,150 C320,210 320,210 400,150",
        "M240,150 C240,230 240,230 240,300",
        "M400,150 C470,190 470,190 500,260",
        "M240,300 C320,330 320,330 400,300",
      ].map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="url(#edgeGrad)"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
          className="animate-flow-dash"
          style={{ animationDelay: `${i * 0.15}s`, opacity: 0.55 }}
        />
      ))}

      {[
        { cx: 60, cy: 80, label: "Trigger", r: 26 },
        { cx: 240, cy: 150, label: "Flow", r: 32 },
        { cx: 400, cy: 150, label: "Signal", r: 26 },
        { cx: 500, cy: 260, label: "Relay", r: 22 },
        { cx: 240, cy: 300, label: "Rule", r: 22 },
        { cx: 400, cy: 300, label: "Alert", r: 22 },
      ].map((n) => (
        <g key={n.label} className="animate-float" style={{ animationDelay: `${n.cx / 300}s` }}>
          <circle cx={n.cx} cy={n.cy} r={n.r} className="fill-surface" stroke="#6c5ce7" strokeWidth="1.5" opacity="0.9" />
          <circle cx={n.cx} cy={n.cy} r={n.r * 0.4} className="fill-signal/40 animate-pulse-slow" />
          <text
            x={n.cx}
            y={n.cy + n.r + 18}
            textAnchor="middle"
            className="fill-current text-ink-soft"
            style={{ fontSize: "11px", fontFamily: "var(--font-jetbrains)" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-signal-glow opacity-40" />
      <ParticleBackground className="opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,92,231,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(108,92,231,0.15) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-pulse-teal animate-pulse-slow" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
          >
            {hero.titleLine1}{" "}
            <span className="relative inline-block text-signal-light">
              {hero.titleHighlight}
            </span>
            <br />
            {hero.titleLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-base text-ink-soft md:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button className="btn-primary">
              {hero.ctaPrimary} <ArrowRight size={16} />
            </button>
            <button className="btn-secondary">
              <PlayCircle size={16} /> {hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-xs text-ink-soft"
          >
            <span className="font-mono">{hero.trustedBy}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="card-surface rounded-3xl p-8 shadow-2xl shadow-signal/5">
            <PipelineVisual />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
