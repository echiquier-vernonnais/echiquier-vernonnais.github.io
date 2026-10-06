import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { fr } from "date-fns/locale";
import { useMemo, useState } from "react";
import { EventIcon, EventList, type EventType } from "./EventList";
import { TYPE_CONFIG } from "./calendar-colors";

const WEEK_DAYS = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

export default function ClubCalendar({ events }: { events: Array<EventType> }) {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));
  const [selectedDate, setSelectedDate] = useState(today);

  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    return eachDayOfInterval({
      start: startOfWeek(monthStart, { weekStartsOn: 1 }),
      end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
    });
  }, [currentMonth]);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, EventType[]>();
    for (const event of events) {
      const key = event.date;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(event);
    }
    return map;
  }, [events]);

  const selectedEvents =
    eventsByDate.get(format(selectedDate, "yyyy-MM-dd")) ?? [];

  const upcomingEvents = useMemo(() => {
    const today = new Date();
    const todayStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    return events
      .filter((event) => parseEventDate(event.date) >= todayStart)
      .sort(
        (a, b) =>
          parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime(),
      )
      .slice(0, 5);
  }, [events]);

  function goToPreviousMonth() {
    setCurrentMonth((month) => subMonths(month, 1));
  }
  function goToNextMonth() {
    setCurrentMonth((month) => addMonths(month, 1));
  }
  function goToToday() {
    setCurrentMonth(startOfMonth(today));
    setSelectedDate(today);
  }

  return (
    <section className="w-full space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {format(currentMonth, "MMMM yyyy", { locale: fr })}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goToToday}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
          >
            Aujourd’hui
          </button>
          <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            <button
              onClick={goToPreviousMonth}
              aria-label="Mois précédent"
              className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNextMonth}
              aria-label="Mois suivant"
              className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50/70">
            {WEEK_DAYS.map((day) => (
              <div
                key={day}
                className="px-2 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 sm:py-4 sm:text-xs"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {calendarDays.map((day) => {
              const dateKey = format(day, "yyyy-MM-dd");
              const dayEvents = eventsByDate.get(dateKey) ?? [];
              const isCurrentMonth = isSameMonth(day, currentMonth);
              const isSelected = isSameDay(day, selectedDate);
              return (
                <button
                  key={dateKey}
                  onClick={() => setSelectedDate(day)}
                  className={[
                    "group relative min-h-[88px] border-b border-r border-slate-100 p-1.5 text-left transition sm:min-h-[125px] sm:p-2",
                    "hover:bg-amber-50/50",
                    !isCurrentMonth && "bg-slate-50/50",
                    isSelected && "bg-amber-50",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="flex justify-end">
                    <span
                      className={[
                        "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold sm:h-8 sm:w-8 sm:text-sm",
                        !isCurrentMonth && "text-slate-300",
                        isCurrentMonth && !isToday(day) && "text-slate-700",
                        isToday(day) && "bg-slate-900 text-white shadow-sm",
                        isSelected &&
                          !isToday(day) &&
                          "bg-amber-500 text-white",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {format(day, "d")}
                    </span>
                  </div>
                  <div className="mt-2 hidden space-y-1 sm:block">
                    {dayEvents.slice(0, 3).map((event, index) => {
                      const config = TYPE_CONFIG[event.type];
                      return (
                        <div
                          key={`${event.title}-${index}`}
                          className={`flex items-center gap-1.5 truncate rounded-md px-1.5 py-1 text-[11px] font-semibold ${config.bg} ${config.color}`}
                        >
                          <EventIcon
                            type={event.type}
                            className="h-3 w-3 shrink-0"
                          />
                          <span className="truncate">{event.title}</span>
                        </div>
                      );
                    })}
                    {dayEvents.length > 3 && (
                      <div className="px-1 text-[10px] font-semibold text-slate-400">
                        +{dayEvents.length - 3} autres
                      </div>
                    )}
                  </div>
                  {dayEvents.length > 0 && (
                    <div className="mt-2 flex justify-center gap-1 sm:hidden">
                      {dayEvents.slice(0, 3).map((event, index) => (
                        <EventIcon
                          key={`${event.title}-${index}`}
                          type={event.type}
                          className={`h-3 w-3 ${TYPE_CONFIG[event.type].color}`}
                        />
                      ))}
                      {dayEvents.length > 3 && (
                        <span className="text-[9px] font-bold text-slate-400">
                          +{dayEvents.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Sélection
              </p>
              <h3 className="mt-1 text-xl font-bold capitalize text-slate-900">
                {format(selectedDate, "EEEE d MMMM", { locale: fr })}
              </h3>
            </div>
            <EventList events={selectedEvents} iconVariant="icon" />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                À venir
              </p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">
                Prochains événements
              </h3>
            </div>
            <EventList
              events={upcomingEvents}
              iconVariant="date"
              onEventClick={(event) => {
                const date = parseEventDate(event.date);
                setSelectedDate(date);
                setCurrentMonth(startOfMonth(date));
              }}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

function parseEventDate(datestring: string): Date {
  return new Date(datestring);
}
