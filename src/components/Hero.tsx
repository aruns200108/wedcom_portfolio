"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

import img1 from "../assets/image/img1.jpeg";
import img2 from "../assets/image/img2.jpeg";
import img3 from "../assets/image/img3.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

  const heroRef = useRef<HTMLDivElement>(null);

  const leftImageRef = useRef<HTMLDivElement>(null);

  const rightImageRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const dividerRef = useRef<HTMLDivElement>(null);

  const secondSectionRef = useRef<HTMLDivElement>(null);

  const secondImageRef = useRef<HTMLImageElement>(null);

  const secondContentRef = useRef<HTMLDivElement>(null);

  const smokeLeftRef = useRef<HTMLDivElement>(null);

  const smokeRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      // HERO LEFT IMAGE
      gsap.to(leftImageRef.current, {
        x: -220,
        y: 160,
        rotate: -10,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // HERO RIGHT IMAGE
      gsap.to(rightImageRef.current, {
        x: 220,
        y: -160,
        rotate: 10,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // HERO CONTENT
      gsap.to(contentRef.current, {
        y: -120,
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // DIVIDER ANIMATION
      gsap.fromTo(
        dividerRef.current,
        {
          opacity: 0,
          scale: 0.7,
          y: 100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: dividerRef.current,
            start: "top 80%",
          },
        }
      );

      // SECOND IMAGE PARALLAX
      gsap.to(secondImageRef.current, {
        scale: 1.2,
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // SECOND CONTENT
      gsap.fromTo(
        secondContentRef.current,
        {
          opacity: 0,
          y: 150,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: secondSectionRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1.5,
          },
        }
      );

      // SMOKE LEFT
      gsap.to(smokeLeftRef.current, {
        x: 150,
        y: 100,
        scale: 1.4,
        rotate: 15,
        ease: "none",
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // SMOKE RIGHT
      gsap.to(smokeRightRef.current, {
        x: -150,
        y: -100,
        scale: 1.5,
        rotate: -15,
        ease: "none",
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      // TITLE LETTER SPACING
      gsap.to(".emotion-title", {
        letterSpacing: "0.1em",
        ease: "none",
        scrollTrigger: {
          trigger: secondSectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] overflow-hidden bg-[#efe4d7] "
      >

        {/* BG */}
        <div
          className="absolute inset-[-5%] scale-110 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-[#d8c7b5]/45 mix-blend-multiply" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee6]/20 via-[#d9c8b6]/30 to-[#c6b29d]/70" />

        <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        {/* SMOKE */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[0%] h-[700px] w-[700px] rounded-full bg-[#f3e7dc]/50 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[#d6c2af]/40 blur-3xl"
        />

        {/* HERO CONTENT */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          {/* LEFT IMAGE */}
          <div
            ref={leftImageRef}
            className="absolute left-[5%] top-[18%] hidden overflow-hidden rounded-[40px] shadow-2xl lg:block"
          >
            <img
              src={img1.src}
              alt=""
              className="h-[520px] w-[380px] object-cover"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={rightImageRef}
            className="absolute right-[5%] bottom-[10%] hidden overflow-hidden rounded-[40px] shadow-2xl lg:block"
          >
            <img
              src={img2.src}
              alt=""
              className="h-[520px] w-[380px] object-cover"
            />
          </div>

          {/* CENTER */}
          <div
            ref={contentRef}
            className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
          >

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6 text-sm uppercase tracking-[0.7em] text-[#8b735f]"
            >
              Luxury Wedding Photography
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="max-w-6xl font-serif text-6xl font-light leading-none tracking-[-0.05em] text-[#2f241d] sm:text-7xl md:text-8xl lg:text-[150px]"
            >
              Timeless
              <br />
              Elegance
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-10 max-w-2xl text-lg leading-9 text-[#4b3d32]"
            >
              Capturing emotional moments through cinematic storytelling,
              refined artistry, and luxurious editorial imagery.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
            >

              <Link href="/gallery">

                <button className="rounded-full bg-[#2f241d] px-10 py-5 text-sm tracking-[0.3em] text-white transition hover:scale-105 hover:opacity-90">
                  VIEW STORIES
                </button>

              </Link>

              <Link href="/booking">

                <button className="rounded-full border border-[#2f241d] px-10 py-5 text-sm tracking-[0.3em] text-[#2f241d] transition hover:bg-[#2f241d] hover:text-white">
                  BOOK SESSION
                </button>

              </Link>

            </motion.div>
          </div>
        </div>
      </section>

      {/* DIVIDER SECTION */}
      {/* <section
        ref={dividerRef}
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#1f1712]"
      >

        {/* GLOW *
        <div className="absolute h-[500px] w-[500px] rounded-full bg-[#c6ab92]/20 blur-3xl" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="relative z-10 text-center"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.8em] text-[#c6ab92]">
            Cinematic Moments
          </p>

          <h2 className="font-serif text-5xl font-light leading-tight text-white md:text-8xl">
            Crafted With
            <br />
            Emotion
          </h2>

        </motion.div>

      </section> */}

      {/* SECOND SECTION */}
      <section
        ref={secondSectionRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 "
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">

          <img
            ref={secondImageRef}
            src={img3.src}
            alt="Wedding Background"
            className="h-full w-full scale-110 object-cover object-center"
          />

        </div>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-[#c6ab92]/30 mix-blend-multiply" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />

        {/* SMOKE */}
        <div
          ref={smokeLeftRef}
          className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl"
        />

        <div
          ref={smokeRightRef}
          className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#f5e6d3]/10 blur-3xl"
        />

        {/* FLOATING LIGHT */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[20%] h-[140px] w-[140px] rounded-full bg-[#fff6ef]/20 blur-3xl"
        />

        {/* CONTENT */}
        <motion.div
          ref={secondContentRef}
          className="relative z-10 max-w-5xl text-center"
        >

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mb-6 text-sm uppercase tracking-[0.6em] text-white/70"
          >
            Editorial Storytelling
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
            }}
            viewport={{
              once: true,
            }}
            className="emotion-title font-serif text-5xl font-light leading-tight text-white md:text-8xl"
          >
            Every Frame
            <br />
            Feels Emotional
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/80"
          >
            We create cinematic wedding stories with timeless elegance,
            immersive emotion, and luxury visual artistry.
          </motion.p>

        </motion.div>
      </section>

    </>
  );
}