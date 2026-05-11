import About from "@/src/components/About";
import BookingCTA from "@/src/components/BookingCTA";
import CinematicHero from "@/src/components/CinematicHero";
import Footer from "@/src/components/Footer";
import Gallery from "@/src/components/Gallery";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import NextSection from "@/src/components/NextSection";
import ParallaxGallery from "@/src/components/ParallaxGallery";
import ParallaxSection from "@/src/components/ParallaxSection";
import Services from "@/src/components/Services";

export default function Home() {
  return (
     <main className="bg-White overflow-hidden">
      <Navbar />
      
<CinematicHero />
      <Hero />

      <About />

      <ParallaxSection />

      <ParallaxGallery />

      <Services />

      <BookingCTA />

      <Footer />
    </main>
  );
}