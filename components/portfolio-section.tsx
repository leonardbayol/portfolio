"use client"; // ← IMPORTANT, permet d'utiliser useState, useRef, useEffect

import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Folder } from "lucide-react";

const PortfolioSection = () => {
  const projets = [
    {
      titre: "DailyUI",
      description:
        "Chaque jour, je rajoute un nouveau design d'interface utilisateur, jusqu'au 100ème jour.",
      image: "/dailyUI.png",
      technologies: ["Figma", "UX Design", "UI Design"],
      lienDemo: "#",
      statut: "En cours",
    },
    {
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
      titre: "Réalité Augmentée Airbus",
      description:
        "En collaboration avec Airbus, j'ai développé un code Unity permettant de projet une ombre en réalité augmentée pour faciliter la construction d'importantes pièces d'avion.",
      image: "/AIRBUS_RGB.png",
      technologies: ["Unity", "UX Design", "Prototypage", "POC"],
      lienDemo: "#",
      statut: "Terminé",
    },
  ];

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "En production":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "En cours":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Folder className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Portfolio
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mx-auto text-pretty">
            Un aperçu de réalisations qui reflètent mon approche et mes
            compétences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => {
            const scrollRef = useRef<HTMLDivElement>(null);
            const [canScroll, setCanScroll] = useState(false);

            useEffect(() => {
              const el = scrollRef.current;
              if (el) setCanScroll(el.scrollWidth > el.clientWidth);
            }, [projet.technologies]);

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={projet.image || "/placeholder.svg"}
                    alt={projet.titre}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatutColor(projet.statut)}>
                      {projet.statut}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                    {projet.titre}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {projet.description}
                  </p>

                  <div className="mt-auto">
                    <div className="relative">
                      {/* Dégradés uniquement si le scroll est possible */}
                      {canScroll && (
                        <>
                          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent z-10" />
                        </>
                      )}

                      <div
                        ref={scrollRef}
                        className="overflow-x-auto scrollbar-hide"
                      >
                        <div className="flex gap-2 pb-2 min-w-max">
                          {projet.technologies.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs whitespace-nowrap"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Voir plus
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
