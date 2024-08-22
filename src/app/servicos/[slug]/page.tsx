import { LayoutPageServico } from "@/app/components/pages/servicos/layout/LayoutPageServico";
import { generateMetadata } from "./metadata";

interface ServicosProps {
  params: {
    slug: string;
  };
}
export default function ServicoPage({ params }: ServicosProps) {
  return <LayoutPageServico params={params} />;
}

export { generateMetadata };
