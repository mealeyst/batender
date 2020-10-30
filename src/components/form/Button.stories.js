import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
}

export const Text = (args) => (
  <Button {...args} style={{marginLeft: "40px"}} />
);

Text.args = {
  children: "Click Me"
}