import React from 'react';
import { Background } from './Background';

export default {
  title: 'Components/Background',
  component: Background,
}

export const NoColors = () => (
  <Background />
);

export const WithColors = () => (
  <Background colors={[
    '#ffbc42',
    '#d81159',
    '#8f2d56'
  ]}/>
);