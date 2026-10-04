import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function EssaiPage() {
  const [trialForm, setTrialForm] = useState({
    name: "",
    email: "",
    slot: "Cours Débutants (14h-15h)",
    message: "",
  });
  const [trialSubmitted, setTrialSubmitted] = useState(false);

  const handleTrialSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTrialSubmitted(true);
    setTimeout(() => setTrialSubmitted(false), 6000);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Découverte Offerte
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Réserver votre Séance d'Essai Gratuite
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            Profitez d'un premier cours offert le samedi après-midi pour
            découvrir le club, nos entraîneurs et nos membres !
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-900">
              Formulaire d'Inscription d'Essai
            </h3>
            <p className="text-xs text-slate-500">
              Choisissez votre créneau préféré pour votre venue du samedi
              après-midi à la Maison des Associations de Vernon.
            </p>
          </div>

          <form onSubmit={handleTrialSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nom & Prénom
                </label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={trialForm.name}
                  onChange={(e) =>
                    setTrialForm({ ...trialForm, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Adresse Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={trialForm.email}
                  onChange={(e) =>
                    setTrialForm({ ...trialForm, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Choix du créneau du samedi
              </label>
              <select
                value={trialForm.slot}
                onChange={(e) =>
                  setTrialForm({ ...trialForm, slot: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
              >
                <option>Cours Débutants (14h-15h)</option>
                <option>Débutants / Perfectionnement (15h-16h)</option>
                <option>Cours Joueurs Confirmés (16h-17h)</option>
                <option>Jeux Libres (14h-18h)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Remarques (Optionnel)
              </label>
              <textarea
                rows={3}
                placeholder="Indiquez par exemple votre expérience aux échecs ou si l'essai concerne un enfant..."
                value={trialForm.message}
                onChange={(e) =>
                  setTrialForm({ ...trialForm, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
              />
            </div>

            {trialSubmitted && (
              <div className="p-4 rounded-xl text-xs font-medium bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Votre demande de séance d'essai gratuite a bien été
                  enregistrée. Nous vous attendons ce samedi !
                </span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl text-sm transition-colors"
            >
              Confirmer ma réservation offerte
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
