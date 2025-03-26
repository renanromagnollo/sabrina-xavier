import { Metadata } from "next";
import { findPostBySlug } from "../../../utils/findPostBySlug";
import { PageServicosProps } from "./page";

export async function generateMetadata({
  params: { slug },
}: PageServicosProps): Promise<Metadata> {
  const post = await findPostBySlug(slug, "services");
  return {
    title: post?.title,
    description: post?.introText,
  };
}
