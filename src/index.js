import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </React.StrictMode>
// );

const container = document.getElementById('root');
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}
