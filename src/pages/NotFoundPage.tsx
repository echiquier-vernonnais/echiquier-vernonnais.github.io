export default function NotFoundPage() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4 px-4 text-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900">
        404
      </h1>
      <p className="text-slate-600 text-lg">
        Désolé, la page que vous cherchez est introuvable.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-xl text-sm transition-colors"
      >
        Retour à l'accueil
      </a>
    </div>
  );
}
