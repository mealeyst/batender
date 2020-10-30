import styled from 'styled-components';

export const Card = styled(({className, thumbnail, name, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={thumbnail} />
      <span>{name}</span>
    </div>
  )
})`
  padding: 1rem;
  background-color: ${props => props.theme.colors.grey[0]};
  border-radius: ${props => props.theme.radius.rounded};
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
  box-shadow: ${props => props.theme.shadow['shadow']};
  align-items: center;
  img {
    width: 100%;
    border-radius: ${props => props.theme.radius.rounded};
  }
  span {
    margin-top: ${props => props.theme.spacing['s-4']};
    font-family: ${props => props.theme.fontFamily.body};
    font-size: ${props => props.theme.fontSize.lg};
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadow['shadow-md']};
    cursor: pointer;
  }
`