import React from 'react';
import { connect } from 'react-redux';
import { getURLByID } from '../../actions/urlActions';

function URLComponent({ url, getURLByID, match }) {
    if (!url) {
        getURLByID(match.params.id);
    }

    return (
        <div>
            {url && (
                <img
                    src={`${process.env.REACT_APP_API_URL}${url.screenshotPath}`}
                />
            )}
        </div>
    );
}

const mapStateToProps = state => ({
    url: state.url.url
});

const mapDispatchToProps = dispatch => ({
    getURLByID: id => dispatch(getURLByID(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(URLComponent);
