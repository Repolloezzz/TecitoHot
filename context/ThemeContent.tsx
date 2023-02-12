import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { useState } from "react";

interface ContextProps {
  themeContent: StateContext;
  changeTheme: Dispatch<SetStateAction<StateContext>>;
}
export const ThemeContentContext = createContext<ContextProps>({
  themeContent: { theme: "hallowen", is: false },
  changeTheme: () => {},
});

export const useThemeContext = () => {
  return useContext(ThemeContentContext);
};

interface StateContext {
  theme: string;
  is: boolean;
}
export const ThemeContextProvider = ({ children }: any) => {
  const [themeContent, changeTheme] = useState<StateContext>({
    theme: "hallowen",
    is: false,
  });
  return (
    <ThemeContentContext.Provider value={{ themeContent, changeTheme }}>
      {children}
    </ThemeContentContext.Provider>
  );
};

export const LightOptions = ["bumblebee", "emerald", "light", "cmyk", 'acid'];
export const DarkOptions = ["halloween", "dracula", "dark", "synthwave", 'forest'];
