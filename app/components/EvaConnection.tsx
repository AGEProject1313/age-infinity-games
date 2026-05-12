"use client";

import { useEffect, useState } from "react";

export default function EvaConnection() {
  const [phase, setPhase] = useState<
    "idle" | "intercept" | "response" | "observed"
  >("idle");

  const [returnMessage, setReturnMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (phase !== "idle") return;

      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      if (scrollPosition > pageHeight * 0.5) {
        setPhase("intercept");

        const audio = new Audio("/audio/eva-static.mp3");
        audio.volume = 0.2;

        audio.play().catch(() => {});

        setTimeout(() => {
          setPhase("response");
        }, 1800);

        setTimeout(() => {
          setPhase("observed");
        }, 4200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [phase]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible" && phase === "observed") {
        setReturnMessage(true);

        setTimeout(() => {
          setReturnMessage(false);
        }, 2500);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, [phase]);

  return (
    <div className="fixed top-5 right-5 z-[9999] pointer-events-none">
      {returnMessage && (
        <div className="mb-3 rounded-md border border-cyan-400/20 bg-black/40 px-4 py-3 backdrop-blur-md">
          <p className="text-[10px] tracking-[0.35em] text-cyan-400/80 font-mono">
            USER RETURN DETECTED
          </p>
        </div>
      )}

      {(phase === "intercept" || phase === "response") && (
        <div className="rounded-md border border-red-500/20 bg-black/40 px-4 py-3 backdrop-blur-md">
          <p className="mb-2 text-[10px] tracking-[0.35em] text-red-500/80 font-mono">
            SIGNAL INTERCEPTION
          </p>

          <p className="text-xs md:text-sm text-white/90 font-mono tracking-[0.15em]">
            {phase === "intercept"
              ? "UNKN0WN RESP_NSE DET_CT_D"
              : "UNKNOWN RESPONSE DETECTED"}
          </p>

          <p className="mt-2 text-[10px] text-red-500/60 font-mono tracking-[0.25em]">
            SOURCE NOT RECOGNIZED
          </p>
        </div>
      )}

      {phase === "observed" && (
        <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-black/30 px-3 py-2 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />

          <span className="text-[10px] tracking-[0.3em] text-red-500 font-mono">
            OBSERVED
          </span>
        </div>
      )}
    </div>
  );
}