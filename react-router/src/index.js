import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import todoApp from './redux/user/reducer';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(todoApp)

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
