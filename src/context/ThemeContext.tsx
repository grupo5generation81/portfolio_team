import { createContext, useEffect, useState, type FC, type ReactNode } from "react";

interface ThemeContextI {
  currentTheme: string;
  changeCurrentTheme: (newTheme: 'light' | 'dark') => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultContext: ThemeContextI = {
  currentTheme: 'light',
  changeCurrentTheme: () => { },
};

const ThemeContext = createContext(defaultContext);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('@JavaSF:theme') || 'dark');

  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setCurrentTheme(newTheme);
    localStorage.setItem('@JavaSF:theme', newTheme);
  };

  useEffect(() => {
    if (currentTheme === 'light') {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [currentTheme]);

  return <ThemeContext.Provider value={{ currentTheme, changeCurrentTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;