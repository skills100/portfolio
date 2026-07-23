"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { TiltCard } from "@/components/tilt-card"
import { projects } from "@/lib/site"
import { ArrowUpRight } from "lucide-react"

export function WorkSection() {
  return (
    <section id="work" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Selected Work</p>
              <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">
                Products shipped for founders and teams
              </h2>
            </div>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              Live products where I owned the end-to-end experience — from research and flows to polished, shippable UI.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <TiltCard className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.name} — ${project.summary}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-60" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl">{project.name}</h3>
                        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">{project.type}</p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
