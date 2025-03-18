import { RichTextContent } from "@graphcms/rich-text-types";

export type Portfolio = {
  id: string
  link: string
  stage: string
  text: RichTextContent
  typeService: { name: 'Make' | 'Hair' }[]
  image: string
  video: string
}