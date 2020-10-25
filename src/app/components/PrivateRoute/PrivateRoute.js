import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { addNextUrl } from '../../App.actions';
import { getAccessToken } from '../../../config/Utils';
import Store from '../../../config/redux/ConfigureStore';
import { setIsLoginModalOpen } from '../../modules/Auth/Auth.actions';


const getRedirectionComponent = (props, Component) => {
    let routeElement;
    const authToken = getAccessToken();

    if (authToken) {
        routeElement = <Component {...props} />;
    }
    else {
        Store.dispatch(setIsLoginModalOpen(true));
        Store.dispatch(addNextUrl(props.location.pathname));
        routeElement = <Redirect to='/' />;
    }

    return routeElement;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    < Route {...rest} render={(props) => (
        getRedirectionComponent(props, Component)
    )} />
);

export default PrivateRoute;