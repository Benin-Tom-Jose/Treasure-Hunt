import {
    APP_INCREMENT_APISTACK,
    APP_DECREMENT_APISTACK,
    APP_ADD_NEXT_URL,
    APP_CLEAR_NEXT_URL,
} from '../config/redux/ActionTypes';

const initialState = {
    apiStack: [],
    nextUrl: "",
};

const AppReducer = (state = initialState, action) => {
    let apiStack = [...state.apiStack];

    switch (action.type) {

        case APP_INCREMENT_APISTACK:
            apiStack.push(1);
            state = {
                ...state,
                apiStack: apiStack
            };
            break;

        case APP_DECREMENT_APISTACK:
            apiStack.pop();
            state = {
                ...state,
                apiStack: apiStack
            };
            break;

        case APP_ADD_NEXT_URL:
            state = {
                ...state,
                nextUrl: action.payload
            };
            break;

        case APP_CLEAR_NEXT_URL:
            state = {
                ...state,
                nextUrl: ""
            };
            break;

        default:
            break;

    }

    return state;

};

export default AppReducer;