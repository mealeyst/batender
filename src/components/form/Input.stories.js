import React from 'react';

import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input
}

export const Text = (args) => (
  <Input {...args} />
);

Text.args = {
  placeholder: "John Doe",
}