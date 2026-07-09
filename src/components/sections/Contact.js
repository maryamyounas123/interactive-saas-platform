"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, XCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const initialForm = { name: "", email: "", company: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // Simulated request — wire this up to your API route or form backend.
      await new Promise((resolve, reject) =>
        setTimeout(() => (Math.random() > 0.08 ? resolve() : reject()), 1200)
      );
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading
            eyebrow="Contact"
            title="Let's wire up your pipeline"
            description="Tell us about your stack and we'll show you what a Pulsecore control room looks like for your team."
            align="left"
          />

          <div className="mt-10 flex flex-col gap-5 text-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-signal-light">
                <Mail size={15} />
              </span>
              hello@pulsecore.io
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-signal-light">
                <Phone size={15} />
              </span>
              +1 (555) 012-4488
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal/15 text-signal-light">
                <MapPin size={15} />
              </span>
              548 Market Street, San Francisco, CA
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="card-surface flex flex-col gap-5 rounded-3xl p-8 lg:col-span-3"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`mt-2 w-full rounded-xl border bg-bg/40 px-4 py-3 text-sm outline-none focus:border-signal/50 ${
                  errors.name ? "border-red-500/60" : "border-edge/15"
                }`}
                placeholder="Jordan Lee"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Work email
              </label>
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-xl border bg-bg/40 px-4 py-3 text-sm outline-none focus:border-signal/50 ${
                  errors.email ? "border-red-500/60" : "border-edge/15"
                }`}
                placeholder="jordan@company.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="company" className="text-sm font-medium">
              Company <span className="text-ink-soft">(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-edge/15 bg-bg/40 px-4 py-3 text-sm outline-none focus:border-signal/50"
              placeholder="Company, Inc."
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className={`mt-2 w-full rounded-xl border bg-bg/40 px-4 py-3 text-sm outline-none focus:border-signal/50 ${
                errors.message ? "border-red-500/60" : "border-edge/15"
              }`}
              placeholder="What are you hoping to automate?"
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary w-full disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-xl bg-pulse-teal/10 p-3 text-sm text-pulse-teal"
              >
                <CheckCircle2 size={16} /> Thanks — we&apos;ll be in touch within one business day.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-400"
              >
                <XCircle size={16} /> Something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Container>
    </section>
  );
}
