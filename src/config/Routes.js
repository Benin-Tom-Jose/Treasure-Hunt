import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../app/modules/Home';
import Auth from '../app/modules/Auth';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth/:authType?" component={Auth} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;