import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { GUEST_ROUTE_REDIRECT_PATH } from '../../../constants/paths';

function GuestRoute(props) {
    const { token, ...other } = props;

    return token ? (
        <Redirect to={GUEST_ROUTE_REDIRECT_PATH} />
    ) : (
        <Route {...other} />
    );
}

const mapStateToProps = state => ({
    token: state.user.token
});

export default connect(mapStateToProps)(GuestRoute);
