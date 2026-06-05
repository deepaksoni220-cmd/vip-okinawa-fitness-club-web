import { FaWhatsapp } from "react-icons/fa";

const WA_NUMBER = "919665861956";

export const getWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${WA_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export default function WhatsAppFloating() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] z-50 hover:scale-110 transition-transform hover:bg-[#128C7E]"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      <FaWhatsapp size={32} className="relative z-10" />
    </a>
  );
}