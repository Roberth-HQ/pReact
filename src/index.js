import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*import React from 'react'
//para la manipulacion en la WEB
import ReactDOM from 'react-dom' 
//buscamos el eleento del html donde se ejecutara 
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>hello mother fucker</h1>)
*/