import ClubPage from "../pages/Club";
import TarifsPage from "../pages/Tarifs";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";

export const ROUTES = {
  Accueil: {
    path: "/",
    label: "Accueil",
    component: <HomePage />,
  },
  leClub: {
    path: "/le-club",
    component: <ClubPage />,
    label: "Le Club & Cours",
  },
  tarifs: {
    path: "/inscriptions",
    label: "Inscriptions",
    component: <TarifsPage />,
  },
  contact: {
    path: "/contact",
    label: "Accès & Contact",
    component: <ContactPage />,
  },
} as const;
