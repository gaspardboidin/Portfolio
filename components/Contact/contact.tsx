"use client";

import { useState } from "react";
import { Calendar, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent } from "../ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    agreeNDA: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi - à remplacer par la vraie logique
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message envoyé avec succès !");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
        agreeNDA: false,
      });
    }, 2000);
  };

  const budgetRanges = [
    { value: "< 5k", label: "< 5k" },
    { value: "5k - 10k", label: "5k - 10k" },
    { value: "10k - 20k", label: "10k - 20k" },
    { value: "20k - 50k", label: "20k - 50k" },
    { value: "> 50k", label: "> 50k" },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-8 w-full mb-10 sm:mb-20">
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-4">
        Contact
      </h2>
      
      <Card className="bg-card rounded-3xl">
        <CardContent className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom complet */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-primary-foreground">
                Nom complet <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary-foreground">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@mail.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            {/* Numéro de téléphone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary-foreground">
                Numéro de téléphone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+33 6 12 34 56 78"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>

            {/* Type de projet */}
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-primary-foreground">
                Type de projet <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => handleInputChange("projectType", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez votre option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-app">Application Web</SelectItem>
                  <SelectItem value="mobile-app">Application Mobile</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="portfolio">Portfolio</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <Label className="text-primary-foreground">
                Budget approximatif (en €)
              </Label>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((range) => (
                  <Button
                    key={range.value}
                    type="button"
                    variant="outline"
                    className={`rounded-xl budget-button ${
                      formData.budget === range.value ? "selected" : ""
                    }`}
                    onClick={() => handleInputChange("budget", range.value)}
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-primary-foreground">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Entrez votre message ici"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                rows={4}
              />
            </div>

            {/* Checkbox NDA */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="nda"
                checked={formData.agreeNDA}
                onCheckedChange={(checked) => handleInputChange("agreeNDA", checked as boolean)}
              />
              <Label htmlFor="nda" className="text-primary-foreground text-sm">
                J'accepte que vous utilisiez mes informations pour me contacter
              </Label>
            </div>

            {/* Boutons d'action */}
            <div className="space-y-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-primary-foreground rounded-xl hover:bg-blue-600"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Envoi en cours..." : "Envoyer votre message"}
              </Button>
              
              <div className="text-center">
                <p className="text-primary-foreground/80 text-sm mb-2">
                  Ou prendre un rendez-vous directement avec moi
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-blue-500 text-primary-foreground rounded-xl hover:bg-blue-600 border-blue-500"
                  onClick={() => window.open("https://calendly.com/gboidin-16/audit-gratuit-15-min", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Prendre un rendez-vous de 15 minutes</span>
                  <span className="sm:hidden">Prendre rendez-vous</span>
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}