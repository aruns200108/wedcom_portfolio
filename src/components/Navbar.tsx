"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      <div className="relative flex h-28 items-center justify-between px-6 lg:px-16">

        {/* Left Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {["HOME", "STORIES", "PORTFOLIO"].map((item) => (
            <button
              key={item}
              className="text-sm tracking-[0.35em] text-white/90 transition duration-300 hover:text-white"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* CENTER BRAND */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

          {/* Main Brand */}
          <h1 className="text-center font-serif text-4xl font-semibold tracking-[0.35em] text-white sm:text-5xl md:text-6xl lg:text-7xl">

            WEDCOM

          </h1>

          {/* Subtitle */}
          <p className="mt-2 text-[10px] uppercase tracking-[0.8em] text-white/70 md:text-xs">
            PHOTOGRAPHY
          </p>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6">

          <button className="hidden text-sm tracking-[0.35em] text-white/90 transition hover:text-white lg:block">
            CONTACT
          </button>

          <button className="border border-white/40 bg-white/10 px-6 py-3 text-xs tracking-[0.35em] text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black">
            BOOK
          </button>
        </div>
      </div>
    </header>
  );
}