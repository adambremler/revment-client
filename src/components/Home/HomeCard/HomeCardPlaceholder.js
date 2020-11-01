import React from 'react';
import { Card, Placeholder } from 'semantic-ui-react';
import useResizeObserver from 'use-resize-observer';
import HomeCardBase from './HomeCardBase';

export default function HomeCardPlaceholderContent() {
    const {
        ref: imageWrapperRef,
        width: imageWrapperWidth = 1,
        height: imageWrapperHeight = 1
    } = useResizeObserver();

    return (
        <HomeCardBase>
            <Card.Content>
                <Placeholder fluid>
                    <Placeholder.Header>
                        <Placeholder.Line />
                        <Placeholder.Line length="short" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <div
                            style={{ height: (imageWrapperWidth * 9) / 16 }} // Makes image aspect ratio 16:9 to match URL screenshots
                            ref={imageWrapperRef}
                        >
                            <Placeholder.Image />
                        </div>
                    </Placeholder.Paragraph>
                </Placeholder>
            </Card.Content>
        </HomeCardBase>
    );
}
