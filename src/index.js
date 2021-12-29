import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
//import "./style.scss";
import { ContextProvider } from './context/GlobalContext';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


