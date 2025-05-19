import { extractHygraphRichText } from "./extractHygraphRichText";

export function cleanText(text: string) {
  if (!text) return ''
  const regex = /(@[\.a-z0-9_-]{2,})|(#.\S{2,})/g;
  const cleanedText = text?.replace(regex, "");

  return cleanedText;
}
