import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/slices/authSlice';
import pgsReducer from './store/slices/pgsSlice';
import pgReducer from './store/slices/pgSlice';
import pgDelete from './store/slices/pgDelete';

const store = configureStore({
  reducer: {
    auth: authReducer,
    pgs: pgsReducer,
    pg: pgReducer,
    pgDelete: pgDelete,
  },
});


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
