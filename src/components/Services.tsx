"use client";

import { motion } from "framer-motion";

const services = [
  "Wedding Photography",
  "Pre Wedding Shoots",
  "Destination Weddings",
  "Engagement Sessions",
  "Birthday Parties",
  "Family Portraits",
  "Event Coverage",
  "Photo Albums",
  "Custom Packages",
  "Bridal Portraits",
  "Couples Photography",
  "Corporate Events",
  "Candid Moments",
  "Model Shoots",
  "Baby Shoots",
];

const container: any = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: any = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-black py-36 text-white">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      {/* Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="mb-24 text-center"
        >

          <p className="text-sm uppercase tracking-[0.5em] text-white/50">
            Luxury Services
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight tracking-[-0.03em] md:text-7xl">
            Crafted Experiences
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Every story deserves cinematic elegance, timeless emotion,
            and beautifully curated visual artistry.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

              {/* Number */}
              <div className="absolute right-8 top-8 text-5xl font-light text-white/10">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              {/* Line */}
              <div className="mb-8 h-[1px] w-16 bg-white/20 transition-all duration-500 group-hover:w-28 group-hover:bg-white" />

              {/* Service */}
              <h3 className="relative z-10 text-3xl font-light leading-snug tracking-[-0.02em] transition duration-500 group-hover:text-white">
                {service}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-6 text-base leading-8 text-gray-400 transition duration-500 group-hover:text-gray-200">
                Luxury cinematic storytelling with timeless emotion,
                editorial artistry, and immersive photography experiences.
              </p>

              {/* Button */}
              <button className="relative z-10 mt-10 text-sm uppercase tracking-[0.4em] text-white/70 transition duration-500 group-hover:text-white">
                Explore
              </button>

              {/* Bottom Glow */}
              <div className="absolute bottom-[-40%] left-1/2 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}