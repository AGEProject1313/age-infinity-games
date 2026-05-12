"use client";
import { useState } from "react";
export default function TrailerSection() {
    const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-36">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
          Official Transmission
        </p>

        <button
  onClick={() => setOpen(true)}
  className="text-xs uppercase tracking-[0.3em] text-cyan-400 transition hover:text-cyan-300">
          Access Signal
        </button>
      </div>

      <div
  onClick={() => setOpen(true)}
  className="group relative overflow-hidden border border-gray-800 bg-black cursor-pointer"
>
        <img
          src="/images/locandina.png"
          alt="EVA Awakening Trailer"
          className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:opacity-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md transition duration-500 group-hover:scale-110">
            <div className="ml-1 h-0 w-0 border-b-[14px] border-l-[22px] border-t-[14px] border-b-transparent border-l-white border-t-transparent" />
          </div>
        </div>

        <div className="absolute bottom-10 left-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-cyan-400">
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
          </h2>
          
          <p className="mt-4 text-cyan-400/90 md:text-lg tracking-[0.08em]">
            Recovered from an unauthorized EVA network response.
            </p>
        </div>
      </div>
      {open && (
  <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md">
    <button
      onClick={() => setOpen(false)}
      className="absolute right-6 top-6 text-sm uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
    >
      Close
    </button>

    <div className="w-full max-w-6xl overflow-hidden border border-gray-800">
      <div className="aspect-video bg-black">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/piROrMDLRkU?autoplay=1"
          title="EVA Awakening Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)}
    </section>
  );
}