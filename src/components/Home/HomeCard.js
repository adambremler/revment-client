import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';

export default function HomeCard() {
    return (
        <Card fluid raised>
            <Card.Content>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line length="short" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            </Card.Content>
        </Card>
    );
}
