import axios from '../helpers/revmentAxiosInstance';
import { push, replace } from 'connected-react-router';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT
} from '../constants/actionTypes';
import { AFTER_LOGIN_PATH, AFTER_LOGOUT_PATH } from '../constants/paths';

export const register = user => async dispatch => {
    dispatch(registerRequest());

    try {
        const { data } = await axios.post('/users/register', { ...user });

        dispatch(registerSuccess(data.token, data.user));
        dispatch(push(AFTER_LOGIN_PATH));
    } catch (e) {
        dispatch(
            registerFailure(
                e.response ? e.response.data.msg : 'Could not register'
            )
        );
    }
};

const registerRequest = () => ({
    type: REGISTER_REQUEST
});

const registerSuccess = (token, user) => ({
    type: REGISTER_SUCCESS,
    payload: {
        token,
        user
    }
});

const registerFailure = error => ({
    type: REGISTER_FAILURE,
    payload: { error }
});

export const login = user => async dispatch => {
    dispatch(loginRequest());

    try {
        const { data } = await axios.post('/users/login', { ...user });

        dispatch(loginSuccess(data.token, data.user));
        dispatch(push(AFTER_LOGIN_PATH));
    } catch (e) {
        dispatch(
            loginFailure(e.response ? e.response.data.msg : 'Could not login')
        );
    }
};

const loginRequest = () => ({
    type: LOGIN_REQUEST
});

const loginSuccess = (token, user) => ({
    type: LOGIN_SUCCESS,
    payload: {
        token,
        user
    }
});

const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: { error }
});

export const logout = () => dispatch => {
    dispatch(logoutAction());
    dispatch(replace(AFTER_LOGOUT_PATH));
};

const logoutAction = () => ({
    type: LOGOUT
});
