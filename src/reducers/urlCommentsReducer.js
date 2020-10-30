import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAILURE,
    POST_COMMENT_SUCCESS,
    COMMENT_VOTE_REQUEST,
    COMMENT_VOTE_SUCCESS,
    LOG_IN_SUCCESS,
    LOG_OUT
} from '../constants/actionTypes';

const initialState = {
    comments: null,
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return {
                ...state,
                comments: null,
                error: null,
                isLoading: true
            };
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload.comments,
                isLoading: false
            };
        case GET_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false
            };
        case POST_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [action.payload.comment, ...state.comments]
            };
        case COMMENT_VOTE_REQUEST:
            if (action.payload.user) {
                const comment = {
                    ...state.comments.find(
                        c => c.id === action.payload.commentID
                    )
                };

                const updatedComment = {
                    ...comment,
                    points: comment.voteValue
                        ? action.payload.value === comment.voteValue
                            ? comment.points - action.payload.value
                            : comment.points + action.payload.value * 2
                        : comment.points + action.payload.value,
                    voteValue:
                        action.payload.value === comment.voteValue
                            ? 0
                            : action.payload.value
                };

                const commentIndex = state.comments.findIndex(
                    c => c.id === comment.id
                );

                const updatedComments = state.comments.slice();
                updatedComments[commentIndex] = updatedComment;

                return {
                    ...state,
                    comments: updatedComments
                };
            }

            return state;
        case COMMENT_VOTE_SUCCESS:
            const commentIndex = state.comments.findIndex(
                c => c.id === action.payload.comment.id
            );

            const updatedComments = state.comments.slice();
            updatedComments[commentIndex] = action.payload.comment;

            return {
                ...state,
                comments: updatedComments
            };
        case LOG_OUT:
        case LOG_IN_SUCCESS:
            return initialState;
        default:
            return state;
    }
}
