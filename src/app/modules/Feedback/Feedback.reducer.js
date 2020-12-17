import {
    FEEDBACK_SET_OPEN_FEEDBACK_MODAL
} from '../../../config/redux/ActionTypes';

const initialState = {
    showFeedbackModal: false,
};

const FeedbackReducer = (state = initialState, action) => {

    switch (action.type) {

        case FEEDBACK_SET_OPEN_FEEDBACK_MODAL:
            state = {
                ...state,
                showFeedbackModal: action.payload
            };
            break;

        default:
            break;

    }

    return state;

};

export default FeedbackReducer;