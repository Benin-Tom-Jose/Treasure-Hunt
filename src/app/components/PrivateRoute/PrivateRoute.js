import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getAccessToken } from '../../../config/Utils';


const getRedirectionComponent = (props, Component) => {
    let routeElement;
    const authToken = getAccessToken();

    if (authToken) {
        routeElement = <Component {...props} />;
    }
    else {
        console.log(props);
        routeElement = <Redirect to='/auth' />;
    }

    return routeElement;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    < Route {...rest} render={(props) => (
        getRedirectionComponent(props, Component)
    )} />
);

export default PrivateRoute;