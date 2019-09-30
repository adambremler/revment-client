import axios from '../helpers/revmentAxiosInstance';
import {
    URL_VOTE_REQUEST,
    URL_VOTE_SUCCESS,
    URL_VOTE_FAILURE
} from '../constants/actionTypes';
import { push } from 'connected-react-router';

export const vote = (url, value) => async (dispatch, getState) => {
    dispatch(voteRequest(value, getState().user.user));

    try {
        const { data } = await axios.post(
            `/urls/${url}/vote`,
            {
                value
            },
            {
                headers: {
                    Authorization: `Bearer ${getState().user.token}`
                }
            }
        );

        dispatch(voteSuccess(data, getState().user.user));
    } catch (e) {
        dispatch(
            voteFailure(e.response ? e.response.data.error : 'Could not vote')
        );

        if (e.response.status === 401) {
            dispatch(push('/log-in'));
        }
    }
};

const voteRequest = (value, user) => ({
    type: URL_VOTE_REQUEST,
    payload: { value, user }
});

const voteSuccess = ({ url }, user) => ({
    type: URL_VOTE_SUCCESS,
    payload: { url, user }
});

const voteFailure = error => ({
    type: URL_VOTE_FAILURE,
    payload: { error }
});
