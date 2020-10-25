import {
    APP_INCREMENT_APISTACK,
    APP_DECREMENT_APISTACK,
    APP_ADD_NEXT_URL,
    APP_CLEAR_NEXT_URL,
} from '../config/redux/ActionTypes';


export function incrementApiStack() {
    return {
        type: APP_INCREMENT_APISTACK
    };
};

export function decrementApiStack() {
    return {
        type: APP_DECREMENT_APISTACK
    };
};

export function addNextUrl(url) {
    return {
        type: APP_ADD_NEXT_URL,
        payload: url
    };
};

export function clearNextUrl() {
    return {
        type: APP_CLEAR_NEXT_URL
    };
};