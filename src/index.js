import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CalculatorProvider} from './calcContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalculatorProvider>
  <App/>
  </CalculatorProvider>
);

