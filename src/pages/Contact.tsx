import { CheckCircle2, Clock, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "Séance d'essai gratuite - Cours Débutants (14h-15h)",
    message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 6000);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Contact & Accès
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Rejoignez-nous à Vernon
          </h1>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Info Details */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-600 text-sm leading-relaxed">
              Une question sur les inscriptions, les créneaux des cours ou le
              bénévolat ? Venez nous rencontrer le samedi après-midi ou
              écrivez-nous directement via le formulaire.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    Adresse du Club
                  </div>
                  <div className="text-xs text-slate-600">
                    Maison des Associations / Salle Municipale
                  </div>
                  <div className="text-xs text-slate-600">
                    27200 Vernon, Normandie
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    Horaires des séances
                  </div>
                  <div className="text-xs text-slate-600">
                    Chaque samedi après-midi : 14h00 – 18h00 (Cours & Jeux
                    libres)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Email</div>
                  <div className="text-xs text-slate-600">
                    echiquier.vernonnais@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Demande de Renseignements / Séance d'essai
            </h3>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nom & Prénom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="votre@email.com"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Créneau ou sujet d'intérêt
                </label>
                <select
                  value={contactForm.subject}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, subject: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
                >
                  <option>
                    Séance d'essai gratuite - Cours Débutants (14h-15h)
                  </option>
                  <option>
                    Séance d'essai gratuite - Perfectionnement (15h-16h)
                  </option>
                  <option>Séance d'essai gratuite - Confirmés (16h-17h)</option>
                  <option>Jeux libres (14h-18h)</option>
                  <option>
                    Inscription Adulte (Licence A 70€ / Licence B 30€)
                  </option>
                  <option>
                    Inscription Jeune -20 ans (Licence A 40€ / Licence B 20€)
                  </option>
                  <option>Renseignements généraux / Compétitions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Précisez votre niveau ou vos questions..."
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:bg-white"
                />
              </div>

              {contactSubmitted && (
                <div className="p-3 rounded-lg text-xs font-medium bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Merci pour votre message ! L'Échiquier Vernonnais vous
                    répondra très rapidement.
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl text-sm transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
