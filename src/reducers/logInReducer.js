import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        default:
            return state;
    }
}
