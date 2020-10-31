import React, { useState, useEffect } from 'react';
import usePrevious from '../../../helpers/usePrevious';
import { Comment, Icon, Form, Button } from 'semantic-ui-react';
import moment from 'moment';
import CommentWrapper from './styled/CommentWrapper';
import VoteWrapper from './styled/CommentVoteWrapper';
import VoteArrow from './styled/VoteArrow';
import PostCommentForm from './PostCommentForm';

export default function CommentComponent({
    comment,
    comment: { user, registrationDate, text, points, voteValue },
    voteComment,
    postComment,
    isPostCommentLoading
}) {
    const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);

    const prevIsPostCommentLoading = usePrevious(isPostCommentLoading);

    useEffect(() => {
        if (prevIsPostCommentLoading && !isPostCommentLoading) {
            setIsReplyFormOpen(false);
        }
    }, [isPostCommentLoading]);

    return (
        <CommentWrapper
            style={{ marginLeft: 20 * comment.parentCommentsCount + 'px' }}
        >
            <VoteWrapper>
                <VoteArrow
                    size="big"
                    name="caret up"
                    fitted
                    active={voteValue === 1}
                    onClick={() => voteComment(comment.url, comment.id, 1)}
                />
                <VoteArrow
                    size="big"
                    name="caret down"
                    fitted
                    down
                    active={voteValue === -1}
                    onClick={() => voteComment(comment.url, comment.id, -1)}
                />
            </VoteWrapper>
            <Comment.Content>
                <Comment.Author as="a">{user.username}</Comment.Author>
                <Comment.Metadata>
                    <div>
                        {points} point{Math.abs(points) !== 1 && 's'}
                    </div>
                </Comment.Metadata>
                <Comment.Metadata>·</Comment.Metadata>
                <Comment.Metadata>
                    <div>{moment(registrationDate).fromNow()}</div>
                </Comment.Metadata>
                <Comment.Text>{text}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action
                        onClick={() => setIsReplyFormOpen(!isReplyFormOpen)}
                    >
                        Reply
                    </Comment.Action>
                </Comment.Actions>
                <PostCommentForm
                    urlID={comment.url}
                    comment={comment}
                    postComment={postComment}
                    isPostCommentLoading={isPostCommentLoading}
                    isVisible={isReplyFormOpen}
                    reply
                />
            </Comment.Content>
        </CommentWrapper>
    );
}
