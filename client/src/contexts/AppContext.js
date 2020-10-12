import React, {createContext, useContext} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from '../theme'
import {GlobalStyles} from '../global'
import useDarkMode from '../hooks/useDarkMode'

const AppContext = createContext()

const AppProvider = ({children}) => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <AppContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}

function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error(`useApp must be used within a AppProvider`)
  }
  return context
}

export {useApp, AppProvider}
