import { RichTextContent } from "@graphcms/rich-text-types";

import { Product } from "."

export type Post = {
  slug: string
  type: { name: string }[]
  image: string
  title: string
  text: RichTextContent
  // products: Product[]
}