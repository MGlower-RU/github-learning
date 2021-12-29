import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextComponent from './components/Context';

ReactDOM.render(
  <React.StrictMode>
    <ContextComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextComponent>
  </React.StrictMode>,
  document.getElementById('root')
);