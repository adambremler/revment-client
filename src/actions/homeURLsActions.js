import axios from '../helpers/revmentAxiosInstance';
import {
    GET_HOME_URLS_REQUEST,
    GET_HOME_URLS_SUCCESS,
    GET_HOME_URLS_FAILURE
} from '../constants/actionTypes';

export const getHomeURLs = () => async (dispatch, getState) => {
    dispatch(getHomeURLsRequest());

    try {
        const { data } = await axios.get('/urls', {
            headers: {
                Authorization: `Bearer ${getState().user.token}`
            }
        });

        dispatch(getHomeURLsSuccess(data.urls));
    } catch (e) {
        dispatch(
            getHomeURLsFailure(
                e.response ? e.response.data.error : 'Could not get urls'
            )
        );
    }
};

const getHomeURLsRequest = () => ({
    type: GET_HOME_URLS_REQUEST
});

const getHomeURLsSuccess = urls => ({
    type: GET_HOME_URLS_SUCCESS,
    payload: { urls }
});

const getHomeURLsFailure = error => ({
    type: GET_HOME_URLS_FAILURE,
    payload: { error }
});
