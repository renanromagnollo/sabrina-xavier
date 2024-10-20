import { RichTextProps } from '@graphcms/rich-text-react-renderer'

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
    raw: RichTextProps,
    text: string
  }
  products: RawHygraphPoduct[]
}

export type RawHygraphPoduct = {
  typeProducts: { title: string }[]
  image: { url: string }
  name: string
  size: string
  introText: string
  text: { raw: RichTextProps }
  imagesGallery: any
  linkAffiliate: string
  adsenses: any
  posts: RawHygraphPost[]

}

export type RawHygraphTestimonial = {
  image: { url: string }
  text: { raw: RichTextProps }
  author: string
  linkProfile: string
  linkPost: string
}

export type RawHygraphAboutme = {
  imgAbout: { url: string }
  textAbout: { raw: RichTextProps }
}

export type RawHygraphPowerphrase = {
  phrase: string
  author: string
}

export type RawHygraphAboutstudio = {
  imageMain: { url: string }
  title: string
  text: { raw: RichTextProps }
  imagesGallery: { url: string }[]
}

export type RawHygraphHairstyleItem = {
  slug: string
  image: { url: string }
  title: string
  introText: string
  text: { raw: RichTextProps }
}

export type RawHygraphHome = {
  aboutMe: RawHygraphAboutme
  powerPhrases: RawHygraphPowerphrase[]
  aboutStudio: RawHygraphAboutstudio
  makeUp: { text: string }
  testimonials: RawHygraphTestimonial[]
  posts: RawHygraphPost[]
  products: RawHygraphPoduct[]
  hairStyles: RawHygraphHairstyleItem[]
}

//TODO: Alterar o schema HaiStyle no Hygraph para ServiceWork e apenas inserir uma escolha de type dos tipos de serviço hair ou make.