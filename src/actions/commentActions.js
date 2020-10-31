import axios from '../helpers/revmentAxiosInstance';
import {
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE,
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE
} from '../constants/actionTypes';
import { push } from 'connected-react-router';

export const postComment = (urlID, text, parentCommentID = undefined) => async (
    dispatch,
    getState
) => {
    dispatch(postCommentRequest());

    try {
        const { data } = await axios.post(
            `/urls/${urlID}/comments`,
            {
                text,
                ...(parentCommentID ? { parentCommentID } : {})
            },
            {
                headers: {
                    Authorization: `Bearer ${getState().user.token}`
                }
            }
        );

        dispatch(postCommentSuccess(data.comment));
    } catch (e) {
        dispatch(
            postCommentFailure(
                e.response ? e.response.data.error : 'Could not post comment'
            )
        );

        if (e.response && e.response.status === 401) {
            dispatch(push('/log-in'));
        }
    }
};

const postCommentRequest = () => ({
    type: POST_COMMENT_REQUEST
});

const postCommentSuccess = comment => ({
    type: POST_COMMENT_SUCCESS,
    payload: { comment }
});

const postCommentFailure = error => ({
    type: POST_COMMENT_FAILURE,
    payload: { error }
});

export const getComments = urlID => async (dispatch, getState) => {
    dispatch(getCommentsRequest());

    try {
        const { data } = await axios.get(`/urls/${urlID}/comments`, {
            headers: {
                Authorization: `Bearer ${getState().user.token}`
            }
        });

        dispatch(getCommentsSuccess(data.comments));
    } catch (e) {
        dispatch(
            getCommentsFailure(
                e.response ? e.response.data.error : 'Could not get comments'
            )
        );
    }
};

const getCommentsRequest = () => ({
    type: GET_COMMENTS_REQUEST
});

const getCommentsSuccess = comments => ({
    type: GET_COMMENTS_SUCCESS,
    payload: { comments }
});

const getCommentsFailure = error => ({
    type: GET_COMMENTS_FAILURE,
    payload: { error }
});
