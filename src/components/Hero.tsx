

// "use client";

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#f5f5f4] text-[#1c1917]">

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 scale-105 bg-cover bg-center opacity-30"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
//         }}
//       />

//       {/* Smoke Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f5f5f4]/60 to-[#f5f5f4]" />

//       {/* Floating Blur */}
//       <div className="absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-white/40 blur-3xl" />

//       <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#e7e5e4]/50 blur-3xl" />

//       {/* Main Content */}
//       <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mb-6 text-sm uppercase tracking-[0.5em] text-[#78716c]"
//         >
//           Luxury Wedding Photography
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="max-w-6xl text-5xl font-semibold leading-tight sm:text-6xl md:text-8xl lg:text-[120px]"
//         >
//           Elegant
//           <br />
//           Moments
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="mt-8 max-w-2xl text-lg leading-9 text-[#57534e]"
//         >
//           Capturing timeless love stories with cinematic elegance,
//           emotional storytelling, and luxurious visual artistry.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="mt-10 flex flex-col gap-4 sm:flex-row"
//         >
//           <button className="bg-[#1c1917] px-8 py-4 text-sm tracking-[0.25em] text-white transition hover:opacity-90">
//             VIEW PORTFOLIO
//           </button>

//           <button className="border border-[#1c1917] px-8 py-4 text-sm tracking-[0.25em] transition hover:bg-[#1c1917] hover:text-white">
//             BOOK SESSION
//           </button>
//         </motion.div>

//         {/* Scroll */}
//         <motion.div
//           animate={{ y: [0, 12, 0] }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//           }}
//           className="absolute bottom-10 flex flex-col items-center text-[#78716c]"
//         >
//           <span className="text-xs tracking-[0.4em]">
//             SCROLL
//           </span>

//           <div className="mt-3 h-14 w-[1px] bg-[#a8a29e]" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Smoke Blur */}
      <div className="absolute left-0 top-10 h-[500px] w-[500px] rounded-full bg-white/60 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#d6d3d1]/50 blur-3xl" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#f8f7f5]/30 to-[#f8f7f5]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 lg:px-20">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-sm uppercase tracking-[0.5em] text-[#78716c]"
        >
          Editorial Wedding Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl text-6xl leading-none tracking-[-0.04em] text-[#1c1917] sm:text-7xl md:text-8xl lg:text-[140px]"
        >
          Timeless
          <br />
          Elegance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-10 max-w-2xl text-lg leading-9 text-[#57534e]"
        >
          Capturing emotional moments through cinematic storytelling,
          refined artistry, and luxurious editorial imagery.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <button className="bg-[#1c1917] px-10 py-5 text-sm tracking-[0.3em] text-white transition hover:opacity-90">
            VIEW STORIES
          </button>

          <button className="border border-[#1c1917] px-10 py-5 text-sm tracking-[0.3em] text-[#1c1917] transition hover:bg-[#1c1917] hover:text-white">
            BOOK SESSION
          </button>
        </motion.div>

        {/* Floating Editorial Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="absolute right-10 top-1/2 hidden -translate-y-1/2 overflow-hidden rounded-[40px] border border-white/30 bg-white/30 shadow-2xl backdrop-blur-xl lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200"
            alt=""
            className="h-[500px] w-[380px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}