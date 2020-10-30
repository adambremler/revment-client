import axios from '../helpers/revmentAxiosInstance';
import {
    COMMENT_VOTE_REQUEST,
    COMMENT_VOTE_SUCCESS,
    COMMENT_VOTE_FAILURE
} from '../constants/actionTypes';
import { push } from 'connected-react-router';

export const vote = (urlID, commentID, value) => async (dispatch, getState) => {
    dispatch(voteRequest(commentID, value, getState().user.user));

    try {
        const { data } = await axios.post(
            `/urls/${urlID}/comments/${commentID}/vote`,
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

        if (e.response && e.response.status === 401) {
            dispatch(push('/log-in'));
        }
    }
};

const voteRequest = (commentID, value, user) => ({
    type: COMMENT_VOTE_REQUEST,
    payload: { commentID, value, user }
});

const voteSuccess = ({ comment }, user) => ({
    type: COMMENT_VOTE_SUCCESS,
    payload: { comment, user }
});

const voteFailure = error => ({
    type: COMMENT_VOTE_FAILURE,
    payload: { error }
});
