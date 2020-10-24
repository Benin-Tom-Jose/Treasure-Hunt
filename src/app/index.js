import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import Theme from '../config/theme';
import Routes from '../config/Routes';
import Store from '../config/redux/ConfigureStore';
import AppContainer from './components/AppContainer/AppContainer';

import 'normalize.css';
import './App.scss';

const App = () => {

    return (
        <Provider store={Store}>
            <ThemeProvider theme={Theme}>
                <AppContainer>
                    <Routes />
                </AppContainer>
            </ThemeProvider>
        </Provider>
    );

};

export default App;
