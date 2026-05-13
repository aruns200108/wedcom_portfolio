"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Hero Scale Animation
      gsap.to(imageRef.current, {
        scale: 1.2,
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text Animation
      gsap.to(textRef.current, {
        y: -200,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[100vh] bg-[#f8f7f5]"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background Image */}
        <div
          ref={imageRef}
          className="absolute inset-0 scale-100 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Luxury Blur */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#f5f5f5]/10 blur-3xl" />

        {/* Content */}
        <div
          ref={textRef}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-white/80">
            Editorial Wedding Photography
          </p>

          <h1 className="max-w-6xl text-6xl leading-none tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[160px]">
            Timeless
            <br />
            Romance
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-200">
            Luxury cinematic storytelling inspired by emotion,
            elegance, and modern editorial artistry.
          </p>
          <Link href="/gallery">
            <button className="mt-12 border border-white px-10 py-5 text-sm tracking-[0.3em] transition hover:bg-white hover:text-black">
              EXPLORE STORIES
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}