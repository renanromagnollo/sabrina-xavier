// import { HygraphHomeProps, HygraphPostProps } from "@/fakes/hygraph-fakes";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API, SchemaType } from '../../services/api/api';
import { HygraphAPI } from '../../services/api/hygraph-api';
import { buildEnvironment, Environment } from '@/config';

// const queryHome = `
// Home {
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
// `;

// const queryPosts = `
// Posts {
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
//     products {
//       id
//       name
//       image {
//         url
//       }
//       introText
//       linkAffiliate
//     }
//   }
// }
// `;

// const queryTestimonials = `
// Testimonials {
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
// }
// `;

// const queryPortfolio = `
// Portfolios {
//   porfolios {
//     id
//     link
//     stage
//     texto {
//       raw
//     }
//     typeService {
//       name
//     }
//     imagem {
//       url
//     }
//     video {
//       url
//     }
//   }
// }
// `

// const fetchHygraph = async (query: string, revalidate = 60 * 60 * 24) => {
//   const response = await fetch(process.env.HYGRAPH_API_URL!, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
//     },
//     body: JSON.stringify({ query }),
//     next: {
//       revalidate,
//     },
//   });

//   const { data } = await response.json();

//   return data;
// };

// const fetchHygraphFake = async (query: string) => {
//   const data = await getFakeData(query);
//   if (query === 'hygraphHome') {
//     const { posts } = data;
//     const postsWithSlug = setSlugInPosts(posts);
//     console.log(postsWithSlug);
//     return {
//       ...data,
//       posts: postsWithSlug,
//     };
//   }
//   if (query === 'hygraphPosts') {
//     const postsWithSlug = setSlugInPosts(data?.posts);
//     console.log(postsWithSlug);
//     return postsWithSlug;
//   }
//   return data;
// };

async function getHygraph(schema: string, env: Environment) {

  const apiHygraph: API = new HygraphAPI(env)

  try {
    switch (schema) {
      case 'home':
        return Promise.all([
          apiHygraph.getPowerphrases(),
          apiHygraph.getHairstyles()
          // apiHygraph.getAboutMe(),
          // apiHygraph.getAboutStudio(),
          // apiHygraph.getPosts(),
          // apiHygraph.getTestimonials(),
          // apiHygraph.getPortfolio()
        ])
      case 'portfolio':
        return apiHygraph.getPortfolio();
      case 'hairstyles':
        return apiHygraph.getHairstyles();
      case 'aboutme':
        return apiHygraph.getAboutMe();
      case 'aboutstudio':
        return apiHygraph.getAboutStudio();
      case 'posts':
        return apiHygraph.getPosts();
      case 'testmonials':
        return apiHygraph.getTestimonials()
      case 'powerphrases':
        return apiHygraph.getPowerphrases();

      default:
        throw new Error('Invalid request to Hygraph API');
    }
  } catch (error) {
    console.error(error);
  }
}



export function useHygraphQuery(schema: SchemaType, revalidate = 0, refetchOnFocus = false) {
  const env: Environment = buildEnvironment()
  console.log('env: ', env)
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: [schema],
    queryFn: async () => {
      const data = await getHygraph(schema, env)
      console.log('dados recebidos: ', data)

      // if (schema === 'home' && Array.isArray(data)) {
      //   const [posts, testimonials, portfolio, aboutstudio, aboutme, products, powerphrases] = data

      //   queryClient.setQueryData(['posts'], posts)
      //   queryClient.setQueryData(['testimonials'], testimonials)
      //   queryClient.setQueryData(['portfolio'], portfolio)
      //   queryClient.setQueryData(['aboutstudio'], aboutstudio)
      //   queryClient.setQueryData(['aboutme'], aboutme)
      //   queryClient.setQueryData(['products'], products)
      //   queryClient.setQueryData(['powerphrases'], powerphrases)
      // }

      return data
    },
    refetchOnWindowFocus: refetchOnFocus,
    // enabled: !!schema,
    staleTime: 1000 * 60 * 60 * revalidate,
  });
  console.log(query.data);
  return query;
}
