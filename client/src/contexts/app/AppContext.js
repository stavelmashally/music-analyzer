import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyles } from '../../global';
import useDarkMode from '../../useDarkMode';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};
