import { useQuery, useQueryClient } from '@tanstack/react-query';
import { API, SchemaType } from '../../services/api/api';
import { HygraphAPI } from '../../services/api/hygraph-api';
import { buildEnvironment, Environment } from '@/config';


async function getHygraph<T = any>(schema: string, env: Environment): Promise<T> {

  const apiHygraph: API = new HygraphAPI(env)

  try {
    switch (schema) {

      case 'portfolio':
        return (await apiHygraph.getPortfolio()) as T;
      case 'hairstyles':
        return (await apiHygraph.getHairstyles()) as T;
      case 'aboutme':
        return (await apiHygraph.getAboutMe()) as T;
      case 'aboutstudio':
        return (await apiHygraph.getAboutStudio()) as T;
      case 'posts':
        return (await apiHygraph.getPosts()) as T;
      case 'testimonials':
        return (await apiHygraph.getTestimonials()) as T;
      case 'powerphrases':
        return (await apiHygraph.getPowerphrases()) as T;

      default:
        throw new Error('Invalid request to Hygraph API');
    }
  } catch (error) {
    console.error(error);
    throw error
  }
}



export function useHygraphQuery<T = any>(schema: SchemaType, revalidate = 0, refetchOnFocus = false) {
  const env: Environment = buildEnvironment()
  // const queryClient = useQueryClient()

  const query = useQuery<T>({
    queryKey: [schema],
    queryFn: async () => {
      const data = await getHygraph<T>(schema, env)

      return data
    },
    refetchOnWindowFocus: refetchOnFocus,
    enabled: !!schema,
    staleTime: 1000 * 60 * 60 * revalidate,
  });
  return query;
}
