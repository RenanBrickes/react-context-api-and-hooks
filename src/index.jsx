import React from 'react';
import ReactDOM from 'react-dom';
import { ConuterContextProvider } from './context/CounterContext';
import './index.css';
import App from './template/App/Index';
ReactDOM.render(
  <React.StrictMode>
    <ConuterContextProvider>
      <App />
    </ConuterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

