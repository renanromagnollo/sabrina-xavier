import { Hairstyles, Post } from "@/domain";

interface verifySlugProps {
  post: Post | Hairstyles;
  params: { slug: string };
}

export function verifySlug({ post, params }: verifySlugProps): boolean {
  if (post?.slug!.length > 0) {
    return post.slug === params.slug;
  }
  return false
}
