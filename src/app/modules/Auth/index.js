import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useParams } from 'react-router-dom';

import GoogleLoginPage from './GoogleLoginPage/GoogleLoginPage';

const Auth = () => {

    const BASE_PATH = "/auth";
    const DEFAULT_AUTH = "/google";

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        if (params && !params.authType) {
            history.replace(BASE_PATH + DEFAULT_AUTH);
        }
    }, [params, history]);

    return (
        <Switch>
            <Route exact path={`${BASE_PATH}/google`} component={GoogleLoginPage} />
            <Redirect to="/page/404" />
        </Switch>
    );
};

export default Auth;