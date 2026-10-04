import { GraduationCap, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClubPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Vie du Club
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Un espace de passion et de convivialité à Vernon
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
            Affilié à la Fédération Française des Échecs (FFÉ), L'Échiquier
            Vernonnais propose des activités adaptées à tous les âges.
          </p>
        </div>
      </section>

      {/* 3 Main Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Cours d'Échecs Débutants
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pédagogie structurée chaque samedi après-midi (14h-15h & 15h-16h).
              Développement de la concentration, du sens de l'anticipation et du
              respect de l'adversaire.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Compétitions & Licences
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Participation aux championnats régionaux et tournois homologués.
              Prise en charge des licences FFÉ A (Compétition) et B (Loisir /
              Rapides).
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Jeu Libre & Bénévolat
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Atmosphère chaleureuse pour jouer en loisir (14h-18h), échanger
              des idées d'ouvertures ou s'investir dans la vie associative
              locale à Vernon.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Saturday Schedule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Détail des créneaux du Samedi après-midi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Maison des Associations / Salle Municipale, 27200 Vernon
            </p>
          </div>

          <div className="grid gap-4">
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="px-3 py-1 bg-amber-400 text-slate-900 font-bold text-xs rounded-lg shrink-0">
                14h – 18h
              </span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Jeux Libres
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Échiquiers à disposition tout l'après-midi pour parties
                  amicales et entraînements.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-lg shrink-0">
                14h – 15h
              </span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Cours d'Échecs Débutants
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Apprentissage des règles, déplacements, tactiques de base et
                  finales simples.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-lg shrink-0">
                15h – 16h
              </span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Débutants / Perfectionnement
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Analyse de parties, ouvertures classiques, structures de pions
                  et calcul.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-lg shrink-0">
                16h – 17h
              </span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Cours Joueurs Confirmés
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Stratégie avancée, préparation d'ouvertures complexes et étude
                  de grands maîtres.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm rounded-xl transition-colors"
            >
              Contactez-nous pour vous inscrire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
