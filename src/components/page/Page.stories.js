import React from 'react';

import { Page } from './Page';
import drinks from '../../drinks.json'

export default {
  title: 'Components/Page',
  component: Page
}

export const Default = (args) => (
  <Page {...args}/>
);

Default.args = {
  drinks
}