import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroCover from "./components/HeroCover";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "ru" : "en"));

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar lang={lang} onToggleLang={toggleLang} />
      <main>
        <HeroCover lang={lang} />
        <Sections lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
