import { ThemeProvider, createGlobalStyle } from 'styled-components'

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono",monospace;
  }
`

const theme = {
  colors: {
    primary: '#FFA570',
    primaryDark: '#ff8339',
    secondary: '#2D3142',
    accent: '#62BEC1',
  }
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>  
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);