import axios from '../helpers/revmentAxiosInstance';
import {
    GET_URL_BY_URL_REQUEST,
    GET_URL_BY_URL_SUCCESS,
    GET_URL_BY_URL_FAILURE,
    GET_URL_BY_ID_REQUEST,
    GET_URL_BY_ID_SUCCESS,
    GET_URL_BY_ID_FAILURE
} from '../constants/actionTypes';

export const getURLByURL = url => async (dispatch, getState) => {
    dispatch(getURLByURLRequest());

    try {
        const { data } = await axios.get('/urls/', {
            params: { url },
            headers: {
                Authorization: `Bearer ${getState().user.token}`
            }
        });

        dispatch(getURLByURLSuccess(data.url));
    } catch (e) {
        dispatch(
            getURLByURLFailure(
                e.response ? e.response.data.error : 'Could not get URL'
            )
        );
    }
};

const getURLByURLRequest = () => ({
    type: GET_URL_BY_URL_REQUEST
});

const getURLByURLSuccess = url => ({
    type: GET_URL_BY_URL_SUCCESS,
    payload: { url }
});

const getURLByURLFailure = error => ({
    type: GET_URL_BY_URL_FAILURE,
    payload: { error }
});

export const getURLByID = id => async (dispatch, getState) => {
    dispatch(getURLByIDRequest());

    try {
        const { data } = await axios.get(`/urls/${id}`, {
            headers: {
                Authorization: `Bearer ${getState().user.token}`
            }
        });

        dispatch(getURLByIDSuccess(data.url));
    } catch (e) {
        dispatch(
            getURLByIDFailure(
                e.response ? e.response.data.error : 'Could not get URL'
            )
        );
    }
};

const getURLByIDRequest = () => ({
    type: GET_URL_BY_ID_REQUEST
});

const getURLByIDSuccess = url => ({
    type: GET_URL_BY_ID_SUCCESS,
    payload: { url }
});

const getURLByIDFailure = error => ({
    type: GET_URL_BY_ID_FAILURE,
    payload: { error }
});
