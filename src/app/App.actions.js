import {
    APP_INCREMENT_APISTACK,
    APP_DECREMENT_APISTACK,
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