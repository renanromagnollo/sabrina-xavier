import { HygraphPostProps } from "@/types/hygraph-types";
import { getFakeData } from "@/utils/fakeServer";
import { slugCreator } from "@/utils/slugCreator";
import { useQuery } from "@tanstack/react-query";

const queryHome = `
Home {
  aboutMe(where: {slug: "sabrina"}) {
    imgAbout {
      url
    }
    textAboutMe {
      raw
    }
  }
  powerPhrases {
    phrase
    author
  }
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
  makeUp(where: {slug: "makeup"}) {
    text
  }
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
  }
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
`;

const queryPosts = `
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
`;

const queryTestimonials = `
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
`;

const fetchHygraphQuery = async (query: string, revalidate = 60 * 60 * 24) => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate,
    },
  });

  const { data } = await response.json();

  return data;
};

const fetchFake = async () => {
  const { posts } = await getFakeData("hygraphHome");
  console.log(posts);
  const postsWithSlug = posts.map((post: HygraphPostProps) => {
    return {
      ...post,
      slug: slugCreator(post.title),
    };
  });
  console.log(postsWithSlug);

  return postsWithSlug;
};

export async function getHygraphPosts(type: string) {
  try {
    switch (type) {
      case "fake":
        return fetchFake();
      case "home":
        return fetchHygraphQuery(queryHome);
      case "posts":
        return fetchHygraphQuery(queryPosts);
      case "testmonials":
        return fetchHygraphQuery(queryTestimonials);
      default:
        throw new Error("Invalid type provided to getHygraphPosts");
    }
  } catch (error) {
    console.error(error);
  }
}

interface useHygraphQueryProps {
  type: "fake" | "home" | "posts" | "testimonials";
}

export function useHygraphQuery<useHygraphQueryProps>(type = "fake") {
  const query = useQuery({
    queryKey: ["hygraph"],
    queryFn: () => getHygraphPosts(type),
    enabled: !!type,
  });
  return query;
}
