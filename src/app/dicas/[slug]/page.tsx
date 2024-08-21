"use client";

import { DicasCard } from "@/app/components/Cards/DicasCard";
import { ProductCard } from "@/app/components/Cards/ProductCard";
import { Products } from "@/app/components/Products";
import { TitleSection } from "@/app/components/TitleSection";
import { Dicas } from "@/app/components/pages/Home/Dicas";
import { LayoutPagePost } from "@/app/components/pages/LayoutPagePost";
import { LoadingCircle } from "@/components/Loadings/LoadingCircle";
import { LoadingPage } from "@/components/Loadings/LoadingPage";
import { DataContext } from "@/context/data-context";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { HygraphPostProps, HygraphProductProps } from "@/types/hygraph-types";
import { getFakeData } from "@/utils/fakeServer";
import { getHygraphPosts } from "@/utils/getHygraphPosts";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import { slugCreator } from "@/utils/slugCreator";
import { verifySlug } from "@/utils/verifySlug";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

interface DicaPageProps {
  params: {
    slug: string;
  };
}

export default function DicaPage({ params }: DicaPageProps) {
  const { data: posts, isFetching } = useHygraphQuery(true, "posts");

  const selectedPost = posts?.filter((post: HygraphPostProps) =>
    verifySlug({ post, params })
  )[0];
  const relatedProducts = selectedPost?.products;

  return isFetching ? (
    <LoadingPage />
  ) : (
    selectedPost && (
      <LayoutPagePost post={selectedPost} relatedProducts={relatedProducts} />
    )
  );
}
