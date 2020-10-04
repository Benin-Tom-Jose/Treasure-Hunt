import {
    APP_INCREMENT_APISTACK,
    APP_DECREMENT_APISTACK,
} from '../config/redux/ActionTypes';

const initialState = {
    apiStack: [],
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

        default:
            break;

    }

    return state;

};

export default AppReducer;