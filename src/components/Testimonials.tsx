"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav & Meera",
    text: "Every frame felt magical. The emotions and storytelling were absolutely cinematic.",
  },
  {
    name: "Rahul & Sneha",
    text: "Luxury experience from start to finish. The memories feel timeless and emotional.",
  },
  {
    name: "Daniel & Sophia",
    text: "Elegant visuals, beautiful colors, and unforgettable moments captured perfectly.",
  },
];

export default function TestimonialsPage() {

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-[#f6eee6] via-[#e8dccf] to-[#d6c2af]">

      {/* TOP GLOW */}
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/40 blur-3xl" />

      <div className="absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#f3e7dc]/50 blur-3xl" />

      {/* HERO */}
      <section className="relative flex min-h-[30vh] items-center justify-center px-6 py-24">

        <div className="max-w-5xl text-center">

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="mb-6 text-sm uppercase tracking-[0.7em] text-[#8b735f]"
          >
            Client Experiences
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="font-serif text-5xl font-light leading-none tracking-[-0.05em] text-[#2f241d] sm:text-6xl md:text-7xl lg:text-[110px]"
          >
            Love Notes
            <br />
            From Couples
          </motion.h1>

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
              delay: 0.2,
              duration: 1,
            }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#4b3d32]"
          >
            Every wedding story becomes a timeless cinematic memory
            filled with emotion, elegance, and artistry.
          </motion.p>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative px-6 pb-28">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="group relative overflow-hidden rounded-[35px] border border-white/20 bg-white/20 p-10 shadow-2xl backdrop-blur-2xl"
            >

              {/* CARD GLOW */}
              <div className="absolute left-[-20%] top-[-20%] h-[250px] w-[250px] rounded-full bg-white/20 blur-3xl transition duration-700 group-hover:scale-125" />

              <div className="relative z-10">

                {/* QUOTE */}
                <div className="mb-8 font-serif text-7xl leading-none text-[#c6ab92]">
                  “
                </div>

                {/* TEXT */}
                <p className="font-serif text-2xl leading-[1.7] text-[#2f241d]">
                  {item.text}
                </p>

                {/* FOOTER */}
                <div className="mt-10 border-t border-[#2f241d]/10 pt-6">

                  <h3 className="text-xl font-medium text-[#2f241d]">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.4em] text-[#8b735f]">
                    Wedding Client
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </section>

      {/* CTA */}
  

    </main>
  );
}