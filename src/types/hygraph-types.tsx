import { RichTextContent } from '@graphcms/rich-text-types';

export type TRawHygraphAboutme = {
  imgAbout: {
    url: string;
  };
  textAboutMe: { raw: RichTextContent };
}

export type TRawHygraphPowerPhrase = {
  phrase: string;
  author: string;
}

export type TRawHygraphAboutStudio = {
  imageMain: {
    url: string;
  };
  title: string;
  text: { raw: RichTextContent };
  imagesGallery: { url: string }[];
}

export type TRawHygraphMakeUp = {
  text: string;
}

export type TRawHygraphTestimonial = {
  image: { url: string };
  text: { raw: RichTextContent };
  author: string;
  linkProfile: string;
  linkPost: string;
}

export type TRawHygraphPost = {
  slug?: string;
  typeServices: { name: string }[];
  image: { url: string };
  title: string;
  text: { raw: RichTextContent; text: string };
  products: TRawHygraphProduct[];
}

export type TRawHygraphProduct = {
  typeProducts: { title: string }[];
  image: { url: string };
  name: string;
  size?: string;
  introText?: string;
  text: { raw: RichTextContent };
  linkAffiliate?: string;
}

export type TRawHygraphHairStyle = {
  slug: string;
  image: { url: string };
  title: string;
  introText: string;
  text: { raw: RichTextContent };
}

export type THygraphHome = {
  aboutMe: TRawHygraphAboutme;
  powerPhrases: TRawHygraphPowerPhrase[];
  aboutStudio: TRawHygraphAboutStudio;
  makeUp: TRawHygraphMakeUp;
  testimonials: TRawHygraphTestimonial[];
  posts: TRawHygraphPost[];
  products: TRawHygraphProduct[];
  hairStyles: TRawHygraphHairStyle[];
}