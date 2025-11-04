import Navbar from "./components/Navbar";
import HeroCover from "./components/HeroCover";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar />
      <main>
        <HeroCover />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
