import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import BookingPanel from "@/components/BookingPanel";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-all duration-500 ${bookingOpen ? "scale-[0.98] opacity-50 blur-sm pointer-events-none" : ""}`}
      style={{ transformOrigin: "center" }}
    >
      <NavBar onBookNow={() => setBookingOpen(true)} />
      <HeroSection onBookNow={() => setBookingOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

// Wrapper to keep booking panel outside the blur
const IndexWrapper = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <div className={`min-h-screen transition-all duration-500 ${bookingOpen ? "scale-[0.98] blur-[2px]" : ""}`}>
        <NavBar onBookNow={() => setBookingOpen(true)} />
        <HeroSection onBookNow={() => setBookingOpen(true)} />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
        <FooterSection />
      </div>
      <BookingPanel isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default IndexWrapper;
