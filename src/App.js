import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import RoutesComponent from './Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <RoutesComponent />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
