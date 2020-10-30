import React from 'react';

import { Filters } from './Filters';

export default {
  title: 'Components/Filters',
  component: Filters
}

export const Default = (args) => (
  <Filters {...args}/>
);

Default.args = {
}