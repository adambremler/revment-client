import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Wrapper from './styled/CommentsWrapper';
import Comment from './Comment';

export default function CommentComponent({
    url,
    comments,
    getComments,
    postComment,
    isPostCommentLoading
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
            <Form reply onSubmit={handleSubmit}>
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

            {comments &&
                comments.map(c => (
                    <Comment
                        author={c.user.username}
                        date={c.registrationDate}
                        text={c.text}
                    />
                ))}
        </Wrapper>
    );
}
