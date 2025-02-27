"use client";

import { LayoutArticlePage } from "@/app/components/pages/LayoutArticlePage";
import { LoadingPage } from "@/components/Loadings/LoadingPage";
import { Post } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { verifySlug } from "@/utils/verifySlug";
import { useEffect, useState } from "react";

interface PageDicaProps {
  params: {
    slug: string;
  };
}

export function LayoutPageDica({ params }: PageDicaProps) {
  const { data: posts, isFetching } = useHygraphQuery("posts", 12);
  const [selectedPost, setSelectedPost] = useState<Post>()
  console.log(posts)
  console.log(selectedPost)

  useEffect(() => {
    if (!posts) return;
    const filteredPost = posts.find((post: Post) => verifySlug({ post, params }));
    setSelectedPost(filteredPost);

  }, [posts, params]);

  return isFetching ? (
    <LoadingPage />
  ) : (
    selectedPost && (
      <LayoutArticlePage
        article={selectedPost}
      // relatedProducts={relatedProducts}
      />
    )
  );
}
