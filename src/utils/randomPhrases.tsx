import { HygraphPowerPhraseProps } from "@/types/hygraph-types";

export function randomPhrases(
  listPhrases: HygraphPowerPhraseProps[],
  number = 1
): HygraphPowerPhraseProps {
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
