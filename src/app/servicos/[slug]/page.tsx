"use client";
import { LayoutArticlePage } from "@/app/components/pages/LayoutArticlePage";
import { LoadingPage } from "@/components/Loadings/LoadingPage";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import { verifySlug } from "@/utils/verifySlug";

interface ServicosProps {
  params: {
    slug: string;
  };
}
export default function ServicoPage({ params }: ServicosProps) {
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
