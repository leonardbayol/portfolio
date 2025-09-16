export type Projet = {
  slug: string;
  titre: string;
  description: string;
  image: string;
  technologies: string[];
  lienDemo?: string;
  statut: "En production" | "En cours" | "Terminé";
};

export const projets: Projet[] = [
  {
    slug: "dailyui",
    titre: "DailyUI",
    description:
      "Chaque jour, je rajoute un nouveau design d'interface utilisateur, jusqu'au 100ème jour.",
    image: "/daily-ui-design.png",
    technologies: ["Figma", "UX Design", "UI Design"],
    lienDemo: "#",
    statut: "En cours",
  },
  {
    slug: "refonte-onboarding",
    titre: "Refonte Onboarding",
    description:
      "J'ai repensé le processus d'onboarding sur la plateforme de papernest, afin d'améliorer l'expérience utilisateur et augmenter le taux de conversion.",
    image: "/refonte-onboarding.png",
    technologies: [
      "Product Discovery",
      "Product Building",
      "Product Delivery",
      "Low-Code",
      "No-Code",
      "Make",
      "UX Design",
    ],
    lienDemo: "#",
    statut: "Terminé",
  },
  {
    slug: "cancellation-help",
    titre: "Cancellation Help",
    description:
      "J'ai conçu et développé un parcours complet de résiliation pour une trentaine de services, automatisé avec Make. Les données des utilisateurs (service choisi, satisfaction du tutoriel, points de friction) sont collectées dans Google Sheets pour mesurer l’impact et optimiser l’expérience utilisateur.",
    image: "/cancellation-help-cover.png",
    technologies: [
      "Product Discovery",
      "Product Building",
      "Product Delivery",
      "Make",
      "Gsheets",
      "Data Analysis",
    ],
    lienDemo: "#",
    statut: "Terminé",
  },
  {
    slug: "planit",
    titre: "PlanIt",
    description:
      "J'ai créé une application mobile web afin de permettre aux étudiants de planifier leurs révisions et gérer leur temps efficacement.",
    image: "/planit.png",
    technologies: [
      "Développement web",
      "React.js",
      "Figma",
      "Algorithmie",
      "ASP.NET Core",
      "MySQL",
    ],
    lienDemo: "#",
    statut: "Terminé",
  },
  {
    slug: "collexion",
    titre: "Collexion",
    description:
      "Création de designs de t-shirt, de sites web et de podcasts en collaboration avec un hôpital psychiatrique de jour.",
    image: "/collexion.png",
    technologies: [
      "Créativité",
      "Gestion de Projet",
      "Collaboration Externe",
      "Développement Web",
      "Interviews",
      "Projet Caritatif",
    ],
    lienDemo: "#",
    statut: "Terminé",
  },
  {
    slug: "realite-augmentee-airbus",
    titre: "Réalité Augmentée Airbus",
    description:
      "En collaboration avec Airbus, j'ai développé un code Unity permettant de projeter une ombre en réalité augmentée pour faciliter la construction d'importantes pièces d'avion.",
    image: "/AIRBUS_RGB.png",
    technologies: ["Unity", "UX Design", "Prototypage", "POC"],
    lienDemo: "#",
    statut: "Terminé",
  },
];
