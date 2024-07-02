import { HygraphPostProps } from "@/types/hygraph-types";
import { slugCreator } from "./slugCreator";

interface verifySlugProps {
  post: HygraphPostProps;
  params: { slug: string };
}

export function verifySlug({ post, params }: verifySlugProps): boolean {
  if (post?.slug!.length > 0) {
    return post.slug === params.slug;
  }
  const postWithAddedSlug = slugCreator(post?.title);
  return postWithAddedSlug === params.slug;
}
