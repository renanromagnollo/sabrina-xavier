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
  const { data } = useHygraphQuery(true, "home");
  console.log(params.slug);
  //   const { hairStyles } = data?.hairStyles;
  const selectedService = data?.hairStyles?.filter((service) =>
    verifySlug({ post: service, params })
  )[0];
  return !selectedService ? (
    <LoadingPage />
  ) : (
    <LayoutArticlePage article={selectedService} />
  );
}
