import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useParams } from 'react-router-dom';

import TimerPage from './TimerPage/TimerPage';
import PageNotFound from './PageNotFound/PageNotFound';
import MaintenancePage from './MaintenancePage/MaintenancePage';


const Page = () => {

    const BASE_PATH = "/page";
    const DEFAULT_PAGE = "/404";

    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        if (params && !params.pageType) {
            history.replace(BASE_PATH + DEFAULT_PAGE);
        }
    });

    return (
        <Switch>
            <Route exact path={`${BASE_PATH}/404`} component={PageNotFound} />
            <Route exact path={`${BASE_PATH}/launch`} component={TimerPage} />
            <Route exact path={`${BASE_PATH}/maintenance`} component={MaintenancePage} />
            <Redirect to="/page/404" />
        </Switch>
    );

};

export default Page;