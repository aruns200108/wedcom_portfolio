"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function BookingPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    eventType: "Wedding",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  // SUBMIT
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {

        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          date: "",
          eventType: "Wedding",
          message: "",
        });
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#efe4d7] px-6 py-32">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#d8c7b5]/55 mix-blend-multiply" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6eee6]/20 via-[#d9c8b6]/30 to-[#c6b29d]/80" />

      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* SMOKE */}
      <div className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full bg-[#f3e7dc]/50 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-[#d6c2af]/40 blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >

          <p className="text-sm uppercase tracking-[0.6em] text-[#8b735f]">
            Luxury Booking
          </p>

          <h1 className="mt-8 font-serif text-5xl font-light leading-none tracking-[-0.04em] text-[#2f241d] md:text-7xl lg:text-[100px]">
            Book Your
            <br />
            Dream Session
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#4b3d32]">
            Let’s create timeless cinematic memories filled with emotion,
            elegance, and editorial artistry.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-2xl md:p-14"
        >

          <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-white/20 blur-3xl" />

          <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#d8c7b5]/30 blur-3xl" />

          <form
            onSubmit={handleSubmit}
            className="relative z-10 grid gap-8 md:grid-cols-2"
          >

            {/* NAME */}
            <div className="flex flex-col">

              <label className="mb-4 text-sm uppercase tracking-[0.3em] text-black">
                Your Name
              </label>

              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Enter your name"
                className="rounded-2xl border border-[#2f241d]/10 bg-white/30 p-5 text-[#2f241d] placeholder:text-[#7b6d62] outline-none backdrop-blur-xl transition focus:border-[#2f241d]/40"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">

              <label className="mb-4 text-sm uppercase tracking-[0.3em] text-black">
                Email Address
              </label>

              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                placeholder="Enter your email"
                className="rounded-2xl border border-[#2f241d]/10 bg-white/30 p-5 text-[#2f241d] placeholder:text-[#7b6d62] outline-none backdrop-blur-xl transition focus:border-[#2f241d]/40"
              />
            </div>

            {/* DATE */}
            <div className="flex flex-col">

              <label className="mb-4 text-sm uppercase tracking-[0.3em] text-black">
                Event Date
              </label>

              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  })
                }
                className="rounded-2xl border border-[#2f241d]/10 bg-white/30 p-5 text-[#2f241d] outline-none backdrop-blur-xl transition focus:border-[#2f241d]/40"
              />
            </div>

            {/* EVENT TYPE */}
            <div className="flex flex-col">

              <label className="mb-4 text-sm uppercase tracking-[0.3em] text-black">
                Event Type
              </label>

              <select
                value={formData.eventType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    eventType: e.target.value,
                  })
                }
                className="rounded-2xl border border-[#2f241d]/10 bg-white/30 p-5 text-[#2f241d] outline-none backdrop-blur-xl transition focus:border-[#2f241d]/40"
              >

                <option>Wedding</option>
                <option>Pre Wedding</option>
                <option>Engagement</option>
                <option>Birthday</option>
                <option>Destination Wedding</option>

              </select>
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2 flex flex-col">

              <label className="mb-4 text-sm uppercase tracking-[0.3em] text-black">
                Tell Us About Your Event
              </label>

              <textarea
                rows={7}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                placeholder="Share your vision, location, ideas, and special moments..."
                className="rounded-3xl border border-[#2f241d]/10 bg-white/30 p-6 text-[#2f241d] placeholder:text-[#7b6d62] outline-none backdrop-blur-xl transition focus:border-[#2f241d]/40"
              />
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2 flex flex-col items-center justify-center pt-6">

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: 1.04,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group relative overflow-hidden rounded-full bg-[#2f241d] px-14 py-6 text-sm tracking-[0.4em] text-white shadow-2xl disabled:opacity-60"
              >

                <span className="relative z-10">
                  {loading
                    ? "SENDING..."
                    : "SEND BOOKING REQUEST"}
                </span>

                <div className="absolute inset-0 translate-y-full bg-[#46362d] transition duration-500 group-hover:translate-y-0" />

              </motion.button>

              {/* SUCCESS */}
              {
                success && (
                  <p className="mt-6 text-center text-[#2f241d]">
                    Booking request sent successfully.
                  </p>
                )
              }

            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}