"use client";

import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200",
  "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21f?q=80&w=1200",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200",
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=1200",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200",
  "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200",
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200",
  "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1200",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200",
  "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=1200",
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
                  src={photo}
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