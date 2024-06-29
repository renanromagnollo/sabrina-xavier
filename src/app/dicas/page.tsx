import { HygraphPostProps } from "@/types/hygraph-types";
import { getFakeData } from "@/utils/fakeServer";
import { fetchHygraphQuery } from "@/utils/fetchHygraphQuery";

interface DicasPageProps {}

const getDicasData = async (fake: boolean): Promise<HygraphPostProps> => {
  const query = `
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
      `;
  if (fake) return getFakeData("hygraphPosts");
  return fetchHygraphQuery(query);
};

export default async function DicasPage(props: DicasPageProps) {
  const posts = await getDicasData(true);
  console.log(posts);
  return <>Dicas Page</>;
}
