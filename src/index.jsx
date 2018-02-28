import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {hashHistory} from "react-router";
import App from './Components/App.jsx';



ReactDOM.render(
    <HashRouter history={hashHistory}>
        <App/>
    </HashRouter>,
    document.getElementById('root'))

