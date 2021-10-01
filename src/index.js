import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Poppins/Poppins-Bold.ttf';
import './fonts/Poppins/Poppins-Light.ttf';
import './fonts/Poppins/Poppins-Medium.ttf';
import './fonts/Poppins/Poppins-Regular.ttf';
import './fonts/Raleway/static/Raleway-Medium.ttf'
import './fonts/Raleway/static/Raleway-Regular.ttf'
import './fonts/Poppins/Poppins-SemiBold.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
