export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">

      <div className="mx-auto max-w-3xl">

        <h1 className="mb-10 text-center text-5xl font-bold">
          Book Your Session
        </h1>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-white/20 bg-transparent p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-white/20 bg-transparent p-4"
          />

          <input
            type="date"
            className="w-full border border-white/20 bg-transparent p-4"
          />

          <textarea
            placeholder="Tell us about your event..."
            rows={6}
            className="w-full border border-white/20 bg-transparent p-4"
          />

          <button className="w-full border border-white py-4 tracking-[0.3em] hover:bg-white hover:text-black transition">
            SEND BOOKING REQUEST
          </button>
        </form>
      </div>
    </main>
  );
}