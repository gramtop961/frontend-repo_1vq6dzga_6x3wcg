import { Phone, MessageCircle, Camera, Mail, ShieldCheck, BookOpen } from "lucide-react";

function FeatureCard({ icon: Icon, title, desc, cta, href }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-300 mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow shadow-blue-600/30 transition-colors"
          >
            {cta}
          </a>
        )}
      </div>
    </div>
  );
}

function ChatRoulette({ lang }) {
  const t = {
    en: {
      title: "Chat Roulette",
      desc: "Anonymous 1-on-1 encounters. Press Start to find a random partner.",
      start: "Start",
      next: "Next",
      stop: "Stop",
      note: "Interface preview only. Real calling requires server integration.",
      streamPlaceholder: "Video stream will appear here",
    },
    ru: {
      title: "Чат‑рулетка",
      desc: "Анонимные встречи один‑на‑один. Нажмите «Начать», чтобы найти случайного собеседника.",
      start: "Начать",
      next: "Следующий",
      stop: "Стоп",
      note: "Для демонстрации интерфейса. Реальные звонки требуют серверной интеграции.",
      streamPlaceholder: "Видео‑поток появится здесь",
    },
  }[lang];

  return (
    <section id="chat" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">{t.title}</h2>
          <p className="mt-2 text-slate-300/90">{t.desc}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-2 p-6 min-h-[280px] bg-gradient-to-br from-black to-slate-900">
              <div className="h-full rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-slate-300">
                {t.streamPlaceholder}
              </div>
            </div>
            <div className="p-6 flex flex-col gap-3 bg-black/60">
              <button className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">{t.start}</button>
              <button className="px-4 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white font-semibold transition-colors">{t.next}</button>
              <button className="px-4 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white font-semibold transition-colors">{t.stop}</button>
              <div className="pt-2 text-xs text-slate-400">{t.note}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources({ lang }) {
  const t = {
    en: {
      heading: "Minecraft Resources",
      sub: "Grab curated links for mods, shaders, and creator guides.",
      official: "Official Site",
      starterTitle: "Starter Guide",
      starterDesc: "Tips, commands, and building basics to get you going fast.",
      shadersTitle: "Shaders & Visuals",
      shadersDesc: "Enhance graphics with popular shaders and OptiFine.",
      modsTitle: "Modding Platforms",
      modsDesc: "Find reliable mods via CurseForge and Fabric.",
      open: "Open", explore: "Explore", browse: "Browse Mods",
    },
    ru: {
      heading: "Ресурсы для Minecraft",
      sub: "Подборка ссылок: моды, шейдеры и гайды для создателей.",
      official: "Официальный сайт",
      starterTitle: "Стартовый гид",
      starterDesc: "Советы, команды и основы строительства для быстрого старта.",
      shadersTitle: "Шейдеры и графика",
      shadersDesc: "Улучшайте картинку популярными шейдерами и OptiFine.",
      modsTitle: "Платформы модов",
      modsDesc: "Надёжные моды на CurseForge и Fabric.",
      open: "Открыть", explore: "Смотреть", browse: "Каталог модов",
    },
  }[lang];

  return (
    <section id="resources" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">{t.heading}</h2>
            <p className="mt-2 text-slate-300/90">{t.sub}</p>
          </div>
          <a
            href="https://www.minecraft.net/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium"
          >
            {t.official}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={BookOpen}
            title={t.starterTitle}
            desc={t.starterDesc}
            cta={t.open}
            href="https://minecraft.fandom.com/wiki/Tutorials/Beginner%27s_guide"
          />
          <FeatureCard
            icon={Camera}
            title={t.shadersTitle}
            desc={t.shadersDesc}
            cta={t.explore}
            href="https://optifine.net/downloads"
          />
          <FeatureCard
            icon={ShieldCheck}
            title={t.modsTitle}
            desc={t.modsDesc}
            cta={t.browse}
            href="https://www.curseforge.com/minecraft/modpacks"
          />
        </div>
      </div>
    </section>
  );
}

export default function Sections({ lang = "en" }) {
  const t = {
    en: {
      featuresChat: "Chat & Communities",
      featuresChatDesc: "Real‑time messaging and discovery. Create spaces and connect instantly.",
      openChat: "Open Chat",
      calls: "Calls",
      callsDesc: "High‑quality voice/video. Easy controls and quick switching.",
      startCall: "Start Call",
      gmail: "Gmail Account Setup",
      gmailDesc: "Step‑by‑step guidance for creating a new Gmail account.",
      createOnGoogle: "Create on Google",
      phoneTitle: "Phone Number",
      phoneDesc: "Add your number for updates. Carrier fees may apply.",
      save: "Save",
      privacy1: "For Gmail, use the official Google sign‑up flow linked above. We never automate email or phone creation—your privacy and security matter.",
      privacy2: "Tip: Enable 2‑Step Verification on your Google Account for added protection.",
      phonePlaceholder: "+1 (555) 000‑0000",
    },
    ru: {
      featuresChat: "Чаты и сообщества",
      featuresChatDesc: "Общение в реальном времени и поиск друзей. Создавайте пространства и подключайтесь мгновенно.",
      openChat: "Открыть чат",
      calls: "Звонки",
      callsDesc: "Высокое качество голоса/видео. Простое управление и быстрые переключения.",
      startCall: "Начать звонок",
      gmail: "Создание аккаунта Gmail",
      gmailDesc: "Пошаговая инструкция по созданию нового аккаунта Gmail.",
      createOnGoogle: "Создать на Google",
      phoneTitle: "Номер телефона",
      phoneDesc: "Добавьте номер для уведомлений. Возможны тарифы оператора.",
      save: "Сохранить",
      privacy1: "Для Gmail используйте официальный процесс регистрации Google по ссылке выше. Мы не автоматизируем создание почты или номера — ваша приватность важна.",
      privacy2: "Совет: включите двухэтапную аутентификацию для дополнительной защиты.",
      phonePlaceholder: "+7 (900) 000‑00‑00",
    },
  }[lang];

  return (
    <section id="features" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={MessageCircle}
            title={t.featuresChat}
            desc={t.featuresChatDesc}
            cta={t.openChat}
            href="#chat"
          />
          <FeatureCard
            icon={Phone}
            title={t.calls}
            desc={t.callsDesc}
            cta={t.startCall}
            href="#chat"
          />
          <FeatureCard
            icon={Mail}
            title={t.gmail}
            desc={t.gmailDesc}
            cta={t.createOnGoogle}
            href="https://accounts.google.com/SignUp"
          />
        </div>
      </div>

      <ChatRoulette lang={lang} />
      <Resources lang={lang} />

      <section id="contact" className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">{t.phoneTitle}</h3>
              <p className="mt-2 text-slate-300/90">{t.phoneDesc}</p>
              <form className="mt-4 flex gap-3">
                <input
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="button" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold">{t.save}</button>
              </form>
            </div>
            <div className="space-y-3 text-sm text-slate-300/90">
              <p>{t.privacy1}</p>
              <p>{t.privacy2}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
