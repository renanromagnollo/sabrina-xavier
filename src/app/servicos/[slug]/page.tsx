import { LayoutPageServico } from "@/app/_components/pages/servicos/layout/LayoutPageServico";
import { generateMetadata } from "./metadata";

export interface PageServicosProps {
  params: {
    slug: string;
  };
}
export default function ServicoPage({ params }: PageServicosProps) {
  return <LayoutPageServico params={params} />;
}

export { generateMetadata };
