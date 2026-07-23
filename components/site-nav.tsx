"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#tools", label: "Tools" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/80 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-1">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border bg-card">
            <Image
              src="/brand/logo.png"
              alt="Lukman Alao logo"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Lukman Alao
          </span>
        </a>

        <nav className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-4"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="ml-1 hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03] sm:block"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
