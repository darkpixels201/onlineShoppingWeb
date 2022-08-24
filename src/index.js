import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';


import "./assets/css/style.css";
import './assets/scss/styles.scss'


import { Provider } from 'react-redux';
import { MaterialUIControllerProvider } from "./components/dashboard/context";


ReactDOM.render(
  <Provider store={store}>
    <MaterialUIControllerProvider>
  <App />
    </MaterialUIControllerProvider>
  </Provider>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
