import drinks from '../drinks.json'
import { categories } from './categories'

let ingredients = []
drinks.forEach((drink) => {
  drink.ingredients.forEach(({ingredient_name}) => {
    if (ingredient_name !== null && ingredients.findIndex((ingredient) => ingredient.value === ingredient_name) === -1){
      ingredients.push({
        value: ingredient_name,
        label: ingredient_name
      })
    }
  })
})

export { ingredients }