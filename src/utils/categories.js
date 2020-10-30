import drinks from '../drinks.json'

let categories = []
drinks.forEach((drink) => {
  if(categories.findIndex((category) => category.value === drink.category) === -1){
    categories.push({
      value: drink.category,
      label: drink.category
    })
  }
})

export { categories }