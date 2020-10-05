import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useParams } from 'react-router';

import PageNotFound from './PageNotFound/PageNotFound';


const Page = () => {

    const BASE_PATH = "/page";
    const DEFAULT_PAGE = "/404";

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        if (params && !params.pageType) {
            history.replace(BASE_PATH + DEFAULT_PAGE);
        }
    }, [params, history]);

    return (
        <Switch>
            <Route exact path={`${BASE_PATH}/404`} component={PageNotFound} />
            <Redirect to="/page/404" />
        </Switch>
    );

};

export default Page;