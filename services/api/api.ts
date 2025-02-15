import { Aboutme, Hairstyles, Powerphrases, Makeup, Portfolio, Post, Product, Testimonial } from "@/domain";

export type SchemaType =
  'home'
  | 'portfolio'
  | 'makeup'
  | 'hairstyles'
  | 'posts'
  | 'testimonials'
  | 'aboutstudio'
  | 'aboutme'
  | 'products'
  | 'powerphrases'

export interface API {
  getPortfolio(revalidate?: number): Promise<Portfolio[]>
  getTestimonials(): Promise<Testimonial[]>
  getPosts(): Promise<Post[]>
  getAboutMe(): Promise<Aboutme>
  getAboutStudio(): Promise<Aboutme>
  getMakeup(): Promise<Makeup>
  getHairstyles(): Promise<Hairstyles>
  getProducts(): Promise<Product[]>
  getPowerphrases(): Promise<Powerphrases[]>
}

