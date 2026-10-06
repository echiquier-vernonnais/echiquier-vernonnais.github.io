import { BookOpen, Pizza, Trophy, Users } from "lucide-react";

export const TYPE_CONFIG = {
  cours: {
    icon: BookOpen,
    bg: "bg-sky-100",
    color: "text-sky-600",
  },
  "Vie du club": {
    icon: Pizza,
    bg: "bg-fuchsia-100",
    color: "text-fuchsia-600",
  },
  tournoi: {
    icon: Users,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  "interclubs": {
    icon: Trophy,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
} as const;

