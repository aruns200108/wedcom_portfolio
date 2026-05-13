"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    //   Instagram,
    //   Facebook,
    Camera,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
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
            <div className="relative z-10 mx-auto max-w-7xl">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-24 text-center"
                >

                    <p className="text-sm uppercase tracking-[0.6em] text-black">
                        Contact Us
                    </p>

                    <h1 className="mt-8 font-serif text-5xl font-light leading-none tracking-[-0.04em] text-[#2f241d] md:text-7xl lg:text-[110px]">
                        Let’s Tell
                        <br />
                        Your Story
                    </h1>

                    <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#4b3d32]">
                        Connect with us for weddings, cinematic love stories,
                        editorial shoots, and unforgettable moments.
                    </p>
                </motion.div>

                {/* CONTACT GRID */}
                <div className="grid gap-10 lg:grid-cols-2">

                    {/* LEFT CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/20 p-10 shadow-2xl backdrop-blur-2xl md:p-14"
                    >

                        {/* GLOW */}
                        <div className="absolute left-[-10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-white/20 blur-3xl" />

                        <div className="relative z-10">

                            <h2 className="font-serif text-4xl font-light text-[#2f241d]">
                                Contact Information
                            </h2>

                            <div className="mt-14 space-y-10">

                                {/* EMAIL */}
                                <div className="flex items-start gap-5">

                                    <div className="rounded-2xl bg-[#2f241d] p-4 text-white">
                                        <Mail className="h-6 w-6" />
                                    </div>

                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-black">
                                            Email
                                        </p>

                                        <p className="mt-2 text-xl text-[#2f241d]">
                                            hello@wedcom.com
                                        </p>
                                    </div>
                                </div>

                                {/* PHONE */}
                                <div className="flex items-start gap-5">

                                    <div className="rounded-2xl bg-[#2f241d] p-4 text-white">
                                        <Phone className="h-6 w-6" />
                                    </div>

                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-black">
                                            Phone
                                        </p>

                                        <p className="mt-2 text-xl text-[#2f241d]">
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                {/* LOCATION */}
                                <div className="flex items-start gap-5">

                                    <div className="rounded-2xl bg-[#2f241d] p-4 text-white">
                                        <MapPin className="h-6 w-6" />
                                    </div>

                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-black">
                                            Studio
                                        </p>

                                        <p className="mt-2 text-xl text-[#2f241d]">
                                            Kochi, Kerala, India
                                        </p>
                                    </div>
                                </div>

                                {/* INSTAGRAM */}
                                <div className="flex items-start gap-5">

                                    {/* <div className="rounded-2xl bg-[#2f241d] p-4 text-white">
                    <Instagram className="h-6 w-6" />
                  </div> */}

                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-black">
                                            Instagram
                                        </p>se 
                                        05

                                        <p className="mt-2 text-xl text-[#2f241d]">
                                            wedcom_stories
                                        </p>
                                    </div>
                                </div>

                                {/* FACEBOOK */}
                                <div className="flex items-start gap-5">

                                    {/* <div className="rounded-2xl bg-[#2f241d] p-4 text-white">
                    <Facebook className="h-6 w-6" />
                  </div> */}

                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-black">
                                            Facebook
                                        </p>

                                        <p className="mt-2 text-xl text-[#2f241d]">
                                            Wedcom Photography
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/20 p-10 shadow-2xl backdrop-blur-2xl md:p-14"
                    >

                        {/* GLOW */}
                        <div className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-[#d8c7b5]/30 blur-3xl" />

                        <div className="relative z-10">

                            <div className="flex items-center gap-4">

                                <div className="rounded-2xl bg-[#2f241d] p-4 text-white">
                                    <Camera className="h-8 w-8" />
                                </div>

                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-black">
                                        Wedcom Studio
                                    </p>

                                    <h2 className="mt-2 font-serif text-4xl font-light text-[#2f241d]">
                                        Luxury Cinematic
                                        <br />
                                        Wedding Stories
                                    </h2>
                                </div>
                            </div>

                            <p className="mt-10 text-lg leading-9 text-[#4b3d32]">
                                We specialize in luxury wedding photography,
                                destination weddings, cinematic storytelling,
                                editorial portraits, and emotional visual artistry.
                            </p>

                            {/* STATS */}
                            <div className="mt-14 grid grid-cols-2 gap-6">

                                <div className="rounded-3xl border border-white/20 bg-white/20 p-8 backdrop-blur-xl">

                                    <h3 className="font-serif text-5xl text-[#2f241d]">
                                        250+
                                    </h3>

                                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-black">
                                        Weddings Shot
                                    </p>
                                </div>

                                <div className="rounded-3xl border border-white/20 bg-white/20 p-8 backdrop-blur-xl">

                                    <h3 className="font-serif text-5xl text-[#2f241d]">
                                        8+
                                    </h3>

                                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-black">
                                        Years Experience
                                    </p>
                                </div>

                            </div>

                            {/* BUTTON */}
                            <Link href="/booking">

                                <motion.button
                                    whileHover={{
                                        scale: 1.04,
                                        y: -4,
                                    }}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                    className="group relative mt-14 overflow-hidden rounded-full bg-[#2f241d] px-12 py-6 text-sm tracking-[0.4em] text-white shadow-2xl"
                                >

                                    <span className="relative z-10">
                                        CONTACT NOW
                                    </span>

                                    <div className="absolute inset-0 translate-y-full bg-[#46362d] transition duration-500 group-hover:translate-y-0" />

                                </motion.button>

                            </Link>

                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}