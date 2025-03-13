// import { RichTextProps } from '@graphcms/rich-text-react-renderer'
import { RichTextContent } from '@graphcms/rich-text-types'

export type RawInstagramPost = {
  media_type: string
  timestamp: string
  thumbnail_url: string
  media_url: string
  caption: string
  permalink: string
  id: string
}

export type RawHygraphPost = {
  typeServices: { name: string }[]
  image: { url: string }
  title: string
  text: {
    raw: RichTextContent
  }
  products: RawHygraphPoduct[]
}

export type RawHygraphPoduct = {
  typeProducts: { title: string }[]
  image: { url: string }
  name: string
  size: string
  introText: string
  text: { raw: RichTextContent }
  imagesGallery: any
  linkAffiliate: string
  adsenses: any
  posts: RawHygraphPost[]

}

export type RawHygraphTestimonial = {
  image: { url: string }
  text: { raw: RichTextContent }
  author: string
  linkProfile: string
  linkPost: string
}

export type RawHygraphAboutme = {
  imgAbout: { url: string }
  textAbout: { raw: RichTextContent }
}

export type RawHygraphPowerphrase = {
  phrase: string
  author: string
}

export type RawHygraphAboutstudio = {
  imageMain: { url: string }
  title: string
  text: { raw: RichTextContent }
  imagesGallery: { url: string }[]
}

export type RawHygraphHairstyleItem = {
  slug: string
  image: { url: string }
  title: string
  introText: string
  text: { raw: RichTextContent }
}

export type RawHygraphHome = {
  aboutMe: RawHygraphAboutme
  powerPhrases: RawHygraphPowerphrase[]
  aboutStudio: RawHygraphAboutstudio
  makeUp: { text: string }
  testimonials: RawHygraphTestimonial[]
  posts: RawHygraphPost[]
  products: RawHygraphPoduct[]
  hairstyles: RawHygraphHairstyleItem[]
}

export type RawHygraphPortfolio = {
  id: string
  link: string
  stage: string
  texto: { raw: RichTextContent }
  typeService: { name: 'Make' | 'Hair' }[]
  imagem: { url: string }
  video: { url: string }
}

export type RawHygraphMakeUp = {
  text: string
}

//TODO: Alterar o schema HaiStyle no Hygraph para ServiceWork e apenas inserir uma escolha de type dos tipos de serviço hair ou make.