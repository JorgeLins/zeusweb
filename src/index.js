import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import Menu from './pages/menu'
import { Bg } from "./assets/Styles"

ReactDOM.render(
  <Bg>
    <Menu />
  </Bg>,
  document.getElementById('root')
);
