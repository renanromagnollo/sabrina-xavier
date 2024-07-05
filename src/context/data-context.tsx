import { data, dataProps, reducer } from "@/store";
import {
  postsAdd,
  homeAdd,
  instagramPostsAdd,
  testimonialsAdd,
} from "../../src/store/actions";
import {
  HygraphHomeProps,
  HygraphPostProps,
  HygraphTestimonialProps,
} from "@/types/hygraph-types";
import { InstagramPostProps } from "@/types/post-instagram-types";
import { ReactNode, createContext, useEffect, useReducer } from "react";

export const DataContext = createContext<dataProps>(data);

function DataProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, data);

  useEffect(() => {
    console.log("state of DataProvider: ", state.posts);
  }, [state]);

  return (
    <DataContext.Provider
      value={{
        instagramPosts: state.instagramPosts,
        setInstagramPosts: (instagramPosts: InstagramPostProps[]) =>
          instagramPostsAdd(dispatch, instagramPosts),
        hygraphHome: state.hygraphHome,
        setHygraphHome: (hygraphHome: HygraphHomeProps) =>
          homeAdd(dispatch, hygraphHome),
        posts: state.posts,
        setPosts: (posts: HygraphPostProps[]) => postsAdd(dispatch, posts),
        testimonials: state.testimonials,
        setTestimonials: (testimonials: HygraphTestimonialProps[]) =>
          testimonialsAdd(dispatch, testimonials),
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
