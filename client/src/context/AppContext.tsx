import React, {createContext, useContext} from 'react'
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import {GlobalStyles} from 'styles'
import useDarkMode, {Theme} from 'hooks/useDarkMode'

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
}

interface AppProviderProps {
  children: React.ReactNode
}

const AppContext = createContext<AppContextType>({
  theme: Theme.LIGHT,
  toggleTheme: () => console.warn('no theme provider'),
})

const AppProvider = ({children}: AppProviderProps) => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <AppContext.Provider value={{theme, toggleTheme}}>
      <ThemeProvider theme={theme === Theme.LIGHT ? lightTheme : darkTheme}>
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
