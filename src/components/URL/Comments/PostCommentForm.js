import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

// Form for posting comments to a URL or as a reply to another comment
export default function PostCommentForm({
    urlID,
    comment, // Optional - used as parent comment if supplied
    postComment,
    isPostCommentLoading,
    isVisible,
    ...formProps
}) {
    const [commentFormText, setCommentFormText] = useState('');

    const handleChange = (e, { value }) => setCommentFormText(value);

    const handleSubmit = e => {
        e.preventDefault();

        if (comment) {
            postComment(urlID, commentFormText, comment.id);
        } else {
            postComment(urlID, commentFormText);
        }

        setCommentFormText('');
    };

    return (
        <Form
            {...formProps}
            onSubmit={handleSubmit}
            style={isVisible ? {} : { display: 'none' }}
        >
            <Form.TextArea
                placeholder="What are your thoughts?"
                onChange={handleChange}
                value={commentFormText}
            />
            <Button
                loading={isPostCommentLoading}
                content="Comment"
                labelPosition="right"
                icon="edit"
                primary
                disabled={!commentFormText}
            />
        </Form>
    );
}
