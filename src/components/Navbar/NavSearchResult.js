import React from 'react';
import Wrapper from './styled/NavSearchResultWrapper';
import { Header, Image } from 'semantic-ui-react';
import FaviconWrapper from './styled/NavSearchResultFaviconWrapper';
import TitleWrapper from './styled/NavSearchResultTitleWrapper';

export default function NavSearchResult({
    title,
    url,
    screenshotPath,
    faviconPath
}) {
    return (
        <Wrapper>
            <Header as="h4" style={{ flexGrow: 1 }}>
                <TitleWrapper>
                    <FaviconWrapper>
                        <img
                            src={`${process.env.REACT_APP_API_URL}${faviconPath}`}
                        />
                    </FaviconWrapper>
                    <div>{title}</div>
                </TitleWrapper>
                <Header.Subheader>{url}</Header.Subheader>
            </Header>
            <Image
                src={`${process.env.REACT_APP_API_URL}${screenshotPath}`}
                style={{ flexShrink: 0 }}
            />
        </Wrapper>
    );
}
