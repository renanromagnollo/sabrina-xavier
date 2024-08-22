import { Metadata } from "next";
import { findPostBySlug } from "../../../utils/findPostBySlug";
import { PageDicaProps } from "./page";
import { HygraphPostProps } from "@/types/hygraph-types";

export async function generateMetadata({
  params: { slug },
}: PageDicaProps): Promise<Metadata> {
  const post: HygraphPostProps = await findPostBySlug(slug, "posts");
  return {
    title: post?.title,
    description: post.text.text,
    openGraph: {
      images: [
        {
          url: post.image.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
