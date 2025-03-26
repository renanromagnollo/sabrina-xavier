import { RichTextContent } from "@graphcms/rich-text-types"

export type Testimonial = {
  image: string
  text: RichTextContent
  author: string
  linkProfile: string
  linkPost: string
}