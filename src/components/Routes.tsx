import ClubPage from "../pages/Club";
import TarifsPage from "../pages/Tarifs";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";


export const HOST = "https://echiquier-vernonnais.fr";
export const ROUTES = {
  Accueil: {
    path: "/",
    label: "Accueil",
    component: <HomePage />,
    description: "Site officiel de l'Échiquier Vernonnais, club d'échecs à Vernon.",
  },
  leClub: {
    path: "/le-club",
    component: <ClubPage />,
    label: "Le Club & Cours",
    description: "Découvrez l'Échiquier Vernonnais, un club d'échecs passionné à Vernon, offrant des cours pour tous les âges et niveaux.",
  },
  tarifs: {
    path: "/inscriptions",
    label: "Inscriptions",
    component: <TarifsPage />,
    description: "Tarifs & Inscription à l'Échiquier Vernonnais.",
  },
  contact: {
    path: "/contact",
    label: "Accès & Contact",
    component: <ContactPage />,
    description: "Accès et Contact de l'Échiquier Vernonnais, pour toute question ou information.",
  },
} as const;
