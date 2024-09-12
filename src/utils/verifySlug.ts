import { HygraphPostProps } from "@/types/hygraph-types";
import { slugCreator } from "./slugCreator";

interface verifySlugProps {
  post: HygraphPostProps;
  params: { slug: string };
}

export function verifySlug({ post, params }: verifySlugProps): boolean {
  console.log(post);
  if (post?.slug!.length > 0) {
    console.log(post.slug === params.slug);
    return post.slug === params.slug;
  }
  const postWithAddedSlug = slugCreator(post?.title);
  return postWithAddedSlug === params.slug;
}
