import {
    LOG_IN_SUCCESS,
    SIGN_UP_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    token: null,
    user: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            };
        case LOG_OUT:
            return initialState;
        default:
            return state;
    }
}
