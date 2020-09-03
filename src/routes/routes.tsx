import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';
import './routes.less';

const BaseRoute = () => (
    <div>
        <div className="nav">
            <a href="#/home">计数器</a>
            |
            <a href="#/book">异步列表</a>
        </div>
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/book" component={About}></Route>
            </Switch>
        </HashRouter>
    </div>
);
export default BaseRoute;