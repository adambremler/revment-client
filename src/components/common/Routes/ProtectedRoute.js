import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { PROTECTED_ROUTE_REDIRECT_PATH } from '../../../constants/paths';

function ProtectedRoute(props) {
    const { token, ...other } = props;

    return token ? (
        <Route {...other} />
    ) : (
        <Redirect to={PROTECTED_ROUTE_REDIRECT_PATH} />
    );
}

const mapStateToProps = state => ({
    token: state.user.token
});

export default connect(mapStateToProps)(ProtectedRoute);
