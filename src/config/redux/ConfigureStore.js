import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import AppReducer from '../../app/App.reducer';
import LoggerMiddleware from '../middleware/Logger';
import AuthReducer from '../../app/modules/Auth/Auth.reducer';
import MonitorReducerEnhancer from '../enhancers/MonitorReducer';
import FeedbackReducer from '../../app/modules/Feedback/Feedback.reducer';


const configureAppStore = (preloadedState) => {
    const store = configureStore({
        reducer: {
            AppReducer,
            AuthReducer,
            FeedbackReducer,
        },
        middleware: [LoggerMiddleware, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: [MonitorReducerEnhancer]
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../../app/App.reducer', () => store.replaceReducer(AppReducer));
        module.hot.accept('../../app/modules/Auth/Auth.reducer', () => store.replaceReducer(AuthReducer));
    }

    return store;
};

const Store = configureAppStore();

export default Store;
