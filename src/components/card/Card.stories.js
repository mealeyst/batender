import React from 'react';

import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card
}

export const Default = (args) => (
  <Card {...args}/>
);

Default.args = {
  children: 'Mojito',
  src: 'https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg',
  style: { maxWidth: '4rem'}
}