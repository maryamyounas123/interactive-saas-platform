import { Activity, Github, Linkedin, Twitter } from "lucide-react";
import Container from "@/components/ui/Container";
import { footerLinks, socials } from "@/data/content";

const socialIcon = {
  X: Twitter,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function Footer() {
  return (
    <footer className="border-t border-edge/10 bg-surface">
      <Container className="section-pad grid grid-cols-2 gap-10 md:grid-cols-6">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal/15 text-signal-light">
              <Activity size={18} />
            </span>
            Pulsecore
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            One control room for every automation, metric, and alert your
            team ships.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => {
              const Icon = socialIcon[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-edge/15 text-ink-soft transition-colors hover:border-signal/40 hover:text-signal-light"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 className="font-display text-sm font-semibold">{group}</h4>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-edge/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-soft md:flex-row">
          <p>© {new Date().getFullYear()} Pulsecore, Inc. All rights reserved.</p>
          <p className="font-mono">Built for the Teyzix Core Internship — FEWD-3</p>
        </Container>
      </div>
    </footer>
  );
}
