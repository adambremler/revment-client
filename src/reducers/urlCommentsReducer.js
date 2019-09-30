import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE,
    POST_COMMENT_SUCCESS,
    LOG_IN_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    comments: null,
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                comments: null,
                error: null,
                isLoading: true
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload.comments,
                isLoading: false
            };
        case GET_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [action.payload.comment, ...state.comments]
            };
        case LOG_OUT:
        case LOG_IN_SUCCESS:
            return initialState;
        default:
            return state;
    }
}
