import { Metadata } from "next";
import { findPostBySlug } from "../../../utils/findPostBySlug";
import { PageDicaProps } from "./page";
import { HygraphPostProps } from "@/types/hygraph-types";

export async function generateMetadata({
  params: { slug },
}: PageDicaProps): Promise<Metadata> {
  const post = await findPostBySlug(slug, "services");
  return {
    title: post?.title,
    description: post?.introText,
  };
}
