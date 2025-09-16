"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ClientProjectPage({ projet }: { projet: any }) {
  const [layoutStyle, setLayoutStyle] = useState<
    "modern" | "minimal" | "showcase"
  >("modern");
  const [galleryView, setGalleryView] = useState<
    "grid" | "masonry" | "carousel"
  >("grid");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Interactive header with layout controls */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au portfolio</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg p-1">
              <Button
                variant={layoutStyle === "modern" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLayoutStyle("modern")}
                className="text-xs"
              >
                Moderne
              </Button>
              <Button
                variant={layoutStyle === "minimal" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLayoutStyle("minimal")}
                className="text-xs"
              >
                Minimal
              </Button>
              <Button
                variant={layoutStyle === "showcase" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLayoutStyle("showcase")}
                className="text-xs"
              >
                Showcase
              </Button>
            </div>

            <Badge
              variant={projet.statut === "Terminé" ? "default" : "secondary"}
            >
              {projet.statut}
            </Badge>
          </div>
        </div>
      </header>
    </div>
  );
}
