"use client";

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
];

export default function ParallaxGallery() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.5em] text-white/60">
            Featured Moments
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Cinematic Frames
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden ${
                index === 1 ? "md:translate-y-24" : ""
              }`}
            >
              <img
                src={img}
                alt=""
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}