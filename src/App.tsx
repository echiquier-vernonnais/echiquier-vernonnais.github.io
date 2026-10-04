import { Sparkles } from "lucide-react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import ClubPage from "./pages/Club";
import TarifsPage from "./pages/Tarifs";
import EventsPage from "./pages/Events";
import ContactPage from "./pages/Contact";
import MentionsPage from "./pages/Mentions";
import EssaiPage from "./pages/Essai";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Banner Announcement */}
      <div className="bg-amber-50 text-amber-900 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-amber-200/60 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          Séance de découverte offerte chaque samedi après-midi à Vernon !
        </span>
      </div>

      <Header />

      {/* Main Page View Context via React Router Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<ClubPage />} />
          <Route path="/tarifs" element={<TarifsPage />} />
          <Route path="/calendrier" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/essai" element={<EssaiPage />} />
          <Route path="/mentions" element={<MentionsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
