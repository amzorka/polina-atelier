import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/locales/i18n";

window.onerror = function (message, source, lineno, colno, error) {
    console.error("Global Error:", { message, source, lineno, colno, error });
  };
  
  window.addEventListener("unhandledrejection", function (event) {
    console.error("Unhandled Rejection:", event.reason);
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

