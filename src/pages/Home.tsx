import { GraduationCap, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../components/Routes";
import Carousel from "../components/Carousel";
import Horaires from "../components/Horaires";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-white pt-12 pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Main Text */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
                L'Échiquier Vernonnais
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Rejoignez notre club d'échecs convivial à Vernon. Que vous soyez
                grand débutant, joueur loisir ou compétiteur chevronné,
                perfectionnez votre jeu dans un cadre accueillant et passionné.
              </p>

              <Carousel />
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <Horaires />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <h2 className="text-xs font-bold text-amber-800 tracking-wider uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
            Vie du Club
          </h2>
          <p className="text-3xl font-extrabold text-slate-900">
            Un espace de passion et de convivialité à Vernon
          </p>
          <p className="text-slate-600 text-sm">
            Affilié à la Fédération Française des Échecs (FFÉ), L'Échiquier
            Vernonnais propose des activités adaptées à tous les âges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Cours d'Échecs Débutants
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pédagogie structurée chaque samedi après-midi (14h-15h & 15h-16h).
              Développement de la concentration, du sens de l'anticipation et du
              respect de l'adversaire.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Compétitions & Licences
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Participation aux championnats régionaux et tournois homologués.
              Prise en charge des licences FFÉ A (Compétition) et B (Loisir /
              Rapides).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
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

      {/* Trial Banner Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 sm:p-10 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl font-extrabold">
              Venez essayer ce samedi !
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-600">
              La première séance est offerte et sans aucun engagement.
              Rejoignez-nous de 14h à 18h.
            </p>
          </div>
          <Link
            to={ROUTES.contact.path}
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl transition-colors shrink-0 text-sm"
          >
            {ROUTES.contact.label}
          </Link>
        </div>
      </section>
    </div>
  );
}
