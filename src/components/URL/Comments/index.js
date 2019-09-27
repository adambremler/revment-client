import React from 'react';
import { Button, Form, Header, CommentGroup } from 'semantic-ui-react';
import Comment from './Comment';

const CommentComponent = () => (
    <CommentGroup>
        <Header as="h3" dividing>
            Comments
        </Header>

        <Comment author="user" date="2 hours ago" text="Content" />
        <Comment
            author="user1"
            date="An hour ago"
            text="More comment content"
        />

        <Form reply>
            <Form.TextArea />
            <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
            />
        </Form>
    </CommentGroup>
);

export default CommentComponent;
