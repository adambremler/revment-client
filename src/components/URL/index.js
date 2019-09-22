import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getURLByID } from '../../actions/urlActions';

function URLComponent({ url, getURLByID, match }) {
    useEffect(() => {
        if (!url || url.id !== match.params.id) {
            getURLByID(match.params.id);
        }
    }, [match]);

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
