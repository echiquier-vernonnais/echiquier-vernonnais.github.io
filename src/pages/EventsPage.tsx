import SEOMeta from "../components/SEOMeta";
import ClubCalendar from "../components/ClubCalendar";
import type { EventType } from "../components/EventList";
import { CalendarDays } from "lucide-react";

const EVENTS: Array<EventType> = [
  {
    title: "cours",
    date: "2026-09-12",
    type: "cours",
  },
  {
    title: "cours",
    date: "2026-09-19",
    type: "cours",
  },
  {
    title: "VERNON CHESS BAR",
    date: "2026-09-24",
    type: "Vie du club",
  },
  {
    title: "tournoi interne",
    date: "2026-09-26",
    type: "tournoi",
  },
  {
    title: "cours",
    date: "2026-10-03",
    type: "cours",
  },
  {
    title: "tournoi interne",
    date: "2026-10-10",
    type: "tournoi",
  },
  {
    title: "Interclubs",
    date: "2026-10-11",
    type: "Matchs par équipe",
  },
  {
    title: "analyse compétition",
    date: "2026-10-13",
    type: "Vie du club",
  },
  {
    title: "cours",
    date: "2026-10-17",
    type: "cours",
  },
  {
    title: "Coupe LOUBATIERE",
    date: "2026-10-18",
    type: "tournoi",
  },
  {
    title: "VERNON CHESS BAR",
    date: "2026-10-22",
    type: "Vie du club",
  },
  {
    title: "PIZZA BLITZ",
    date: "2026-10-30",
    type: "tournoi",
  },
  {
    title: "tournoi interne",
    date: "2026-11-07",
    type: "tournoi",
  },
  {
    title: "Interclubs",
    date: "2026-11-08",
    type: "Matchs par équipe",
  },
  {
    title: "analyse compétition",
    date: "2026-11-10",
    type: "Vie du club",
  },
  {
    title: "PIZZA BLITZ",
    date: "2026-11-13",
    type: "tournoi",
  },
  {
    title: "cours",
    date: "2026-11-14",
    type: "cours",
  },
  {
    title: "VERNON CHESS BAR",
    date: "2026-11-19",
    type: "Vie du club",
  },
  {
    title: "cours",
    date: "2026-11-21",
    type: "cours",
  },
  {
    title: "cours",
    date: "2026-11-28",
    type: "cours",
  },
  {
    title: "Interclubs",
    date: "2026-11-29",
    type: "Matchs par équipe",
  },
  {
    title: "analyse compétition",
    date: "2026-12-01",
    type: "Vie du club",
  },
  {
    title: "PIZZA BLITZ",
    date: "2026-12-04",
    type: "tournoi",
  },
  {
    title: "cours",
    date: "2026-12-05",
    type: "cours",
  },
  {
    title: "cours",
    date: "2026-12-12",
    type: "cours",
  },
  {
    title: "Interclubs",
    date: "2026-12-13",
    type: "Matchs par équipe",
  },
  {
    title: "analyse compétition",
    date: "2026-12-15",
    type: "Vie du club",
  },
  {
    title: "tournoi interne",
    date: "2026-12-19",
    type: "tournoi",
  },
  {
    title: "VERNON CHESS BAR",
    date: "2026-12-22",
    type: "Vie du club",
  },
  {
    title: "PIZZA BLITZ",
    date: "2027-01-08",
    type: "tournoi",
  },
  {
    title: "cours",
    date: "2027-01-09",
    type: "cours",
  },
  {
    title: "cours",
    date: "2027-01-16",
    type: "cours",
  },
  {
    title: "Interclubs",
    date: "2027-01-17",
    type: "Matchs par équipe",
  },
  {
    title: "analyse compétition",
    date: "2027-01-19",
    type: "Vie du club",
  },
  {
    title: "tournoi interne",
    date: "2027-01-23",
    type: "tournoi",
  },
  {
    title: "VERNON CHESS BAR",
    date: "2027-01-28",
    type: "Vie du club",
  },
  {
    title: "cours",
    date: "2027-01-30",
    type: "cours",
  },
  {
    title: "Interclubs",
    date: "2027-01-31",
    type: "Matchs par équipe",
  },
  {
    title: "analyse compétition",
    date: "2027-02-02",
    type: "Vie du club",
  },
  {
    title: "open FIDE",
    date: "2027-02-06",
    type: "tournoi",
  },
  {
    title: "open FIDE",
    date: "2027-02-07",
    type: "tournoi",
  },
  {
    title: "PIZZA BLITZ",
    date: "2027-02-12",
    type: "tournoi",
  },
  {
    title: "cours",
    date: "2027-02-13",
    type: "cours",
  },
  {
    title: "tournoi interne",
    date: "2027-02-20",
    type: "tournoi",
  },
  {
    title: "VERNON CHESS BAR",
    date: "2027-02-25",
    type: "Vie du club",
  },
];

export default function EventsPage() {
  return (
    <>
      <SEOMeta routeKey="events" />
      <div className="bg-chess-pattern pb-16">
        <section className="border-b border-slate-100 py-12">
          <div className="bg-glass max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              <div className="flex items-center gap-2">
                <CalendarDays />
                Agenda du club
              </div>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl">
              Retrouvez les évènements qui rythment la vie du club
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClubCalendar events={EVENTS} />;
        </section>
      </div>
    </>
  );
}
