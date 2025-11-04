import Spline from "@splinetool/react-spline";

export default function HeroCover({ lang = "en" }) {
  const t = {
    en: {
      title: "Connect, Create, and Explore — All in One Place",
      subtitle:
        "Chat with people, make calls, spin into Chat Roulette, set up email & phone, and grab essential Minecraft resources.",
      explore: "Explore Features",
      startChat: "Start Chat Roulette",
    },
    ru: {
      title: "Общайся, создавай и исследуй — всё в одном месте",
      subtitle:
        "Общайтесь, звоните, запускайте чат‑рулетку, настраивайте почту и телефон, берите ресурсы для Minecraft.",
      explore: "Смотреть функции",
      startChat: "Запустить чат‑рулетку",
    },
  }[lang];

  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-black" id="get-started">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.20),transparent_35%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">
          {t.title}
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-3xl mx-auto">
          {t.subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-colors"
          >
            {t.explore}
          </a>
          <a
            href="#chat"
            className="px-6 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white font-semibold ring-1 ring-inset ring-white/20 transition-colors"
          >
            {t.startChat}
          </a>
        </div>
      </div>
    </section>
  );
}
