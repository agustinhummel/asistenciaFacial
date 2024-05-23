import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Provider } from "react-redux";
import Router from './router/Router.jsx';
import { store } from './redux/store.js';
import { loadUserFromStorage } from './redux/state/AuthActions.js';


const App = () => {
  useEffect(() => {
    // Cargar el usuario desde el almacenamiento al iniciar la aplicación
    store.dispatch(loadUserFromStorage());
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};




ReactDOM.createRoot(document.getElementById('root')).render(<App/>
)
