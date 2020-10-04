import axios from 'axios';
import { getAccessToken, getBaseURL } from './Utils';

const requestStartInterceptor = (config) => {
    // Do something before request is sent
    if (!config.headers.Authorization) {
        config.headers.Authorization = getAccessToken();
    }
    return config;
};

const requestErrorInterceptor = (error) => {
    // Do something with request error
    return Promise.reject(error);
};

const responseSuccessInterceptor = (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
};

const responseFailureInterceptor = (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
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
            "Authorization": getAccessToken(),
        }
    }
    const instance = axios.create(config);
    setRequestInterceptors(instance, requestStartInterceptor, requestErrorInterceptor);
    setReponseInterceptors(instance, responseSuccessInterceptor, responseFailureInterceptor);

    return instance;
};

const Api = getApiInstance();

export default Api;
