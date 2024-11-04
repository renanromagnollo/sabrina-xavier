import { RichTextContent } from '@graphcms/rich-text-types';


export type RawHygraphAboutme = {
  imgAbout: {
    url: string;
  };
  textAboutMe: { raw: RichTextContent };
}

export type RawHygraphPowerPhrase = {
  phrase: string;
  author: string;
}

export type RawHygraphAboutStudio = {
  imageMain: {
    url: string;
  };
  title: string;
  text: { raw: RichTextContent };
  imagesGallery: { url: string }[];
}

export type RawHygraphMakeUp = {
  text: string;
}

export type RawHygraphTestimonial = {
  image: { url: string };
  text: { raw: RichTextContent };
  author: string;
  linkProfile: string;
  linkPost: string;
}

export type RawHygraphPost = {
  slug?: string;
  typeServices: { name: string }[];
  image: { url: string };
  title: string;
  text: { raw: RichTextContent; text: string };
  products: RawHygraphProduct[];
}

export type RawHygraphProduct = {
  typeProducts: { title: string }[];
  image: { url: string };
  name: string;
  size?: string;
  introText?: string;
  text: { raw: RichTextContent };
  linkAffiliate?: string;
}

export type RawHygraphHairStyle = {
  slug: string;
  image: { url: string };
  title: string;
  introText: string;
  text: { raw: RichTextContent };
}

export type RawHygraphHome = {
  aboutMe: RawHygraphAboutme;
  powerPhrases: RawHygraphPowerPhrase[];
  aboutStudio: RawHygraphAboutStudio;
  makeUp: RawHygraphMakeUp;
  testimonials: RawHygraphTestimonial[];
  posts: RawHygraphPost[];
  products: RawHygraphProduct[];
  hairStyles: RawHygraphHairStyle[];
}
