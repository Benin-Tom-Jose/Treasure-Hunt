import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../app/modules/Home';
import Auth from '../app/modules/Auth';
import Page from '../app/modules/Page';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth/:authType?" component={Auth} />
                <Route path="/page/:pageType?" component={Page} />
                <Redirect to="/page/404" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;