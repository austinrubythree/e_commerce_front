import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store_config/store'
import BootStrap from 'bootstrap/dist/css/bootstrap.css'

import './index.css';
import App from './App';
// import store from './config/store'

const app = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>



ReactDOM.render(app, document.getElementById('root'));

