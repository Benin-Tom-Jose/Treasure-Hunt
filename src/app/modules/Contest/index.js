import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

import GamePage from './GamePage/GamePage';
import LeaderboardPage from './LeaderboardPage/LeaderboardPage';


const Contest = () => {

    const BASE_PATH = "/contest";

    return (
        <Switch>
            <PrivateRoute exact path={`${BASE_PATH}/:id`} component={GamePage} />
            <Route exact path={`${BASE_PATH}/:id/leaderboard`} component={LeaderboardPage} />
            <Redirect to="/page/404" />
        </Switch>
    );
};

export default Contest;