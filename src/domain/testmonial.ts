import { RichTextProps } from "@graphcms/rich-text-react-renderer"

export type Testimonial = {
  image: string
  text: RichTextProps
  author: string
  linkProfile: string
  linkPost: string
}