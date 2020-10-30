import styled from 'styled-components';

import { Input } from '../form/Input';
import { Select } from '../form/Select';
import { categories } from '../../utils/categories'
import { ingredients } from '../../utils/ingredients'

export const Filters = styled(({
  className,
  filters: {
    nameFilter,
    categoryFilter,
    ingredientsFilter
  }
}) => {
  return (
  <section className={className}>
    <Input placeholder="Filter by name..." {...nameFilter} />
    <Select placeholder="Filter by category" options={categories} isMulti {...categoryFilter} />
    <Select placeholder="Filter by ingredient" options={ingredients} isMulti {...ingredientsFilter} />
  </section>
  )
})`
  display: flex;
  ${Input}, ${Select} {
    width: 50%;
  }
`