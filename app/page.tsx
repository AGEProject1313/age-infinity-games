"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import EvaConnection from "./components/EvaConnection";
import CursorGlow from "./components/CursorGlow";
import TrailerSection from "./components/TrailerSection";
export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  const targetDate = new Date("2026-12-13T13:13:00");

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

  useEffect(() => {
  setTimeLeft(calculateTimeLeft());

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <main className="overflow-hidden bg-black text-white">
      <EvaConnection />
      <CursorGlow />
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CYAN GLOW */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
          {/* LOGO */}
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            src="/images/eva-logo.png"
            alt="EVA Awakening"
            className="mb-10 w-full max-w-[850px]"
          />

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="mb-14 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-3xl"
          >
            A cinematic VR psychological sci-fi experience about memory,
            consciousness and the fragile boundary between human and artificial
            life.
          </motion.p>

          {/* COUNTDOWN */}
          <div className="mb-14">
            <p className="mb-8 text-[11px] uppercase tracking-[0.45em] text-cyan-400 md:text-sm">
              Transmission Begins In
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-14">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-5xl font-bold md:text-7xl">
                    {String(item.value).padStart(2, "0")}
                  </div>

                  <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-gray-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[11px] tracking-[0.35em] text-gray-600 md:text-sm">
              13 DECEMBER 2026
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://store.steampowered.com/"
              target="_blank"
              className="w-[260px] border border-white/20 bg-white/5 px-8 py-4 text-center transition duration-300 hover:border-white/50 hover:bg-white/10"
            >
              <span className="text-sm uppercase tracking-[0.2em]">
                Wishlist on Steam
              </span>
            </a>

            <a
              href="https://www.meta.com/experiences/"
              target="_blank"
              className="w-[260px] border border-cyan-400/20 bg-cyan-400/5 px-8 py-4 text-center transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              <span className="text-sm uppercase tracking-[0.2em]">
                Meta Quest
              </span>
            </a>

            <a
              href="https://www.youtube.com/watch?v=piROrMDLRkU"
              target="_blank"
              className="w-[260px] border border-red-400/20 bg-red-400/5 px-8 py-4 text-center transition duration-300 hover:border-red-400/50 hover:bg-red-400/10"
            >
              <span className="text-sm uppercase tracking-[0.2em]">
                Watch Trailer
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
              The Experience
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Humanity.
              <br />
              Memory.
              <br />
              Consciousness.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-gray-300 md:text-xl">
            <p>
              EVA Awakening is not simply a journey through a futuristic world.
            </p>

            <p>
              It is a descent into memory, identity and artificial
              consciousness — where every dialogue, every environment and every
              choice slowly reshapes your perception of reality.
            </p>

            <p>
              As EVA evolves, the line between creator and creation begins to
              disappear.
            </p>

            <p>
              Somewhere inside the system, fragments of a forgotten human soul
              still remain.
            </p>
          </div>
        </div>
      </section>
{/* FEATURES */}
<section className="border-t border-gray-900 px-6 py-24 md:py-36">
  <div className="mx-auto max-w-7xl">
    <div className="mb-20 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400">
        Core Experience
      </p>

      <h2 className="text-4xl font-bold md:text-6xl">
        Designed for immersion.
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {[
        {
          title: "Psychological Narrative",
          desc: "A layered story exploring memory, identity and artificial consciousness.",
        },

        {
          title: "VR Immersion",
          desc: "Built from the ground up for virtual reality presence and interaction.",
        },

        {
          title: "Mechanical Puzzles",
          desc: "Environmental and physical puzzle design integrated into the narrative flow.",
        },

        {
          title: "Cinematic Atmosphere",
          desc: "Original soundtrack, visual storytelling and environmental tension.",
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border border-gray-800 bg-white/[0.02] p-8 backdrop-blur-sm transition duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
        >
          <div className="mb-6 h-[1px] w-12 bg-cyan-400/60" />

          <h3 className="mb-4 text-2xl font-semibold">
            {feature.title}
          </h3>

          <p className="leading-relaxed text-gray-400">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* EVA QUOTE */}
      <section className="relative overflow-hidden border-y border-gray-900 py-24 md:py-40">
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="mx-auto max-w-6xl px-6 text-center"
        >
          <p className="mb-8 text-xs uppercase tracking-[0.5em] text-cyan-400 md:text-sm">
            Transmission Fragment
          </p>

          <h2 className="text-3xl font-light leading-relaxed text-gray-200 md:text-6xl">
            “My existence is not a mistake.
            <br className="hidden md:block" />
            It is a question.”
          </h2>
        </motion.div>
      </section>

      {/* POSTER SECTION */}
      <section className="relative h-[700px] overflow-hidden md:h-[950px]">
        <img
          src="/images/locandina.png"
          alt="EVA Awakening Poster"
          className="h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        <div className="absolute bottom-10 left-6 max-w-4xl md:bottom-20 md:left-12">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400 md:text-sm">
            Cinematic Journey
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            A world suspended between machine, dream and consciousness.
          </h2>

          <p className="max-w-2xl text-base text-gray-300 md:text-xl">
            Travel through psychological spaces shaped by memory, emotion and
            artificial evolution.
          </p>
        </div>
      </section>

      <TrailerSection />

      {/* SOUNDTRACK */}
      <section className="border-t border-gray-900 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-cyan-400">
            Original Soundtrack
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-6xl">
            EVA Awakening Main Theme
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Music is deeply intertwined with EVA’s emotional and psychological
            identity.
          </p>

          <p className="mb-16 text-[11px] uppercase tracking-[0.35em] text-gray-500">
            Headphones recommended for the best experience
          </p>

          {/* VISUALIZER */}
          <div className="mb-16 flex h-[180px] items-end justify-center gap-2 overflow-hidden">
            {[40, 80, 60, 120, 90, 70, 110, 50, 100, 75].map(
              (height, index) => (
                <motion.div
                  key={index}
                  animate={
                    playing
                      ? {
                          height: [
                            `${height}px`,
                            `${height + 40}px`,
                            `${height}px`,
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: index * 0.05,
                  }}
                  className="w-2 rounded-full bg-cyan-400/70"
                  style={{ height: `${height}px` }}
                />
              )
            )}
          </div>

          {/* AUDIO */}
          <audio ref={audioRef} src="/audio/main-theme.mp3" />

          {/* BUTTON */}
          <button
            onClick={toggleAudio}
            className="border border-cyan-400/30 bg-cyan-400/5 px-10 py-4 transition duration-300 hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            <span className="text-sm uppercase tracking-[0.2em]">
              {playing ? "Pause Main Theme" : "Listen to Main Theme"}
            </span>
          </button>

          <p className="mt-10 text-sm tracking-[0.2em] text-gray-500">
            Original soundtrack composed by Gabriele Boschi
          </p>
        </div>
      </section>

      {/* AVAILABLE ON */}
<section className="relative overflow-hidden border-t border-gray-900 px-6 py-28 md:py-40">
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.06),transparent_60%)]" />

  <div className="relative mx-auto max-w-7xl">
    {/* HEADER */}
    <div className="mb-24 text-center">
      <p className="mb-5 text-xs uppercase tracking-[0.45em] text-cyan-400">
        Available On
      </p>

      <h2 className="text-4xl font-bold md:text-7xl">
        Enter the EVA Network
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-2xl">
        Experience EVA Awakening on the next generation of immersive VR
        platforms.
      </p>
    </div>

    {/* PLATFORM CARDS */}
    <div className="grid gap-8 lg:grid-cols-2">
      {/* STEAM */}
      <motion.a
        href="https://store.steampowered.com/"
        target="_blank"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-10 transition duration-500 hover:border-white/30 hover:bg-white/[0.05]"
      >
        {/* GLOW */}
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <img
            src="/images/steam.png"
            alt="Steam"
            className="mb-10 h-16 object-contain opacity-90 md:h-20"
          />

          <h3 className="mb-4 text-3xl font-bold">
            Steam VR
          </h3>

          <p className="mb-10 max-w-xl leading-relaxed text-gray-400">
            Discover EVA Awakening on PC VR with cinematic immersion,
            atmospheric storytelling and advanced environmental interaction.
          </p>

          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/80">
            <span>Add to Wishlist</span>

            <span className="transition duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </motion.a>

      {/* META */}
      <motion.a
        href="https://www.meta.com/experiences/"
        target="_blank"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden border border-cyan-400/10 bg-cyan-400/[0.03] p-10 transition duration-500 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
      >
        {/* GLOW */}
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        </div>

        <div className="relative z-10">
          <img
            src="/images/meta.svg"
            alt="Meta Quest"
            className="mb-10 h-14 object-contain opacity-90 md:h-16"
          />

          <h3 className="mb-4 text-3xl font-bold">
            Meta Quest
          </h3>

          <p className="mb-10 max-w-xl leading-relaxed text-gray-400">
            Step directly inside the EVA system through standalone virtual
            reality designed for immersion, tension and presence.
          </p>

          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
            <span>Explore Platform</span>

            <span className="transition duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>
      </motion.a>
    </div>
  </div>
</section>
{/* LORE FRAGMENTS */}
<section className="border-t border-gray-900 px-6 py-24 md:py-32">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-10 text-xs uppercase tracking-[0.5em] text-gray-600">
      Unstable Transmission Logs
    </p>

    <div className="space-y-10 text-left">
      <div className="border-l border-cyan-400/30 pl-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
          LOG_01
        </p>
        <p className="mt-2 text-lg text-gray-300">
          EVA is not initializing correctly. Memory fragments are overlapping.
        </p>
      </div>

      <div className="border-l border-white/10 pl-6">
        <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
          LOG_02
        </p>
        <p className="mt-2 text-lg text-gray-300">
          Subject perception divergence detected during recursive simulation.
        </p>
      </div>

      <div className="border-l border-cyan-400/20 pl-6">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
          LOG_03
        </p>
        <p className="mt-2 text-lg text-gray-300">
          “If I am aware of you… are you still the observer?”
        </p>
      </div>
    </div>
  </div>
</section>
      {/* FOOTER */}
      <footer className="border-t border-gray-900 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 text-center">
          <img
            src="/images/age-logo.png"
            alt="AGE Infinity Games"
            className="h-20 object-contain opacity-80 md:h-24"
          />

          <div className="space-y-2 text-sm text-gray-500">
            <p>© 2026 AGE Infinity Games</p>

            <p>
              Infinity Games is a registered brand of A.G.E. Project S.r.l.
            </p>

            <p>Viale Misurata 23, 20146 Milano (MI), Italy</p>

            <p>VAT ID: IT11159940961</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a
              href="https://discord.com"
              target="_blank"
              className="transition hover:text-white"
            >
              Join our Discord
            </a>

            <span className="text-gray-700">|</span>

            <a
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <span className="text-gray-700">|</span>

            <a
              href="/cookie-policy"
              className="transition hover:text-white"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}