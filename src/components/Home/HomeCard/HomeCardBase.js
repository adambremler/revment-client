import React from 'react';
import { Card } from 'semantic-ui-react';

export default function HomeCardBase(props) {
    return (
        <Card fluid raised>
            {props.children}
        </Card>
    );
}
