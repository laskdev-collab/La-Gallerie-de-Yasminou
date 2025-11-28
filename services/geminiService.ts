
import { GoogleGenAI } from "@google/genai";
import { InspirationMode } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCreativeInspiration(mode: InspirationMode): Promise<string> {
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
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "L'inspiration est capricieuse aujourd'hui...";
  } catch (error) {
    console.error("Error fetching inspiration:", error);
    return "L'inspiration est momentanément indisponible.";
  }
}
