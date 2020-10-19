import {
    APP_INCREMENT_APISTACK,
    APP_DECREMENT_APISTACK,
    APP_PUSH_URLSTACK,
    APP_POP_URLSTACK,
} from '../config/redux/ActionTypes';

const initialState = {
    apiStack: [],
    urlStack: [],
};

const AppReducer = (state = initialState, action) => {
    let apiStack = [...state.apiStack];
    let urlStack = [...state.urlStack];

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

        case APP_PUSH_URLSTACK:
            state = {
                ...state,
                urlStack: urlStack.push(action.payload)
            };
            break;

        case APP_POP_URLSTACK:
            state = {
                ...state,
                urlStack: urlStack.pop()
            };
            break;

        default:
            break;

    }

    return state;

};

export default AppReducer;