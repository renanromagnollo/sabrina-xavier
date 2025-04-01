import axios from "axios";
import { slugCreator } from "./slugCreator";
import { THygraphHome, TRawHygraphHairStyle, TRawHygraphPost } from "@/types/hygraph-types";
import { useCallback } from "react";
import { HygraphAPI } from "../../services/api/hygraph-api";
import { buildEnvironment, Environment } from "@/config";
import { API } from "../../services/api/api";
import { Hairstyles, Post } from "@/domain";

export async function findPostBySlug(slug: string, category: string) {
  const env: Environment = buildEnvironment()
  const apiHygraph: API = new HygraphAPI(env)

  // async function hygraphQuery(query: string) {


  //   try {
  //     const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_API_URL as string, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_ACCESS_TOKEN}`,
  //       },
  //       body: JSON.stringify({ query }),
  //       next: { revalidate: 60 * 60 * 12 }, // 12h
  //     });

  //     const {data} = await response.json()


  //     return response.json()
  //   }

  //   } catch (error) {

  //   }

  try {
    switch (category) {
      case "posts": {
        const posts: Post[] = await apiHygraph.getPosts(); // Garante que é um array
        return posts.find((item) => item.slug === slug);
      }
      case "services": {
        const services: Hairstyles[] = await apiHygraph.getHairstyles(); // Garante que é um array
        return services.find((item) => item.slug === slug);
      }
      default:
        return null;
    }
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}
