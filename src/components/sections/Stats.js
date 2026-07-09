"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/content";

export default function Stats() {
  return (
    <section className="section-pad">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-2 border-l border-edge/10 pl-5"
            >
              <AnimatedCounter
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals || 0}
              />
              <span className="text-sm text-ink-soft">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
