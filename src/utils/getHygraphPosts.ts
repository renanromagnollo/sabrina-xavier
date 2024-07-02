import { HygraphPostProps } from "@/types/hygraph-types";
import { getFakeData } from "./fakeServer";
import { slugCreator } from "./slugCreator";

export async function getHygraphPosts() {
  try {
    const { posts } = await getFakeData("hygraphPosts");
    return posts.map((post: HygraphPostProps) => ({
      ...post,
      slug: slugCreator(post.title),
    }));
  } catch (error) {
    console.error(error);
  }
}
