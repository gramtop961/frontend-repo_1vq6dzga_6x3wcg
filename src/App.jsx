import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import HeroCover from "./components/HeroCover";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en");
  const [enable3D, setEnable3D] = useState(true);

  // Choose a sensible default for weak devices: disable 3D when reduced motion is preferred or low device memory
  useEffect(() => {
    try {
      const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Device Memory API (not supported everywhere). If available and small, prefer lite.
      // @ts-ignore
      const mem = typeof navigator !== "undefined" && navigator.deviceMemory ? navigator.deviceMemory : undefined;
      if (prefersReducedMotion || (mem && mem <= 2)) {
        setEnable3D(false);
      }
    } catch (_) {
      // ignore detection failures
    }
  }, []);

  const toggleLang = () => setLang((l) => (l === "en" ? "ru" : "en"));
  const togglePerf = () => setEnable3D((v) => !v);

  const perfLabel = useMemo(
    () =>
      ({
        en: enable3D ? "Lite" : "3D",
        ru: enable3D ? "Лайт" : "3D",
      })[lang],
    [enable3D, lang]
  );

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar lang={lang} onToggleLang={toggleLang} onTogglePerf={togglePerf} perfLabel={perfLabel} />
      <main>
        <HeroCover lang={lang} enable3D={enable3D} />
        <Sections lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
