import { Address } from "../_components/Address";
import { TitleSection } from "../_components/TitleSection";

interface ContatoProps { }
export default function Contato(props: ContatoProps) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <TitleSection title="Contato" subtitle="Entre em contato conosco" />
      <Address />
    </div>
  );
}
