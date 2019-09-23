import {
    SEARCH_REQUEST,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    isQueryReachable: false,
    results: null,
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                isQueryReachable: false,
                results: null,
                error: null,
                isLoading: true
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                isQueryReachable: action.payload.isQueryReachable,
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
