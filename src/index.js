import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as BR} from "react-router-dom";

import App from './App';
import { DarkModeProvider } from './context/darkModeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <DarkModeProvider> 
  <BR>
    <App />
    </BR>
  </DarkModeProvider>
 
  
  </React.StrictMode>
);


