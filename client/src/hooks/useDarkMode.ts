import React, {useState, useEffect} from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const useDarkMode = (): [string, () => void] => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const toggleTheme = () => {
    if (theme === Theme.LIGHT) {
      window.localStorage.setItem('theme', Theme.DARK)
      setTheme(Theme.DARK)
    } else {
      window.localStorage.setItem('theme', Theme.LIGHT)
      setTheme(Theme.LIGHT)
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme &&
      setTheme(localTheme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK)
  }, [])

  return [theme, toggleTheme]
}

export default useDarkMode
