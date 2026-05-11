export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <img
            src="/images/eva-logo.png"
            alt="EVA Awakening"
            className="mb-8 w-full max-w-3xl"
          />

          <p className="mb-10 max-w-3xl text-xl text-gray-300 md:text-3xl">
            A VR Psychological Sci-Fi Experience
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://store.steampowered.com/"
              target="_blank"
              className="border border-white px-8 py-4 transition hover:bg-white hover:text-black"
            >
              Wishlist on Steam
            </a>

            <a
              href="https://www.meta.com/experiences/"
              target="_blank"
              className="border border-blue-500 px-8 py-4 text-blue-400 transition hover:border-blue-300 hover:text-white"
            >
              Meta Quest
            </a>

            <a
              href="https://www.youtube.com/watch?v=piROrMDLRkU"
              target="_blank"
              className="border border-gray-700 px-8 py-4 text-gray-300 transition hover:border-white hover:text-white"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-500">
              The Experience
            </p>

            <h2 className="mb-8 text-5xl font-bold">
              Humanity. Memory. Control.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              EVA Awakening is a cinematic VR psychological sci-fi experience
              where reality, memory and artificial consciousness collide.
            </p>

            <p>
              Explore abandoned environments, solve mechanical puzzles and face
              the growing presence of EVA — an artificial intelligence that may
              be guiding you… or manipulating you.
            </p>

            <p>
              Every corridor hides fragments of the truth.
            </p>
          </div>
        </div>
      </section>

      {/* VISUAL */}
      <section className="relative h-[900px] w-full overflow-hidden">
        <img
          src="/images/locandina.png"
          alt="EVA Awakening Visual"
          className="h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

        <div className="absolute bottom-24 left-10 max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-400">
            Cinematic Journey
          </p>

          <h2 className="mb-6 text-6xl font-bold">
            A world suspended between machine and consciousness.
          </h2>

          <p className="text-xl text-gray-300">
            Discover the secrets hidden behind the awakening of EVA.
          </p>
        </div>
      </section>

      {/* TRAILER */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-500">
          Official Trailer
        </p>

        <div className="aspect-video overflow-hidden border border-gray-800">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/piROrMDLRkU"
            title="EVA Awakening Trailer"
            allowFullScreen
          />
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="border-t border-gray-900 px-6 py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 md:flex-row">
          <img
            src="/images/steam.png"
            alt="Steam"
            className="h-20 object-contain opacity-80"
          />

          <img
            src="/images/meta.png"
            alt="Meta Quest"
            className="h-20 object-contain opacity-80"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-900 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <img
              src="/images/age-logo.png"
              alt="AGE Infinity Games"
              className="h-12 object-contain opacity-80"
            />

            <p className="text-sm text-gray-500">
              © 2026 AGE Infinity Games
            </p>
          </div>

          <a
            href="https://discord.com"
            target="_blank"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Join our Discord
          </a>
        </div>
      </footer>
    </main>
  );
}