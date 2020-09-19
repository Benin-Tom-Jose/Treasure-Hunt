import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../app/modules/Home/Home';
import Login from '../app/modules/Login/Login';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;