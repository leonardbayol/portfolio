"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";

// ----------------------
// DATA
// ----------------------
const projets = [
  {
    titre: "Refonte Onboarding",
    description:
      "J'ai repensé le processus d'onboarding sur la plateforme de papernest, afin d'améliorer l'expérience utilisateur et augmenter le taux de conversion.",
    image: "/refonte-onboarding-design.png",
    technologies: [
      "Product Discovery",
      "Product Building",
      "Product Delivery",
      "Low-Code",
      "No-Code",
      "Make",
      "UX Design",
    ],
    statut: "Terminé",
    slug: "refonte-onboarding",
    overview:
      "Refonte complète du parcours d’onboarding de papernest afin de transformer une expérience incomplète en un processus guidé, engageant et générateur d’actions concrètes.",
    challenge:
      "L’onboarding initial ne conduisait pas les utilisateurs vers des étapes claires et mesurables. Il fallait à la fois améliorer l’expérience, expliquer la valeur ajoutée du produit et obtenir des conversions tangibles.",
    solution:
      "Phase de Product Discovery pour analyser les meilleures pratiques B2C, prototypage de plusieurs parcours avec Figma, échanges et itérations avec l’équipe produit, puis mise en œuvre grâce à des scénarios low-code et no-code (Make). Création et suivi d’un dashboard Looker Studio en autonomie pour mesurer les performances et les conversions.",
    results: [
      "+20% de conversion (contre 0 auparavant, car redirection vers la homepage)",
      "Expérience utilisateur enrichie avec meilleure compréhension du produit",
      "Potentiel gain de +450k €/an généré par les actions concrètes post-onboarding",
    ],
    duration: "2 mois",
    team: "Seul",
    year: "2025",
    structure: "papernest",
    gallery: [
      {
        type: "image",
        src: "/refonte-onboarding1.png",
        caption: "Étape 1 : choix de la value proposition",
      },
      {
        type: "image",
        src: "/refonte-onboarding2.png",
        caption: "Étape 2 : explication de la value proposition",
      },
      {
        type: "image",
        src: "/refonte-onboarding3.png",
        caption: "Étape 3 : customization de l'expérience",
      },
      {
        type: "image",
        src: "/refonte-onboarding4.png",
        caption: "Étape 4 : récolte des informations personnelles",
      },
      {
        type: "image",
        src: "/refonte-onboarding5.png",
        caption: "Étape 5 : guider vers une action concrète",
      },
    ],
  },
  {
    titre: "Collexion",
    description:
      "Création de designs de t-shirt, de sites web et de podcasts en collaboration avec un hôpital psychiatrique de jour.",
    image: "/collexion-design.png",
    technologies: [
      "Créativité",
      "Gestion de Projet",
      "Collaboration Externe",
      "Développement Web",
      "Interviews",
      "Projet Caritatif",
    ],
    statut: "Terminé",
    slug: "collexion",
    overview:
      "Projet transpromotion visant à déstigmatiser les troubles psychiatriques en créant des designs uniques pour t-shirts et sites web, en collaboration avec un hôpital psychiatrique de jour.",
    challenge:
      "Allier créativité, technologie et impact social : concevoir un projet à la fois éducatif, caritatif et collaboratif, impliquant plusieurs étudiants et des patients, tout en respectant leur histoire et leur travail artistique.",
    solution:
      "Organisation d’ateliers d’art thérapeutique avec les patients du Mascaret à Mérignac. Collecte et retravail des œuvres pour créer des designs accompagnés de QR Codes renvoyant vers un site web personnalisé avec un podcast du patient. Impression sur vêtements de seconde main vendus au profit de l’hôpital. Coordination du projet avec 5 étudiants de deuxième année, intégrant design, développement web, gestion de projet et communication caritative.",
    results: [
      "Création de designs personnalisés et sites web avec podcasts éducatifs pour chaque patient",
      "Événements caritatifs et ventes réussies réinvesties dans l’hôpital de jour",
      "Sensibilisation réussie du public aux troubles psychiatriques et renforcement de compétences multidisciplinaires",
      "Apport d’une dynamique nouvelle grâce à la présence des jeunes porteurs du projet",
      "Apprentissage mutuel : les étudiants ont développé des compétences techniques et sociales, tandis que le personnel a vu les patients dans un contexte différent et enrichissant",
    ],
    duration: "6 mois",
    team: "5 étudiants",
    year: "2023",
    structure: "ENSC",
    gallery: [
      {
        type: "image",
        src: "/collexion1.jpg",
        caption: "T-shirt design 1, afterwork caritatif",
      },
      {
        type: "image",
        src: "/collexion2.png",
        caption: "Site web 1, afterwork caritatif",
      },
      {
        type: "image",
        src: "/collexionn3.jpg",
        caption: "Exposition oeuvres des patients, afterwork caritatif",
      },
      {
        type: "image",
        src: "/collexion4.jpg",
        caption: "Fresque réalisée par les étudiants, afterwork caritatif",
      },
      {
        type: "image",
        src: "/collexion5.png",
        caption: "T-shirt design 2, fleur",
      },
      {
        type: "image",
        src: "/collexion6.png",
        caption: "Site web 2, design fleur",
      },
      {
        type: "image",
        src: "/collexion7.png",
        caption: "T-shirt design 3, geisha",
      },
      {
        type: "image",
        src: "/collexion8.png",
        caption: "Site web 3, design geisha",
      },
      {
        type: "image",
        src: "/collexion9.jpg",
        caption: "Tote bag offert aux patients de l'hôpital de jour",
      },
    ],
  },
  {
    titre: "Cancellation Help",
    description:
      "J'ai conçu et développé un parcours complet de résiliation pour une trentaine de services, automatisé avec Make. Les données des utilisateurs (service choisi, satisfaction du tutoriel, points de friction) sont collectées dans Google Sheets pour mesurer l’impact et optimiser l’expérience utilisateur.",
    image: "/cancellation-help-design.png",
    technologies: [
      "Product Discovery",
      "Product Building",
      "Product Delivery",
      "Make",
      "Gsheets",
      "Data Analysis",
    ],
    statut: "Terminé",
    slug: "cancellation-help",
    overview:
      "Création d’une expérience de résiliation multi-services chez Papernest afin de tester l’intérêt des utilisateurs pour la résiliation de contrats variés (Netflix, Basic-Fit, SNCF...).",
    challenge:
      "Déterminer l’intention des utilisateurs avec un minimum de moyens techniques et identifier les services additionnels les plus demandés, tout en offrant une expérience claire et fonctionnelle.",
    solution:
      "Conception et développement d’un parcours complet de résiliation pour une trentaine de services, automatisé avec Make. Création de plus de 30 tutoriels d’aide à la réalisation et collecte des données utilisateurs (service choisi, satisfaction du tutoriel, points de friction) dans Google Sheets pour mesurer l’impact et optimiser l’expérience.",
    results: [
      "Les utilisateurs choisissent majoritairement les résiliations déjà proposées (énergie, box, mobile, assurance)",
      "La plupart trouvent les tutoriels utiles et compréhensibles",
      "Identification de nouveaux services attendus, avec la catégorie salle de sport comme la plus demandée",
    ],
    duration: "1 mois",
    team: "Seul",
    year: "2025",
    structure: "papernest",
    gallery: [
      {
        type: "image",
        src: "/cancellation-help1.png",
        caption: "Résiliation déjà gérée, redirection vers le flow existant",
      },
      {
        type: "image",
        src: "/cancellation-help2.png",
        caption: "Résiliation non gérée et sans tutoriel disponible",
      },
      {
        type: "image",
        src: "/cancellation-help3.png",
        caption: "Tutoriel d'aide à la résiliation",
      },
      {
        type: "image",
        src: "/cancellation-help4.png",
        caption: "Récolte du feedback utilisateur",
      },
    ],
  },
  {
    titre: "Réalité Augmentée Airbus",
    description:
      "En collaboration avec Airbus, j'ai développé un code Unity permettant de projeter une ombre en réalité augmentée pour faciliter la construction d'importantes pièces d'avion.",
    image: "/airbus-design.png",
    technologies: ["Unity", "UX Design", "Prototypage", "POC"],
    statut: "Terminé",
    slug: "realite-augmentee-airbus",
    overview:
      "Projet de fin d’études réalisé en binôme avec Airbus, visant à améliorer les conditions de travail des ouvriers en usine grâce à la réalité augmentée. L’objectif : réduire la fatigue et le stress liés aux tâches de précision sur de grandes pièces d’avion en apportant une meilleure visibilité de la position des collègues.",

    challenge:
      "Lors de l’assemblage, les employés travaillent de part et d’autre d’éléments massifs sans pouvoir voir ce qu’il se passe de l’autre côté. Cela entraîne un manque de visibilité, des vérifications constantes, du stress et un risque d’erreur lorsque des actions critiques (comme le perçage) sont effectuées.",

    solution:
      "Développement en Unity d’un Proof of Concept utilisant une caméra Zed2i pour détecter et projeter en réalité augmentée l’ombre ou la silhouette d’un collègue. Plusieurs modes d’affichage ont été conçus : couleurs évolutives (vert → orange → rouge selon la distance), gestion de l’opacité dynamique et paramétrage des seuils. Une interface de test a été créée pour ajuster ces paramètres et évaluer l’expérience utilisateur.",

    results: [
      "Exploration innovante de la réalité augmentée appliquée à l’industrie aéronautique",
      "Mise en place d’une architecture technique robuste (Unity + caméra Zed2i)",
      "Ouverture vers un potentiel partenariat entre l’école et Airbus",
    ],
    duration: "4 mois",
    team: "En binôme",
    year: "2024",
    structure: "ENSC",
    gallery: [
      {
        type: "video",
        src: "/airbus1.mp4",
        caption: "Vidéo de présentation du projet",
      },
    ],
  },
  {
    titre: "DailyUI",
    description:
      "Chaque jour, je rajoute un nouveau design d'interface utilisateur, jusqu'au 100ème jour.",
    image: "/daily-ui-design.png",
    technologies: ["Figma", "UX Design", "UI Design"],
    statut: "En cours",
    slug: "dailyui",
    overview:
      "Un défi personnel de 100 jours pour améliorer mes compétences en design d’interface utilisateur. Chaque jour, je conçois un nouvel écran ou composant imposé par le challenge, ce qui m’amène à explorer de nouvelles idées et à progresser en UX comme en UI.",
    challenge:
      "Maintenir une régularité quotidienne tout en trouvant l’inspiration et en garantissant une certaine créativité sur la durée.",
    solution:
      "Recherche d’inspiration variée et expérimentation de combinaisons de couleurs issues du livre 'A Dictionary of Color Combinations' pour enrichir mes créations et développer mon sens esthétique.",
    results: [
      "100+ écrans réalisés attendus, faisant preuve de régularité",
      "Progression notable en régularité créative et en maîtrise de Figma",
      "Objectif de plus de 100 designs au terme du challenge",
    ],
    duration: "100 jours",
    team: "Seul",
    year: "2025",
    structure: "Personnel",
    gallery: [
      {
        type: "video",
        src: "/dailyui1.mov",
        caption: "Page de connexion",
      },
    ],
  },
  {
    titre: "PlanIt",
    description:
      "J'ai créé une application mobile web afin de permettre aux étudiants de planifier leurs révisions et gérer leur temps efficacement.",
    image: "/planit-design.png",
    technologies: [
      "Développement web",
      "React.js",
      "Figma",
      "Algorithmie",
      "ASP.NET Core",
      "MySQL",
    ],
    statut: "Terminé",
    slug: "planit",
    overview:
      "Développement d'une application mobile web, PlanIt, pour permettre aux étudiants de planifier leurs révisions et gérer efficacement leur temps grâce à un suivi automatisé de leurs tâches.",
    challenge:
      "Créer une solution individuelle complète qui génère automatiquement un planning personnalisé en fonction des tâches et disponibilités, tout en permettant un suivi fiable de l’exécution sans auto-évaluation manuelle.",
    solution:
      "Conception et développement de l'application seul, en s’auto-formant à React.js. Mise en place d’un algorithme pour générer le planning et suivre automatiquement l’avancement des tâches. Développement back-end avec ASP.NET Core et base de données MySQL pour stocker les données de suivi.",
    results: [
      "Application opérationnelle permettant la planification et le suivi automatisé des tâches",
      "Expérience complète en développement web fullstack et auto-apprentissage de React.js",
      "Renforcement des compétences en algorithmie et gestion de données",
    ],
    duration: "4 mois",
    team: "Seul",
    year: "2024",
    structure: "ENSC",
    gallery: [
      {
        type: "image",
        src: "/planit1.png",
        caption: "Page de connexion",
      },
      {
        type: "image",
        src: "/planit2.png",
        caption: "Page de création de planning",
      },
      {
        type: "image",
        src: "/planit3.png",
        caption: "Page de réalisation du planning avec suivi",
      },
    ],
  },
];

// ----------------------
// PAGE COMPONENT
// ----------------------
type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const projet = projets.find((p) => p.slug === params.slug);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  if (!projet) {
    return notFound();
  }

  const itemCount = projet.gallery?.length || 0;
  const autresProjets = projets.filter((p) => p.slug !== projet.slug);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            ← <span>Retour au portfolio</span>
          </Link>
          <Badge
            variant={projet.statut === "Terminé" ? "default" : "secondary"}
          >
            {projet.statut}
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  📅 <span>{projet.year}</span>
                  <span>•</span>
                  <span>{projet.duration}</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  {projet.titre}
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  {projet.overview}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {projet.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 shadow-2xl">
                <img
                  src={projet.image || "/placeholder.svg?height=600&width=800"}
                  alt={projet.titre}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="font-semibold text-lg mb-2">Durée</h3>
                <p className="text-muted-foreground">{projet.duration}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-semibold text-lg mb-2">Équipe</h3>
                <p className="text-muted-foreground">{projet.team}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-semibold text-lg mb-2">Année</h3>
                <p className="text-muted-foreground">{projet.year}</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="font-semibold text-lg mb-2">Structure</h3>
                <p className="text-muted-foreground">{projet.structure}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Results */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-20">
          {/* Défi */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center text-2xl">
                🎯
              </div>
              <h2 className="text-3xl font-bold">Le défi</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed pl-20">
              {projet.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                💡
              </div>
              <h2 className="text-3xl font-bold">La solution</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed pl-20">
              {projet.solution}
            </p>
          </div>

          {/* Résultats */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-2xl">
                📈
              </div>
              <h2 className="text-3xl font-bold">Les résultats</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pl-20">
              {projet.results.map((result, idx) => (
                <Card
                  key={idx}
                  className="border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0"
                >
                  <CardContent className="p-6">
                    <p className="font-medium">{result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Galerie ({itemCount} élément{itemCount > 1 ? "s" : ""})
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projet.gallery.map((item, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onClick={() => setSelectedIdx(idx)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-black/10 transition-all duration-300 group-hover:border-2 shadow-2xl">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.caption || `Élément ${idx + 1}`}
                      className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <>
                      <video
                        src={item.src}
                        muted
                        className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 text-white rounded-full p-4 opacity-80 group-hover:opacity-100 transition">
                          ▶
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {item.caption && (
                  <p className="mt-2 text-sm text-muted-foreground text-center">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()} // empêche la fermeture quand on clique sur l'image
          >
            {/* Flèche gauche */}
            {selectedIdx > 0 && (
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                onClick={() => setSelectedIdx(selectedIdx - 1)}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Flèche droite */}
            {selectedIdx < projet.gallery.length - 1 && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                onClick={() => setSelectedIdx(selectedIdx + 1)}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Close */}
            <button
              className="absolute top-2 right-2 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
              onClick={() => setSelectedIdx(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Media */}
            {projet.gallery[selectedIdx].type === "image" ? (
              <img
                src={projet.gallery[selectedIdx].src}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={projet.gallery[selectedIdx].src}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}

            {/* Caption */}
            {projet.gallery[selectedIdx].caption && (
              <p className="mt-4 text-center text-white text-sm">
                {projet.gallery[selectedIdx].caption}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Autres projets */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Voir d'autres projets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autresProjets.map((p, idx) => (
              <Link
                key={idx}
                href={`/portfolio/${p.slug}`}
                className="group flex flex-col"
              >
                <Card
                  hasImageTop={!!p.image}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                >
                  {p.image && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                      <img
                        src={p.image || "/placeholder.svg"}
                        alt={p.titre}
                        className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <CardHeader className="pt-4">
                    <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                      {p.titre}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
