import {
    URL_VOTE_REQUEST,
    URL_VOTE_SUCCESS,
    URL_VOTE_FAILURE,
    LOG_IN_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case URL_VOTE_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case URL_VOTE_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case URL_VOTE_FAILURE:
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
