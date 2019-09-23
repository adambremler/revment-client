import React from 'react';
import Wrapper from '../styled/NavSearchResultWrapper';
import { Header, Image, Icon } from 'semantic-ui-react';
import FaviconWrapper from '../styled/NavSearchResultFaviconWrapper';
import TitleWrapper from '../styled/NavSearchResultTitleWrapper';
import Label from '../styled/NavSearchResultLabel';

export default function NavSearchResult({
    title,
    url,
    screenshotPath,
    faviconPath,
    exactMatch
}) {
    return (
        <Wrapper>
            <Header as="h4" style={{ flexGrow: 1, marginBottom: 0 }}>
                <TitleWrapper>
                    <FaviconWrapper>
                        <img
                            src={`${process.env.REACT_APP_API_URL}${faviconPath}`}
                        />
                    </FaviconWrapper>
                    <div>{title}</div>
                </TitleWrapper>
                <Header.Subheader>{url}</Header.Subheader>
                {exactMatch && (
                    <Label size="tiny">
                        <Icon name="target" /> Exact match
                    </Label>
                )}
            </Header>
            <Image
                src={`${process.env.REACT_APP_API_URL}${screenshotPath}`}
                style={{ flexShrink: 0 }}
            />
        </Wrapper>
    );
}
