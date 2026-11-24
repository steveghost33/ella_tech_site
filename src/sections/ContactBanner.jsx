import { BOOKING_PATH } from "../data/site.js";

function ContactBanner() {
  return (
    <div
      role="banner"
      aria-label="Free consultation offer"
      className="flex items-center justify-between sm:justify-center gap-3 sm:gap-5 bg-[#00C8E8] text-[#0A2540] px-4 sm:px-6 py-2 sm:py-3 text-center"
    >
      <span className="text-sm sm:text-base font-bold tracking-wide whitespace-nowrap">
        Free first conversation
      </span>
      <a
        href={BOOKING_PATH}
        className="notch [--notch:9px] inline-flex items-center gap-2 bg-[#0A2540] text-[#00C8E8] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-black transition-colors focus-visible:shadow-[inset_0_0_0_2px_#00C8E8] focus-visible:outline-none whitespace-nowrap"
      >
        Book a time
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}

export default ContactBanner;
