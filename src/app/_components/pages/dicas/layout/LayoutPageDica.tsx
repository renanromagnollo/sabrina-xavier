"use client";

import { LoadingPage } from "@/app/_components/Loadings/LoadingPage";
import { Post } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { verifySlug } from "@/utils/verifySlug";
import { useEffect, useState } from "react";
import { LayoutArticlePage } from "../../LayoutArticlePage";

interface PageDicaProps {
  params: {
    slug: string;
  };
}

export function LayoutPageDica({ params }: PageDicaProps) {
  const { data: posts, isFetching } = useHygraphQuery("posts", 12);
  const [selectedPost, setSelectedPost] = useState<Post>()

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
      />
    )
  );
}
