import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../app/modules/Home';
// import Auth from '../app/modules/Auth';
import Page from '../app/modules/Page';
import Contest from '../app/modules/Contest';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route path="/auth/:authType?" component={Auth} /> */}
                <Route path="/page/:pageType?" component={Page} />
                {/* <Route path="/contest" component={Contest} /> */}
                <Redirect to="/page/launch" />
                <Redirect to="/page/maintenance" />
                <Redirect to="/page/404" />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;