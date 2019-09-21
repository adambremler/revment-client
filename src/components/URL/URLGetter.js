import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { getURLByURL } from '../../actions/urlActions';
import { Loader } from 'semantic-ui-react';

function URLGetter({ location, urlObject, error, getURLByURL, replace }) {
    const inputURL = new URLSearchParams(location.search).get('u');

    useEffect(() => {
        getURLByURL(inputURL);
    }, [inputURL]);

    useEffect(() => {
        if (error) {
            replace('/');
        }
    }, [error]);

    useEffect(() => {
        if (urlObject) {
            replace(`/urls/${urlObject.id}`);
        }
    }, [urlObject]);

    return (
        <Loader active size="large">
            Loading URL...
        </Loader>
    );
}

const mapStateToProps = state => ({
    urlObject: state.url.url,
    error: state.url.fetchByURL.error
});

const mapDispatchToProps = dispatch => ({
    replace: path => dispatch(replace(path)),
    getURLByURL: url => dispatch(getURLByURL(url))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(URLGetter);
