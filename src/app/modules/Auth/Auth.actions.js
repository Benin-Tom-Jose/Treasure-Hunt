import {
    AUTH_SET_ACCESS_TOKEN,
    AUTH_SET_REFRESH_TOKEN,
    AUTH_SET_GOOGLE_TOKEN,
    AUTH_SET_IS_LOGIN_MODAL_OPEN
} from '../../../config/redux/ActionTypes';


export function setAccessToken(token) {
    return {
        type: AUTH_SET_ACCESS_TOKEN,
        payload: token
    };
};

export function setRefreshToken(token) {
    return {
        type: AUTH_SET_REFRESH_TOKEN,
        payload: token
    };
};

export function setGoogleToken(token) {
    return {
        type: AUTH_SET_GOOGLE_TOKEN,
        payload: token
    };
};

export function setIsLoginModalOpen(isOpen) {
    return {
        type: AUTH_SET_IS_LOGIN_MODAL_OPEN,
        payload: isOpen
    };
};