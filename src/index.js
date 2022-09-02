import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client'
import App from './App';
import store from './store';


import "./assets/css/style.css";
import './assets/scss/styles.scss'
import './assets/scssfordashboard/style.scss'


import { Provider } from 'react-redux';

// const store = configureStore()

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
