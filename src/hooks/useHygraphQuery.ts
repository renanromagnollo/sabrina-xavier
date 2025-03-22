import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API, SchemaType } from '../../services/api/api';
import { HygraphAPI } from '../../services/api/hygraph-api';
import { buildEnvironment, Environment } from '@/config';


async function getHygraph(schema: string, env: Environment) {

  const apiHygraph: API = new HygraphAPI(env)

  try {
    switch (schema) {

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
      case 'testimonials':
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
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: [schema],
    queryFn: async () => {
      const data = await getHygraph(schema, env)

      return data
    },
    refetchOnWindowFocus: refetchOnFocus,
    enabled: !!schema,
    staleTime: 1000 * 60 * 60 * revalidate,
  });
  return query;
}
