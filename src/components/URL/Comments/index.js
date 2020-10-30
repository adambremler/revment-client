import React, { useState, useEffect } from 'react';
import sortComments from '../../../helpers/sortComments';
import { Button, Form } from 'semantic-ui-react';
import Wrapper from './styled/CommentsWrapper';
import Comment from './Comment';
import CommentFormWrapper from './styled/CommentFormWrapper';

export default function CommentsComponent({
    url,
    comments,
    getComments,
    postComment,
    isPostCommentLoading,
    voteComment
}) {
    const [text, setText] = useState('');

    useEffect(() => {
        getComments(url.id);
    }, [url.id]);

    const handleChange = (e, { value }) => setText(value);

    const handleSubmit = e => {
        e.preventDefault();
        postComment(url.id, text);
        setText('');
    };

    return (
        <Wrapper>
            <CommentFormWrapper>
                <Form onSubmit={handleSubmit}>
                    <Form.TextArea
                        placeholder="What are your thoughts?"
                        onChange={handleChange}
                        value={text}
                    />
                    <Button
                        loading={isPostCommentLoading}
                        content="Comment"
                        labelPosition="right"
                        icon="edit"
                        primary
                    />
                </Form>
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
