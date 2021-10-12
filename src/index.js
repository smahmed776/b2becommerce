import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@popperjs/core';
import { HashRouter } from 'react-router-dom';
import { RatingContextProvider } from './Components/GlobalContext/RatingContext';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RatingContextProvider>

      <App />
      </RatingContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
