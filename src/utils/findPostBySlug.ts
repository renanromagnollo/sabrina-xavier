import axios from "axios";
import { slugCreator } from "./slugCreator";
import { HygraphHomeProps, HygraphPostProps } from "@/types/hygraph-types";

export async function findPostBySlug(
  slug: string,
  category: string,
  url?: string
) {
  const urlToGet = url ? url : "http://localhost:3333/";
  try {
    let data;
    switch (category) {
      case "posts":
        ({ data } = await axios.get(urlToGet + "hygraphPosts"));
        const posts: HygraphPostProps[] = data?.data.posts;
        // console.log(data.data.posts);
        return posts?.filter((item: HygraphPostProps) => {
          const postSlug = slugCreator(item.title);
          return postSlug === slug;
        })[0];
      case "services":
        ({ data } = await axios.get(urlToGet + "hygraphHome"));
        const services = data?.data.hairStyles;
        console.log(services);
        return services?.filter((item) => {
          const postSlug = slugCreator(item.title);
          console.log(postSlug);
          return postSlug === slug;
        })[0];
      default:
        console.log("Erro!");
        return null;
    }
  } catch (error) {}
}
