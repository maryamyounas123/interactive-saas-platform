"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Minus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { comparison } from "@/data/content";

function Cell({ value }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={16} className="mx-auto text-pulse-teal" />
    ) : (
      <Minus size={16} className="mx-auto text-ink-soft/40" />
    );
  }
  return <span className="font-mono text-sm">{value}</span>;
}

export default function FeatureComparison() {
  const [openGroups, setOpenGroups] = useState(
    Object.fromEntries(comparison.groups.map((g) => [g.name, true]))
  );

  const toggle = (name) =>
    setOpenGroups((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <section id="compare" className="section-pad">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Compare"
          title="Every plan, side by side"
          description="Expand a category to see exactly what changes as you grow."
        />

        <div className="overflow-x-auto rounded-2xl border border-edge/10">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-edge/10 bg-surface/60">
                <th className="p-5 text-sm font-medium text-ink-soft">Feature</th>
                <th className="p-5 text-center text-sm font-semibold">Starter</th>
                <th className="p-5 text-center text-sm font-semibold text-signal-light">
                  Growth
                </th>
                <th className="p-5 text-center text-sm font-semibold">Scale</th>
              </tr>
            </thead>
            <tbody>
              {comparison.groups.map((group) => (
                <Fragment key={group.name}>
                  <tr
                    key={group.name}
                    onClick={() => toggle(group.name)}
                    className="cursor-pointer border-b border-edge/10 bg-surface/30"
                  >
                    <td colSpan={4} className="p-4">
                      <div className="flex items-center justify-between font-display text-sm font-semibold">
                        {group.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            openGroups[group.name] ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </td>
                  </tr>
                  <AnimatePresence initial={false}>
                    {openGroups[group.name] &&
                      group.rows.map((row) => (
                        <motion.tr
                          key={row.label}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-b border-edge/5"
                        >
                          <td className="p-4 text-sm text-ink-soft">{row.label}</td>
                          <td className="p-4 text-center">
                            <Cell value={row.starter} />
                          </td>
                          <td className="p-4 text-center bg-signal/[0.03]">
                            <Cell value={row.growth} />
                          </td>
                          <td className="p-4 text-center">
                            <Cell value={row.scale} />
                          </td>
                        </motion.tr>
                      ))}
                  </AnimatePresence>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
