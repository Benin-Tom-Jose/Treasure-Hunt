import {
    FEEDBACK_SET_OPEN_FEEDBACK_MODAL
} from '../../../config/redux/ActionTypes';

export function setIsFeedbackModalOpen(isOpen) {
    return {
        type: FEEDBACK_SET_OPEN_FEEDBACK_MODAL,
        payload: isOpen
    };
};