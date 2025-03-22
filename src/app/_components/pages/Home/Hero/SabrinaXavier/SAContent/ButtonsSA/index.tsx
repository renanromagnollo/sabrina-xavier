import { ButtonContact } from "@/app/_components/Buttons/ButtonContact/ButtonContact";
import { ButtonUnselected } from "@/app/_components/Buttons/ButtonUnselected";
import styled from "styled-components";

const ButtonsContent = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  align-self: flex-end;
  button {
    border-radius: 3px;
  }

  @media (max-width: 700px) {
    align-self: center;
  }
`;

export function ButtonsSA({
  openModal,
}: {
  openModal: (param: boolean) => void;
}) {
  return (
    <ButtonsContent>
      <ButtonUnselected
        onClick={() => openModal(true)}
        width="120px"
        color={"primary"}
      >
        sobre mim
      </ButtonUnselected>
      <ButtonContact />
    </ButtonsContent>
  );
}
