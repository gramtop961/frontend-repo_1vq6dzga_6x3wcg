import { Snowflake, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sky-300">
          <Snowflake className="w-6 h-6" />
          <Zap className="w-5 h-5" />
          <span className="font-semibold tracking-wide text-sky-200">FrostBolt</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#chat" className="hover:text-white transition-colors">Чат-рулетка</a>
          <a href="#resources" className="hover:text-white transition-colors">Minecraft</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a
          href="#get-started"
          className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-colors"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
