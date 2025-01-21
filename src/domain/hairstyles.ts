import { RichTextProps } from "@graphcms/rich-text-react-renderer"

export type Hairstyles = {
  slug: string
  image: string
  title: string
  introText: string
  text: { raw: RichTextProps }
}