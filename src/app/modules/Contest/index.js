import React, { useEffect, useRef } from 'react';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import GamePage from './GamePage/GamePage';
import { getLaunchDateTime } from '../../../config/Utils';
import LeaderboardPage from './LeaderboardPage/LeaderboardPage';


const Contest = () => {
    const BASE_PATH = "/contest";
    const history = useHistory();
    const LAUNCH_DATETIME = getLaunchDateTime();

    const isLaunched = useRef(() => { });
    isLaunched.current = () => {
        let launchDate = window.launchDate || LAUNCH_DATETIME;
        let difference = +new Date(launchDate) - +new Date();

        if (difference > 0) {
            return true;
        } else {
            return false;
        }
    };

    


    return (
        <Switch>
            <PrivateRoute exact path={`${BASE_PATH}/:id`} component={GamePage} />
            <Route exact path={`${BASE_PATH}/:id/leaderboard`} component={LeaderboardPage} />
            <Redirect to="/page/404" />
        </Switch>
    );
};

export default Contest;