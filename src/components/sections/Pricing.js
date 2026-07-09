"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans } from "@/data/content";

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section-pad bg-surface/40">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your pipeline"
          description="Every plan includes unlimited team members, native connectors, and a 14-day trial."
        />

        <div className="flex items-center gap-4 rounded-full border border-edge/10 bg-surface p-1.5">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !yearly ? "bg-signal text-white" : "text-ink-soft"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              yearly ? "bg-signal text-white" : "text-ink-soft"
            }`}
          >
            Yearly
            <span className="rounded-full bg-pulse-teal/20 px-2 py-0.5 text-[11px] font-semibold text-pulse-teal">
              Save 20%
            </span>
          </button>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.popular
                  ? "border-signal/60 bg-signal/[0.05] shadow-xl shadow-signal/10 md:-translate-y-3"
                  : "border-edge/10 bg-surface"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-signal px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles size={12} /> Most popular
                </span>
              )}

              <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm text-ink-soft">/ month</span>
              </div>
              {yearly && (
                <span className="mt-1 text-xs text-ink-soft">
                  billed annually
                </span>
              )}

              <button
                className={`mt-6 w-full ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Get started
              </button>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={15} className="shrink-0 text-signal-light" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
