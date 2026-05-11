import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="relative bg-black py-40 text-center text-white">

      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 px-6">
        <p className="text-sm uppercase tracking-[0.5em] text-white/70">
          Book Your Story
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Let’s Create Something Beautiful Together
        </h2>

        <Link href="/booking">
          <button className="mt-10 border border-white px-10 py-5 text-sm tracking-[0.3em] hover:bg-white hover:text-black transition">
            BOOK NOW
          </button>
        </Link>
      </div>
    </section>
  );
}