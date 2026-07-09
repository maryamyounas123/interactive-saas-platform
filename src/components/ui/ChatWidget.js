"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X } from "lucide-react";

const CANNED_RESPONSES = [
  {
    keywords: ["price", "pricing", "cost", "plan"],
    reply:
      "Pulsecore has three plans — Starter, Growth, and Scale. Growth is the most popular, and you can save 20% by paying yearly. Check the Pricing section for exact numbers!",
  },
  {
    keywords: ["trial", "free", "demo"],
    reply:
      "Every plan starts with a 14-day free trial, no credit card needed. You can invite your team and build real flows before deciding.",
  },
  {
    keywords: ["integration", "connect", "connector", "stack"],
    reply:
      "Pulsecore ships with 120+ native connectors — Slack, GitHub, Stripe, Postgres, and more — plus generic HTTP/webhook nodes for anything else.",
  },
  {
    keywords: ["security", "secure", "data", "sso"],
    reply:
      "All data is encrypted in transit and at rest. Scale plans include SSO, audit logs, and a signed BAA on request.",
  },
  {
    keywords: ["hello", "hi", "hey"],
    reply: "Hey! I'm the Pulsecore assistant. Ask me about pricing, features, or how automations work.",
  },
];

const FALLBACK =
  "I'm just a demo assistant for this page, so I only know a few topics — try asking about pricing, the free trial, integrations, or security.";

function getReply(message) {
  const lower = message.toLowerCase();
  const match = CANNED_RESPONSES.find((r) =>
    r.keywords.some((k) => lower.includes(k))
  );
  return match ? match.reply : FALLBACK;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm the Pulsecore assistant (demo). Ask me about pricing, trials, integrations, or security.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: getReply(text) }]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <div className="fixed bottom-6 right-24 z-50 md:right-24">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="card-surface absolute bottom-16 right-0 flex h-[26rem] w-[20rem] flex-col overflow-hidden rounded-2xl shadow-2xl sm:w-[22rem]"
          >
            <div className="flex items-center justify-between border-b border-edge/10 bg-surface2 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/15 text-signal-light">
                  <Bot size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Pulsecore Assistant</p>
                  <p className="flex items-center gap-1 text-[11px] text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-pulse-teal" />
                    Demo — frontend only
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-ink-soft hover:text-ink"
              >
                <X size={16} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${
                      m.from === "user"
                        ? "bg-signal text-white"
                        : "bg-surface2 text-ink"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl bg-surface2 px-3.5 py-3">
                    <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-ink-soft" />
                    <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-ink-soft [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-ink-soft [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={send} className="flex gap-2 border-t border-edge/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pricing, trials..."
                className="flex-1 rounded-full border border-edge/15 bg-bg/40 px-4 py-2 text-sm outline-none focus:border-signal/50"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal text-white hover:bg-signal-light"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="relative flex h-11 w-11 items-center justify-center rounded-full bg-surface2 text-ink shadow-lg ring-1 ring-edge/10 hover:ring-signal/40"
      >
        <Sparkles size={18} className="text-signal-light" />
        {!open && (
          <span className="absolute -top-1 -right-1 h-3 w-3 animate-pulse-slow rounded-full bg-pulse-teal" />
        )}
      </button>
    </div>
  );
}
