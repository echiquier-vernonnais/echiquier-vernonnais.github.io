import {
  ChessKing,
  ChessKnight,
  ChessPawn,
  ChessQueen,
  Clock,
  ExternalLink,
} from "lucide-react";
import { YAPLA_INSCRIPTION_URL } from "../pages/Tarifs";

export default function Horaires() {
  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative">
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
        <Clock className="w-5 h-5 text-amber-600" />
        Horaires du Samedi Après-midi
      </h3>

      <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
        <li className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
          <div className="p-1.5 rounded bg-amber-400 text-slate-900 font-bold text-xs shrink-0 mt-0.5">
            14h-18h
          </div>
          <div>
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <ChessKing className="w-3.5 h-3.5 text-amber-600" />
              <span>Jeux Libres</span>
            </div>
            <div className="text-xs text-slate-600 mt-0.5">
              Échiquiers à disposition tout l'après-midi pour parties amicales
              et entraînements.
            </div>
          </div>
        </li>

        <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
          <div className="p-1.5 rounded bg-amber-100 text-amber-900 font-bold text-xs shrink-0">
            14h
          </div>
          <div>
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <ChessPawn className="w-3.5 h-3.5 text-amber-600" />
              <span>Cours d'Échecs Débutants</span>
            </div>
            <div className="text-xs text-slate-500">
              <span>
                Apprentissage des règles, déplacements, tactiques de base et
                finales simples.
              </span>
            </div>
          </div>
        </li>

        <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
          <div className="p-1.5 rounded bg-amber-100 text-amber-900 font-bold text-xs shrink-0">
            15h
          </div>
          <div>
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <ChessKnight className="w-3.5 h-3.5 text-amber-600" />
              <span>Débutants / Perfectionnement</span>
            </div>
            <div className="text-xs text-slate-500">
              Analyse de parties, ouvertures classiques, structures de pions et
              calcul.
            </div>
          </div>
        </li>

        <li className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
          <div className="p-1.5 rounded bg-amber-100 text-amber-900 font-bold text-xs shrink-0">
            16h
          </div>
          <div>
            <div className="font-bold text-amber-950 flex items-center gap-1.5">
              <ChessQueen className="w-3.5 h-3.5 text-amber-600" />
              <span>Cours Joueurs Confirmés</span>
            </div>
            <div className="text-xs text-slate-500">
              Stratégie avancée, préparation d'ouvertures complexes et étude de
              grands maîtres.
            </div>
          </div>
        </li>
      </ul>
      <a
        href={YAPLA_INSCRIPTION_URL}
        className="mt-6 w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        S'inscrire en ligne
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}
