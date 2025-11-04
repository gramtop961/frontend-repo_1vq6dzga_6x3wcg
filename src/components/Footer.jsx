export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} FrostBolt. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#features" className="hover:text-slate-200 transition-colors">Features</a>
          <span className="opacity-30">•</span>
          <a href="#chat" className="hover:text-slate-200 transition-colors">Чат‑рулетка</a>
          <span className="opacity-30">•</span>
          <a href="#resources" className="hover:text-slate-200 transition-colors">Minecraft</a>
        </div>
      </div>
    </footer>
  );
}
