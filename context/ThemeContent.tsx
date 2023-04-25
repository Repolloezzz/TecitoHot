import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { useState } from 'react';

/*
  Contexto para manejar el tema de las paginas, siendo
  que solo toma valores de tema claro y oscuro. Ademas,
  se encarga de manejar el estado de la pagina, si esta
  en modo oscuro o claro.
*/

// Propiedad del tema, si es claro o oscuro
interface StateContext {
  // Tema de daisyui
  theme: string;
  // True = claro | False = oscuro
  is: boolean;
}

// Propiedades del contexto
interface ContextProps {
  themeContent: StateContext;
  changeTheme: Dispatch<SetStateAction<StateContext>>;
}

export const ThemeContentContext = createContext<ContextProps>({
  themeContent: { theme: 'hallowen', is: true },
  changeTheme: () => {},
});

// Hook para manejar los temas
export const useThemeContext = () => {
  return useContext(ThemeContentContext);
};

// Provider para _app
export const ThemeContextProvider = ({ children }: any) => {
  const [themeContent, changeTheme] = useState<StateContext>({
    theme: 'hallowen',
    is: true,
  });
  return (
    <ThemeContentContext.Provider value={{ themeContent, changeTheme }}>
      {children}
    </ThemeContentContext.Provider>
  );
};
// Temas usados en la aplicacion
export const LightOptions = ['emerald', 'cmyk', 'corporate', 'acid', 'light'];
export const DarkOptions = [
  'halloween',
  'dracula',
  'forest',
  'synthwave',
  'dark',
];
