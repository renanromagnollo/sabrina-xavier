import { InstagramPostProps } from "@/types/post-instagram-types"

export function randomInstaPosts(listPosts: InstagramPostProps[], number: number): InstagramPostProps[]{
    // const length = listPosts.length
    console.log(listPosts)
    let shuffledPosts = listPosts
        .map(value => ({ value, sort: Math.random()})) 
        .sort((a, b) => a.sort - b.sort)
        .map(({value}) => value)
    const sortedList = shuffledPosts.slice(0, number)
    return sortedList
}