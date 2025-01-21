import { RichTextProps } from "@graphcms/rich-text-react-renderer"

export type Portfolio = {
  id: string
  link: string
  stage: string
  text: { raw: RichTextProps }
  typeService: { name: 'Make' | 'Hair' }[]
  image: string
  video: string
}