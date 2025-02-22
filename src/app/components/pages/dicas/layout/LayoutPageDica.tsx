"use client";

import { LayoutArticlePage } from "@/app/components/pages/LayoutArticlePage";
import { LoadingPage } from "@/components/Loadings/LoadingPage";
import { Post } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { HygraphPostProps, HygraphProductProps } from "@/types/hygraph-types";
import { verifySlug } from "@/utils/verifySlug";

interface PageDicaProps {
  params: {
    slug: string;
  };
}

export function LayoutPageDica({ params }: PageDicaProps) {
  const { data: posts, isFetching } = useHygraphQuery("posts");

  const selectedPost = posts?.filter((post: Post) =>
    verifySlug({ post, params })
  )[0];
  const relatedProducts = selectedPost?.products;

  return isFetching ? (
    <LoadingPage />
  ) : (
    selectedPost && (
      <LayoutArticlePage
        article={selectedPost}
        relatedProducts={relatedProducts}
      />
    )
  );
}
