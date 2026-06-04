import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaDumbbell, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaParking, FaWifi, FaTv, FaTimes } from "react-icons/fa";
import { GiBoxingGlove, GiMuscleUp } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function FitnessClub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from(".club-hero-title", {
        y: 100, opacity: 0, duration: 1, ease: "power4.out", delay: 0.2,
      });
      gsap.from(".club-hero-subtitle", {
        y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.8,
      });

      // Gallery images fade in on scroll
      gsap.from(".club-img", {
        scrollTrigger: { trigger: ".gallery-section", start: "top 85%" },
        opacity: 0, y: 50, duration: 0.8, stagger: 0.2,
      });

      // Amenity cards fade in
      gsap.from(".amenity-card", {
        scrollTrigger: { trigger: ".amenities-section", start: "top 85%" },
        opacity: 0, y: 30, duration: 0.6, stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center pt-20" id="club-home">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
          <img
            src="/bannerweb.webp"
            alt="Okinawa Fitness Club"
            className="w-full h-full object-cover object-center opacity-100"
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] z-0" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[0.95] mb-6 uppercase tracking-tight">
              <span className="block overflow-hidden"><span className="club-hero-title inline-block">Okinawa Martial Art</span></span>
              <span className="block overflow-hidden"><span className="club-hero-title inline-block"><span className="text-primary">Classes</span></span></span>
            </h1>
            <p className="club-hero-subtitle text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light">
              State-of-the-art facilities, expert trainers, and a community dedicated to your fitness journey in Pune.
            </p>
            <a href="#amenities">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-heading text-xl uppercase tracking-wider rounded-none h-14 px-8">Explore Facilities</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section id="amenities" className="amenities-section py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-black uppercase mb-4">World-Class <span className="text-secondary">Amenities</span></h2>
          </div>
          
          {/* Simple Gallery */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {[
              "/okinas0y.jpeg",
              "/okinawa00000.jpeg",
              "/oky0.jpeg",
              "/oky/0.jpg",
              "/oky/00.jpg",
              "/oky/000.jpg",
              "/oky/0000.jpg",
              "/oky/1.jpg",
              "/oky/10.jpg",
              "/oky/2.jpg",
              "/oky/3.jpg",
              "/oky/4.jpg",
              "/oky/5.jpg",
              "/oky/7.jpg",
              "/oky/9.jpg",

              "/oky/oky00.jpeg",
            ].map((img, i) => (
              <div key={i} className="club-img overflow-hidden rounded-sm border border-white/10 h-48 group hover:border-primary/50 transition-colors cursor-pointer" onClick={() => setSelectedImage(img)}>
                <img src={img} alt={`Facility ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaDumbbell />, title: "Premium Equipment", desc: "Latest strength training machines" },
              { icon: <GiBoxingGlove />, title: "Boxing Ring", desc: "Professional sparring facility" },
              { icon: <FaClock />, title: "24/7 Access", desc: "Open round the clock for members" },
              { icon: <FaParking />, title: "Free Parking", desc: "Ample parking space available" },
              { icon: <FaWifi />, title: "High-Speed WiFi", desc: "Stay connected throughout" },
              { icon: <GiMuscleUp />, title: "Personal Training", desc: "Expert coaches on staff" },
              { icon: <FaTv />, title: "Entertainment", desc: "LCD screens & music system" },
              { icon: <FaMapMarkerAlt />, title: "Prime Location", desc: "Heart of Pune, easily accessible" },
            ].map((amenity, i) => (
              <div key={i} className="amenity-card glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl text-primary group-hover:text-secondary transition-colors mb-4">{amenity.icon}</div>
                <h4 className="font-heading font-bold text-lg uppercase mb-2">{amenity.title}</h4>
                <p className="text-gray-400 text-sm">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="py-24 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-black uppercase mb-4">Visit <span className="text-primary">Us</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-8 text-center">
              <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Location</h3>
              <p className="text-gray-300">Pune, India</p>
            </div>
            <div className="glass-card p-8 text-center">
              <FaPhoneAlt className="text-4xl text-secondary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Phone</h3>
              <p className="text-gray-300">+91 9665 861 956</p>
            </div>
            <div className="glass-card p-8 text-center">
              <FaEnvelope className="text-4xl text-white mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Email</h3>
              <p className="text-gray-300">contact@okinawa.fit</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <a href="https://wa.me/919665861956" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-heading text-xl uppercase tracking-wider rounded-md h-14 px-8">
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── IMAGE MODAL ── */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <img src={selectedImage} alt="Gallery" className="w-full h-full object-contain" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary hover:bg-red-700 p-2 rounded-full text-white transition-colors"
              aria-label="Close"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/919665861956"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] z-50 hover:scale-110 transition-transform hover:bg-[#128C7E]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        <span className="relative z-10">
          {/* simple icon without importing more components */}
          <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true">
            <path d="M19.07 16.07c-.21-.1-1.24-.6-1.43-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.45.06-.21-.1-.9-.33-1.71-1.06-.63-.56-1.05-1.25-1.17-1.46-.12-.21-.01-.32.09-.42.08-.08.18-.21.27-.32.09-.11.12-.19.19-.32.07-.14.03-.27-.02-.38-.05-.1-.47-1.15-.64-1.58-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.38.05-.58.26-.2.21-.77.75-.77 1.83s.79 2.13.9 2.28c.11.16 1.58 2.41 3.83 3.38.53.23.95.37 1.27.47.53.17 1.01.15 1.39.09.42-.07 1.24-.5 1.41-.99.17-.49.17-.91.12-.99-.05-.08-.19-.12-.4-.22Z"/>
            <path d="M16 2C8.82 2 3 7.82 3 15c0 2.65.79 5.11 2.14 7.17L4 30l8.01-1.12A12.92 12.92 0 0 0 16 28c7.18 0 13-5.82 13-13S23.18 2 16 2Zm0 24c-1.88 0-3.63-.54-5.11-1.48l-.34-.22-4.65.65.67-4.5-.23-.35A10.96 10.96 0 0 1 5 15C5 8.93 10 3.98 16 3.98S27 8.93 27 15 22 26 16 26Z"/>
          </svg>
        </span>
      </a>

    </div>
  );
}
