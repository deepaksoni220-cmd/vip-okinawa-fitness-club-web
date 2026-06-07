import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", phone: "", email: "", message: "" });
      toast.success("Message sent!", { description: "Our team will reach out to you shortly." });
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Toaster position="top-center" />

      {/* ── HERO BANNER ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h1 className="text-6xl md:text-8xl font-heading font-black uppercase mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-600">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            Ready to start your journey? Drop us a message, call us, or visit us directly in Pune.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* ── FORM ── */}
            <div className="glass-card p-10">
              <h2 className="text-3xl font-heading font-black uppercase mb-2">Send a Message</h2>
              <p className="text-gray-400 text-sm mb-8">Fill in the form and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Full Name *</label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary h-12 rounded-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Phone Number *</label>
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary h-12 rounded-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Email Address</label>
                  <Input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-primary h-12 rounded-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you're interested in…"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:border-primary focus:outline-none rounded-none p-3 resize-none text-sm"
                  />
                </div>
                <div className="flex gap-4 pt-2">
                  <Button
                    type="submit"
                    disabled={sending}
                    className="flex-1 bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest rounded-none h-12"
                  >
                    {sending ? "Sending…" : "Send Message"}
                  </Button>
                  <a
                    href="https://wa.me/919665861956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wider px-5 h-12 text-sm transition-colors"
                  >
                    <FaWhatsapp size={18} /> WhatsApp
                  </a>
                </div>
              </form>
            </div>

            {/* ── INFO + MAP ── */}
            <div className="flex flex-col gap-6">
              {/* Info cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm mb-1">Address</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">987, above milan hotel, Jawaharlal Nehru Rd, New Nana Peth, Ganesh Peth, Pune 411002</p>
                  </div>
                </div>
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <FaPhoneAlt className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm mb-1">Phone</h4>
                    <a href="tel:+919665861956" className="text-gray-400 text-sm hover:text-primary transition-colors">+91 96658 61956</a>
                  </div>
                </div>
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm mb-1">Email</h4>
<a href="mailto:okinawafitness11@gmail.com" className="text-gray-400 text-sm hover:text-primary transition-colors">okinawafitness11@gmail.com</a>
                  <br />
                  <a href="mailto:okinawamma12@gmail.com" className="text-gray-400 text-sm hover:text-primary transition-colors">okinawamma12@gmail.com</a>
                  </div>
                </div>
                <div className="glass-card p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <FaClock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold uppercase text-sm mb-1">Hours</h4>
                    <p className="text-gray-400 text-sm">Mon–Sat: 5 AM – 12 AM</p>
                    <p className="text-gray-400 text-sm">Sun: 10 AM – 2 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="glass-card overflow-hidden flex-1 min-h-[260px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.332304919504!2d73.86470381534063!3d18.51383797421319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c040d7c71e09%3A0x7e88b209e51c8a14!2sOkinawa%20Martial%20Arts%20%26%20Fitness%20Club!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(80%) invert(10%)", minHeight: "260px" }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Okinawa Fitness Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mt-16 border-t border-white/10 py-8 text-center text-xs text-gray-500 font-medium tracking-wide">
        <p>&copy; {new Date().getFullYear()} Okinawa Fitness. All rights reserved.</p>
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
