import { RichTextProps } from "@graphcms/rich-text-react-renderer"
import { Post } from "."

export type Product = {
  typeProducts: { title: string }[]
  image: string
  name: string
  size: string
  introText: string
  text: { raw: RichTextProps }
  imagesGallery: any
  linkAffiliate: string
  adsenses: any
  posts: Post[]
}