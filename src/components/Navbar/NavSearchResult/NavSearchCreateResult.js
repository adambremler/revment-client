import React from 'react';
import Wrapper from '../styled/NavSearchResultWrapper';
import { Header } from 'semantic-ui-react';
import TitleWrapper from '../styled/NavSearchResultTitleWrapper';
import Label from '../styled/NavSearchResultLabel';
import getComparableURL from '../../../helpers/getComparableURL';

export default function NavSearchCreateResult({ url, user }) {
    return (
        <>
            <Wrapper>
                <Header as="h4" style={{ flexGrow: 1, marginBottom: 0 }}>
                    <TitleWrapper>
                        <div>{getComparableURL(url)}</div>
                    </TitleWrapper>
                    {user ? (
                        <Label color="red">Unregistered</Label>
                    ) : (
                        <Label color="red">Log in to register this URL</Label>
                    )}
                </Header>
            </Wrapper>
        </>
    );
}
