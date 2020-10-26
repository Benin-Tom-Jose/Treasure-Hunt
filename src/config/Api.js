import axios from 'axios';

import Store from '../config/redux/ConfigureStore';
import { getAccessToken, getBaseURL } from './Utils';
import { incrementApiStack, decrementApiStack } from '../app/App.actions';


const requestStartInterceptor = (config) => {
    // Do something before request is sent
    if (!config.headers.Authorization) {
        config.headers['x-auth-token'] = getAccessToken();
    }
    Store.dispatch(incrementApiStack());
    return config;
};

const requestErrorInterceptor = (error) => {
    // Do something with request error
    Store.dispatch(decrementApiStack());
    return Promise.reject(error);
};

const responseSuccessInterceptor = (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Store.dispatch(decrementApiStack());
    return response.data;
};

const responseFailureInterceptor = (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Store.dispatch(decrementApiStack());
    return Promise.reject(error);
};

const setRequestInterceptors = (instance, startInterceptor, errorInterceptor) => {
    instance.interceptors.request.use((config) => {
        return startInterceptor(config);
    }, (error) => {
        return errorInterceptor(error)
    });
}

const setReponseInterceptors = (instance, successInterceptor, failureInterceptor) => {
    instance.interceptors.response.use((response) => {
        return successInterceptor(response);
    }, (error) => {
        return failureInterceptor(error);
    });
}

const getApiInstance = () => {

    const config = {
        baseURL: getBaseURL(),
        headers: {
            "x-auth-token": getAccessToken(),
        }
    }

    const instance = axios.create(config);
    setRequestInterceptors(instance, requestStartInterceptor, requestErrorInterceptor);
    setReponseInterceptors(instance, responseSuccessInterceptor, responseFailureInterceptor);

    return instance;
};

const Api = getApiInstance();

export default Api;
