import { MapPin } from "lucide-react";
import { useState } from "react";

export default function EventsPage() {
  const [eventFilter, setEventFilter] = useState("all");

  const events = [
    {
      id: "interne",
      badge: "Samedi après-midi",
      type: "Interne",
      title: "Séance de Reprise & Portes Ouvertes",
      description:
        "Séance d'initiation et d'inscription pour les nouveaux membres. Jeux libres et cours de 14h00 à 18h00.",
      location: "Vernon",
      entry: "Entrée Libre",
    },
    {
      id: "licence-b",
      badge: "Prochainement",
      type: "Licence B",
      title: "Tournoi Rapide Homologué",
      description:
        "7 rondes de 15 min + 5 sec/coup. Ouvert aux joueurs titulaires d'une Licence B ou A.",
      location: "Salle du Club",
      entry: "Inscription requise",
    },
    {
      id: "licence-a",
      badge: "Saison en cours",
      type: "Licence A",
      title: "Championnat Régional par Équipe",
      description:
        "Matchs aller-retour le dimanche. Lente cadencée homologuée FFÉ/FIDE.",
      location: "Normandie",
      entry: "Équipe Première",
    },
  ];

  const filteredEvents =
    eventFilter === "all" ? events : events.filter((e) => e.id === eventFilter);

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Agenda
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Prochains Événements & Tournois
          </h1>
        </div>
      </section>

      {/* Events Filter + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
          <button
            onClick={() => setEventFilter("all")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              eventFilter === "all"
                ? "bg-amber-400 text-slate-900 font-bold"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setEventFilter("licence-a")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              eventFilter === "licence-a"
                ? "bg-amber-400 text-slate-900 font-bold"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Licence A
          </button>
          <button
            onClick={() => setEventFilter("licence-b")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              eventFilter === "licence-b"
                ? "bg-amber-400 text-slate-900 font-bold"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Licence B / Rapides
          </button>
          <button
            onClick={() => setEventFilter("interne")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              eventFilter === "interne"
                ? "bg-amber-400 text-slate-900 font-bold"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            Tournois Internes
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredEvents.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />{" "}
                  {item.location}
                </span>
                <span className="font-semibold text-amber-800">
                  {item.entry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
