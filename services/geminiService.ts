
import { GoogleGenAI, Type } from "@google/genai";
import { Idea } from "../types";

export const expandIdea = async (title: string): Promise<Partial<Idea>> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a detailed encyclopedia entry for the concept: "${title}". Include a category, a short summary (description), a quote, the historical origin, a complexity level (1-3), and 3 relevant tags.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING },
            description: { type: Type.STRING },
            fullContent: { type: Type.STRING },
            quote: { type: Type.STRING },
            origin: { type: Type.STRING },
            complexity: { type: Type.INTEGER, description: '1 for easy, 2 for intermediate, 3 for advanced' },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["category", "description", "fullContent", "quote", "origin", "complexity", "tags"]
        }
      }
    });

    const data = JSON.parse(response.text);
    return data;
  } catch (error) {
    console.error("Gemini expansion failed:", error);
    return {
      category: "Unknown Concept",
      description: "We couldn't find much about this idea yet.",
      fullContent: "The expansion service encountered an error. Please try again later.",
      quote: "Knowledge is the only path forward.",
      origin: "Modern Era",
      complexity: 1,
      tags: ["Mystery"]
    };
  }
};

export const getRandomIdeaTitle = async (): Promise<string> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: "Give me one interesting, obscure, or powerful intellectual concept, philosophy, or scientific principle in 3 words or less. Just the title.",
        });
        return response.text.trim().replace(/^"|"$/g, '');
    } catch (error) {
        return "Transcendentalism";
    }
}
