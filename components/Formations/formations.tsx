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
    inProgress: false,
  },
  {
    id: "2",
    title: "Motorsport Engineering",
    description:
      "Formation spécialisée en ingénierie automobile et motorsport. Apprentissage des fondamentaux de la mécanique automobile, aérodynamique, dynamique des véhicules et technologies de pointe utilisées en Formule 1 et autres compétitions automobiles.",
    logo: "/F1_white.svg",
    tags: ["Engineering", "Aerodynamics", "Mechanics", "F1", "Automotive"],
    inProgress: true,
  },
  {
    id: "3",
    title: "Google Data Analytics",
    description:
      "Certificat professionnel Google en analyse de données. Maîtrise des outils d'analyse (Google Analytics, BigQuery, Tableau), techniques de visualisation de données et stratégies data-driven pour optimiser les performances business.",
    logo: "/Google_Favicon_2025.svg.png",
    tags: [
      "Data Analytics",
      "Google Analytics",
      "SQL",
      "Tableau",
      "Python",
      "R",
    ],
    inProgress: true,
  },
];

export default function Formations() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-8 w-full mb-10 sm:mb-20">
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
                <div className="flex items-center justify-between w-full gap-3">
                  <Image
                    src={formation.logo}
                    alt={formation.title}
                    width={30}
                    height={30}
                  />
                  {formation.inProgress && (
                    <Badge className="text-xs bg-orange-500 text-white">
                      En cours
                    </Badge>
                  )}
                </div>
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
