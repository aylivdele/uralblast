// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./styles.css";
import "./catalog.css";
import "./video.css";
import "./navbar.css";
import "./formData.css";
import "./footer.css";
import "./products/product.css"
import "./otchety.css"
import App from "./App";
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop/>

      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

