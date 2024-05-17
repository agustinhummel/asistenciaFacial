import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Provider } from "react-redux";
import Router from './router/Router.jsx';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>,
)
