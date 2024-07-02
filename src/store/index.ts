import { HygraphHomeProps, HygraphPostProps } from "@/types/hygraph-types";
import { InstagramPostProps } from "@/types/post-instagram-types";
import { reducer } from "./reducers";

export interface dataProps {
  instagramPosts: InstagramPostProps[];
  setInstagramPosts: (posts: InstagramPostProps[]) => void;
  hygraphHome: HygraphHomeProps | {};
  setHygraphHome: (hygraphHome: HygraphHomeProps) => void;
  // setHomeContext: (hygraphHome: HygraphHomeProps, posts: InstagramPostProps[]) => void
  posts: HygraphPostProps[];
  setPosts: (posts: HygraphPostProps[]) => void;
}

const data: dataProps = {
  instagramPosts: [],
  setInstagramPosts: () => {},
  hygraphHome: {},
  setHygraphHome: () => {},
  posts: [],
  setPosts: () => {},
};

export { reducer, data };
