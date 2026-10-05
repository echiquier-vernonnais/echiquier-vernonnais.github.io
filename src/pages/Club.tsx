import { GraduationCap, Trophy, Users } from "lucide-react";
import Carousel from "../components/Carousel";
import Horaires from "../components/Horaires";

export default function ClubPage() {
  return (
    <div className="bg-chess-pattern space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-glass border-b border-slate-100 py-12">
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-2">
          <Carousel />
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

      <section className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <Horaires />
        </div>
      </section>
    </div>
  );
}
