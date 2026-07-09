"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, X, Check } from "lucide-react";

const PRESETS = [
  { name: "Violet", signal: "108 92 231", light: "139 124 246", dark: "84 67 201" },
  { name: "Teal", signal: "13 148 136", light: "45 212 191", dark: "15 118 110" },
  { name: "Amber", signal: "217 119 6", light: "251 191 36", dark: "180 83 9" },
  { name: "Rose", signal: "225 29 72", light: "251 113 133", dark: "159 18 57" },
  { name: "Indigo", signal: "79 70 229", light: "129 140 248", dark: "55 48 163" },
];

const STORAGE_KEY = "pulsecore-accent";

function applyPreset(preset) {
  const root = document.documentElement;
  root.style.setProperty("--signal", preset.signal);
  root.style.setProperty("--signal-light", preset.light);
  root.style.setProperty("--signal-dark", preset.dark);
}

export default function ThemeCustomizer() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Violet");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const preset = PRESETS.find((p) => p.name === saved);
    if (preset) {
      applyPreset(preset);
      setActive(preset.name);
    }
  }, []);

  const choose = (preset) => {
    applyPreset(preset);
    setActive(preset.name);
    localStorage.setItem(STORAGE_KEY, preset.name);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="card-surface absolute bottom-14 left-0 w-56 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Accent color</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close theme customizer"
                className="text-ink-soft hover:text-ink"
              >
                <X size={14} />
              </button>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => choose(p)}
                  aria-label={`Use ${p.name} accent`}
                  className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-offset-2 ring-offset-surface transition-transform hover:scale-110"
                  style={{
                    backgroundColor: `rgb(${p.signal})`,
                    // eslint-disable-next-line
                    ["--tw-ring-color"]: active === p.name ? `rgb(${p.signal})` : "transparent",
                  }}
                >
                  {active === p.name && <Check size={14} className="text-white" />}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-ink-soft">
              Pick an accent — it updates buttons, links, and highlights instantly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open theme customizer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-signal text-white shadow-[0_8px_24px_-6px_rgba(108,92,231,0.6)] hover:bg-signal-light"
      >
        <Palette size={18} />
      </button>
    </div>
  );
}
