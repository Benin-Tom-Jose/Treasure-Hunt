import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack'

import Theme from '../config/theme';
import Routes from '../config/Routes';
import Store from '../config/redux/ConfigureStore';

import 'normalize.css';
import './App.scss';

const App = () => {

    return (
        <Provider store={Store}>
            <ThemeProvider theme={Theme}>
                <SnackbarProvider maxSnack={3}>
                    <Routes />
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    );

};

export default App;
