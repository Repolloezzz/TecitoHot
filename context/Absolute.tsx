import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { useState } from 'react';

/*
  Contexto para manejar ventanas emergentes
  en la aplicación, siendo que la misma se
  encuentra en el layout principal.
*/

// Propiedades de la ventana emergente
interface Props {
  title: string;
  content: JSX.Element | JSX.Element[];
  open: boolean;
}

// Propiedades del contexto
interface ContextProps {
  context: Props;
  change: Dispatch<SetStateAction<Props>>;
}

// Contexto inicial
export const AbsoluteContext = createContext<ContextProps>({
  context: { title: 'hola mundo', open: false, content: <></> },
  change: () => {},
});

// Hook para controlar la ventana
export const useAbsoluteContext = () => {
  return useContext(AbsoluteContext);
};

// Provider para _app
export const ContextProvider = ({ children }: any) => {
  const [state, setState] = useState<Props>({
    title: 'Nueva ventana',
    open: false,
    content: <div></div>,
  });

  return (
    <AbsoluteContext.Provider value={{ context: state, change: setState }}>
      {children}
    </AbsoluteContext.Provider>
  );
};
