import { RiWhatsappFill } from "react-icons/ri";

export const WhatsAppFixed = ({ number }) => {
  return (
    <div className="fixed bottom-6 right-6 bg-white rounded-full p-2">
      <a href={`https://api.whatsapp.com/send?phone=51${number}&`}>
        <RiWhatsappFill className="text-4xl md:text-6xl text-green-500" />
      </a>
    </div>
  );
};
