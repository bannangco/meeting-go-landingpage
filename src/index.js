import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
