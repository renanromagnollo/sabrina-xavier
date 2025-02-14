import { Portfolio } from '@/domain';

export function randomInstaPosts(
  listPosts: Portfolio[],
  number: number
): Portfolio[] | undefined {
  // const length = listPosts.length
  console.log(listPosts);
  if (listPosts) {
    let shuffledPosts = listPosts
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const sortedList = shuffledPosts?.slice(0, number);
    return sortedList;
  }
}
