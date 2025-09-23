"use client";

import { Formation } from "@/types/project";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const formations: Formation[] = [
  {
    id: "1",
    title: "42 Paris",
    description:
      "42 Paris est une école de développement web qui forme des développeurs full stack. J'y suis encore en formation pour developper mes competences en algorithmie et analyse de données.",
    logo: "https://42.fr/wp-content/uploads/2021/05/42-Final-sigle-seul.svg",
    tags: ["C", "C++", "Python", "SQL", "Shell", "Git"],
  },
  {
    id: "2",
    title: "Team Orchid",
    description:
      "Site officiel d’une structure esport, pensé pour crédibiliser la marque et séduire des partenaires. Parcours clair (Accueil, Rosters, Résultats, Partenaires, Contact) avec contenus visuels mis en valeur et CTA visibles. Focus conversion : performances mises en avant, preuves sociales et dossier partenaire accessible.",
    logo: "/orchid.svg",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
  },
  {
    id: "3",
    title: "Le paddock",
    description:
      "Plateforme F1 qui centralise classements pilotes/constructeurs, calendrier, fiches circuits, compte à rebours et résultats par session (FP, Qualif, Sprint, Course). Expérience fluide avec vues rapides, favoris et espace admin pour gérer les données et futures fonctionnalités.",
    logo: "/F1_white.svg",
    tags: ["React", "Next.js", "PostgreSQL", "BetterAuth"],
  },
];

export default function Formations() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-8 w-full mb-20">
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-4">
        Formations
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {formations.map((formation) => (
          <Card
            key={formation.id}
            className="w-full bg-card gap-4 rounded-3xl cursor-pointer"
          >
            <CardHeader className="flex flex-col gap-2 justify-between px-6 py-2">
              <div className="flex flex-row items-center justify-between w-full">
                <Image
                  src={formation.logo}
                  alt={formation.title}
                  width={30}
                  height={30}
                />
              </div>

              <CardTitle className="text-base sm:text-lg uppercase text-primary-foreground">
                {formation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <CardDescription className="text-xs sm:text-sm mb-4 sm:mb-6 text-primary-foreground/80">
                {formation.description}
              </CardDescription>
              <div className="flex flex-row flex-wrap gap-2">
                {formation.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="text-xs sm:text-sm bg-blue-500 text-bg-primary-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
