import { Address } from '@/components/Address';
import { FormContact } from '../components/Forms/FormContact';
import { TitleSection } from '../components/TitleSection';

interface ContatoProps {}
export default function Contato(props: ContatoProps) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <TitleSection title="Contato" subtitle="Entre em contato conosco" />
      <FormContact />
      <Address />
    </div>
  );
}
