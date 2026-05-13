"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
];

export default function ParallaxGallery() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-36">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      {/* TEXTURE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >

          <p className="text-sm uppercase tracking-[0.5em] text-white/60">
            Featured Moments
          </p>

          <h2 className="mt-6 font-serif text-5xl font-light leading-tight tracking-[-0.03em] text-white md:text-7xl">
            Cinematic Frames
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Timeless storytelling through emotional visuals,
            editorial artistry, and luxury wedding experiences.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid gap-10 md:grid-cols-3">

          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
              }}
              className={`group relative overflow-hidden rounded-[35px] ${
                index === 1 ? "md:translate-y-24" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[35px]">

                <img
                  src={img}
                  alt=""
                  className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

              {/* CONTENT */}
              <div className="absolute bottom-10 left-10 z-10">

                <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/70">
                  Wedding Story
                </p>

                <h3 className="font-serif text-3xl font-light text-white">
                  Elegant Moments
                </h3>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-[35px] border border-white/10" />

              <div className="absolute bottom-[-20%] left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="mt-35 flex justify-center"
        >

          <Link href="/gallery">

            <button className="group relative overflow-hidden border border-white/20 bg-white/5 px-12 py-5 text-sm uppercase tracking-[0.4em] text-white backdrop-blur-xl transition duration-500 hover:border-white hover:bg-white hover:text-black">

              <span className="relative z-10">
                View Full Gallery
              </span>

              {/* Hover Animation */}
              <div className="absolute inset-0 translate-y-full bg-white transition duration-500 group-hover:translate-y-0" />

            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}