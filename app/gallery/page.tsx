"use client";

import { motion } from "framer-motion";
import img1 from "../../src/assets/image2/G1.jpeg";
import img2 from "../../src/assets/image2/G2.jpeg";
import img3 from "../../src/assets/image2/G3.jpeg";
import img4 from "../../src/assets/image2/G4.jpeg";
import img5 from "../../src/assets/image2/G5.jpeg";
import img6 from "../../src/assets/image2/G6.jpeg";
import img7 from "../../src/assets/image2/G7.jpeg";
import img8 from "../../src/assets/image2/G8.jpeg";
import img9 from "../../src/assets/image2/G9.jpeg";
import img10 from "../../src/assets/image2/G10.jpeg";
import img11 from "../../src/assets/image2/G11.jpeg";
import img12 from "../../src/assets/image2/G12.jpeg";
import img13 from "../../src/assets/image2/G13.jpeg";
import img14 from "../../src/assets/image2/G14.jpeg";
import img15 from "../../src/assets/image2/G15.jpeg";
const photos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15
];

export default function GalleryPage() {
  return (
    <main className="relative overflow-hidden bg-[#0b0b0b] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-[-10%] top-0 h-[600px] w-[600px] rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />

      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >

          <p className="mb-6 text-sm uppercase tracking-[0.6em] text-white/60">
            Wedding Gallery
          </p>

          <h1 className="font-serif text-6xl font-light leading-none tracking-[-0.04em] md:text-8xl lg:text-[120px]">
            Cinematic
            <br />
            Moments
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-400">
            A curated collection of timeless wedding stories,
            cinematic emotions, and luxury editorial photography.
          </p>
        </motion.div>
      </section>

      {/* GALLERY */}
      <section className="relative z-10 px-6 pb-32 lg:px-16">

        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3 xl:columns-4">

          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 120,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.04,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative mb-8 overflow-hidden rounded-[35px]"
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[35px]">

                <img
                  src={photo.src}
                  alt=""
                  className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                    index % 3 === 0
                      ? "h-[520px]"
                      : index % 2 === 0
                      ? "h-[680px]"
                      : "h-[420px]"
                  }`}
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

              {/* CONTENT */}
              <div className="absolute bottom-8 left-8 z-10">

                <p className="mb-2 text-xs uppercase tracking-[0.4em] text-white/60">
                  Editorial Story
                </p>

                <h3 className="font-serif text-3xl font-light text-white">
                  Timeless Love
                </h3>
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 rounded-[35px] border border-white/10" />

              {/* HOVER GLOW */}
              <div className="absolute bottom-[-30%] left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}