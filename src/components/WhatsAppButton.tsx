import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "+20 109 832 4080"; 
  const message = "Hello! I want to contact you."; 
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-8 z-50 p-3 rounded-full bg-orange-gradient text-primary-foreground shadow-lg glow-orange hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
