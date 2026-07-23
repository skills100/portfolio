"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-accent/10 blur-2xl" />
    </div>
  ),
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* 3D scene as an immersive backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute right-[-10%] top-1/2 h-[80vh] w-[80vh] max-w-[900px] -translate-y-1/2 md:right-[-4%]">
          <HeroScene />
        </div>
      </div>

      {/* Soft vignette so text stays legible */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-10 grain opacity-60" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for freelance — Product &amp; UI/UX
          </div>

          <h1 className="font-serif text-5xl font-light leading-[1.02] tracking-tight text-balance sm:text-7xl">
            I design products,
            <br />
            interfaces &amp;{" "}
            <span className="text-gradient-gold italic">trust</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I&apos;m{" "}
            <span className="text-foreground">Lukman Agbolade Alao</span> — a
            product designer who turns fuzzy problems into interfaces people
            trust on the first try. I work across web and mobile, and build a
            few tools of my own on the side.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              See my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent/60"
            >
              Book a consultation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span>UI systems</span>
            <span className="text-border">/</span>
            <span>Mobile experiences</span>
            <span className="text-border">/</span>
            <span>Design strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
