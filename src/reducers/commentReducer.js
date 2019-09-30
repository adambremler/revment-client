import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE,
    LOG_IN_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    comment: null,
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case POST_COMMENT_REQUEST:
            return {
                ...state,
                comment: null,
                error: null,
                isLoading: true
            };
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                comment: action.payload.comment,
                isLoading: false
            };
        case POST_COMMENT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        case LOG_OUT:
        case LOG_IN_SUCCESS:
            return initialState;
        default:
            return state;
    }
}
