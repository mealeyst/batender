import { useState } from 'react';
import styled from 'styled-components'
import { Background } from '../background/Background'
import { Header } from '../header/Header'
import { Grid } from '../grid/Grid'
import { Card } from '../card/Card'
import { Modal } from '../modal/Modal'
import { Recipie } from '../recipie/Recipie'
import { categories } from '../../utils/categories';

export const Page = styled(({className, drinks}) => {
  const [nameFilter, setNameFilter] = useState('')
  const [categoriesFilter, setCategoriesFilter] = useState([])
  const [ingredientsFilter, setIngredientsFilter] = useState([])
  const [viewingDrink, setViewingDrink] = useState(false)
  const filters = {
    nameFilter: {
      onChange: ({target: { value }}) => setNameFilter(value),
      defaultValue: nameFilter
    },
    categoryFilter: {
      onChange: (values) => {
        setCategoriesFilter(values)
      },
      defaultValue: categoriesFilter
    },
    ingredientsFilter: {
      onChange: (values) => {
        setIngredientsFilter(values)
      },
      defaultValue: ingredientsFilter
    }
  }
  const filteredDrinks = drinks.filter((drink) => {
    if(nameFilter !== '') {
      return drink.name.includes(nameFilter)
    } else {
      return true
    }
  }).filter((drink) => {
    if(categoriesFilter && categoriesFilter.length > 0) {
      return categoriesFilter.map((category) => category.value).includes(drink.category)
    } else {
      return true
    }
  }).filter((drink) => {
    let match = true
    if(ingredientsFilter && ingredientsFilter.length > 0){
      const drinkIngredients = drink.ingredients.map(({ingredient_name}) => ingredient_name)
      .filter((ingredient) => ingredient !== null)
      ingredientsFilter.forEach(({value}) =>  {
        if(!drinkIngredients.includes(value)) {
          match = false
        }
      })
      
    }
    return match
  })
  const currentDrink = drinks.filter(({id}) => id === viewingDrink)[0]
  return (
    <Background className={className}>
      {currentDrink &&
        <Modal open={viewingDrink} toggle={() => setViewingDrink(false)}>
          <Recipie drink={currentDrink} />
        </Modal>
      }
      <Header filters={filters} />
      <Grid>
        {filteredDrinks.map((drink) => {
          return (<Card {...drink} onClick={() => {
            setViewingDrink(drink.id)}
          } />)
        })}
      </Grid>
    </Background>
  )
})`
  ${Header} {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  ${Grid} {
    padding: ${props => props.theme.spacing['s-6']} ${props => props.theme.spacing['s-8']};
  }
`