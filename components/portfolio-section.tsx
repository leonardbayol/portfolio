import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"

const PortfolioSection = () => {
  const projets = [
    {
      titre: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec gestion des stocks, paiements et analytics en temps réel.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      lienDemo: "#",
      lienGithub: "#",
      statut: "En production",
    },
    {
      titre: "Task Management App",
      description:
        "Application de gestion de tâches collaborative avec notifications en temps réel et synchronisation multi-appareils.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      lienDemo: "#",
      lienGithub: "#",
      statut: "Terminé",
    },
    {
      titre: "Weather Analytics Dashboard",
      description:
        "Dashboard d'analyse météorologique avec visualisations interactives et prédictions basées sur l'IA.",
      image: "/weather-analytics-dashboard-charts.jpg",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      lienDemo: "#",
      lienGithub: "#",
      statut: "En développement",
    },
    {
      titre: "Social Media Scheduler",
      description: "Outil de planification et d'automatisation pour les réseaux sociaux avec analytics détaillés.",
      image: "/social-media-management-interface.jpg",
      technologies: ["React Native", "Express.js", "Redis", "AWS"],
      lienDemo: "#",
      lienGithub: "#",
      statut: "Terminé",
    },
    {
      titre: "AI Content Generator",
      description: "Générateur de contenu alimenté par l'IA pour les blogs et réseaux sociaux avec optimisation SEO.",
      image: "/ai-content-generation-interface.jpg",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
      lienDemo: "#",
      lienGithub: "#",
      statut: "En production",
    },
    {
      titre: "Crypto Portfolio Tracker",
      description: "Tracker de portefeuille crypto avec alertes de prix et analyse de performance en temps réel.",
      image: "/cryptocurrency-portfolio-dashboard.png",
      technologies: ["Svelte", "CoinGecko API", "Chart.js", "Firebase"],
      lienDemo: "#",
      lienGithub: "#",
      statut: "Terminé",
    },
  ]

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case "En production":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "En développement":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    }
  }

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Folder className="w-8 h-8 text-accent mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Portfolio</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une sélection de mes projets les plus significatifs, démontrant ma polyvalence et mon expertise technique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projets.map((projet, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={projet.image || "/placeholder.svg"}
                  alt={projet.titre}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatutColor(projet.statut)}>{projet.statut}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {projet.titre}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-pretty">{projet.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-5 h-5 mr-2" />
            Voir plus sur GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
