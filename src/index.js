import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Connexion from "./Components/Connexion";
import Page404 from "./Components/Page404";
import App from "./App";
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Connexion}/>
            <Route path="/app/:pseudo" component={App}/>
            <Route component={Page404}/>
        </Switch>
    </BrowserRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
