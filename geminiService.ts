
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getNeighborResponse = async (userMessage: string, neighborName: string, neighborNumber: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are ${neighborName}, a friendly resident in apartment ${neighborNumber} of the "Snowed In" complex. Respond to this message from your neighbor: "${userMessage}". Keep it short, conversational, and neighborly. Maybe mention the snow or building life.`,
    });
    return response.text?.trim() || "Hey neighbor! Stay warm!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hey! I'm a bit busy digging my way out of the snow, talk soon!";
  }
};
