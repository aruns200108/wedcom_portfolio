"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img3 from "../assets/image/img4.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 120,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">

      {/* <div
        ref={imageRef}
        className="absolute inset-0 scale-110 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2070')",
        }}
      /> */}

      <div
          ref={imageRef}
        className="absolute inset-0 scale-110 bg-cover bg-center"
        >
          <img
            src={img3.src}
            alt=""
            className="h-[100%] w-[100%] object-cover opacity-80"
          />
        </div>

      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-[black]/60">
            Cinematic Stories
          </p>

          <h2 className="text-6xl leading-tight text-[#1c1917] md:text-8xl">
            Love In Motion
          </h2>
        </div>
      </div>
    </section>
  );
}