import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export const YAPLA_INSCRIPTION_URL =
  "https://echiquier-vernonnais.s2.yapla.com/fr/event-119423";

export default function TarifsPage() {
  return (
    <div className="bg-chess-pattern space-y-16 pb-16">
      <section className="bg-glass border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Cotisations annuelles de l'Échiquier Vernonnais
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
            Tarifs annuels de septembre à juin selon le type de licence FFÉ (A
            ou B). Séance de découverte offerte le samedi après-midi.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tarif Jeunes */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between relative">
            <div>
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold rounded-full border border-amber-200/80 mb-4">
                Enfants & Ados (-20 ans)
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Tarif Jeunes
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Accès aux cours encadrés du samedi après-midi (14h-15h &
                15h-16h) et aux jeux libres.
              </p>

              <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Licence A (Compétition)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Accès à tous les tournois & championnats
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-amber-800">
                    40 €{" "}
                    <span className="text-xs text-slate-500 font-normal">
                      / an
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Licence B (Loisir / Rapides)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Jeux libres, cours & tournois rapides
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-amber-800">
                    20 €{" "}
                    <span className="text-xs text-slate-500 font-normal">
                      / an
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cours pédagogiques chaque samedi</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accès au matériel et jeux libres (14h-18h)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Accompagnement aux tournois FFÉ</span>
                </li>
              </ul>
            </div>

            <Link
              to={YAPLA_INSCRIPTION_URL}
              target="_blank"
              className="block w-full text-center py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors"
            >
              <span>S'inscrire en ligne</span>
            </Link>
          </div>

          {/* Tarif Adultes */}
          <div className="bg-white border-2 border-amber-400 rounded-2xl p-8 flex flex-col justify-between relative shadow-xs">
            <div className="absolute -top-3 right-6 bg-amber-400 text-slate-900 font-bold text-xs px-3 py-1 rounded-full uppercase">
              Formule Adultes
            </div>

            <div>
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold rounded-full border border-amber-200/80 mb-4">
                Adultes & Seniors
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Tarif Adultes
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mb-6">
                Accès complet à toutes les séances, cours de perfectionnement,
                confirmés et jeux libres.
              </p>

              <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Licence A (Compétition)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Championnats par équipe, lentes & homologués
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-amber-800">
                    70 €{" "}
                    <span className="text-xs text-slate-500 font-normal">
                      / an
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      Licence B (Loisir / Rapides)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Jeux libres, cours & tournois rapides
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-amber-800">
                    30 €{" "}
                    <span className="text-xs text-slate-500 font-normal">
                      / an
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Accès illimité aux séances et jeux libres le samedi
                    (14h-18h)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cours de perfectionnement & joueurs confirmés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Participation aux compétitions par équipe (Licence A)
                  </span>
                </li>
              </ul>
            </div>

            <Link
              to={YAPLA_INSCRIPTION_URL}
              className="block w-full text-center py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl text-xs sm:text-sm transition-colors"
              target="_blank"
            >
              S'inscrire en ligne
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
