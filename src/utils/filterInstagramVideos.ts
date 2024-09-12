import { InstagramPostProps } from "@/types/post-instagram-types"

export function filterInstagramVideos(posts: InstagramPostProps[]) {
  const videos = posts?.filter(post => post.media_type === 'VIDEO')
  return videos
}