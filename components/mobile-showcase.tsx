"use client"

import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { mobileScreens } from "@/lib/site"

export function MobileShowcase() {
  return (
    <section id="mobile" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Mobile Design</p>
            <h2 className="mt-4 text-balance font-serif text-4xl leading-tight md:text-5xl">
              Interfaces that feel effortless in the hand
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              High-fidelity mobile concepts — commerce, light and dark systems, and rich product browsing.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mobileScreens.map((screen, i) => (
            <Reveal key={screen.title} delay={i * 100}>
              <div className="group flex flex-col items-center">
                <div className="relative w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="overflow-hidden rounded-[1.6rem]">
                    <Image
                      src={screen.image || "/placeholder.svg"}
                      alt={screen.title}
                      width={560}
                      height={1200}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="font-serif text-xl">{screen.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{screen.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
