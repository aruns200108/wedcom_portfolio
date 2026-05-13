

"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // LEFT IMAGE PARALLAX
      gsap.to(leftImageRef.current, {
        x: -180,
        y: 120,
        rotate: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // RIGHT IMAGE PARALLAX
      gsap.to(rightImageRef.current, {
        x: 180,
        y: -120,
        rotate: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // CONTENT PARALLAX
      gsap.to(contentRef.current, {
        y: -80,
        opacity: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[160vh] overflow-hidden bg-[#efe4d7]"
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-[-5%] scale-105 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* SANDAL OVERLAY */}
      <div className="absolute inset-0 bg-[#d8c7b5]/45 mix-blend-multiply" />

      {/* CINEMATIC GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee6]/20 via-[#d9c8b6]/30 to-[#c6b29d]/70" />

      {/* GRAIN TEXTURE */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* SMOKE BLUR */}
      <div className="absolute left-[-10%] top-[0%] h-[700px] w-[700px] rounded-full bg-[#f3e7dc]/50 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[#d6c2af]/40 blur-3xl" />

      {/* STICKY HERO */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* LEFT IMAGE */}
        <div
          ref={leftImageRef}
          className="absolute left-[5%] top-[18%] hidden overflow-hidden rounded-[40px] shadow-2xl lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200"
            alt=""
            className="h-[500px] w-[360px] object-cover"
          />
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={rightImageRef}
          className="absolute right-[5%] bottom-[10%] hidden overflow-hidden rounded-[40px] shadow-2xl lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200"
            alt=""
            className="h-[500px] w-[360px] object-cover"
          />
        </div>

        {/* CENTER CONTENT */}
        <div
          ref={contentRef}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
        >

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-sm uppercase tracking-[0.6em] text-[#8b735f]"
          >
            Luxury Wedding Photography
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-6xl font-serif text-6xl font-light leading-none tracking-[-0.04em] text-[#2f241d] sm:text-7xl md:text-8xl lg:text-[140px]"
          >
            Timeless
            <br />
            Elegance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-10 max-w-2xl text-lg leading-9 text-[#4b3d32]"
          >
            Capturing emotional moments through cinematic storytelling,
            refined artistry, and luxurious editorial imagery.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-col gap-5 sm:flex-row"
          >
            
             <Link href="/gallery">

  <button className="bg-[#2f241d] px-10 py-5 text-sm tracking-[0.3em] text-white transition hover:opacity-90">
    VIEW STORIES
  </button>

</Link>
            

            <button className="border border-[#2f241d] px-10 py-5 text-sm tracking-[0.3em] text-[#2f241d] transition hover:bg-[#2f241d] hover:text-white">
              BOOK SESSION
            </button>
          </motion.div>
        </div>
      </div>

      {/* NEXT SECTION */}
      <section className="relative flex min-h-screen items-center justify-center bg-[#e8dccf] px-6">

        <div className="max-w-5xl text-center">

          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-[#8b735f]">
            Editorial Storytelling
          </p>

          <h2 className="font-serif text-5xl font-light leading-tight text-[#2f241d] md:text-8xl">
            Every Frame
            <br />
            Feels Emotional
          </h2>

          <p className="mt-10 text-lg leading-9 text-[#4b3d32]">
            We create cinematic wedding stories with timeless elegance,
            immersive emotion, and luxury visual artistry.
          </p>
        </div>
      </section>
    </section>
  );
}