import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';
import Header from './components/Header';
import RoutesComponent from './Routes';

import { Pokemon } from './contexts';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Pokemon>
          <RoutesComponent />
        </Pokemon>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
