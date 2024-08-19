// import { HygraphHomeProps, HygraphPostProps } from "@/fakes/hygraph-fakes";
import { getFakeData } from "@/utils/fakeServer";
import { setSlugInPosts } from "@/utils/slugCreator";
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
    fakeServices {
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
    fakeProducts {
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
    fakeServices {
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

const fetchHygraph = async (query: string, revalidate = 60 * 60 * 24) => {
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

const fetchHygraphFake = async (query: string) => {
  const data = await getFakeData(query);
  if (query === "hygraphHome") {
    const { posts } = data;
    const postsWithSlug = setSlugInPosts(posts);
    console.log(postsWithSlug);
    return {
      ...data,
      posts: postsWithSlug,
    };
  }
  if (query === "hygraphPosts") {
    console.log(data);
    const postsWithSlug = setSlugInPosts(data);
    return postsWithSlug;
  }
  return data;
};

function getHygraph(fake: boolean, schema: string) {
  if (fake) {
    try {
      switch (schema) {
        case "home":
          return fetchHygraphFake("hygraphHome");
        case "posts":
          return fetchHygraphFake("hygraphPosts");
          break;
        case "testmonials":
          return fetchHygraphFake("hygraphTestimonials");
        default:
          throw new Error("Invalid fake provided to getHygraph");
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      switch (schema) {
        case "home":
          return fetchHygraph(queryHome);
        case "posts":
          return fetchHygraph(queryPosts);
        case "testmonials":
          return fetchHygraph(queryTestimonials);
        default:
          throw new Error("Invalid fake provided to getHygraph");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export function useHygraphQuery(
  fake = true,
  schema: "home" | "posts" | "testimonials"
) {
  const query = useQuery({
    queryKey: [schema],
    queryFn: () => getHygraph(fake, schema),
    enabled: !!schema,
  });
  return query;
}
