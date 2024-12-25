import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // Replace with your actual WhatsApp number
  const phoneNumber = "9020587172";
  const message = "Hi! I would like to know more about your travel packages.";

  const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
