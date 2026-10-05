import ClubPage from "../pages/Club";
import TarifsPage from "../pages/Tarifs";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";

export const HOST = "https://echiquier-vernonnais.fr";
export const ROUTES = {
  Accueil: {
    component: HomePage,
    description:
      "Site officiel de l'Échiquier Vernonnais, club d'échecs à Vernon.",
    label: "Accueil",
    path: "/",
  },
  leClub: {
    component: ClubPage,
    description:
      "Découvrez l'Échiquier Vernonnais, un club d'échecs passionné à Vernon, offrant des cours pour tous les âges et niveaux.",
    label: "Le Club & Cours",
    path: "/le-club",
  },
  tarifs: {
    component: TarifsPage,
    description: "Tarifs & Inscription à l'Échiquier Vernonnais.",
    label: "Inscriptions",
    path: "/inscriptions",
  },
  contact: {
    component: ContactPage,
    description:
      "Accès et Contact de l'Échiquier Vernonnais, pour toute question ou information.",
    label: "Accès & Contact",
    path: "/contact",
  },
} as const;
