"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Play, RotateCcw } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  { id: "trigger", label: "Trigger received", detail: "New row added in Sheet: \"Leads\"" },
  { id: "flow", label: "Flow evaluates conditions", detail: "Lead score > 70 -> route to Sales" },
  { id: "signal", label: "Signal logs the event", detail: "Dashboard metric \"Qualified leads\" +1" },
  { id: "relay", label: "Relay notifies the team", detail: "Slack message sent to #sales-alerts" },
];

const STATUS = { idle: "idle", running: "running", done: "done" };

export default function InteractiveDemo() {
  const [status, setStatus] = useState(STATUS.idle);
  const [activeStep, setActiveStep] = useState(-1);

  const run = () => {
    if (status === STATUS.running) return;
    setStatus(STATUS.running);
    setActiveStep(-1);

    STEPS.forEach((_, i) => {
      setTimeout(() => {
        setActiveStep(i);
        if (i === STEPS.length - 1) {
          setTimeout(() => setStatus(STATUS.done), 700);
        }
      }, i * 850);
    });
  };

  const reset = () => {
    setStatus(STATUS.idle);
    setActiveStep(-1);
  };

  return (
    <section id="demo" className="section-pad">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="See it in action"
          title="Press run. Watch a real automation fire."
          description="This is a simplified simulation of a Pulsecore flow -- trigger, condition, log, and alert -- running end to end."
        />

        <div className="w-full max-w-2xl">
          <div className="card-surface rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-signal-light">
                Flow: New qualified lead
              </span>
              <div className="flex gap-2">
                <button
                  onClick={run}
                  disabled={status === STATUS.running}
                  className="btn-primary !py-2 !px-4 text-xs disabled:opacity-60"
                >
                  {status === STATUS.running ? (
                    <>
                      <Loader2 size={13} className="animate-spin" /> Running
                    </>
                  ) : (
                    <>
                      <Play size={13} /> Run flow
                    </>
                  )}
                </button>
                <button
                  onClick={reset}
                  aria-label="Reset demo"
                  className="btn-secondary !py-2 !px-3 text-xs"
                >
                  <RotateCcw size={13} />
                </button>
              </div>
            </div>

            <ol className="mt-8 space-y-4">
              {STEPS.map((step, i) => {
                const isActive = activeStep === i;
                const isPast = activeStep > i || status === STATUS.done;
                const showDetail = isActive || isPast;
                return (
                  <li
                    key={step.id}
                    className={`flex items-start gap-4 rounded-2xl border p-4 transition-colors duration-300 ${
                      isActive
                        ? "border-signal/50 bg-signal/[0.06]"
                        : isPast
                        ? "border-pulse-teal/30 bg-pulse-teal/[0.04]"
                        : "border-edge/10"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                        isPast
                          ? "bg-pulse-teal/20 text-pulse-teal"
                          : isActive
                          ? "bg-signal/20 text-signal-light"
                          : "bg-surface2 text-ink-soft"
                      }`}
                    >
                      {isPast ? <CheckCircle2 size={14} /> : i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{step.label}</p>
                      {showDetail && (
                        <p className="mt-1 font-mono text-xs text-ink-soft">
                          {step.detail}
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            {status === STATUS.done && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-2 rounded-xl bg-pulse-teal/10 p-3 text-sm text-pulse-teal"
              >
                <CheckCircle2 size={16} /> Flow completed in 3.2s -- no manual steps needed.
              </motion.p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
