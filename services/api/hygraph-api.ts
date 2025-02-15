import { Environment } from "@/config";
import { API, SchemaType } from "./api";
import { Aboutme, Aboutstudio, Hairstyles, Makeup, Portfolio, Post, Powerphrases, Product, Testimonial } from "@/domain";
import { RawHygraphAboutme, RawHygraphAboutstudio, RawHygraphHairstyleItem, RawHygraphPoduct, RawHygraphPortfolio, RawHygraphPost, RawHygraphPowerphrase, RawHygraphTestimonial } from "./raw-api-types";
import { setSlugInPosts } from "@/utils";
import axios from "axios";



export class HygraphAPI implements API {

  private readonly queries: Record<string, string>

  constructor(private readonly env: Environment) {
    this.queries = {
      portfolio: `
        Portfolios {
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
      //       home: `
      //         Home {
      //   aboutMe(where: {slug: "sabrina"}) {
      //     imgAbout {
      //       url
      //     }
      //     textAboutMe {
      //       raw
      //     }
      //   }
      //   powerPhrases {
      //     phrase
      //     author
      //   }
      //   aboutStudio(where: {slug: "studio"}) {
      //     imageMain {
      //       url
      //     }
      //     title
      //     text {
      //       raw
      //     }
      //     imagesGallery {
      //       url
      //     }
      //   }
      //   makeUp(where: {slug: "makeup"}) {
      //     text
      //   }
      //   testimonials {
      //     image {
      //       url
      //     }
      //     text {
      //       raw
      //     }
      //     author
      //     linkProfile
      //     linkPost
      //   }
      //   posts {
      //     fakeServices {
      //       name
      //     }
      //     image {
      //       url
      //     }
      //     title
      //     text {
      //       raw
      //     }
      //   }
      //   products {
      //     fakeProducts {
      //       title
      //     }
      //     image {
      //       url
      //     }
      //     name
      //     size
      //     introText
      //     text {
      //       raw
      //     }
      //     linkAffiliate
      //   }
      //   hairStyles {
      //     slug
      //     image {
      //       url
      //     }
      //     title
      //     introText
      //     text {
      //       raw
      //     }
      //   }
      // }
      //       `,
      posts: `
        Posts {
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
        }
      `,
      testimonials: `
        Testimonials {
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
        AboutMe {
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
        AboutStudio {
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
        PowerPhrases {
          powerPhrases {
            phrase
            author
  }
        }
      `,
      makeup: `
        Makeup {
          makeUp(where: {slug: "makeup"}) {
            text
          }
        }
      `,
      hairstyles: `
        Hairstyles {
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
        Products {
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

  private async queryHygraph(queryName: SchemaType): Promise<any> {
    try {
      console.log('development env: ', this.env.app.env)
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
      // console.log('data query:', response.data)
    } catch (error) {
      console.error('Erro na consulta Hygraph:', error);
      throw error; // Lança o erro para ser tratado posteriormente
    }
  }

  private async fakeFetchHygraph(queryFake: string): Promise<any> {
    console.log('entrou no fetch')
    const fakeResponse = await fetch("http://localhost:3333/" + queryFake, {
      //TODO: verificar esse revalidate do fetch, de acordo com o React Query da api
      // next: { revalidate: 0 },
    });
    const { data } = await fakeResponse.json();
    console.log('data: ', data)
    return data;
  }

  private mapRawHygraphPostToPost(post: RawHygraphPost & { slug: string }): Post {
    return {
      slug: post.slug,
      type: post.typeServices,
      image: post.image.url,
      title: post.title,
      text: post.text.raw,
      products: post.products?.map(this.mapRawHygraphProductToProduct) ?? []
    };
  }

  private mapRawHygraphProductToProduct(product: RawHygraphPoduct): Product {
    return {
      ...product,
      image: product.image.url,
      posts: product.posts?.map(this.mapRawHygraphPostToPost) ?? []
    };
  }

  private mapRawHygraphHairstylesToHairstyle(item: RawHygraphHairstyleItem): Hairstyles {
    console.log(item)
    return {
      slug: item.slug,
      image: item.image.url,
      title: item.title,
      introText: item.introText,
      text: item.text
    }
  }

  private mapRawProductsToProducts(product: RawHygraphPoduct): Product {
    return {
      typeProducts: product.typeProducts,
      image: product.image.url,
      name: product.name,
      size: product.size,
      introText: product.introText,
      text: product.text,
      imagesGallery: product.imagesGallery,
      linkAffiliate: product.linkAffiliate,
      adsenses: product.adsenses,
      posts: product.posts?.map(this.mapRawHygraphPostToPost) ?? []
    }
  }

  private mapRawToPortfolio(portfolio: RawHygraphPortfolio): Portfolio {
    console.log(portfolio)

    const data = {
      id: portfolio.id,
      link: portfolio.link,
      stage: portfolio.stage,
      text: portfolio.texto,
      typeService: portfolio.typeService,
      image: portfolio.imagem.url,
      video: portfolio.video.url
    }
    console.log(data)
    return data
  }

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
    // const data = porfolios.map(this.mapRawToPortfolio)
    const data = porfolios.map((portfolio: RawHygraphPortfolio) => {
      return {
        id: portfolio.id,
        link: portfolio.link,
        stage: portfolio.stage,
        text: portfolio.texto,
        typeService: portfolio.typeService,
        image: portfolio.imagem.url,
        // video: portfolio.video.url
      }
    })
    console.log(data)
    return data
  }

  async getTestimonials(): Promise<Testimonial[]> {
    const response = this.env.app.env === 'development' ?
      await this.fakeFetchHygraph('hygraphTestimonials')
      :
      await this.queryHygraph('testimonials')
    return response.map(this.mapRawToTestimonials)
  }

  async getPosts(): Promise<Post[]> {
    // await this.getProducts()
    const response = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphPosts')
      : await this.queryHygraph('posts');

    console.log('posts: ', response?.posts)

    const postsWithSlugs = setSlugInPosts(response?.posts)

    return postsWithSlugs.map(this.mapRawHygraphPostToPost);
  }

  async getAboutMe(): Promise<Aboutme> {
    let response: RawHygraphAboutme
    if (this.env.app.env === 'development') {
      response = await this.fakeFetchHygraph('hygraphAboutMe')
    } else {
      response = await this.queryHygraph('aboutme')
    }
    return {
      image: response.imgAbout.url,
      text: response.textAbout.raw
    };
  }

  async getAboutStudio(): Promise<Aboutstudio> {
    const { aboutStudio } = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphAboutStudio')
      : await this.queryHygraph('aboutstudio');

    return {
      image: aboutStudio.imageMain.url,
      title: aboutStudio.title,
      text: aboutStudio.text.raw,
      gallery: aboutStudio.imagesGallery.map(item => item.url)
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

  async getProducts(): Promise<Product[]> {
    const response = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphProducts')
      : await this.queryHygraph('products');

    return response.map(this.mapRawProductsToProducts);
  }

  async getPowerphrases(): Promise<any> {
    //TODO: Verificar se a requisição de produção tb vai retornar o powerPhrases
    const data = this.env.app.env === 'development'
      ? await this.fakeFetchHygraph('hygraphPowerphrases')
      : await this.queryHygraph('powerphrases');
    const phrases = data.powerPhrases.map(this.mapRawToPowerphrase)
    return phrases
  }

}