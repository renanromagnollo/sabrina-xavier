import { RichTextProps } from "@graphcms/rich-text-react-renderer"

export type Portfolio = {
  id: string
  link: string
  stage: string
  texto: { raw: RichTextProps }
  typeService: { name: 'Make' | 'Hair' }[]
  imagem: { url: string }
  video: { url: string }
}