/// <reference types="vite/client" />

import { GoogleGenAI } from "@google/genai";
import { InspirationMode } from "../types";

// Safe initialization - check for API key without crashing
// In Vite, use import.meta.env. We also handle the case where it might be undefined.
const apiKey = import.meta.env?.VITE_API_KEY || "";

let ai: GoogleGenAI | null = null;

if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.warn("Gemini AI initialization skipped (invalid key?)", e);
  }
} else {
  console.warn("Gemini AI: No API key found. Using offline fallback mode.");
}

export async function getCreativeInspiration(mode: InspirationMode): Promise<string> {
  // Fallback if no AI instance is available
  if (!ai) {
    // Simulate a short delay for realism
    await new Promise(resolve => setTimeout(resolve, 1000));

    switch (mode) {
      case InspirationMode.IDEA:
        const ideas = [
          "Une composition florale avec des pivoines et de la lumière douce.",
          "Un portrait style renaissance avec une touche moderne.",
          "Un jardin secret sous la lumière de la lune.",
          "Une nature morte avec des fruits et des tissus soyeux."
        ];
        return ideas[Math.floor(Math.random() * ideas.length)];
      case InspirationMode.CRITIQUE:
        const critiques = [
          "Observez bien les ombres pour donner plus de profondeur à votre dessin.",
          "N'ayez pas peur d'accentuer les contrastes.",
          "Essayez de simplifier les formes avant d'ajouter les détails.",
          "Laissez quelques zones de blanc pour faire respirer le dessin."
        ];
        return critiques[Math.floor(Math.random() * critiques.length)];
      case InspirationMode.POETRY:
        const poems = [
          "L'art est la fleur de la vie qui s'épanouit dans l'âme.",
          "Chaque coup de crayon est un battement de cœur sur le papier.",
          "La beauté est une promesse de bonheur.",
          "Dessiner, c'est parler sans mots."
        ];
        return poems[Math.floor(Math.random() * poems.length)];
      default:
        return "Laissez votre crayon guider votre main.";
    }
  }

  let prompt = "";

  switch (mode) {
    case InspirationMode.IDEA:
      prompt = "Donne-moi une idée de dessin créative et originale dans un style 'Versailles moderne' ou floral, en une phrase courte.";
      break;
    case InspirationMode.CRITIQUE:
      prompt = "Donne-moi un conseil artistique bienveillant pour améliorer mes dessins de fleurs ou de portraits, en une phrase.";
      break;
    case InspirationMode.POETRY:
      prompt = "Écris une citation très courte et poétique sur l'art, les fleurs et la beauté, style romantique.";
      break;
    default:
      prompt = "Inspire-moi pour dessiner.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
    });
    // @ts-ignore - Handling potential API differences or type mismatches
    const text = typeof response.text === 'function' ? response.text() : response.text;
    return text || "L'inspiration est capricieuse aujourd'hui...";
  } catch (error) {
    console.error("Error fetching inspiration:", error);
    return "L'inspiration est momentanément indisponible (Erreur connexion).";
  }
}
