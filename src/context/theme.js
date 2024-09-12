import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {light} from '../styles/themes/light'

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}