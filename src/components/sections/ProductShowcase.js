"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/data/content";

export default function ProductShowcase() {
  const [active, setActive] = useState(products[0].id);
  const activeProduct = products.find((p) => p.id === active);

  return (
    <section id="product" className="section-pad">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Product"
          title="Three tools. One live pipeline."
          description="Switch between Flows, Signal, and Relay to see how each piece keeps your operations moving without a hand-off."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`group rounded-2xl border p-6 text-left transition-all duration-300 ${
                active === p.id
                  ? "border-signal/50 bg-signal/[0.06]"
                  : "border-edge/10 bg-surface hover:border-edge/25"
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-signal-light">
                {p.tag}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{p.description}</p>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-edge/10 bg-surface p-6 md:grid-cols-2 md:p-10"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal-light">
                {activeProduct.tag}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                {activeProduct.title}
              </h3>
              <p className="mt-4 text-ink-soft">{activeProduct.description}</p>
              <ul className="mt-6 space-y-3">
                {activeProduct.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-signal/15 text-signal-light">
                      <Check size={12} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <button className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-light hover:text-signal">
                Explore {activeProduct.title} <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={activeProduct.image}
                alt={`${activeProduct.title} product preview`}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
