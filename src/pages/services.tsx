import { useState } from "react";
import { FaWhatsapp, FaDumbbell, FaFire, FaClock, FaCheck, FaMedal, FaShieldAlt, FaTimes } from "react-icons/fa";
import { GiBoxingGlove, GiBlackBelt, GiMuscleUp } from "react-icons/gi";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

const WA = "919665861956";

function waLink(message: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
}

const gymPlans = [
  {
    label: "Personal Training",
price: "₹12,000",
    duration: "Monthly",
    features: ["Dedicated 1-on-1 coaching", "Custom workout plan", "Nutrition guidance", "Progress tracking", "Sports nutrition"],
    highlight: false,
  },
  {
    label: "Group Personal Training",
    price: "₹5,000",
    duration: "Monthly",
    features: ["Small batch personal coaching", "Technique correction", "Shared training plan", "Group progress tracking"],
    highlight: false,
  },
  {
    label: "Monthly",
    price: "₹1,200",
    duration: "1 Month",
    features: ["Full gym access", "All equipment", "Locker room"],
    highlight: false,
  },
  {
    label: "Quarterly",
    price: "₹2,500",
    duration: "3 Months",
    features: ["Full gym access", "All equipment", "Locker room", "Progress tracking"],
    highlight: false,
  },
  {
    label: "Half-Yearly",
    price: "₹4,000",
    duration: "6 Months",
    features: ["Full gym access", "All equipment", "Locker room", "Progress tracking", "Diet guidance"],
    highlight: true,
  },
  {
    label: "Annual",
    price: "₹6,000",
    duration: "12 Months",
    features: ["Full gym access", "All equipment", "Locker room", "Progress tracking", "Diet guidance", "Personal assessment"],
    highlight: false,
  },
];

export default function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Toaster theme="dark" />
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="pt-40 pb-20 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Everything We Offer</p>
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase leading-none mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Premium gym, martial arts, and coaching programs — all under one roof in Pune.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 1 — OKINAWA FITNESS CLUB
      ════════════════════════════════════════ */}
      <section id="gym" className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">

          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <p className="text-primary font-bold tracking-widest uppercase text-sm">Section 01</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-none">
                Okinawa<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Fitness Club</span>
              </h2>
              <p className="text-gray-400 max-w-md text-base font-light leading-relaxed mt-6">
                State-of-the-art equipment, certified trainers, and a results-driven environment. Train smart. Stay strong. Be unstoppable.
              </p>
            </div>
            <div className="flex-shrink-0 mx-auto w-full max-w-[280px] md:max-w-[256px]">
              <img src="/gym-banner-1.png" alt="Gym Icon" className="w-full h-auto object-cover rounded-sm border border-white/10 shadow-xl" />
            </div>
          </div>

          {/* Banner image */}
          {/* Removed */}

          {/* Programs grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              { icon: <GiMuscleUp />, title: "Strength & Weight Training", desc: "Build raw power with progressive overload programming." },
              { icon: <FaFire />, title: "Fat Loss & Cardio", desc: "High-intensity circuits designed to torch calories." },
              { icon: <FaDumbbell />, title: "Personal Training (1-on-1)", desc: "Customised plans with dedicated coach attention." },
              { icon: <FaMedal />, title: "Functional & Endurance", desc: "Real-world strength for athletes and beginners alike." },
              { icon: <GiMuscleUp />, title: "Beginner to Advanced Plans", desc: "Structured progressions for every fitness level." },
              { icon: <FaDumbbell />, title: "Group Workout Sessions", desc: "Energy-charged classes with motivated peers." },
            ].map((p, i) => (
              <div key={i} className="glass-card p-6 flex gap-4 items-start group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-3xl text-secondary group-hover:text-primary transition-colors shrink-0 mt-1">{p.icon}</div>
                <div>
                  <h4 className="font-heading font-bold uppercase text-base mb-1">{p.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── MEMBERSHIP PLANS ── */}
          <div className="text-center mb-12">
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Pricing</p>
            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase">
              Membership <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-600">Plans</span>
            </h3>
            <p className="text-gray-400 mt-3 text-sm">Special discounts for students &amp; group enrollments</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {gymPlans.map((plan) => (
              <div
                key={plan.label}
                className={`relative flex flex-col glass-card p-8 group transition-transform duration-300 hover:-translate-y-2 ${plan.highlight ? "border-secondary/60 shadow-[0_0_40px_rgba(212,175,55,0.15)]" : ""}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-black text-xs font-black uppercase tracking-widest px-4 py-1 whitespace-nowrap">
                    Best Value
                  </div>
                )}
                <div>
                  <h4 className={`font-heading font-bold text-xl uppercase mb-1 ${plan.highlight ? "text-secondary" : "text-gray-300"}`}>{plan.label}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">{plan.duration}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-heading font-black text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm">/-</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                        <FaCheck className="text-primary shrink-0 text-xs" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={waLink(`Hi! I'm interested in the ${plan.label} Membership Plan (${plan.price}/-) at Okinawa Fitness Club. Please share more details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex items-center justify-center gap-2 font-black uppercase tracking-wider text-sm py-3 px-4 rounded-md transition-all duration-300 ${plan.highlight ? "bg-secondary hover:bg-yellow-500 text-black" : "bg-white/5 hover:bg-primary hover:text-black text-white border border-white/10 hover:border-primary"}`}
                >
                  <FaWhatsapp size={16} /> Join Now
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="glass-card w-full max-w-3xl p-8 border border-secondary/30 bg-[#0d0d0d] shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Okinawa Personal Training</p>
                  <h4 className="text-3xl font-heading font-black uppercase mb-3">Monthly Memberships</h4>
                  <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
                    Dedicated 1-on-1 training for <span className="text-white font-bold">₹12,000/month</span> and group personal coaching for <span className="text-white font-bold">₹5,000/month</span> per member.
                  </p>
                </div>
                <a
                  href={waLink("Hi! I'm interested in Okinawa Personal Training monthly memberships for ₹10,000 and/or Group Personal Training for ₹5,000 per member. Please share joining details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary hover:bg-yellow-500 text-black font-black uppercase tracking-wider text-sm px-6 py-4 transition-colors duration-300"
                >
                  <FaWhatsapp size={18} /> Join Us Now
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="glass-card w-full max-w-3xl p-8 border border-secondary/30 bg-[#0d0d0d] shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-2">Okinawa Personal Training</p>
                  <h4 className="text-3xl font-heading font-black uppercase mb-3">Monthly Membership ₹12,000</h4>
                  <p className="text-gray-400 max-w-xl text-sm leading-relaxed">Dedicated personal training package tailored for serious results. Includes custom workout plans, nutrition guidance, and one-on-one coaching.</p>
                </div>
                <a
                  href={waLink("Hi! I'm interested in the Okinawa Personal Training monthly membership for ₹10,000. Please share joining details.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-secondary hover:bg-yellow-500 text-black font-black uppercase tracking-wider text-sm px-6 py-4 transition-colors duration-300"
                >
                  <FaWhatsapp size={18} /> Join us Now
                </a>
              </div>
            </div>
          </div>

          {/* Timing badge */}
          <div className="mt-12 flex justify-center">
            <div className="glass-card px-8 py-5 flex items-center gap-6 border-primary/30">
              <FaClock className="text-primary text-3xl shrink-0" />
              <div>
                <p className="font-heading font-bold uppercase tracking-widest text-sm text-gray-300 mb-1">Gym Timings</p>
                <p className="text-white font-bold text-lg">Morning 5:00 AM – Night 12:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — KARATE / MARTIAL ARTS
      ════════════════════════════════════════ */}
      <section id="karate" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-red-900/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">

          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-red-600" />
            <p className="text-red-500 font-bold tracking-widest uppercase text-sm">Section 02</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-heading font-black uppercase leading-none">
                Karate &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Martial Arts</span>
              </h2>
              <p className="text-gray-400 max-w-md text-base font-light leading-relaxed mt-6">
                Okinawa Goju-Ryu Karate training for Men, Women &amp; Children. Build strength, discipline, and confidence under certified instruction.
              </p>
            </div>
            <div className="flex-shrink-0 mx-auto w-full max-w-[280px] md:max-w-[256px]">
              <img src="/oky001.jpeg" alt="Karate Icon" className="w-full h-auto object-cover rounded-sm border border-white/10 shadow-xl" />
            </div>
          </div>

          {/* Banner image */}
          {/* Removed */}

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — what you learn + about */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GiBlackBelt className="text-red-500 text-4xl" />
                  <h3 className="font-heading font-bold text-2xl uppercase">What You Will Learn</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Basic to Advanced Karate Techniques",
                    "Self-Defense Skills",
                    "Belt Grading Preparation",
                    "Strength & Flexibility Training",
                    "Discipline & Respect Values",
                    "Kick Boxing, Thai Boxing, MMA, Judo",
                    "Armwrestling, Zumba, Bollywood",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <FaCheck className="text-red-500 mt-1 shrink-0 text-xs" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FaShieldAlt className="text-red-500 text-3xl" />
                  <h3 className="font-heading font-bold text-2xl uppercase">Why Choose Us</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Safe & Friendly Environment",
                    "Professional Coaching",
                    "Personal Attention",
                    "Regular Practice & Progress Tracking",
                    "International Certification & Belt Promotions",
                    "Participation in Govt. Competitions (District, State, National & International)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <FaCheck className="text-red-500 mt-1 shrink-0 text-xs" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — timings + trainer + CTA */}
            <div className="space-y-6">
              {/* Batch timings */}
              <div className="glass-card p-8 border-red-500/30">
                <h3 className="font-heading font-bold text-2xl uppercase mb-6 flex items-center gap-3">
                  <FaClock className="text-red-500" /> Batch Timings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-white/5 px-6 py-4 border border-white/10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Morning Batch</p>
                      <p className="text-2xl font-heading font-black text-white">6:30 AM – 9:00 AM</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                      <FaClock className="text-red-400 text-xl" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 px-6 py-4 border border-white/10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Evening Batch</p>
                      <p className="text-2xl font-heading font-black text-white">4:30 PM – 7:00 PM</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center">
                      <FaClock className="text-red-400 text-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Trainer profile */}
              <div className="glass-card p-8">
                <h3 className="font-heading font-bold text-xl uppercase mb-4">Head Instructor</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-red-900/40 border-2 border-red-500/40 flex items-center justify-center shrink-0">
                    <GiBoxingGlove className="text-red-400 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-xl uppercase text-white">Shihan Jamil Ahmed G Khan</h4>
                    <p className="text-red-400 text-sm font-bold uppercase tracking-wider mb-3">6th DAN Black Belt — Malaysia</p>
                    <ul className="space-y-1 text-sm text-gray-400">
                      <li>• Certified Karate Instructor</li>
                      <li>• Years of experience in Martial Arts Training</li>
                      <li>• Special focus on Safety &amp; Personal Growth</li>
                      <li>• Proven track record with students in schools</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div className="glass-card p-6 border-red-500/20">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Branches</p>
                <p className="font-heading font-bold text-lg uppercase text-white">NIBM / Kondhwa / Camp / Wanwari</p>
              </div>

              {/* CTA */}
              <a
                href={waLink("Hi, I'd like to join Okinawa Goju-Ryu Karate / Martial Arts classes. Please share batch details and fees.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black uppercase tracking-widest py-5 text-base transition-all duration-300 hover:scale-[1.02] shadow-xl"
              >
                <FaWhatsapp size={22} /> Join Karate Classes on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase mb-4">Our <span className="text-primary">Facilities</span></h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "/banner-gym.jpeg",
              "/banner-karate.jpeg",
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-sm border border-white/10 h-72 group cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setSelectedImage(img)}>
                <img src={img} alt={`Facility ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500 font-medium tracking-wide bg-[#050505]">
        <p>&copy; {new Date().getFullYear()} Okinawa Fitness. All rights reserved.</p>
      </footer>

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
        href={`https://wa.me/${WA}`}
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
