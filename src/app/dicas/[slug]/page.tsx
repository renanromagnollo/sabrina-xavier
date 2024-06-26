'use client'

import { HygraphPostProps } from "@/types/hygraph-types"
import { getFakeData } from "@/utils/fakeServer"
import { RichTextHygraph } from "@/utils/richtTextHygraph"
import { slugCreator } from "@/utils/slugCreator"
import Image from "next/image"
import { useEffect, useState } from "react"
import styled from "styled-components"

const PageArea = styled.div`
    width: 100%;
    display: flex;
`

const PostArea = styled.section`
    width: 70%;
`

export default function DicaPage({params}){
    // console.log(params)
    const [selectedPost, setSelectedPost] = useState<HygraphPostProps>()

    useEffect(() => {
        function verifySlug(content) {
            const slug = slugCreator(content?.title)
            return slug === params.slug
        }

        const getPosts = async () => {
            const {posts} = await getFakeData('hygraphPosts')
            const selected = posts.filter(post => verifySlug(post))
            console.log(selected)
            if (selected) setSelectedPost(selected[0])
        }
        getPosts()
    }, [])

    return selectedPost && (
        <PageArea>
                <PostArea>
                    <Image
                        src={selectedPost.image.url}
                        alt={`image_${slugCreator(selectedPost.title)}`}
                        width={600}
                        height={500}
                        style={{objectFit: "contain"}}
                    />
                    <h1>{selectedPost.title}</h1>
                    <p><RichTextHygraph content={selectedPost.text.raw}/></p>
                </PostArea>
        </PageArea>
            )
}