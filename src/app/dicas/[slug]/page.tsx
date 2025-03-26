import { LayoutPageDica } from "@/app/_components/pages/dicas/layout/LayoutPageDica";
// import { generateMetadata } from "./metadata";

export interface PageDicaProps {
  params: {
    slug: string;
  };
}

export default function DicaPage({ params }: PageDicaProps) {
  return <LayoutPageDica params={params} />;
}

// export { generateMetadata };
