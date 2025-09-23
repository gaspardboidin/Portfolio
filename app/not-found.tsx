"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import DarkVeil from "../components/DarkVeil";
import FuzzyText from "../components/FuzzyText";

export default function NotFound() {
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
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto p-8">
        {/* Numéro 404 avec effet shiny */}
        <div className="mb-8">
          <FuzzyText baseIntensity={0.5} hoverIntensity={1} enableHover={true}>
            404
          </FuzzyText>
        </div>

        {/* Message d'erreur */}
        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-blue-500/20 text-white rounded-xl transition-colors duration-200 border border-white/20"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
