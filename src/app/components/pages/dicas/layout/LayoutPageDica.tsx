"use client";

import { LayoutArticlePage } from "@/app/components/pages/LayoutArticlePage";
import { LoadingPage } from "@/components/Loadings/LoadingPage";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { HygraphPostProps, HygraphProductProps } from "@/types/hygraph-types";
import { verifySlug } from "@/utils/verifySlug";

interface PageDicaProps {
  params: {
    slug: string;
  };
}

export function LayoutPageDica({ params }: PageDicaProps) {
  const { data: posts, isFetching } = useHygraphQuery(true, "posts");

  const selectedPost = posts?.filter((post: HygraphPostProps) =>
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
