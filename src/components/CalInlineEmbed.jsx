import { useEffect, useRef, useState } from "react";
import { CAL_LINK, ensureCalLoader } from "../utils/cal.js";

const CAL_ORIGIN = "https://app.cal.com";

const CalInlineEmbed = ({ className = "" }) => {
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    let cancelled = false;

    const initializeEmbed = async () => {
      const cal = ensureCalLoader();
      if (cancelled || !cal) return;

      cal("init", { origin: CAL_ORIGIN });
      cal("inline", {
        elementOrSelector: container,
        calLink: CAL_LINK,
        config: {
          layout: "month_view",
          theme: "dark",
        },
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
        styles: {
          body: {
            background: "transparent",
          },
          enabledDateButton: {
            background: "#2EF2FF",
            color: "#080D27",
          },
        },
      });
    };

    initializeEmbed().catch((error) => {
      setHasError(true);
      console.error(error);
    });

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, []);

  if (hasError) {
    return (
      <div className={`flex min-h-[680px] items-center justify-center p-8 text-center ${className}`}>
        <div className="max-w-sm space-y-5">
          <div className="mx-auto w-12 h-12 rounded-full bg-p1/15 border border-p1/40 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-p1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-p4 mb-2">Book Your Tech Clarity Session</h3>
            <p className="text-p5 text-[15px] leading-relaxed">
              The scheduler didn't load here, but your booking page is available directly.
            </p>
          </div>
          <a
            href={`${CAL_ORIGIN}/${CAL_LINK}`}
            target="_blank"
            rel="noreferrer"
            className="btn-ella !min-h-0 !px-7 !py-3.5 !text-sm"
          >
            Open Booking Page
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className={className} aria-label="Book a Free Tech Clarity Session" />;
};

export default CalInlineEmbed;
