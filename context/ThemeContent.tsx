import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { useState } from 'react';

interface ContextProps {
  themeContent: StateContext;
  changeTheme: Dispatch<SetStateAction<StateContext>>;
}
export const ThemeContentContext = createContext<ContextProps>({
  themeContent: { theme: 'hallowen', is: true },
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
    theme: 'hallowen',
    is: true,
  });
  return (
    <ThemeContentContext.Provider value={{ themeContent, changeTheme }}>
      {children}
    </ThemeContentContext.Provider>
  );
};

export const LightOptions = ['emerald', 'cmyk', 'corporate', 'acid', 'light'];
export const DarkOptions = [
  'halloween',
  'dracula',
  'forest',
  'synthwave',
  'dark',
];
