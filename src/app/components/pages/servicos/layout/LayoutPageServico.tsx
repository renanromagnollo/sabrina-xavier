"use client";

import { LoadingPage } from "@/components/Loadings/LoadingPage";
import { LayoutArticlePage } from "../../LayoutArticlePage";
import { verifySlug } from "@/utils/verifySlug";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";

interface LayoutPageServicoProps {
  params: {
    slug: string;
  };
}

export function LayoutPageServico({ params }: LayoutPageServicoProps) {
  const { data: hairStyles } = useHygraphQuery('hairstyles');
  console.log(params.slug);
  //   const { hairStyles } = data?.hairStyles;
  const selectedService = hairStyles?.filter((service) =>
    verifySlug({ post: service, params })
  )[0];
  return !selectedService ? (
    <LoadingPage />
  ) : (
    <LayoutArticlePage article={selectedService} />
  );
}
