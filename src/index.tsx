import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store'
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";


ReactDOM.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App  />
            </Provider>
        </React.StrictMode>,
    </HashRouter>, document.getElementById('root')
);



