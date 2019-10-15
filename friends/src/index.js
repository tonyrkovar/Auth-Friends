import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import { reducer } from './reducers'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));