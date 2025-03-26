import { Portfolio } from "@/domain";
import { ReactNode, useState, createContext, useEffect } from "react";

interface ModalProps {
  modalItem: Portfolio | null;
  setModalItem: (item: Portfolio | null) => void;
}

const modalDefaultContent: ModalProps = {
  modalItem: null,
  setModalItem: () => { },
};

export const ModalDefaultContext = createContext(modalDefaultContent);

function ModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(modalDefaultContent);

  function updateState(key: string, value: Portfolio | null) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <ModalDefaultContext.Provider
      value={{
        modalItem: state.modalItem,
        setModalItem: (item: Portfolio | null) =>
          updateState("modalItem", item),
      }}
    >
      {children}
    </ModalDefaultContext.Provider>
  );
}

export default ModalProvider;
