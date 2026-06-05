import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaDumbbell, FaFire, FaClock, FaTrophy, FaStar, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheck, FaCheckCircle, FaUserShield, FaLeaf, FaMedal, FaRegCalendarAlt } from "react-icons/fa";
import { GiBoxingGlove, GiMuscleUp, GiPunchingBag } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast, Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import { getWhatsAppLink } from "@/components/WhatsAppFloating";

const WA = "919665861956";

function waLink(message: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
}


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");
  const [_tick, setTick] = useState(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Okinawa Fitness Consultation Request";
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nFitness Goal: ${goal}\n\nPlease contact me for a free consultation and facility tour.`;
    const mailto = `mailto:okinawamma12@gmail.com,okinawafitness11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success("Opening your email client...", { description: "Send the email to complete your request." });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text reveal
      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".hero-btn", {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 1.2,
      });

      // Floating orbs loop
      gsap.to(".floating-orb", {
        y: -30, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 0.5,
      });

      // Stats count-up on scroll
      const stats = document.querySelectorAll(".stat-number");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target") || "0");
        gsap.to(stat, {
          scrollTrigger: { trigger: ".stats-section", start: "top 85%" },
          innerHTML: target, duration: 2, snap: { innerHTML: 1 }, ease: "power1.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 md:h-screen md:flex md:items-center md:pt-20" id="home">
        <div className="relative z-0 overflow-hidden md:absolute md:inset-x-0 md:bottom-0 md:top-0">
          <picture className="block h-auto w-full md:h-full">
            <source
              media="(max-width: 767px)"
              srcSet="/oki-nawa-banner2.png"
            />
            <img
              src="/oki-nawa-banner1.webp"
              alt="Okinawa Fitness Gym"
              className="h-auto w-full object-cover object-top md:h-full md:object-center"
            />
          </picture>
        </div>
        <div className="absolute top-1/4 left-1/4 hidden w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-0 floating-orb md:block" />
        <div className="absolute bottom-1/4 right-1/4 hidden w-96 h-96 bg-secondary/10 rounded-full blur-[120px] z-0 floating-orb md:block" />
        <div className="container mx-auto px-4 relative z-20 hidden md:block">
          <div className="max-w-3xl">
            <div className="flex gap-4">
              <a href="#memberships">
                <Button size="lg" className="hero-btn w-full sm:w-auto bg-primary hover:bg-red-700 text-white font-heading text-xl uppercase tracking-wider rounded-none h-14 px-8">Join Now</Button>
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="hero-btn w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-heading text-sm uppercase tracking-wider rounded-md h-14 px-6">
                  <FaWhatsapp className="mr-2" size={20} /> WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Banner uploader removed */}
      </section>

      {/* ── MOBILE HERO FOLLOW-UP ── */}
      <section className="relative z-20 overflow-hidden bg-black p-5 md:hidden">
        <img
          src="/oki-nawa-banner02.png"
          alt="Okinawa Fitness"
          className="h-auto w-full origin-center scale-[1.6] object-cover"
        />
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="relative z-20 bg-black overflow-hidden">
        <img
          src="/banr2.webp"
          alt="Okinawa Fitness Banner"
          className="hidden md:block w-full h-auto object-cover"
        />
        <img
          src="/okyy0y1.png"
          alt="Okinawa Fitness Banner"
          className="block md:hidden w-[calc(100%+8px)] max-w-none -translate-x-1 h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-start justify-center bg-gradient-to-b from-black/75 via-black/10 to-transparent px-4 pt-6 text-center md:items-center md:bg-gradient-to-r md:from-black/75 md:via-black/20 md:to-transparent md:px-16 md:pt-0">
          <h2 className="hero-subtitle max-w-[12ch] font-heading text-3xl font-black uppercase leading-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] sm:text-4xl md:max-w-[11ch] md:text-6xl lg:text-7xl">
            Okinawa Martial Arts Classes
          </h2>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section py-16 border-y border-white/10 bg-black/50 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 1000, label: "Members Trained", color: "text-primary" },
              { target: 10, label: "Expert Coaches", color: "text-secondary" },
              { target: 15, label: "Years Experience", color: "text-white" },
              { target: 500, label: "Transformations", color: "text-primary" },
            ].map((s, i) => (
              <div key={i}>
                <div className={`text-4xl md:text-6xl font-heading font-black ${s.color} mb-2`}>
                  <span className="stat-number" data-target={s.target}>0</span>+
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-400 font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
<img
                src="/okyaboy.png"
                alt="MMA Training"
                className="w-full h-auto object-cover rounded-sm shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">About Us</h2>
              <img src="/logo.png" alt="Okinawa Fitness" className="h-28 md:h-36 w-auto mb-6 drop-shadow-[0_0_24px_rgba(212,175,55,0.4)]" />
              <div className="space-y-6 text-gray-300 font-light text-lg">
                <p>Okinawa Fitness is not just a gym — it's a proving ground. Located in the heart of Pune, we blend the precision of traditional martial arts with the raw intensity of modern combat sports and elite strength conditioning.</p>
                <p>Whether you're stepping onto the mats for the first time or preparing for your next professional bout, our facility provides the atmosphere, equipment, and expertise needed to shatter your limits.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="glass-card p-6 hover:border-primary/50 transition-colors">
                  <FaFire className="text-primary text-3xl mb-4" />
                  <h4 className="font-heading font-bold text-xl uppercase mb-2">Our Mission</h4>
                  <p className="text-sm text-gray-400">To build unbreakable bodies and unshakeable minds through elite training methodologies.</p>
                </div>
                <div className="glass-card p-6 hover:border-secondary/50 transition-colors">
                  <FaDumbbell className="text-secondary text-3xl mb-4" />
                  <h4 className="font-heading font-bold text-xl uppercase mb-2">Our Vision</h4>
                  <p className="text-sm text-gray-400">To be India's premier destination for combat sports and functional fitness excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-black relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">The Okinawa Advantage</p>
            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-600">Us</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: <FaMedal />, title: "Certified Trainers" },
              { icon: <FaDumbbell />, title: "Modern Equipment" },
              { icon: <GiBoxingGlove />, title: "MMA Specialists" },
              { icon: <FaClock />, title: "Flexible Timings" },
              { icon: <FaUserShield />, title: "Personal Attention" },
              { icon: <FaLeaf />, title: "Clean Environment" },
            ].map((f, i) => (
              <div key={i} className="glass-card p-6 text-center group flex flex-col items-center justify-center min-h-[160px] hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl text-secondary group-hover:text-primary transition-colors mb-4">{f.icon}</div>
                <h4 className="font-heading font-bold text-lg uppercase tracking-wide">{f.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELITE SERVICES ── */}
      <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">What We Offer</p>
            <h3 className="text-5xl md:text-6xl font-heading font-black uppercase">Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Services</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FaDumbbell />, title: "Premium Gym", desc: "State-of-the-art equipment for serious lifters." },
              { icon: <GiPunchingBag />, title: "Karate Classes", desc: "Traditional martial arts focusing on discipline and technique." },
              { icon: <GiBoxingGlove />, title: "MMA Training", desc: "Comprehensive mixed martial arts instruction." },
              { icon: <FaFire />, title: "Weight Loss", desc: "Science-backed programs to shred fat fast." },
              { icon: <GiMuscleUp />, title: "Personal Training", desc: "1-on-1 coaching tailored to your specific goals." },
              { icon: <FaDumbbell />, title: "Strength & Cond.", desc: "Build explosive power and athletic endurance." },
            ].map((s, i) => (
              <div key={i} className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl text-gray-500 group-hover:text-primary transition-colors duration-300 mb-6">{s.icon}</div>
                <h4 className="font-heading font-bold text-2xl uppercase mb-3">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center text-primary text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  Learn More <span className="ml-2">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section className="py-16 bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative group overflow-hidden rounded-sm border border-secondary/20 bg-[#0a0a0a] flex items-center justify-center p-8 min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/gym-banner-1.png"
                alt="Okinawa Fitness — Strength & Martial Arts"
                className="relative z-10 w-full max-w-xs object-contain drop-shadow-[0_0_30px_rgba(201,162,39,0.4)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative group overflow-hidden rounded-sm border border-primary/20 bg-[#0a0a0a] flex items-center justify-center p-8 min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/gym-banner-2.png"
                alt="Okinawa Fitness — Fist of Power"
                className="relative z-10 w-full max-w-xs object-contain drop-shadow-[0_0_30px_rgba(227,28,28,0.35)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAINING PROGRAMS ── */}
      <section id="classes" className="py-24 relative bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Schedule</p>
              <h3 className="text-5xl md:text-6xl font-heading font-black uppercase">Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-900">Programs</span></h3>
            </div>
            <Button variant="outline" className="hidden md:flex mt-4 md:mt-0 rounded-none border-white/20 text-white hover:bg-white hover:text-black">
              <FaRegCalendarAlt className="mr-2" /> Download Full Schedule
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "MMA Training", time: "Mon, Wed, Fri • 6:30 PM", trainer: "Coach Ravi", level: "All Levels" },
              { name: "Okinawa Goju-Ryu Karate", time: "Tue, Thu, Sat • 5:00 PM", trainer: "Sensei Hiroshi", level: "Intermediate" },

              { name: "Strength & Cond.", time: "Daily • 7:00 AM & 7:00 PM", trainer: "Coach Priya", level: "Advanced" },
              { name: "Fat Loss Circuit", time: "Mon - Fri • 8:00 AM", trainer: "Coach Amit", level: "Beginner" },
              { name: "Kickboxing Drills", time: "Tue, Thu • 6:00 PM", trainer: "Coach Ravi", level: "All Levels" },

              { name: "Functional Training", time: "Sat • 9:00 AM", trainer: "Coach Priya", level: "All Levels" },
            ].map((c, i) => (
              <div key={i} className="glass-card p-6 border-l-4 border-l-primary group cursor-pointer hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-heading font-bold text-2xl uppercase">{c.name}</h4>
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-white/10 rounded-sm text-gray-300">{c.level}</span>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2"><FaClock className="text-primary" /> {c.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ── */}
      <section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Success Stories</p>
            <h3 className="text-5xl md:text-6xl font-heading font-black uppercase">Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Results</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Vikram S.", goal: "Lost 15kg in 4 Months", quote: "The fat loss circuit here is brutal but effective. Best decision I made for my health." },
              { name: "Anjali D.", goal: "Strength & Conditioning", quote: "I came to build strength for my sport. The coaches push you exactly how much you need." },
              { name: "Rahul M.", goal: "Amateur MMA Fighter", quote: "Top-tier striking and grappling coaching. The sparring sessions are high-level and disciplined." },
            ].map((t, i) => (
              <div key={i} className="glass-card p-8 relative hover:-translate-y-1 transition-transform duration-300">
                <FaStar className="absolute top-6 right-6 text-secondary text-xl opacity-20" />
                <div className="flex text-secondary mb-4 gap-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <p className="text-gray-300 italic mb-6">"{t.quote}"</p>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">{t.name}</h4>
                  <p className="text-primary text-sm font-medium">{t.goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PLANS ── */}
      <section id="memberships" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-4">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Pricing</p>
            <h3 className="text-5xl md:text-6xl font-heading font-black uppercase">Membership <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-600">Plans</span></h3>
          </div>
          <p className="text-center text-gray-400 mb-14 text-sm font-medium">Special discounts available for students &amp; group enrollments</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Personal Training */}
            <div className="glass-card p-7 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <FaDumbbell className="text-primary text-xl" />
              </div>
              <h4 className="font-heading font-bold text-xl uppercase mb-1 text-gray-300">Personal Training</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">Monthly</p>
              <div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-heading font-black text-white">₹12,000</span>
                <span className="text-gray-500 text-sm font-medium">/-</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> Dedicated 1-on-1 coaching</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> Custom workout plan</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> Nutrition guidance</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> Progress tracking</li>
              </ul>
              <Button asChild variant="outline" className="w-full rounded-none border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-wider font-bold text-xs h-10">
                <a href={waLink("Hi! I'm interested in Personal Training (1-on-1) monthly membership for ₹10,000. Please share joining details.")} target="_blank" rel="noopener noreferrer">Join Now</a>
              </Button>
            </div>

            {/* Group Personal Training */}
            <div className="glass-card p-7 border-secondary/30 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <FaDumbbell className="text-secondary text-xl" />
              </div>
              <h4 className="font-heading font-bold text-xl uppercase mb-1 text-secondary">Group Personal Training</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">Monthly</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-heading font-black text-white">₹5,000</span>
                <span className="text-gray-500 text-sm font-medium">/-</span>
              </div>
              <p className="text-xs text-secondary mb-5 font-medium">Per member</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Small batch personal coaching</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Technique correction</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Shared training plan</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Group progress tracking</li>
              </ul>
              <Button asChild variant="outline" className="w-full rounded-none border-secondary text-secondary hover:bg-secondary hover:text-black uppercase tracking-wider font-bold text-xs h-10">
                <a href={waLink("Hi! I'm interested in Group Personal Training monthly membership for ₹5,000 per member. Please share joining details.")} target="_blank" rel="noopener noreferrer">Join Now</a>
              </Button>
            </div>

            {/* Monthly */}
            <div className="glass-card p-7 group hover:-translate-y-2 transition-transform duration-300">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <FaClock className="text-primary text-xl" />
              </div>
              <h4 className="font-heading font-bold text-xl uppercase mb-1 text-gray-300">Monthly</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">1 Month</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-heading font-black text-white">₹1,200</span>
                <span className="text-gray-500 text-sm font-medium">/-</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> Full Gym Access</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> All Equipment</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> Locker Room</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-primary shrink-0" /> Group Classes</li>
              </ul>
              <Button asChild variant="outline" className="w-full rounded-none border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-wider font-bold text-xs h-10">
                <a href={waLink("Hi! I'm interested in the Monthly Membership Plan for Okinawa Fitness Club. Please share joining details.")} target="_blank" rel="noopener noreferrer">Join Now</a>
              </Button>
            </div>

            {/* Quarterly */}
            <div className="glass-card p-7 border-secondary/30 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <FaTrophy className="text-secondary text-xl" />
              </div>
              <h4 className="font-heading font-bold text-xl uppercase mb-1 text-secondary">Quarterly</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">3 Months</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-heading font-black text-white">₹2,500</span>
                <span className="text-gray-500 text-sm font-medium">/-</span>
              </div>
              <p className="text-xs text-secondary mb-5 font-medium">Save ₹1,100 vs monthly</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Full Gym Access</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> All Equipment</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Locker Room</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Group Classes</li>
              </ul>
              <Button asChild variant="outline" className="w-full rounded-none border-secondary text-secondary hover:bg-secondary hover:text-black uppercase tracking-wider font-bold text-xs h-10">
                <a href={waLink("Hi! I'm interested in the Quarterly Membership Plan for Okinawa Fitness Club. Please share joining details.")} target="_blank" rel="noopener noreferrer">Join Now</a>
              </Button>
            </div>

            {/* Half-Yearly — highlighted */}
            <div className="bg-gradient-to-b from-[#1c1210] to-black p-7 border border-primary shadow-[0_0_40px_rgba(227,28,28,0.2)] relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-full whitespace-nowrap">Best Value</div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                <FaStar className="text-primary text-xl" />
              </div>
              <h4 className="font-heading font-bold text-xl uppercase mb-1 text-primary">Half-Yearly</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">6 Months</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-heading font-black text-white">₹4,000</span>
                <span className="text-gray-500 text-sm font-medium">/-</span>
              </div>
              <p className="text-xs text-primary mb-5 font-medium">Save ₹3,200 vs monthly</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3 text-white"><FaCheckCircle className="text-primary shrink-0" /> Full Gym Access</li>
                <li className="flex items-center gap-3 text-white"><FaCheckCircle className="text-primary shrink-0" /> All Equipment</li>
                <li className="flex items-center gap-3 text-white"><FaCheckCircle className="text-primary shrink-0" /> Locker Room</li>
                <li className="flex items-center gap-3 text-white"><FaCheckCircle className="text-primary shrink-0" /> Group Classes</li>
              </ul>
              <Button asChild className="w-full rounded-none bg-primary hover:bg-red-700 text-white uppercase tracking-wider font-bold text-xs h-10">
                <a href={waLink("Hi! I'm interested in the Half-Yearly Membership Plan for Okinawa Fitness Club. Please share joining details.")} target="_blank" rel="noopener noreferrer">Join Now</a>
              </Button>
            </div>

            {/* Annual */}
            <div className="glass-card p-7 group hover:-translate-y-2 transition-transform duration-300" style={{ borderColor: "rgba(201,162,39,0.4)" }}>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <FaMedal className="text-secondary text-xl" />
              </div>
              <h4 className="font-heading font-bold text-xl uppercase mb-1 text-secondary">Annual</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">12 Months</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-heading font-black text-white">₹6,000</span>
                <span className="text-gray-500 text-sm font-medium">/-</span>
              </div>
              <p className="text-xs text-secondary mb-5 font-medium">Save ₹8,400 vs monthly</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Full Gym Access</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> All Equipment</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Locker Room</li>
                <li className="flex items-center gap-3 text-gray-300"><FaCheck className="text-secondary shrink-0" /> Group Classes + MMA/Karate</li>
              </ul>
              <Button asChild variant="outline" className="w-full rounded-none border-secondary text-secondary hover:bg-secondary hover:text-black uppercase tracking-wider font-bold text-xs h-10">
                <a href={waLink("Hi! I'm interested in the Annual Membership Plan for Okinawa Fitness Club. Please share joining details.")} target="_blank" rel="noopener noreferrer">Join Now</a>
              </Button>
            </div>
          </div>

          {/* Student / Group discount note */}
          <div className="mt-10 max-w-2xl mx-auto text-center glass-card p-5 border-secondary/20">
            <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-1">Special Offer</p>
            <p className="text-gray-300 text-sm">Student ID &amp; group enrollments (3+ members) receive exclusive discounts. Walk in or WhatsApp us to avail.</p>
          </div>
        </div>
      </section>

      {/* ── LEAD GEN / CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 border-primary/30 shadow-[0_0_50px_rgba(227,28,28,0.2)]">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-4 text-glow">Start Your Journey Today</h2>
              <p className="text-gray-300 text-lg">Book your free consultation and facility tour.</p>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                  <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-primary text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Phone Number</label>
                  <Input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-primary text-white"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email</label>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-primary text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Fitness Goal</label>
                  <Select value={goal} onValueChange={setGoal}>
                    <SelectTrigger className="bg-black/50 border-white/10 h-14 rounded-none focus-visible:ring-primary text-white">
                      <SelectValue placeholder="Select a goal" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-white/10 text-white rounded-none">
                      <SelectItem value="Weight Loss">Weight Loss</SelectItem>
                      <SelectItem value="Muscle Gain">Muscle Gain</SelectItem>
                      <SelectItem value="MMA Training">MMA Training</SelectItem>
                      <SelectItem value="Karate Classes">Karate Classes</SelectItem>
                      <SelectItem value="General Fitness">General Fitness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-heading text-xl uppercase tracking-wider rounded-none h-16 mt-4 hover:scale-[1.01] transition-transform">
                Get Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CONTACT & FOOTER ── */}
      <footer id="contact" className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <a href="#" className="text-3xl font-heading font-bold text-white tracking-wider flex items-center gap-2 mb-6">
                <span className="text-primary">OKINAWA</span> FITNESS
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Where raw discipline meets elite performance. Pune's premier destination for combat sports and fitness.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/okinawafitness_?igsh=MTlxa3NydnpiemNlaQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs font-bold">IN</a>
                <a href="https://www.facebook.com/okinawafitness" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs font-bold">FB</a>
                <a href="https://www.youtube.com/@okinawafitness" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer text-xs font-bold">YT</a>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl uppercase mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Home:#home","About Us:#about","Services:#services","Class Schedule:#classes","Memberships:#memberships"].map((l) => {
                  const [label, href] = l.split(":");
                  return <li key={label}><a href={href} className="hover:text-primary transition-colors block w-fit">{label}</a></li>;
                })}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl uppercase mb-6 text-white">Contact Info</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                  <span>987, Jawaharlal Nehru Rd, New Nana Peth, Ganesh Peth, Pune, Maharashtra 411002</span>
                </li>
                <li className="flex items-center gap-3"><FaPhoneAlt className="text-primary shrink-0" /><span>+91 96658 61956</span></li>
<li className="flex items-center gap-3"><FaEnvelope className="text-primary shrink-0" /><span>okinawamma12@gmail.com</span></li>
              </ul>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold uppercase tracking-wider px-4 py-3 transition-colors rounded-md">
                <FaWhatsapp size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div>
              <h4 className="font-heading font-bold text-xl uppercase mb-6 text-white">Location</h4>
              <div className="h-48 w-full border border-white/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.332304919504!2d73.86470381534063!3d18.51383797421319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c040d7c71e09%3A0x7e88b209e51c8a14!2sOkinawa%20Martial%20Arts%20%26%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(90%)" }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wide">
            <p>&copy; {new Date().getFullYear()} Okinawa Fitness. All rights reserved.</p>
            <p className="uppercase tracking-widest text-white/30 font-bold">Designed with discipline.</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href="https://wa.me/919665861956"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] z-50 hover:scale-110 transition-transform hover:bg-[#128C7E]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        <FaWhatsapp size={32} className="relative z-10" />
      </a>
    </div>
  );
}
