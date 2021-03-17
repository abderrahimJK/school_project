import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/core/styles"
import './index.css';
import App from './App';
/* import Fack_App from  "./Fack_App"; */
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/*<Fack_App />*/}
      <App /> 
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

