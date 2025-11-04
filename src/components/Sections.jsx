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

function ChatRoulette() {
  return (
    <section id="chat" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Чат‑рулетка</h2>
          <p className="mt-2 text-slate-300/90">
            Анонимные встречи один‑на‑один. Нажмите «Начать», чтобы найти случайного собеседника.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-2 p-6 min-h-[280px] bg-gradient-to-br from-black to-slate-900">
              <div className="h-full rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-slate-300">
                Видео-поток появится здесь
              </div>
            </div>
            <div className="p-6 flex flex-col gap-3 bg-black/60">
              <button className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors">Начать</button>
              <button className="px-4 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white font-semibold transition-colors">Следующий</button>
              <button className="px-4 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-500 text-white font-semibold transition-colors">Стоп</button>
              <div className="pt-2 text-xs text-slate-400">
                Для демонстрации интерфейса. Реальные звонки требуют серверной интеграции.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Minecraft Resources</h2>
            <p className="mt-2 text-slate-300/90">Grab curated links for mods, shaders, and creator guides.</p>
          </div>
          <a
            href="https://www.minecraft.net/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium"
          >
            Official Site
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={BookOpen}
            title="Starter Guide"
            desc="Tips, commands, and building basics to get you going fast."
            cta="Open Guide"
            href="https://minecraft.fandom.com/wiki/Tutorials/Beginner%27s_guide"
          />
          <FeatureCard
            icon={Camera}
            title="Shaders & Visuals"
            desc="Enhance graphics with popular shaders and OptiFine."
            cta="Explore"
            href="https://optifine.net/downloads"
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Modding Platforms"
            desc="Find reliable mods via CurseForge and Fabric."
            cta="Browse Mods"
            href="https://www.curseforge.com/minecraft/modpacks"
          />
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <section id="features" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={MessageCircle}
            title="Chat & Communities"
            desc="Real‑time messaging and discovery. Create spaces and connect instantly."
            cta="Open Chat"
            href="#chat"
          />
          <FeatureCard
            icon={Phone}
            title="Calls"
            desc="High‑quality voice/video. Easy controls and quick switching."
            cta="Start Call"
            href="#chat"
          />
          <FeatureCard
            icon={Mail}
            title="Gmail Account Setup"
            desc="Step‑by‑step guidance for creating a new Gmail account."
            cta="Create on Google"
            href="https://accounts.google.com/SignUp"
          />
        </div>
      </div>

      <ChatRoulette />
      <Resources />

      <section id="contact" className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Phone Number</h3>
              <p className="mt-2 text-slate-300/90">Add your number for updates. Carrier fees may apply.</p>
              <form className="mt-4 flex gap-3">
                <input
                  type="tel"
                  placeholder="+1 (555) 000‑0000"
                  className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="button" className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold">Save</button>
              </form>
            </div>
            <div className="space-y-3 text-sm text-slate-300/90">
              <p>
                For Gmail, use the official Google sign‑up flow linked above. We never automate email or phone creation—your privacy and security matter.
              </p>
              <p>
                Tip: Enable 2‑Step Verification on your Google Account for added protection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
