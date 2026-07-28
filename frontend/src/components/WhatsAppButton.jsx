import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918838578674?text=Hi%20Riyadvi%20Team,%20I%20would%20like%20to%20discuss%20my%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}

export default WhatsAppButton;