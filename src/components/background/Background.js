import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0%{
    background-position:0% 84%
  }
  50%{
    background-position:100% 17%
  }
  100%{
    background-position:0% 84%
  }
`

export const Background = styled.main`
  width: 100%;
  background: linear-gradient(
    241deg,
    ${props => props.colors ? props.colors.join(', '): [
      props.theme.colors.green[3],
      props.theme.colors.blue[1],
      props.theme.colors.green[5],
      props.theme.colors.blue[4],
    ].join(', ')});
  background-size: 600% 600%;
  animation: ${scrollAnimation} 30s ease infinite;
`