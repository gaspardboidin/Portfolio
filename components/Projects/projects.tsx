"use client";

import { Project } from "@/types/project";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const projects: Project[] = [
  {
    id: "1",
    title: "Planiit",
    description:
      "Planiit permet de piloter son budget simplement et en toute clarté : suivi quotidien, vue d’ensemble et décisions concrètes. Saisie rapide, libellés personnalisés, prévisualisation multi-mois (freemium/premium), récurrences et objectifs d’épargne suivis dans le temps.",
    link: "https://www.planiit.app",
    logo: "/planiit.png",
    tags: ["React", "Next.js", "Tailwind", "AWS", "Supabase"],
  },
  {
    id: "2",
    title: "Team Orchid",
    description:
      "Site officiel d’une structure esport, pensé pour crédibiliser la marque et séduire des partenaires. Parcours clair (Accueil, Rosters, Résultats, Partenaires, Contact) avec contenus visuels mis en valeur et CTA visibles. Focus conversion : performances mises en avant, preuves sociales et dossier partenaire accessible.",
    link: "https://team-orchid.com/",
    logo: "/orchid.svg",
    tags: ["React", "Next.js", "Tailwind", "Vercel"],
  },
  {
    id: "3",
    title: "Le paddock",
    description:
      "Plateforme F1 qui centralise classements pilotes/constructeurs, calendrier, fiches circuits, compte à rebours et résultats par session (FP, Qualif, Sprint, Course). Expérience fluide avec vues rapides, favoris et espace admin pour gérer les données et futures fonctionnalités.",
    link: null, // Bientôt disponible
    logo: "/F1_white.svg",
    tags: ["React", "Next.js", "PostgreSQL", "BetterAuth"],
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-8 w-full mb-10 sm:mb-20">
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-4">
        Projects
      </h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`w-full bg-card gap-4 rounded-3xl ${
              project.comingSoon
                ? "cursor-default opacity-75"
                : "cursor-pointer"
            }`}
            onClick={() =>
              !project.comingSoon &&
              project.link &&
              window.open(project.link, "_blank")
            }
          >
            <CardHeader className="flex flex-col gap-2 justify-between px-6 py-2">
              <div className="flex flex-row items-center justify-between w-full">
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={30}
                  height={30}
                />
                {project.comingSoon ? (
                  <Clock className="w-4 h-4 text-orange-500" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                )}
              </div>

              <CardTitle className="text-base sm:text-lg uppercase text-primary-foreground flex items-center gap-2">
                {project.title}
                {project.comingSoon && (
                  <Badge className="text-xs bg-orange-500 text-white">
                    Bientôt disponible
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <CardDescription className="text-xs sm:text-sm mb-4 sm:mb-6 text-primary-foreground/80">
                {project.description}
              </CardDescription>
              <div className="flex flex-row flex-wrap gap-2">
                {project.tags.map((tag) => (
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
