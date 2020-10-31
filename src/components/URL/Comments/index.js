import React, { useEffect } from 'react';
import sortComments from '../../../helpers/sortComments';
import Wrapper from './styled/CommentsWrapper';
import Comment from './Comment';
import CommentFormWrapper from './styled/CommentFormWrapper';
import PostCommentForm from './PostCommentForm';

export default function CommentsComponent({
    url,
    comments,
    getComments,
    postComment,
    isPostCommentLoading,
    voteComment
}) {
    useEffect(() => {
        getComments(url.id);
    }, [url.id]);

    return (
        <Wrapper>
            <CommentFormWrapper>
                <PostCommentForm
                    urlID={url.id}
                    postComment={postComment}
                    isPostCommentLoading={isPostCommentLoading}
                    isVisible={true}
                />
            </CommentFormWrapper>

            {comments &&
                sortComments(comments).map(c => (
                    <Comment
                        comment={c}
                        voteComment={voteComment}
                        postComment={postComment}
                        isPostCommentLoading={isPostCommentLoading}
                    />
                ))}
        </Wrapper>
    );
}
