import { Metadata } from "next";
import { findPostBySlug } from "../../../utils/findPostBySlug";
import { PageServicosProps } from "./page";
import { Hairstyles } from "@/domain";

export async function generateMetadata({
  params: { slug },
}: PageServicosProps): Promise<Metadata> {
  const post = (await findPostBySlug(slug, "services")) as Hairstyles | null;
  return {
    title: post?.title,
    description: post?.introText,
  };
}
