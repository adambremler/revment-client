import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    results: null,
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                results: null,
                error: null,
                isLoading: true
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                results: action.payload.results,
                isLoading: false
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        case LOG_OUT:
            return initialState;
        default:
            return state;
    }
}
