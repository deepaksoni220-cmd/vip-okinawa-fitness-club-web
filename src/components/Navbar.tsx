import { useState } from "react";
import { Link, useLocation } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#about", label: "ABOUT US", isRoute: false },
  { href: "/services", label: "SERVICES", isRoute: true },
  { href: "/fitness-club", label: "VIEW FITNESS CLUB", isRoute: true },
  { href: "/#classes", label: "CLASSES", isRoute: false },
  { href: "/contact", label: "CONTACT", isRoute: true },
];

const mobileLinks = [
  { href: "/", label: "HOME", isRoute: true },
  ...links,
  { href: "/#memberships", label: "MEMBERSHIPS", isRoute: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/10 py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Okinawa Fitness" className="h-28 w-auto object-contain cursor-pointer" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {links.map((link) => {
            const isActive = link.isRoute && link.href === location;
            const cls = `transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`;
            return link.isRoute ? (
              <Link key={link.href} href={link.href} className={cls}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className={cls}>
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/919665861956" target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:flex bg-green-600 hover:bg-green-700 text-white rounded-md font-bold uppercase tracking-wider">
              <FaWhatsapp className="mr-2" size={18} /> WhatsApp Us
            </Button>
          </a>
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-black/95 backdrop-blur-md border-t border-white/10 flex flex-col px-6 py-4 gap-5">
          {mobileLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-200 font-bold tracking-widest text-sm hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 font-bold tracking-widest text-sm hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a href="https://wa.me/919665861956" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md font-bold uppercase tracking-wider mt-2">
              <FaWhatsapp className="mr-2" size={18} /> WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
