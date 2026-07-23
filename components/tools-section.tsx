"use client"

import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { tools } from "@/lib/site"
import { Cog, ShieldCheck } from "lucide-react"

const iconMap = {
  engine: Cog,
  shield: ShieldCheck,
}

export function ToolsSection() {
  return (
    <section id="tools" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Building</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">Tools in the works</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Products I&apos;m designing and building right now — where engineering meets thoughtful UX.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.icon as keyof typeof iconMap]
            return (
              <Reveal key={tool.name} delay={i * 100}>
                <TiltCard className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
                    style={{ background: "var(--accent)" }}
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary text-accent">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {tool.status}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl">{tool.name}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {tool.category}
                  </p>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{tool.summary}</p>
                  <ul className="mt-6 space-y-2">
                    {tool.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3 text-sm text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
