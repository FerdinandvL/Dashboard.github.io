import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { dashboardApp } from './reducers';
import  logger from 'redux-logger'

let store = createStore(
    dashboardApp,
    applyMiddleware(
        logger,
        thunk,
    )
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 

document.getElementById('root'));
registerServiceWorker();
