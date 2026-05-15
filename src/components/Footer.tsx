export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#1c1917] to-black py-12">

      {/* GLOW */}
      <div className="absolute left-[-10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-[#c6ab92]/10 blur-3xl" />

      <div className="absolute bottom-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">

        {/* LEFT */}
        <div>

          <h3 className="font-serif text-2xl tracking-[0.3em] text-white">
            WEDCOM
          </h3>

          <p className="mt-2 text-xs uppercase tracking-[0.5em] text-white/40">
            Photography
          </p>

        </div>

        {/* CENTER */}
        <div>

          <p className="text-sm text-white/50">
            © 2026 WEDCOM Photography. All Rights Reserved.
          </p>

        </div>

        {/* RIGHT */}
        <div className="text-right">

          <p className="text-xs uppercase tracking-[0.4em] text-white/90">
            Designed & Developed By
          </p>

          <h4 className="mt-2 text-lg tracking-[0.2em] text-[white]">
           AstroNova Technologies Pvt. Ltd.
          </h4>

        </div>

      </div>
    </footer>
  );
}