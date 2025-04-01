import { Metadata } from "next";
import { findPostBySlug } from "../../../utils/findPostBySlug";
import { PageDicaProps } from "./page";
import { Post } from "@/domain";
import { cleanText } from "@/utils";

export async function generateMetadata({
  params: { slug },
}: PageDicaProps): Promise<Metadata> {
  const post = (await findPostBySlug(slug, "posts")) as Post | null;
  const text = cleanText(post?.text)
  return {
    title: post?.title,
    description: text ?? '',
    openGraph: {
      images: [
        {
          url: post?.image ?? 'image/s1.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
