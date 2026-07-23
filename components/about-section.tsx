"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { stats } from "@/lib/site"

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.85fr_1fr] md:items-center">
        <Reveal>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl"
              style={{ background: "var(--accent)" }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/brand/portrait.jpg"
                alt="Lukman Alao, product designer"
                width={640}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">About</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">
              I design products people actually want to use
            </h2>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Lukman Alao — a product and UI/UX designer partnering with founders and startups to turn ideas
                into polished, shippable digital products. My work spans web platforms, mobile apps, and the tools I
                build myself.
              </p>
              <p>
                I care about the details that make an interface feel inevitable: clear hierarchy, purposeful motion, and
                systems that scale from the first screen to the hundredth.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl text-accent md:text-4xl">{stat.value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
