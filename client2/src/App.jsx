// index.jsx

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './router/Router';
import { loadUserFromStorage } from './redux/actions/AuthActions';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUserFromStorage());
  }, []);

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
