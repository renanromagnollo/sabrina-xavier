export function cleanText(text) {
  const regex = /(@[\.a-z0-9_-]{2,})|(#.\S{2,})/g;
  const cleanedText = text?.replace(regex, "");
  console.log(cleanedText);

  return cleanedText;
}
