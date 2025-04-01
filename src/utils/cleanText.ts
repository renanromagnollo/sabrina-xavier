import { extractHygraphRichText } from "./extractHygraphRichText";

export function cleanText(text: string) {
  console.log(text)
  if (!text) return ''
  // const reachTextExtracted = extractHygraphRichText(text)
  const regex = /(@[\.a-z0-9_-]{2,})|(#.\S{2,})/g;
  const cleanedText = text?.replace(regex, "");
  console.log(cleanedText)

  return cleanedText;
}
