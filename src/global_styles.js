import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Neuton:wght@700&display=swap');

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamily.header};
  }
  p, a, span em, u, b, i, li {
    font-family: ${props => props.theme.fontFamily.body};
  }
`