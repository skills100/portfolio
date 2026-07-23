"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { platforms } from "@/lib/site"

export function PlatformsSection() {
  return (
    <section id="platforms" className="relative border-t border-border py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Tools &amp; Platforms</p>
            <h2 className="mt-4 text-balance font-serif text-3xl leading-tight md:text-4xl">
              Designing and shipping with industry-standard tools
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-6 transition-colors hover:border-accent/50"
              >
                <span className="relative h-7 w-7 shrink-0 opacity-70 transition-opacity group-hover:opacity-100">
                  <Image
                    src={platform.logo || "/placeholder.svg"}
                    alt={`${platform.name} logo`}
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="text-sm font-medium text-foreground/90">{platform.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
