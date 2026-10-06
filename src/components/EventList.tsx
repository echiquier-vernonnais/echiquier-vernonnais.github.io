import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarDays } from "lucide-react";
import { TYPE_CONFIG } from "./calendar-colors";

export type EventType = {
  title: string;
  date: string;
  type: "cours" | "Vie du club" | "tournoi" | "interclubs";
};

function parseEventDate(datestring: string) {
  return new Date(datestring);
}

export function EventIcon({
  type,
  className = "h-4 w-4",
}: {
  type: keyof typeof TYPE_CONFIG;
  className?: string;
}) {
  const Icon = TYPE_CONFIG[type].icon;
  return <Icon className={className} />;
}

export function EventList({
  events,
  iconVariant,
  onEventClick,
}: {
  events: Array<EventType>;
  iconVariant: "date" | "icon";
  onEventClick?: (event: EventType) => void;
}) {
  if (events.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
        <CalendarDays className="mx-auto h-8 w-8 text-slate-300" />
        <p className="mt-2 text-sm font-medium text-slate-500">
          Aucun événement
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {events.map((event, index) => (
        <button
          key={`${event.title}-${index}`}
          disabled={!onEventClick}
          onClick={() => onEventClick?.(event)}
          className={`flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-left ${onEventClick ? "transition hover:bg-slate-100" : ""}`}
        >
          {iconVariant === "icon" ? (
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${TYPE_CONFIG[event.type].bg} ${TYPE_CONFIG[event.type].color}`}
            >
              <EventIcon type={event.type} className="h-5 w-5" />
            </div>
          ) : (
            <div
              className={`flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl ${TYPE_CONFIG[event.type].bg}`}
            >
              <span
                className={`text-[10px] font-bold uppercase ${TYPE_CONFIG[event.type].color}`}
              >
                {format(parseEventDate(event.date), "MMM", { locale: fr })}
              </span>
              <span
                className={`text-lg font-bold leading-none ${TYPE_CONFIG[event.type].color}`}
              >
                {format(parseEventDate(event.date), "d")}
              </span>
            </div>
          )}
          <div className="min-w-0">
            <h4 className="truncate font-bold text-slate-900">{event.title}</h4>
            <p className="mt-0.5 text-xs font-medium text-slate-500">
              {event.type}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
