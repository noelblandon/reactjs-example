import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import routes from './routes';
import './index.css';

const store = configureStore();



ReactDOM.render(
    <Provider store={store}>
           <Router history={BrowserRouter} routes={routes}></Router>
    </Provider>    
    
    , document.getElementById('root'));