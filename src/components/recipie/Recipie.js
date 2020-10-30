import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

export const Recipie = styled(({className, drink, onClose}) => {
  return (
    <div className={className}>
        <h1>{drink.name}</h1>
      <img src={drink.thumbnail} />
      <h4>Glass Type: {drink.glass}</h4>
      <h2>Ingredients:</h2>
      <ul>
        {drink.ingredients.map((ingredient, index) => {
          const measurement = ingredient.measurement ? ` - ${ingredient.measurement}`: ''
          return ingredient.ingredient_name ? <li key={index}>{ingredient.ingredient_name}{measurement}</li> : null
        })}
      </ul>
      <h2>Instructions:</h2>
      <p>{drink.instructions}</p>
    </div>
  )
})`
  background-color: ${props => props.theme.colors.grey[0]};
  color: ${props => props.theme.colors.grey[9]};
  padding: ${props => props.theme.spacing['s-4']};
  border-radius: ${props => props.theme.radius.rounded};
  img {
    border-radius: ${props => props.theme.radius.rounded};
  }
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-top: 0;
    }
  }
  .close {
    font-size: ${props => props.theme.fontSize["4xl"]};
    cursor: pointer;
  }
`