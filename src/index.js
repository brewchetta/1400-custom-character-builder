import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import 'style/index.scss';
import App from './App';
import { DarkModeContextProvider } from 'context/DarkModeContext'
import { LoadingContextProvider } from 'context/LoadingContext';

ReactDOM.render(
  <HashRouter>
    <DarkModeContextProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </DarkModeContextProvider>
  </HashRouter>,
  document.getElementById('root')
);
