import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getURLByID } from '../../actions/urlActions';
import { vote } from '../../actions/urlVoteActions';
import moment from 'moment';
import numeral from 'numeral';
import URLContainer from './styled/URLContainer';
import { Card, Image, Header } from 'semantic-ui-react';
import normalizeUrl from 'normalize-url';
import Comments from './Comments';
import URLCard from './styled/URLCard';
import VoteArrow from './Comments/styled/VoteArrow';
import VoteWrapper from './styled/URLVoteWrapper';
import URLCardContentWrapper from './styled/URLCardContentWrapper';
import URLImageWrapper from './styled/URLImageWrapper';

function URLComponent({ url, getURLByID, match, vote }) {
    useEffect(() => {
        if (!url || url.id !== match.params.id) {
            getURLByID(match.params.id);
        }
    }, [match]);

    return (
        <URLContainer>
            {url && (
                <URLCard fluid>
                    <URLCardContentWrapper>
                        <div style={{ display: 'flex' }}>
                            <VoteWrapper>
                                <VoteArrow
                                    active={url.voteValue === 1}
                                    size="big"
                                    name="caret up"
                                    fitted
                                    onClick={() => vote(url.id, 1)}
                                />
                                <span>
                                    {numeral(url.points).format('0.[0]a')}
                                </span>
                                <VoteArrow
                                    active={url.voteValue === -1}
                                    size="big"
                                    name="caret down"
                                    fitted
                                    onClick={() => vote(url.id, -1)}
                                />
                            </VoteWrapper>
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
                                    {url.title}
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
                        </div>
                        <URLImageWrapper>
                            {url && (
                                <Image
                                    src={`${process.env.REACT_APP_API_URL}${url.screenshotPath}`}
                                />
                            )}
                        </URLImageWrapper>
                        <Comments />
                    </URLCardContentWrapper>
                </URLCard>
            )}
        </URLContainer>
    );
}

const mapStateToProps = state => ({
    url: state.url.url
});

const mapDispatchToProps = dispatch => ({
    getURLByID: id => dispatch(getURLByID(id)),
    vote: (url, value) => dispatch(vote(url, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(URLComponent);
