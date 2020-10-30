import React from 'react'
import { ThemeDecorator } from '../src/themeDecorator'
import theme from "../src/theme.json"

export const decorators = [
  (Story) => (
    <ThemeDecorator>
      <Story />
    </ThemeDecorator>
  ),
]