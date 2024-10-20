import { RichTextContent } from "@graphcms/rich-text-types";

interface HygraphAboutmeProps {
  imgAbout: {
    url: string;
  };
  textAboutMe: { raw: RichTextContent };
}

interface HygraphPowerPhraseProps {
  phrase: string;
  author: string;
}

interface HygraphAboutStudioProps {
  imageMain: {
    url: string;
  };
  title: string;
  text: { raw: RichTextContent };
  imagesGallery: { url: string }[];
}

interface HygraphMakeUpProps {
  text: string;
}

interface HygraphTestimonialProps {
  image: { url: string };
  text: { raw: RichTextContent };
  author: string;
  linkProfile: string;
  linkPost: string;
}

interface HygraphPostProps {
  slug?: string;
  typeServices: { name: string }[];
  image: { url: string };
  title: string;
  text: { raw: RichTextContent; text: string };
  products: HygraphProductProps[];
}

interface HygraphProductProps {
  typeProducts: { title: string }[];
  image: { url: string };
  name: string;
  size?: string;
  introText?: string;
  text: { raw: RichTextContent };
  linkAffiliate?: string;
}

interface HygraphHairStyleProps {
  slug: string;
  image: { url: string };
  title: string;
  introText: string;
  text: { raw: RichTextContent };
}

interface HygraphHomeProps {
  aboutMe: HygraphAboutmeProps;
  powerPhrases: HygraphPowerPhraseProps[];
  aboutStudio: HygraphAboutStudioProps;
  makeUp: HygraphMakeUpProps;
  testimonials: HygraphTestimonialProps[];
  posts: HygraphPostProps[];
  products: HygraphProductProps[];
  hairStyles: HygraphHairStyleProps[];
}

export type {
  HygraphAboutmeProps,
  HygraphPowerPhraseProps,
  HygraphAboutStudioProps,
  HygraphMakeUpProps,
  HygraphTestimonialProps,
  HygraphPostProps,
  HygraphProductProps,
  HygraphHairStyleProps,
  HygraphHomeProps,
};
