"use client";

import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import DarkVeil from "../DarkVeil";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function First() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    if (!showEmail) {
      // Premier clic : afficher l'email
      setShowEmail(true);
    } else {
      // Deuxième clic : copier l'email
      try {
        await navigator.clipboard.writeText("gboidin.16@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset après 2 secondes
      } catch (err) {
        console.error("Erreur lors de la copie:", err);
      }
    }
  };
  return (
    <div className="relative h-screen overflow-hidden flex justify-center items-center w-full">
      {/* Animation en arrière-plan */}
      <div className="absolute inset-0 z-0 h-screen w-full">
        <DarkVeil
          speed={0.5}
          hueShift={19}
          noiseIntensity={0}
          scanlineIntensity={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          backgroundColor="#0B0E14"
        />
        {/* <div className="absolute inset-0 bg-background/50" /> */}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex justify-center items-center max-w-7xl mx-auto w-full h-screen flex-col md:flex-row lg:justify-between pt-20 md:pt-0">
        <div className="flex flex-col gap-4 max-w-2xl p-8 order-last md:order-first">
          <div className="flex flex-col mb-2 ">
            <h3 className="text-xl font-medium text-blue-500">
              Bonjour, je suis
            </h3>
            {/* C'est mauvais ici car le composant <BlurText /> requiert les propriétés obligatoires 'animationFrom' et 'animationTo' selon sa définition TypeScript. Même si la documentation suggère d'utiliser le composant de cette façon, il faut fournir ces propriétés pour satisfaire le typage. Par exemple : */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Gaspard Boidin
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground">
              Software Engineer. Je conçois et développe des applications
              modernes, performantes et scalables.
            </p>
            <div className="gap-4 flex flex-col sm:flex-row flex-wrap">
              <Button
                className="bg-blue-500 text-primary-foreground rounded-xl cursor-pointer hover:bg-blue-600"
                onClick={handleEmailClick}
              >
                <Mail className="w-4 h-4" />
                {copied
                  ? "Copié !"
                  : showEmail
                  ? "gboidin.16@gmail.com"
                  : "Email"}
              </Button>
              <Button
                className="bg-blue-500 text-primary-foreground rounded-xl cursor-pointer hover:bg-blue-600"
                onClick={() =>
                  window.open("https://github.com/gaspardboidin", "_blank")
                }
              >
                <Github className="w-4 h-4" />
                Github
              </Button>
              <Button
                className="bg-blue-500 text-primary-foreground rounded-xl cursor-pointer hover:bg-blue-600"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/gaspard-boidin/",
                    "_blank"
                  )
                }
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4 p-8 items-center lg:items-end order-first lg:order-last">
          <Avatar className="h-40 w-40 md:h-50 md:w-50 lg:h-60 lg:w-60">
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>GB</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Flèche de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown className="w-6 h-6 text-white/60 animate-bounce" />
      </div>
    </div>
  );
}
