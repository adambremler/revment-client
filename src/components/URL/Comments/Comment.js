import React from 'react';
import { Comment } from 'semantic-ui-react';
import CommentWrapper from './styled/CommentWrapper';
import VoteWrapper from './styled/CommentVoteWrapper';
import VoteArrow from './styled/VoteArrow';

export default function CommentComponent({ author, date, text }) {
    return (
        <CommentWrapper>
            <VoteWrapper>
                <VoteArrow size="big" name="caret up" fitted />
                <VoteArrow size="big" name="caret down" fitted />
            </VoteWrapper>
            <Comment.Content>
                <Comment.Author as="a">{author}</Comment.Author>
                <Comment.Metadata>
                    <div>{date}</div>
                </Comment.Metadata>
                <Comment.Text>{text}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </CommentWrapper>
    );
}
