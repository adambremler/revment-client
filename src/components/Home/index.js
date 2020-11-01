import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHomeURLs } from '../../actions/homeURLsActions';
import PageContainer from '../common/PageContainer';
import HomeCard from './HomeCard';
import { times } from 'lodash';
import HomeCardPlaceholder from './HomeCard/HomeCardPlaceholder';

function Home({ urls, isGetHomeUrlsLoading, getHomeURLs }) {
    useEffect(() => {
        getHomeURLs();
    }, []);

    return (
        <PageContainer>
            {isGetHomeUrlsLoading || !urls
                ? times(10, () => <HomeCardPlaceholder />)
                : urls.map(url => <HomeCard url={url} />)}
        </PageContainer>
    );
}

const mapStateToProps = state => ({
    urls: state.homeURLs.urls,
    isGetHomeUrlsLoading: state.homeURLs.isLoading
});

const mapDispatchToProps = dispatch => ({
    getHomeURLs: () => dispatch(getHomeURLs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
