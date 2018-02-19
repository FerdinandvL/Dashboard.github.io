import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { dashboardApp } from './reducers';
import { logger } from './middleware'

let store = createStore(
    dashboardApp,
    applyMiddleware(
        logger,
    )
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , 

document.getElementById('root'));
registerServiceWorker();
