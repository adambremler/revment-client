import {
    GET_HOME_URLS_REQUEST,
    GET_HOME_URLS_SUCCESS,
    GET_HOME_URLS_FAILURE,
    LOG_IN_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    urls: null,
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_HOME_URLS_REQUEST:
            return {
                ...state,
                urls: null,
                error: null,
                isLoading: true
            };
        case GET_HOME_URLS_SUCCESS:
            return {
                ...state,
                urls: action.payload.urls,
                isLoading: false
            };
        case GET_HOME_URLS_FAILURE:
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
