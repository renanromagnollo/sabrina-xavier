import { Aboutme, Hairstyles, Powerphrases, Makeup, Portfolio, Post, Product, Testimonial, Aboutstudio } from "@/domain";

export type SchemaType =
  'home'
  | 'portfolio'
  | 'makeup'
  | 'hairstyles'
  | 'posts'
  | 'testimonials'
  | 'aboutstudio'
  | 'aboutme'
  | 'powerphrases'

export interface API {
  getPortfolio(revalidate?: number): Promise<Portfolio[]>
  getTestimonials(): Promise<Testimonial[]>
  getPosts(): Promise<Post[]>
  getAboutMe(): Promise<Aboutme>
  getAboutStudio(): Promise<Aboutstudio>
  getMakeup(): Promise<Makeup>
  getHairstyles(): Promise<Hairstyles[]>
  getPowerphrases(): Promise<Powerphrases[]>
}

