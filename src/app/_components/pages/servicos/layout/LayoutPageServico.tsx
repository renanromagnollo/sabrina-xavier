"use client";

import { LayoutArticlePage } from "../../LayoutArticlePage";
import { verifySlug } from "@/utils/verifySlug";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { LoadingPage } from "@/app/_components/Loadings/LoadingPage";

interface LayoutPageServicoProps {
  params: {
    slug: string;
  };
}

export function LayoutPageServico({ params }: LayoutPageServicoProps) {
  const { data: hairStyles } = useHygraphQuery('hairstyles');
  const selectedService = hairStyles?.filter((service) =>
    verifySlug({ post: service, params })
  )[0];
  return !selectedService ? (
    <LoadingPage />
  ) : (
    <LayoutArticlePage article={selectedService} />
  );
}
