import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getURLByID } from '../../actions/urlActions';
import { vote } from '../../actions/urlVoteActions';
import { vote as voteComment } from '../../actions/commentVoteActions';
import { getComments, postComment } from '../../actions/commentActions';
import moment from 'moment';
import numeral from 'numeral';
import URLContainer from './styled/URLContainer';
import { Card, Image, Header, Label, Icon } from 'semantic-ui-react';
import normalizeUrl from 'normalize-url';
import Comments from './Comments';
import URLCard from './styled/URLCard';
import VoteArrow from './Comments/styled/VoteArrow';
import VoteWrapper from './styled/URLVoteWrapper';
import URLCardContentWrapper from './styled/URLCardContentWrapper';
import URLImageWrapper from './styled/URLImageWrapper';
import URLMetaWrapper from './styled/URLMetaWrapper';
import URLHeaderWrapper from './styled/URLHeaderWrapper';

function URLComponent({
    url,
    comments,
    match,
    isPostCommentLoading,
    getURLByID,
    vote,
    getComments,
    postComment,
    voteComment
}) {
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
                                    down
                                    active={url.voteValue === -1}
                                    size="big"
                                    name="caret down"
                                    fitted
                                    onClick={() => vote(url.id, -1)}
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
                            </URLHeaderWrapper>
                        </div>
                        <URLImageWrapper>
                            {url && (
                                <Image
                                    src={`${process.env.REACT_APP_API_URL}${url.screenshotPath}`}
                                />
                            )}
                        </URLImageWrapper>
                        <URLMetaWrapper>
                            <Label>
                                <Icon name="comment" /> {url.commentCount}{' '}
                                comments
                            </Label>
                        </URLMetaWrapper>
                        <Comments
                            url={url}
                            getComments={getComments}
                            postComment={postComment}
                            isPostCommentLoading={isPostCommentLoading}
                            comments={comments}
                            voteComment={voteComment}
                        />
                    </URLCardContentWrapper>
                </URLCard>
            )}
        </URLContainer>
    );
}

const mapStateToProps = state => ({
    url: state.url.url,
    comments: state.urlComments.comments,
    isPostCommentLoading: state.comment.isLoading
});

const mapDispatchToProps = dispatch => ({
    getURLByID: id => dispatch(getURLByID(id)),
    vote: (url, value) => dispatch(vote(url, value)),
    getComments: url => dispatch(getComments(url)),
    postComment: (urlID, text, parentCommentID) =>
        dispatch(postComment(urlID, text, parentCommentID)),
    voteComment: (urlID, commentID, value) =>
        dispatch(voteComment(urlID, commentID, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(URLComponent);
