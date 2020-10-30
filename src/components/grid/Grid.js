import styled from 'styled-components';

export const Grid = styled(({className, children, ...props}) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  )
})`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: ${props => props.theme.spacing['s-4']};
  grid-row-gap: ${props => props.theme.spacing['s-4']};
`