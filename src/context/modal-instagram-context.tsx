import { InstagramPostProps } from "@/types/post-instagram-types";
import { ReactNode, useState, createContext, useEffect } from "react";

interface ModalProps {
  modalItem: InstagramPostProps | {};
  setModalItem: (item: InstagramPostProps) => void;
}

const modalInstagramContent: ModalProps = {
  modalItem: {},
  setModalItem: () => { },
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

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <ModalInstagramContext.Provider
      value={{
        modalItem: state.modalItem,
        setModalItem: (item: InstagramPostProps) =>
          updateState("modalItem", item),
      }}
    >
      {children}
    </ModalInstagramContext.Provider>
  );
}

export default ModalProvider;
