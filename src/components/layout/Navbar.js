"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/layout/ThemeToggle";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { nav } from "@/data/content";

const NAV_KEY_BY_HREF = {
  "#product": "product",
  "#demo": "demo",
  "#pricing": "pricing",
  "#compare": "compare",
  "#testimonials": "customers",
  "#faq": "faq",
  "#blog": "blog",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const label = (item) => t.nav?.[NAV_KEY_BY_HREF[item.href]] || item.label;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-edge/10 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#top");
          }}
          className="flex items-center gap-2 font-display text-lg font-semibold"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal/15 text-signal-light">
            <Activity size={18} />
          </span>
          Pulsecore
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {label(item)}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#contact");
            }}
            className="text-sm font-medium text-ink-soft hover:text-ink"
          >
            {t.nav?.login || "Log in"}
          </a>
          <button
            onClick={() => handleClick("#pricing")}
            className="btn-primary !py-2.5 !px-5 text-sm"
          >
            {t.nav?.cta || "Start free trial"}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-edge/15"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-edge/10 bg-bg md:hidden"
          >
            <Container className="flex flex-col gap-3 py-4">
              <div className="flex flex-col gap-1">
                {nav.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleClick(item.href)}
                    className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-soft hover:bg-surface2 hover:text-ink"
                  >
                    {label(item)}
                  </button>
                ))}
              </div>
              <LanguageSwitcher />
              <button
                onClick={() => handleClick("#pricing")}
                className="btn-primary mt-1 w-full text-sm"
              >
                {t.nav?.cta || "Start free trial"}
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
