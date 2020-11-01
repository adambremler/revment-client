import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import normalizeUrl from 'normalize-url';
import { Card, Image, Header, Label, Icon } from 'semantic-ui-react';
import HomeCardBase from './HomeCardBase';
import URLCard from './styled/URLCard';
import URLCardContentWrapper from './styled/URLCardContentWrapper';
import URLImageWrapper from './styled/URLImageWrapper';
import URLMetaWrapper from './styled/URLMetaWrapper';
import URLHeaderWrapper from './styled/URLHeaderWrapper';
import VoteArrow from './styled/VoteArrow';
import VoteWrapper from './styled/URLVoteWrapper';
import UndecoratedLink from '../../common/UndecoratedLink';

export default function HomeCard({ url }) {
    return (
        <HomeCardBase>
            <URLCard fluid>
                <URLCardContentWrapper>
                    <div style={{ display: 'flex' }}>
                        <VoteWrapper>
                            <VoteArrow
                                active={url.voteValue === 1}
                                size="big"
                                name="caret up"
                                fitted
                                disabled
                                //onClick={() => vote(url.id, 1)} | Voting not allowed from homepage
                            />
                            <span>{numeral(url.points).format('0.[0]a')}</span>
                            <VoteArrow
                                down
                                active={url.voteValue === -1}
                                size="big"
                                name="caret down"
                                fitted
                                disabled
                                //onClick={() => vote(url.id, -1)} | Voting not allowed from homepage
                            />
                        </VoteWrapper>
                        <URLHeaderWrapper>
                            <Card.Header>
                                <Header as="h3">
                                    <Header.Subheader
                                        style={{
                                            fontSize: '.7em'
                                        }}
                                    >
                                        <Card.Meta>
                                            Registered by{' '}
                                            <a
                                                href={`/users/${url.registeredBy.id}`}
                                            >
                                                {url.registeredBy.username}
                                            </a>{' '}
                                            {moment(
                                                url.registrationDate
                                            ).fromNow()}
                                        </Card.Meta>
                                    </Header.Subheader>
                                    <UndecoratedLink to={`/urls/${url.id}`}>
                                        {url.title}
                                    </UndecoratedLink>
                                    <Header.Subheader
                                        style={{
                                            marginTop: '2px',
                                            fontSize: '.9em'
                                        }}
                                    >
                                        <Card.Meta>
                                            <a
                                                href={normalizeUrl(url.url)}
                                                target="_blank"
                                            >
                                                {url.url}
                                            </a>
                                        </Card.Meta>
                                    </Header.Subheader>
                                </Header>
                            </Card.Header>
                        </URLHeaderWrapper>
                    </div>
                    <URLImageWrapper>
                        {url && (
                            <UndecoratedLink to={`/urls/${url.id}`}>
                                <Image
                                    src={`${process.env.REACT_APP_API_URL}${url.screenshotPath}`}
                                />
                            </UndecoratedLink>
                        )}
                    </URLImageWrapper>
                    <URLMetaWrapper>
                        <UndecoratedLink to={`/urls/${url.id}`}>
                            <Label>
                                <Icon name="comment" /> {url.commentCount}{' '}
                                comments
                            </Label>
                        </UndecoratedLink>
                    </URLMetaWrapper>
                </URLCardContentWrapper>
            </URLCard>
        </HomeCardBase>
    );
}
