import axios from '../helpers/revmentAxiosInstance';
import { push, replace } from 'connected-react-router';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOG_OUT
} from '../constants/actionTypes';
import { AFTER_LOG_IN_PATH, AFTER_LOG_OUT_PATH } from '../constants/paths';

export const signUp = user => async dispatch => {
    dispatch(signUpRequest());

    try {
        const { data } = await axios.post('/users/sign-up', { ...user });

        dispatch(signUpSuccess(data.token, data.user));
        dispatch(push(AFTER_LOG_IN_PATH));
    } catch (e) {
        dispatch(
            signUpFailure(
                e.response ? e.response.data.error : 'Could not sign up'
            )
        );
    }
};

const signUpRequest = () => ({
    type: SIGN_UP_REQUEST
});

const signUpSuccess = (token, user) => ({
    type: SIGN_UP_SUCCESS,
    payload: {
        token,
        user
    }
});

const signUpFailure = error => ({
    type: SIGN_UP_FAILURE,
    payload: { error }
});

export const logIn = user => async dispatch => {
    dispatch(logInRequest());

    try {
        const { data } = await axios.post('/users/log-in', { ...user });

        dispatch(logInSuccess(data.token, data.user));
        dispatch(push(AFTER_LOG_IN_PATH));
    } catch (e) {
        dispatch(
            logInFailure(
                e.response ? e.response.data.error : 'Could not log in'
            )
        );
    }
};

const logInRequest = () => ({
    type: LOG_IN_REQUEST
});

const logInSuccess = (token, user) => ({
    type: LOG_IN_SUCCESS,
    payload: {
        token,
        user
    }
});

const logInFailure = error => ({
    type: LOG_IN_FAILURE,
    payload: { error }
});

export const logOut = () => dispatch => {
    dispatch(logOutAction());
    dispatch(replace(AFTER_LOG_OUT_PATH));
};

const logOutAction = () => ({
    type: LOG_OUT
});
