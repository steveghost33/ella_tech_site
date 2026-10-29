import { useState, useEffect } from "react";
import { CONTACT_PHONE_TEL } from "../data/site.js";
import { CHATBOT_EVENT_MOBILE_MENU } from "../features/chatbot/chatbotConfig.js";

const MobileBookingBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide bar when mobile nav menu is open
  useEffect(() => {
    const handleMenu = (e) => setMenuOpen(e.detail?.open ?? false);
    window.addEventListener(CHATBOT_EVENT_MOBILE_MENU, handleMenu);
    return () => window.removeEventListener(CHATBOT_EVENT_MOBILE_MENU, handleMenu);
  }, []);

  if (menuOpen) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90]">
      <div className="bg-black-100/95 backdrop-blur-sm border-t border-s2 px-4 py-3 flex gap-3">
        <a
          href={`tel:${CONTACT_PHONE_TEL}`}
          className="flex items-center justify-center px-5 py-3.5 rounded-xl border-2 border-p1 text-p1 font-poppins font-bold text-sm uppercase tracking-wide"
        >
          Call
        </a>
        <a
          href="https://cal.com/ella-tech-7ze7wk"
          className="flex flex-1 items-center justify-center gap-3 py-3.5 rounded-xl bg-p1 hover:bg-p1/90 transition-colors duration-200"
        >
          <img src="/images/zap.svg" alt="" className="w-5 h-5" />
          <span className="font-poppins font-bold text-sm uppercase text-s1 tracking-wide">
            Book a Free Consultation
          </span>
        </a>
      </div>
    </div>
  );
};

export default MobileBookingBar;
