const CLUB_EMAIL = "echiquier.vernonnais@gmail.com";

export default function ContactEmail() {
  return (
    <a
      className="text-xs hover:text-amber-700 hover:underline"
      href={`mailto:${CLUB_EMAIL}`}
    >
      {CLUB_EMAIL}
    </a>
  );
}
