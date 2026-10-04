import {
  ChessQueen,
  ChevronRight,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "./Routes";

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Link */}
        <Link
          to="/"
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all">
            <ChessQueen className="w-5 h-5" />
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

        <nav className="hidden xl:flex items-center gap-1">
          {Object.values(ROUTES).map((item) => {
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

        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/essai"
            className="px-4 py-2.5 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-900" />
            <span>Séance d'essai gratuite</span>
          </Link>
        </div>

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

      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {Object.values(ROUTES).map((item) => {
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
  );
}
