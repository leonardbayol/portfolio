import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperiencesSection = () => {
  const experiences = [
    {
      poste: "Product Manager Associate",
      entreprise: "Papernest",
      lieu: "Paris, France",
      periode: "févr. 2025 - août 2025",
      type: "Stage",
      lien: "https://www.papernest.com",
      image: "/papernest.png",
      description:
        "Stage au sein d’une équipe agile sur un produit B2C avec plus de 1M d’utilisateurs. Responsabilités couvrant discovery, delivery et suivi de KPIs.",
      realisations: [
        "Optimisation de la conversion des parcours de souscription autonome : +80%",
        "Conception et lancement de nouveaux flows partenaires (6 partenaires signés)",
        "Mise en place de +10 A/B tests (flows utilisés par >50 000 utilisateurs/mois, partenaire BPCE)",
        "Refonte complète de l’onboarding : +450 000 €/an de revenus potentiels générés",
        "Automatisation et développement low-code / no-code avec Make et outils internes",
        "Analyse de données : requêtes BigQuery et création d’un dashboard Looker Studio en autonomie",
      ],
      technologies: [
        "Jira",
        "BigQuery",
        "Looker Studio",
        "Make",
        "No-code",
        "A/B Testing",
        "Priorisation",
        "Agile",
        "Scrum",
        "Gestion du backlog",
        "UX Design",
        "Product Discovery",
        "Product Delivery",
      ],
    },
    {
      poste: "Chercheur stagiaire",
      entreprise: "Université Concordia",
      lieu: "Montréal, Canada",
      periode: "mai 2024 - août 2024",
      type: "Stage",
      lien: "https://www.concordia.ca/artsci/psychology/research/deroche.html",
      image: "/concordia-lab.jpg",
      description:
        "Travail de recherche sur la compréhension des émotions chez les porteurs d’implants cochléaires, de la conception du protocole expérimental jusqu’à l’analyse des données.",
      realisations: [
        "Expérience anglophone",
        "Création et mise en place d’un protocole expérimental",
        "Passation de 20 tests auprès de participants",
        "Analyse des données dans le cadre d’une future publication scientifique",
      ],
      technologies: ["Anglais", "Python", "R", "Matlab", "Analyse de données"],
    },
    {
      poste: "Chargé qualité organisationnelle",
      entreprise:
        "i2c – Ingénierie et Conseil en Cognitique (Junior-Entreprise ENSC)",
      lieu: "Bordeaux, France",
      periode: "avr. 2023 - mars 2024",
      type: "Mandat associatif",
      lien: "https://www.junior-i2c.com",
      image: "/i2c-office.jpg",
      description:
        "Responsable qualité de la Junior-Entreprise, garantissant la conformité et la bonne application des processus internes tout en accompagnant les projets clients.",
      realisations: [
        "Relecture et validation de livrables clients",
        "Contribution au pilotage stratégique et organisationnel de la structure",
      ],
      technologies: ["Gestion de projet", "Qualité", "Organisation"],
    },
    {
      poste: "Assistant administratif",
      entreprise: "Skill and You",
      lieu: "Montrouge, France",
      periode: "juin 2023 - juil. 2023",
      type: "CDD",
      lien: "https://www.skillandyou.com/fr",
      image: "/skillandyou-office.jpg",
      description:
        "Travail au sein du service administratif avec missions variées de gestion et d’optimisation des outils de suivi internes.",
      realisations: [
        "Gestion de tâches administratives courantes",
        "Optimisation et automatisation des outils internes",
        "Découverte approfondie du fonctionnement d’un grand groupe",
      ],
      technologies: ["Excel", "Automatisation de processus", "Organisation"],
    },
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Expériences
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mx-auto text-pretty">
            Mon parcours professionnel, mes missions et les projets qui m’ont
            permis de développer une expertise produit, data et
            organisationnelle
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <a
              key={index}
              href={experience.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground mb-2">
                        {experience.poste}
                      </CardTitle>
                      <p className="text-accent font-semibold text-lg">
                        {experience.entreprise}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.lieu}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.periode}
                        </div>
                        <Badge variant="outline">{experience.type}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {experience.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      Réalisations clés :
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {experience.realisations.map((realisation, idx) => (
                        <li key={idx}>{realisation}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Compétences mobilisées :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Image en bas */}
                  {experience.image && (
                    <div className="mt-6">
                      <img
                        src={experience.image}
                        alt={experience.entreprise}
                        className="w-full h-48 object-cover rounded-lg border"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
