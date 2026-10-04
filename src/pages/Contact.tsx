import { Clock, Mail, MapPin } from "lucide-react";
import ContactEmail from "../components/ContactEmail";
import ClubLocation from "../components/ClubLocation";

export default function ContactPage() {
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
                  <ClubLocation />
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
                  <ContactEmail />
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Nous rejoindre
            </h3>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.2357259573096!2d1.4868030766958078!3d49.082160671363354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6c9edae1aa8c5%3A0x892d7a3a9f148ccf!2sMaison%20des%20Associations%20-%20Espace%20Marcel%20Beaufour!5e0!3m2!1sfr!2sfr!4v1791140764623!5m2!1sfr!2sfr"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
