import React from 'react';
import { Provider } from 'react-redux';

import Routes from '../config/Routes';
import Store from '../config/redux/ConfigureStore';

import 'normalize.css';
import './App.scss';

const App = () => {

    return (
        <Provider store={Store}>
            <Routes />
        </Provider>
    );

};

export default App;
