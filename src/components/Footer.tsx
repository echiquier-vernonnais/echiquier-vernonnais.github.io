import { ChessQueen, Clock, Mail, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import ContactEmail from "./ContactEmail";
import ClubLocation from "./ClubLocation";
import { ROUTES } from "./Routes";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200 text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <a
                href="/"
                className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700"
              >
                <ChessQueen className="w-5 h-5" />
              </a>
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

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
              Pages du site
            </h4>
            <ul className="space-y-2">
              {Object.values(ROUTES).map((r) => (
                <li key={r.path}>
                  <Link
                    to={r.path}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
                <ClubLocation />
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <ContactEmail />
              </li>
            </ul>
          </div>

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
                <div className="text-[11px] text-slate-500">Licences A & B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
