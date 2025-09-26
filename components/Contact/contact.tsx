"use client";

import emailjs from "@emailjs/browser";
import { Calendar, CheckCircle, Send, XCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

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
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    // Supprimer tous les caractères non numériques
    const numericValue = value.replace(/\D/g, "");

    // Limiter à 10 chiffres maximum
    if (numericValue.length <= 10) {
      // Formater comme 0X XX XX XX XX
      let formatted = numericValue;
      if (numericValue.length > 0) {
        formatted = numericValue.replace(/(\d{2})(?=\d)/g, "$1 ");
      }
      handleInputChange("phone", formatted);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuration EmailJS
      const serviceId = "service_iust84b";
      const templateId = "template_ex9sj53"; // Vous devrez créer ce template dans EmailJS
      const publicKey = "6Cu3dFHrm5AEfwfPY"; // Remplacez par votre clé publique

      // Préparer les données pour EmailJS
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        to_name: "Gaspard", // Votre nom
      };

      // Envoyer l'email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Succès
      setNotification({
        type: "success",
        message: "Message envoyé avec succès !",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
        agreeNDA: false,
      });

      // Masquer la notification après 5 secondes
      setTimeout(() => {
        setNotification({ type: null, message: "" });
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setNotification({
        type: "error",
        message: "Erreur lors de l'envoi du message. Veuillez réessayer.",
      });

      // Masquer la notification après 5 secondes
      setTimeout(() => {
        setNotification({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const budgetRanges = [
    { value: "< 5k", label: "< 5k" },
    { value: "5k - 10k", label: "5k - 10k" },
    { value: "10k - 20k", label: "10k - 20k" },
    { value: "20k - 50k", label: "20k - 50k" },
    { value: "> 50k", label: "> 50k" },
  ];

  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto p-8 w-full">
      <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground mb-4">
        Contact
      </h2>

      <Card className="bg-card rounded-3xl">
        <CardContent className="px-6 pb-6">
          {/* Notification */}
          {notification.type && (
            <div
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                notification.type === "success"
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-red-500/10 border border-red-500/20"
              }`}
            >
              {notification.type === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              )}
              <p
                className={`text-sm ${
                  notification.type === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {notification.message}
              </p>
            </div>
          )}

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
                className="placeholder:text-gray-400 text-white"
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
                className="placeholder:text-gray-400 text-white"
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
                placeholder="06 12 34 56 78"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="placeholder:text-gray-400 text-white"
              />
            </div>

            {/* Type de projet */}
            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-primary-foreground">
                Type de projet <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) =>
                  handleInputChange("projectType", value)
                }
              >
                <SelectTrigger className="w-full text-white">
                  <SelectValue
                    placeholder="Sélectionnez votre option"
                    className="placeholder:text-gray-400"
                  />
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
                className="placeholder:text-gray-400 text-white"
                required
                rows={4}
              />
            </div>

            {/* Checkbox NDA */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="nda"
                checked={formData.agreeNDA}
                onCheckedChange={(checked) =>
                  handleInputChange("agreeNDA", checked as boolean)
                }
                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white border-white"
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
                className="w-full bg-blue-500 text-white rounded-xl hover:bg-blue-600"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Envoi en cours..." : "Envoyer votre message"}
              </Button>

              {/* Séparateur */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-500" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-gray-500">ou</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-primary-foreground/80 text-sm mb-2">
                  Prendre un rendez-vous directement avec moi
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-blue-500 text-white rounded-xl hover:bg-blue-600 hover:text-white border-blue-500"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/gboidin-16/audit-gratuit-15-min",
                      "_blank"
                    )
                  }
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">
                    Prendre un rendez-vous de 15 minutes
                  </span>
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
