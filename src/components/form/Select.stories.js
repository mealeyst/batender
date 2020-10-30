import React from 'react';

import { Select } from './Select';
import { categories } from '../../utils/categories'

export default {
  title: 'Components/Select',
  component: Select
}

export const Default = (args) => (
  <Select {...args} />
);

Default.args = {
  placeholder: "Category...",
  options: categories,
  isMulti: true,
  // menuIsOpen: true
}