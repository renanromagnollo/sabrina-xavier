import { InstagramPostProps } from "@/types/post-instagram-types";
import { ReactNode, useState, createContext } from "react";

interface ModalProps {
  modalItem: InstagramPostProps | {};
  setModalItem: (item: InstagramPostProps) => void;
}
const modalInstagramContent: ModalProps = {
  modalItem: {},
  setModalItem: () => {},
};

export const ModalInstagramContext = createContext(modalInstagramContent);

function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(modalInstagramContent);

  function updateState(key: string, value: InstagramPostProps) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <ModalInstagramContext.Provider
      value={{
        modalItem: state.modalItem,
        setModalItem: (item: InstagramPostProps) => updateState("item", item),
      }}
    ></ModalInstagramContext.Provider>
  );
}

export default ModalProvider;
