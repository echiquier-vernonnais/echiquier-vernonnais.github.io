import {
  ChevronRight,
  Clock,
  Crown,
  Mail,
  MapPin,
  Menu,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ClubPage from "./pages/Club";
import TarifsPage from "./pages/Tarifs";
import EventsPage from "./pages/events";
import ContactPage from "./pages/contact";
import MentionsPage from "./pages/Mentions";
import EssaiPage from "./pages/Essai";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}

function AppLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/a-propos", label: "Le Club & Cours" },
    { path: "/tarifs", label: "Tarifs & Cotisations" },
    { path: "/calendrier", label: "Calendrier" },
    { path: "/contact", label: "Contact & Accès" },
    { path: "/essai", label: "Séance d'Essai", isBadge: true },
    { path: "/mentions", label: "Mentions & Infos" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans flex flex-col antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Top Banner Announcement */}
      <div className="bg-amber-50 text-amber-900 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-amber-200/60 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          Séance de découverte offerte chaque samedi après-midi à Vernon !
        </span>
      </div>

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Link */}
          <Link
            to="/"
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 block leading-tight">
                L'Échiquier Vernonnais
              </span>
              <span className="text-xs text-amber-700 font-semibold tracking-wide uppercase flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Vernon - Normandie
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.isBadge) return null;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-amber-50 text-amber-900 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/essai"
              className="px-4 py-2.5 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span>Séance d'essai gratuite</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive
                      ? "bg-amber-50 text-amber-900 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-amber-600" />
                </Link>
              );
            })}
          </div>
        )}
      </header>

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

      {/* Footer Component */}
      <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200 text-xs">
            {/* Club Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-base font-bold text-slate-900 block">
                    L'Échiquier Vernonnais
                  </span>
                  <span className="text-[11px] text-amber-800 font-semibold uppercase">
                    Vernon - Normandie
                  </span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Club d'échecs de Vernon, affilié à la Fédération Française des
                Échecs (FFÉ).
              </p>
            </div>

            {/* Nav Links */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
                Pages du site
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-amber-800 transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/a-propos"
                    className="hover:text-amber-800 transition-colors"
                  >
                    Le Club & Cours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tarifs"
                    className="hover:text-amber-800 transition-colors"
                  >
                    Tarifs & Cotisations
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calendrier"
                    className="hover:text-amber-800 transition-colors"
                  >
                    Calendrier & Événements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/essai"
                    className="hover:text-amber-800 transition-colors"
                  >
                    Séance d'essai gratuite
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Practical Info */}
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
                Informations
              </h4>
              <ul className="space-y-2 text-slate-500">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Chaque samedi : 14h00 – 18h00</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    Maison des Associations / Salle Municipale, 27200 Vernon
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>echiquier.vernonnais@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Affiliation Badge */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                Affiliation
              </h4>
              <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                <Shield className="w-7 h-7 text-amber-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-xs">
                    Club affilié FFÉ
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Licences A & B
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © L'Échiquier Vernonnais. Tous droits réservés. Club affilié à la
              FFÉ.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/mentions" className="hover:text-amber-800">
                Mentions légales & Infos pratiques
              </Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-amber-800">
                Vernon
              </Link>
            </div>
          </div>
        </div>
      </footer>
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
