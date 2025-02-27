import { HygraphPostProps } from "@/types/hygraph-types";
import { slugCreator } from "./slugCreator";
import { Post } from "@/domain";

interface verifySlugProps {
  post: Post;
  params: { slug: string };
}

export function verifySlug({ post, params }: verifySlugProps): boolean {
  console.log(post);
  console.log(params)
  if (post?.slug!.length > 0) {
    console.log(post.slug === params.slug);
    return post.slug === params.slug;
  }
  return false
  // const postWithAddedSlug = slugCreator(post?.title);
  // return postWithAddedSlug === params.slug;
}
