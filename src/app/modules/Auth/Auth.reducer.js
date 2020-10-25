import {
    AUTH_SET_ACCESS_TOKEN,
    AUTH_SET_REFRESH_TOKEN,
    AUTH_SET_GOOGLE_TOKEN,
    AUTH_SET_IS_LOGIN_MODAL_OPEN
} from '../../../config/redux/ActionTypes';

const initialState = {
    accessToken: "",
    refreshToken: "",
    googleToken: "",
    isLoginModalOpen: false
};

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTH_SET_ACCESS_TOKEN:
            state = {
                ...state,
                accessToken: action.payload
            };
            break;

        case AUTH_SET_REFRESH_TOKEN:
            state = {
                ...state,
                refreshToken: action.payload
            };
            break;

        case AUTH_SET_GOOGLE_TOKEN:
            state = {
                ...state,
                googleToken: action.payload
            };
            break;

        case AUTH_SET_IS_LOGIN_MODAL_OPEN:
            state = {
                ...state,
                isLoginModalOpen: action.payload
            };
            break;

        default:
            break;

    }

    return state;

};

export default AuthReducer;