import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { useState } from "react";

interface ContextProps {
  context: Props;
  change: Dispatch<SetStateAction<Props>>;
}
export const AbsoluteContext = createContext<ContextProps>({
  context: {},
  change: () => {},
});

export const useAbsoluteContext = () => {
  return useContext(AbsoluteContext);
};

export interface Props {
  title?: string;
  content?: JSX.Element;
  open?: boolean;
}
export const ContextProvider = ({ children }: any) => {
  const [state, setState] = useState<Props>({
    title: "Nueva ventana",
    open: false,
    content: <div></div>,
  });

  return (
    <AbsoluteContext.Provider value={{ context: state, change: setState }}>
      {children}
    </AbsoluteContext.Provider>
  );
};
