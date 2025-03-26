import { Environment } from "@/config";
import { API, SchemaType } from "./api";
import { Aboutme, Aboutstudio, Hairstyles, Makeup, Portfolio, Post, Powerphrases, Product, Testimonial } from "@/domain";
import { RawHygraphHairstyleItem, RawHygraphPortfolio, RawHygraphPost, RawHygraphPowerphrase, RawHygraphTestimonial } from "./raw-api-types";
import { setSlugInPosts } from "@/utils";
import axios from "axios";


export class HygraphAPI implements API {

  private readonly queries: Record<string, string>

  constructor(private readonly env: Environment) {
    this.queries = {
      portfolio: `
        query Portfolios {
          porfolios {
            id
            link
            stage
            texto {
              raw
            }
            typeService {
              name
            }
            imagem {
              url
            }
            video {
              url
            }
          }
        }
      `,
      posts: `
        query Posts {
          posts {
            typeServices {
              name
            }
            image {
              url
            }
            title
            text {
              raw
            }
            products {
              id
              name
              image {
                url
              }
              introText
              linkAffiliate
              }
            }
          }
      `,
      testimonials: `
        query Testimonials {
          testimonials {
            image {
              url
            }
            text {
              raw
            }
            author
            linkProfile
            linkPost
          }
        }
      `,
      aboutme: `
        query AboutMe {
          aboutMe(where: {slug: "sabrina"}) {
            imgAbout {
              url
            }
            textAboutMe {
              raw
            }
          }
        }
      `,
      aboutstudio: `
        query AboutStudio {
          aboutStudio(where: {slug: "studio"}) {
            imageMain {
              url
            }
            title
            text {
              raw
            }
            imagesGallery {
              url
            }
          }
        }
      `,
      powerphrases: `
        query PowerPhrases {
          powerPhrases {
            phrase
            author
  }
        }
      `,
      makeup: `
        query Makeup {
          makeUp(where: {slug: "makeup"}) {
            text
          }
        }
      `,
      hairstyles: `
        query Hairstyles {
          hairStyles {
            slug
            image {
              url
            }
            title
            introText
            text {
              raw
            }
          }
        }
      `,
      products: `
        query Products {
          products {
          typeProducts {
            title
          }
          image {
            url
          }
          name
          size
          introText
          text {
            raw
          }
          linkAffiliate
        }
        }
      `

    }
  }

  private getQuery(queryName: SchemaType): string {
    const query = this.queries[queryName]
    if (!query) {
      throw new Error(`Query "${queryName}" não encontrada.`)
    }
    return query
  }

  private async queryHygraph(queryName: SchemaType, delay: number = 1): Promise<any> {
    try {
      if (delay > 0) {
        await new Promise(resolve => setTimeout(resolve, delay * 1000))
      }
      if (this.env.app.env === "development") {
        return await this.fakeFetchHygraph(queryName)
      } else {
        const query = this.getQuery(queryName)
        const response = await axios.post(
          this.env.hygraph.apiUrl, // URL da API
          { query }, // Corpo da requisição
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${this.env.hygraph.accessToken}`,
            },
          }
        );
        return response.data.data; // Acessa o `data` dentro do resultado retornado

      }
    } catch (error) {
      console.error('Erro na consulta Hygraph:', error);
      throw error; // Lança o erro para ser tratado posteriormente
    }
  }

  private async fakeFetchHygraph(queryFake: string): Promise<any> {
    const fakeResponse = await fetch("http://localhost:3333/" + queryFake, {
    });
    const { data } = await fakeResponse.json();
    return data;
  }

  private mapRawHygraphPostToPost(post: RawHygraphPost & { slug: string }): Post {
    return {
      slug: post.slug,
      type: post.typeServices,
      image: post.image.url,
      title: post.title,
      text: post.text.raw,
    };
  }


  private mapRawHygraphHairstylesToHairstyle(item: RawHygraphHairstyleItem): Hairstyles {
    return {
      slug: item.slug,
      image: item.image.url,
      title: item.title,
      introText: item.introText,
      text: item.text.raw
    }
  }



  // private mapRawToPortfolio(portfolio: RawHygraphPortfolio): Portfolio {

  //   const data = {
  //     id: portfolio.id,
  //     link: portfolio.link,
  //     stage: portfolio.stage,
  //     text: portfolio.texto.raw,
  //     typeService: portfolio.typeService,
  //     image: portfolio.imagem.url,
  //     video: portfolio.video.url
  //   }
  //   return data
  // }

  private mapRawToTestimonials(testimonial: RawHygraphTestimonial): Testimonial {
    return {
      image: testimonial.image.url,
      text: testimonial.text.raw,
      author: testimonial.author,
      linkProfile: testimonial.linkProfile,
      linkPost: testimonial.linkPost
    }
  }

  private mapRawToPowerphrase(phrase: RawHygraphPowerphrase): Powerphrases {
    return {
      phrase: phrase.phrase,
      author: phrase.author
    }
  }

  async getPortfolio(): Promise<Portfolio[]> {
    const { porfolios } = this.env.app.env === 'development' ?
      await this.fakeFetchHygraph('hygraphPortfolio')
      :
      await this.queryHygraph('portfolio')
    console.log(porfolios)

    const data = porfolios.map((portfolio: RawHygraphPortfolio) => {


      return {
        id: portfolio.id,
        link: portfolio.link,
        stage: portfolio.stage,
        text: portfolio.texto.raw,
        typeService: portfolio.typeService,
        image: portfolio.imagem?.url,
        video: portfolio.video
      }
    }
    )
    console.log(data)
    return data
  }

  async getTestimonials(): Promise<Testimonial[]> {
    const { testimonials } = this.env.app.env === 'development' ?
      await this.fakeFetchHygraph('hygraphTestimonials')
      :
      await this.queryHygraph('testimonials')
    return testimonials.map(this.mapRawToTestimonials)
  }

  async getPosts(): Promise<Post[]> {
    // await this.getProducts()
    const { posts } = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphPosts')
      : await this.queryHygraph('posts');


    const postsWithSlugs = setSlugInPosts(posts)


    return postsWithSlugs.map(this.mapRawHygraphPostToPost);
    // return postsWithSlugs
  }

  async getAboutMe(): Promise<Aboutme> {
    // let response: RawHygraphAboutme
    const { aboutMe } = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphAboutMe')
      : await this.queryHygraph('aboutme')


    return {
      image: aboutMe.imgAbout.url,
      text: aboutMe.textAboutMe.raw
    }
  }

  async getAboutStudio(): Promise<Aboutstudio> {
    const { aboutStudio } = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphAboutStudio')
      : await this.queryHygraph('aboutstudio');

    return {
      image: aboutStudio.imageMain.url,
      title: aboutStudio.title,
      text: aboutStudio.text.raw,
      gallery: aboutStudio.imagesGallery.map((item: { url: string; }) => item.url)
    };
  }

  async getMakeup(): Promise<Makeup> {
    const response = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphMakeup')
      : await this.queryHygraph('makeup');

    return response;
  }

  async getHairstyles(): Promise<Hairstyles> {
    const { hairStyles } = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphHairstyles')
      : await this.queryHygraph('hairstyles');

    return hairStyles.map(this.mapRawHygraphHairstylesToHairstyle);
  }

  async getPowerphrases(): Promise<any> {
    const data = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphPowerphrases')
      : await this.queryHygraph('powerphrases');
    const phrases = data.powerPhrases.map(this.mapRawToPowerphrase)
    return phrases
  }

}