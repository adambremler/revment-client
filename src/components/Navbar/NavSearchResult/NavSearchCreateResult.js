import React from 'react';
import Wrapper from '../styled/NavSearchResultWrapper';
import { Header } from 'semantic-ui-react';
import TitleWrapper from '../styled/NavSearchResultTitleWrapper';
import Label from '../styled/NavSearchResultLabel';
import getComparableURL from '../../../helpers/getComparableURL';

export default function NavSearchCreateResult({ url }) {
    return (
        <Wrapper>
            <Header as="h4" style={{ flexGrow: 1, marginBottom: 0 }}>
                <TitleWrapper>
                    <div>{getComparableURL(url)}</div>
                </TitleWrapper>
                <Label>No comments</Label>
            </Header>
        </Wrapper>
    );
}
