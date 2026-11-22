"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4efe6]/85 backdrop-blur dark:border-white/10 dark:bg-[#0c0c0f]/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff5a36] text-sm font-black text-[#16140f]">
            P
          </span>
          Pixelforge
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium opacity-70 transition hover:text-[#ff5a36] hover:opacity-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-full bg-[#16140f] px-5 py-2.5 text-sm font-semibold text-[#f4efe6] transition hover:bg-[#ff5a36] hover:text-[#16140f] dark:bg-[#f4efe6] dark:text-[#16140f] dark:hover:bg-[#ff5a36]"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-400 text-lg dark:border-slate-600"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-black/10 px-6 py-4 md:hidden dark:border-white/10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
