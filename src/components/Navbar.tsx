"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">

      <div className="relative flex h-24 items-center justify-between px-4 sm:px-6 lg:h-28 lg:px-16">

        {/* LEFT NAVIGATION */}
        <nav className="hidden items-center gap-10 lg:flex">

          <Link
            href="/"
            className="text-sm tracking-[0.35em] text-white/90 transition duration-300 hover:text-white"
          >
            HOME
          </Link>

          <Link
            href="/gallery"
            className="text-sm tracking-[0.35em] text-white/90 transition duration-300 hover:text-white"
          >
            STORIES
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button className="lg:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

        {/* CENTER BRAND */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

          <h1 className="text-center font-serif text-2xl font-semibold tracking-[0.25em] text-white sm:text-3xl md:text-4xl lg:text-7xl lg:tracking-[0.35em]">
            WEDCOM
          </h1>

          <p className="mt-1 text-[8px] uppercase tracking-[0.5em] text-white/70 sm:text-[9px] md:text-[10px] lg:mt-2 lg:text-xs lg:tracking-[0.8em]">
            PHOTOGRAPHY
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 lg:gap-6">

          <Link
            href="/contact"
            className="hidden text-sm tracking-[0.35em] text-white/90 transition hover:text-white lg:block"
          >
            CONTACT
          </Link>

          {/* BOOK BUTTON */}
          <Link
            href="/booking"
            className="hidden rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] tracking-[0.25em] text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black sm:block lg:px-6 lg:py-3 lg:text-xs lg:tracking-[0.35em]"
          >
            BOOK
          </Link>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <nav className="flex flex-col items-center gap-6 bg-black/80 py-8 backdrop-blur-md lg:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-[0.35em] text-white/90 transition duration-300 hover:text-white"
          >
            HOME
          </Link>
          <Link
            href="/gallery"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-[0.35em] text-white/90 transition duration-300 hover:text-white"
          >
            STORIES
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm tracking-[0.35em] text-white/90 transition duration-300 hover:text-white"
          >
            CONTACT
          </Link>
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs tracking-[0.35em] text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black"
          >
            BOOK
          </Link>
        </nav>
      )}
    </header>
  );
}