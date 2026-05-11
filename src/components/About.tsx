"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black py-32 text-white">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-16">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/60">
            About Us
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Turning Moments Into Timeless Stories
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg leading-9 text-gray-300">
            We specialize in cinematic wedding photography,
            luxury storytelling, and emotional visual experiences.
            Every frame is crafted to preserve memories forever.
          </p>

          <button className="mt-10 border border-white px-8 py-4 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition">
            READ MORE
          </button>
        </motion.div>
      </div>
    </section>
  );
}