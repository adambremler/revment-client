import {
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_IN_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                error: null,
                isLoading: true
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case SIGN_UP_FAILURE:
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
