import React from 'react';
import styled from 'styled-components'

import { Grid } from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid
}
const SampleElement = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: red;
`

const children = [];
for(let i = 0; i < 20; i++) {
  children.push(<SampleElement />)
}

export const Default = (args) => (
  <div style={{width: '100vw', height:'100vh'}}>
    <Grid {...args}/>
  </div>
);

Default.args = {
  children: children
}