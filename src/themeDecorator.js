// themeDecorator.js
import React from "react"
import theme from "./theme.json"
import { ThemeProvider } from 'styled-components'
import { GlobalFonts } from './global_styles'
import { SvgFilter } from './components/svgFilter/SvgFilter'

export const ThemeDecorator = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <SvgFilter />
      <div id="modal"/>
      {children}
    </ThemeProvider>
  )
}