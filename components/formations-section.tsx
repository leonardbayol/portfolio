import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const FormationsSection = () => {
  const formations = [
    {
      titre: "École d'Ingénieur en Cognitique",
      etablissement: "École Nationale Supérieure de Cognitique, Bordeaux INP",
      periode: "2022 - 2025",
      description:
        "Formation pluridisciplinaire mêlant informatique, UX design, data science et sciences cognitives. Réalisation de nombreux projets collaboratifs, dont des applications web complètes et des solutions d’intelligence artificielle appliquées. Développement de compétences en gestion de projet agile et en conception centrée utilisateur.",
      competences: [
        "Développement web (React, Node.js, HTML, CSS)",
        "UX / UI Design (Figma)",
        "Data Science & Machine Learning (SQL, Python, R)",
        "Gestion de projet Agile (SCRUM)",
        "Projets collaboratifs",
      ],
      lien: "https://ensc.bordeaux-inp.fr/fr",
    },
    {
      titre: "Classe Préparatoire aux Grandes Écoles (MP)",
      etablissement: "Lycée Albert Schweitzer",
      periode: "2020 - 2022",
      description:
        "Formation intensive en mathématiques et informatique, développant une rigueur scientifique et une capacité d’analyse avancée. Préparation aux concours d’écoles d’ingénieurs exigeants.",
      competences: [
        "Mathématiques avancées",
        "Informatique théorique",
        "Analyse et résolution de problèmes",
        "Rigueur scientifique",
        "Gestion du stress et persévérance",
      ],
      lien: "https://lyceeschweitzer.fr",
    },
    {
      titre: "Baccalauréat Scientifique",
      etablissement: "Lycée Albert Schweitzer",
      periode: "2017 - 2020",
      description: "Spécialité Mathématiques avec mention bien.",
      competences: [
        "Mathématiques",
        "Physique",
        "Esprit analytique",
        "Logique",
        "Bases scientifiques solides",
      ],
      lien: "https://lyceeschweitzer.fr",
    },
  ];

  return (
    <section id="formations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Formations
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mx-auto text-pretty">
            Un parcours académique qui m’a doté de bases solides pour créer et
            piloter des produits.
          </p>
        </div>

        <div className="space-y-8">
          {formations.map((formation, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 hover:cursor-pointer"
            >
              <a
                href={formation.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        {formation.titre}
                      </CardTitle>
                      <p className="text-accent font-semibold">
                        {formation.etablissement}
                      </p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formation.periode}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {formation.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {formation.competences.map((competence, idx) => (
                      <Badge key={idx} variant="secondary">
                        {competence}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsSection;
