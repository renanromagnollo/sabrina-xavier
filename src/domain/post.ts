import { RichTextProps } from "@graphcms/rich-text-react-renderer"
import { Product } from "."

export type Post = {
  slug: string
  type: { name: string }[]
  image: string
  title: string
  text: RichTextProps
  // products: Product[]
}