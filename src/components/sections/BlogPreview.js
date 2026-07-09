"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/content";

export default function BlogPreview() {
  return (
    <section id="blog" className="section-pad bg-surface/40">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="From the blog"
          title="Notes from the operations trenches"
          align="left"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-edge/10 bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-signal-light">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-soft">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-ink-soft">
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-signal-light group-hover:gap-1.5 transition-all">
                    Read <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
