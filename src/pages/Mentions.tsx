import { Building2, FileText } from "lucide-react";

export default function MentionsPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Informations Légales
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Mentions Légales & Informations Pratiques
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Card 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-600" />
            Identification de l'Association
          </h3>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 leading-relaxed">
            <li>
              <strong>Nom :</strong> L'Échiquier Vernonnais
            </li>
            <li>
              <strong>Lieu des activités :</strong> Maison des Associations /
              Salle Municipale, 27200 Vernon, Normandie
            </li>
            <li>
              <strong>Email de contact :</strong> echiquier.vernonnais@gmail.com
            </li>
            <li>
              <strong>Affiliation :</strong> Fédération Française des Échecs
              (FFÉ)
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-600" />
            Accès & Statut des Licences
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Le club accueille ses adhérents tous les samedis de 14h00 à 18h00.
            Les cotisations sont valables pour la saison sportive allant de
            septembre à juin. La délivrance des licences FFÉ (A et B) est gérée
            directement par le bureau de l'association.
          </p>
        </div>
      </section>
    </div>
  );
}
