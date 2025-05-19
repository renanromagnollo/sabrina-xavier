import { Powerphrases } from "@/domain";

export function randomPhrases(
  listPhrases: Powerphrases[],
  number = 1
): Powerphrases | undefined {
  if (!listPhrases) {
    return;
  }
  let shuffledPosts = listPhrases
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  const sortedList = shuffledPosts.slice(0, number);
  return sortedList[0];
}
