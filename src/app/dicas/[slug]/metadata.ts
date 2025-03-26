import { Metadata } from "next";
import { findPostBySlug } from "../../../utils/findPostBySlug";
import { PageDicaProps } from "./page";
import { Post } from "@/domain";
import { cleanText } from "@/utils";

export async function generateMetadata({
  params: { slug },
}: PageDicaProps): Promise<Metadata> {
  const post: Post = await findPostBySlug(slug, "posts", 'https://sabrinaxavier.com.br/');
  const text = cleanText(post.text)
  return {
    title: post?.title,
    description: text,
    openGraph: {
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
