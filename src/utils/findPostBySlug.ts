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

  try {
    switch (category) {
      case "posts": {
        const posts: Post[] = await apiHygraph.getPosts();
        return posts.find((item) => item.slug === slug);
      }
      case "services": {
        const services: Hairstyles[] = await apiHygraph.getHairstyles();
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
