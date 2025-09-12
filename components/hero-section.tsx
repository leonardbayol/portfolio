"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, PhoneCall } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById("experiences");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Profile */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img
                  src="/professional-headshot.jpg"
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Contenu Principal */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-accent">Léonard BAYOL</span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
              Product Enthusiast
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-pretty">
              Ingénieur en cognitique récemment diplômé, je recherche un CDI en
              tant que Product Manager, Owner ou Designer. Fort d’une première
              expérience réussie en stage, je souhaite continuer dans cette
              voie, en mettant à profit mes compétences techniques, analytiques
              et relationnelles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={scrollToPortfolio}
              >
                Voir mes projets
              </Button>
              <a href="mailto:leonard.bayol@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Me contacter
                </Button>
              </a>
            </div>

            {/* Liens sociaux */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/leonard-bayol/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>

              {/* Téléphone */}
              <a href="tel:+33699507239">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PhoneCall className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="rounded-full"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
