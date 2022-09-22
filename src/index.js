import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/App.css';
import App from './App.js';
import './fonts/inter-web/Inter-Bold.woff';
import './fonts/inter-web/Inter-Black.woff';
import './fonts/sigma-rm/Sigma-RM.woff';;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
