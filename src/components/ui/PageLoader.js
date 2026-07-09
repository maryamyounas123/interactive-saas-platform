"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Bar({ className = "" }) {
  return (
    <div
      className={`animate-pulse-slow rounded-full bg-edge/10 ${className}`}
    />
  );
}

export default function PageLoader({ minDuration = 900 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), minDuration);
    return () => clearTimeout(timer);
  }, [minDuration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col bg-bg"
          aria-hidden="true"
        >
          {/* fake navbar */}
          <div className="flex h-16 items-center justify-between px-6 md:h-20 md:px-16">
            <Bar className="h-6 w-28" />
            <div className="hidden gap-8 md:flex">
              <Bar className="h-4 w-14" />
              <Bar className="h-4 w-14" />
              <Bar className="h-4 w-14" />
              <Bar className="h-4 w-14" />
            </div>
            <Bar className="h-9 w-24 !rounded-full" />
          </div>

          {/* fake hero */}
          <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-6 py-10 md:grid-cols-2 md:px-16">
            <div className="flex flex-col gap-4">
              <Bar className="h-4 w-40" />
              <Bar className="h-10 w-full max-w-md" />
              <Bar className="h-10 w-2/3 max-w-sm" />
              <Bar className="mt-2 h-4 w-full max-w-md" />
              <Bar className="h-4 w-5/6 max-w-md" />
              <div className="mt-4 flex gap-4">
                <Bar className="h-11 w-36 !rounded-full" />
                <Bar className="h-11 w-36 !rounded-full" />
              </div>
            </div>
            <Bar className="aspect-[4/3] w-full !rounded-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
