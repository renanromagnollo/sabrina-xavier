import { Powerphrases } from "@/domain";

export function randomPhrases(
  listPhrases: Powerphrases[],
  number = 1
): Powerphrases | undefined {
  // const length = listPosts.length
  if (!listPhrases) {
    return;
  }
  console.log(listPhrases);
  let shuffledPosts = listPhrases
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  const sortedList = shuffledPosts.slice(0, number);
  return sortedList[0];
}
