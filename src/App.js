import React from 'react';

import { ThemeDecorator } from './themeDecorator'
import { Page } from './components/page/Page'
import drinks from './drinks.json'

function App() {
  return (
    <ThemeDecorator>
      <Page drinks={drinks} />
    </ThemeDecorator>
  );
}

export default App;
